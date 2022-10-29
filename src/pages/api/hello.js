// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
import mongoose from "mongoose";
const connect = async () => {
  await mongoose
    .connect(process.env.URL)
    .then(() => {
      console.log("connected to database");
    })
    .catch(() => {
      console.log("error");
    });
};
connect();
console.log(connect);
console.log("aaa");
