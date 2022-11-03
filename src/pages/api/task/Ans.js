import Help from "../../../Models/Help.js";
import { connect } from "../../../utils/mongoos.js";
connect();

export default async function PostHelp(req, res) {
  try {
    await connect();

    const test = await Help.find({});
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
