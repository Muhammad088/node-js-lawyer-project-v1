class ApiFeatures {
  constructor(mongooseQuery, queryString) {
    this.mongooseQuery = mongooseQuery;
    this.queryString = queryString;
  }

  filter() {
    const queryStringObj = { ...this.queryString };
    const excludeFields = ["page", "sort", "limit", "fields", "keyword"];
    excludeFields.forEach((field) => delete queryStringObj[field]);

    // filtering
    let queryStr = JSON.stringify(queryStringObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    this.mongooseQuery = this.mongooseQuery.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.mongooseQuery = this.mongooseQuery.sort(sortBy);
    } else {
      this.mongooseQuery = this.mongooseQuery.sort("-createdAt");
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.mongooseQuery = this.mongooseQuery.select(fields);
    }
    return this;
  }

  search() {
    let query = {};
    if (this.queryString.keyword) {
      query.$or = [
        { title: { $regex: this.queryString.keyword, $options: "i" } },
        { description: { $regex: this.queryString.keyword, $options: "i" } },
        { destination: { $regex: this.queryString.keyword, $options: "i" } },
      ];
      this.mongooseQuery = this.mongooseQuery.find(query);
    } else if (this.queryString.key) {
      query = { key: { $regex: this.queryString.key, $options: "i" } };

      this.mongooseQuery = this.mongooseQuery.find(query);
    }

    return this;
  }

  paginate(documentsNumber) {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 20;
    const skip = (page - 1) * limit;
    const endIndex = page * limit;

    const pagination = {};
    pagination.currentPage = page;
    pagination.limit = limit;
    pagination.numberOfPages = Math.ceil(documentsNumber / limit);
    if (endIndex < documentsNumber) pagination.next = page + 1;
    if (skip > 0) pagination.previous = page - 1;

    this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);
    this.pagination = pagination;
    return this;
  }
}

export default ApiFeatures;
