import mongoose from "mongoose";
export const connect = async () => {
  await mongoose
    .connect(process.env.URL)
    .then(() => {
      console.log("connected to database");
    })
    .catch(() => {
      console.log("error");
    });
};
console.log(connect);
console.log("aaa");
