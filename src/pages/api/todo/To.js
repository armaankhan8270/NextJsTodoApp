import Todo from "../../../Models/Todo.js";
import { connect } from "../../../utils/mongoos.js";
connect();

export default async function addTODo(req, res) {
  const { body, title, date } = req.body;
  try {
    await connect();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");

    const TODO = await Todo.create({ body, title, date });
    console.log("CREATED DOCUMENT");

    res.json({ TODO });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
