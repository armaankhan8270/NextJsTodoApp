import Test from "../../../Models/User.js";
import { connect } from "../../../utils/mongoos.js";
connect();

export default async function Login(req, res) {
  const { email, password } = req.body;
  try {
    await connect();

    const test = await Test.findOne({ email: email });
    if (!test) {
      res.json("UserNotFound");
    }
    if (test) {
      const checkpassword = test.password == password;
      if (checkpassword) {
        res.json("Login");
      } else {
        res.json("password not match");
      }
    }

    res.json({});
    // res.json({ find });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
