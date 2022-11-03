import Todo from "../../../Models/Todo.js";
import { connect } from "../../../utils/mongoos.js";
connect();

export default async function GEtTest(req, res) {
  const { body, NameOfUser } = req.body;
  try {
    await connect();

    const test = await Todo.find({});
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
