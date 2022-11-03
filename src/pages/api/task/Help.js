import Help from "../../../Models/Help.js";
import { connect } from "../../../utils/mongoos.js";
connect();

export default async function PostHelp(req, res) {
  const { username, message, body } = req.body;
  try {
    await connect();

    const test = await Help.create({ username, message });
    // const UpdateTodo = await Todo.findByIdAndUpdate(
    //   req.params.id,
    //   {
    //     $set: req.body,
    //   },
    //   { new: true }
    // );
    res.json({ test });

    // res.send({ UpdateTodo });
    // res.json({ find });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
