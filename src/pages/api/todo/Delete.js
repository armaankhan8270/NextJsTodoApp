import Todo from "../../../Models/Todo.js";
import { connect } from "../../../utils/mongoos.js";
connect();

export default async function GEtTest(req, res) {
  const { body, title, id } = req.body;
  try {
    await connect();

    // const test = await Todo.findOne({ id: id });

    const test = await Todo.findOneAndDelete({ _id: id });

    // const todobtid = await Todo.findOne({ title: title });
    // const UpdateTodo = await Todo.findByIdAndUpdate(
    //   id,
    //   {
    //     $set: req.body,
    //   },
    //   { new: true }
    // );
    res.json({ test });
    // res.json("aa");

    // res.send({ UpdateTodo });
    // res.json({ find });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
