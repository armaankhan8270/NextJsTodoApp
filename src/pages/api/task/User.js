import Test from "../../../Models/User.js";
import { connect } from "../../../utils/mongoos.js";
connect();

export default async function GEtTest(req, res) {
  try {
    await connect();

    const test = await Test.find({});

    res.json({ test });
    // res.json({ find });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
