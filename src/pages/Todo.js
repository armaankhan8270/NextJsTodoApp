import axios from "axios";
import React, { useEffect, useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { GlobalUserContetx } from "../Context/UserContext";
import Success from "./Success";
import { compareAsc, format } from "date-fns";

//=> '2014-02-11'

const Todo = () => {
  const [value, setvalue] = useState();
  const [Show, setShow] = useState(false);
  const [title, settitle] = useState("");
  const [date, setdate] = useState("");
  const [Data, setData] = useState([]);
  const [Edit, setEdit] = useState(false);
  const [edittodo, setedittodo] = useState("");
  const [refresh, setrefresh] = useState(1);
  const [Done, setDone] = useState("");
  const { UserLogin, setUserLogin, NameOfUser } = GlobalUserContetx();
  const [Successss, setSuccessss] = useState(true);
  // const [id, setid] = useState('')
  useEffect(() => {
    // setvalue(currentDay);
  }, []);

  const Todo = { title, date };
  // const EditTodo = { title, Date };

  const PostTODo = async () => {
    axios
      .post("http://localhost:3000/api/todo/To", Todo)
      .then((e) => {
        console.log(e);
        setrefresh(refresh + 1);
        setShow(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const DeleteTODo = async (idd) => {
    await axios
      .post("http://localhost:3000/api/todo/Delete", { id: idd })
      .then((e) => {
        console.log(e);
        setrefresh(refresh + 1);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const EditTODO = async () => {
    const data = { title, edittodo };
    setEdit(false);
    await axios
      .post("http://localhost:3000/api/todo/Edit", data)
      .then((e) => {
        console.log(e);
        setrefresh(refresh + 1);
        setShow(false);
        setrefresh(refresh + 1);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    const GEtTODo = async () => {
      await axios
        .get("http://localhost:3000/api/todo")
        .then((e) => {
          console.log(e.data.test);
          console.log("armaan");
          setData(e.data.test);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    GEtTODo();
  }, [refresh]);
  useEffect(() => {
    if (UserLogin) {
      setTimeout(() => {
        setSuccessss(Successss == false ? true : false);
      }, 2000);
    }
  }, []);

  return (
    <div className="text-sm ">
      <h1 className="shadow-md  text-black font-extrabold border-b-2 border-gray-300 mx-0 lg:mx-20 lg:my-6 text-3xl text-center p-4">
        ToDOS
      </h1>
      {Successss ? <Success m={"Login"} /> : "ll"}

      {Show ? (
        <div className="shadow-md   lg:mx-44 ">
          <div className="text-xl shadow-lg px-4 py-4">
            <div className=" m-4 p-4 items-center">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                className="input shadow-md items-center text-sm p-4 rounded px-4 mb-4 focus:outline-none w-full"
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setdate(e.target.value)}
                // placeholder="Todo"
                className="input shadow-md items-center text-sm p-4 rounded px-4 mb-4 focus:outline-none w-full"
              />

              <div className="flex lg:gap-5">
                <button
                  onClick={PostTODo}
                  className="bg-blue-700 p-4 rounded-lg w-1/2  text-white mt-4  text-center"
                >
                  Add{" "}
                </button>
                <button
                  onClick={() => setShow(false)}
                  className="bg-red-700 p-4 rounded-lg w-1/2  text-white mt-4  text-center"
                >
                  Cancel{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShow(true)}
          className="bg-blue-700 p-4 m-4 shadow-lg rounded-lg   text-white mx-[33%] text-center"
        >
          Add TODO +{" "}
        </button>
      )}
      {Data
        ? Data.map((todos, ind) => {
            return (
              <div
                className="shadow-md flex  justify-between lg:mx-32"
                key={ind}
              >
                <div className="lg:p-4 pt-1 lg:m-4 shadow-lg  rounded-lg">
                  <button
                    onClick={() => {
                      settitle(todos.title);
                      setEdit(true);
                    }}
                  >
                    {" "}
                    <EditIcon /> Edit
                  </button>
                </div>

                <div
                  className={`${
                    Done ? "bg-green-700 " : ""
                  } lg:p-4 m-0 p-0 lg:m-4 shadow-lg w-0 lg:w-32  rounded-lg invisible lg:visible`}
                >
                  <button
                    onClick={() => {
                      setDone(Done == true ? false : true);
                    }}
                  >
                    {" "}
                    <DoneIcon style={{ width: "23px" }} />{" "}
                    {Done ? "Remainig" : "Done"}
                  </button>
                </div>
                <div className="p-4 m-4 shadow-lg w-[80%]  rounded-lg">
                  <span className="p-3 text-gray-500">
                    {/* {format(new Date(todos.date), "yyyy-MM-dd")} */}
                    {todos.date}
                  </span>
                  {todos.title}
                </div>
                <div className="lg:p-4 m-4 shadow-lg bg-red-500 text-white rounded-lg">
                  <button
                    onClick={() => {
                      DeleteTODo(todos._id);
                    }}
                  >
                    <DeleteOutlineIcon style={{ fontSize: "24px" }} /> Delete
                  </button>
                </div>
              </div>
            );
          })
        : "np data"}
      {Edit ? (
        <>
          <div className="shadow-md fixed top-32  z-1 bg-white justify-center  right-[40%] ">
            <div className="text-xl shadow-lg px-4 py-4">
              <div className=" m-4 p-4 items-center">
                <input
                  type="text"
                  placeholder="Title"
                  value={edittodo}
                  onChange={(e) => setedittodo(e.target.value)}
                  className="input shadow-md  items-center text-sm p-4 rounded px-4 mb-4 focus:outline-none w-96"
                />

                <div className="flex lg:gap-5">
                  <button
                    onClick={() => {
                      EditTODO();
                    }}
                    className="bg-blue-700 p-4 rounded-lg w-1/2  text-white mt-4  text-center"
                  >
                    Addd{" "}
                  </button>
                  <button
                    onClick={() => setEdit(false)}
                    className="bg-red-700 p-4 rounded-lg w-1/2  text-white mt-4  text-center"
                  >
                    Cancel{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Todo;
