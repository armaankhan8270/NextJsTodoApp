import Edit from "@mui/icons-material/Edit.js";
import Todo from "../../../Models/Todo.js";
import { connect } from "../../../utils/mongoos.js";
connect();

export default async function GEtTest(req, res) {
  const { body, title, id, edittodo } = req.body;
  try {
    await connect();

    // const test = await Todo.findOne({ id: id });
    // Todo.updateOne({ id: id }, { title: title }, function (err, docs) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("Updated Docs : ", docs);
    //   }
    // });
    Todo.updateOne({ title: title }, { title: edittodo }, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Updated Docs : ", docs);
      }
    });
    const test = await Todo.find({ title: edit });

    res.json({ test });
    // res.json("aa");

    // res.send({ UpdateTodo });
    // res.json({ find });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
