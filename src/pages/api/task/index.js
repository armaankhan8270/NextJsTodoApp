import Test from "../../../Models/User.js";
import { connect } from "../../../utils/mongoos.js";
connect();

export default async function addTest(req, res) {
  const { body, email, password } = req.body;
  try {
    console.log("CONNECTING TO MONGO");
    await connect();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    const test = await Test.create({ body, email, password });
    console.log("CREATED DOCUMENT");

    res.json({ test });
    // res.json({ find });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
export async function GetTest(req, res) {
  try {
    await connect();

    const find = await Test.find();

    res.json({ find });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
