import { connect } from "mongoose";
const dbConnection = () => {
  connect(process.env.DB_URI).then((conn) => {
    console.log(`database connected : ${conn.connection.host}`);
  });
  // .catch((err) => {
  //   console.error(`database error : ${err}`);
  //   process.exit(1);
  // });
};

export default dbConnection;
