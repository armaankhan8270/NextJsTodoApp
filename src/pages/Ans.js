import axios from "axios";
import React, { useEffect, useState } from "react";

const Ans = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const GETAns = async () => {
      axios
        .get("http://localhost:3000/api/task/Ans")
        .then((e) => {
          console.log(e);
          setData(e.data.test);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    GETAns();
  }, []);

  return (
    <div>
      <div className=" lg:m-12 shadow-md">
        <h1 className="text-3xl text-center p-4 m-2 shadow-md">
          question and aswrs
        </h1>
      </div>
      {Data.map((ques, ind) => {
        return (
          <div
            className=" lg:px-44 text-sm border-b-2 border-blue-gray-100"
            key={ind}
          >
            <div className="  justify-between  flex">
              <h1 className="lg:text-3xl p-4 font-extrabold">
                {ques.message}?
              </h1>
              <h1 className="lg:text-xl p-4 text-gray-800">{ques.username}</h1>
            </div>
            <h1 contenteditable="true" className="p-3 shadow-sm">
              The @mui/icons-material package depends on @mui/material, which
              requires Emotion packages. If you dont use Material UI in your
              project yet, install the icons package with: npm install
              @mui/icons-material @mui/material @emotion/styled @emotion/react.
              See the Installation page for additional docs about how to make
              sure everything is set up correctly.
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Ans;
