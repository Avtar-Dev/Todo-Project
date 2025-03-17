import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [myIndex, setMyIndex] = useState(-1);
  const [errorMsg, setErrorMsg] = useState("");

  const changeHandle = (e) => {
    setInputVal(e.target.value);
  };

  const btnHandle = () => {
    if (inputVal.trim() === "") {
      setErrorMsg("Please enter text");
      return;
    }

    setErrorMsg("");

    if (editClick) {
      let updatedList = [...todoList];
      updatedList[myIndex] = inputVal;
      setTodoList(updatedList);
      setEditClick(false);
    } else {
      setTodoList([...todoList, inputVal]);
    }

    setInputVal("");
  };

  const deleteHandle = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  const editHandle = (index) => {
    setInputVal(todoList[index]);
    setMyIndex(index);
    setEditClick(true);
  };

  return (
    <div className=" position-absolute top-0 mt-3 w-50 p-4 d-flex flex-column align-items-center">
      <h1 className="text-white">TODO LIST</h1>
      <br />

      <div className="w-100">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter task..."
          value={inputVal}
          onChange={changeHandle}
        />
        {errorMsg && <p className="text-black">{errorMsg}</p>}

        <button
          type="button"
          className="btn btn-primary w-10 mb-3"
          onClick={btnHandle}>
          {editClick ? "Edit Task" : "Add Task"}
        </button>

        <ul className="list-group w-100">
          {todoList.length > 0 ? (
            todoList.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex align-items-center text-break gap-3">
                <span className="w-75 ">{item}</span>
                <div>
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => deleteHandle(index)}>
                    Delete
                  </button>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => editHandle(index)}>
                    Edit
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="text-white text-center">No tasks added yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
