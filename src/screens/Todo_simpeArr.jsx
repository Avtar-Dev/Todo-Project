import React, { useEffect, useState } from "react";
import "../Components/todo.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [myIndex, mySetIndex] = useState(-1);
  const [paragraph, setParagraph] = useState("");

  const changeHandle = (e) => {
    setInputVal(e.target.value);
    // console.log(inputVal);
  };

  const btnHandle = () => {
    // console.log("trim" + inputVal?.trim() + "==");
    if (inputVal?.trim() == "") {
      setParagraph("Please Enter Text");
    }

    if (inputVal?.trim() !== "") {
      if (editClick) {
        setParagraph("");
        let editedToDoList = [...todoList];
        // console.log('before', editedToDoList);                         //['ccc']
        editedToDoList[myIndex] = inputVal;
        // console.log('after',editedToDoList);                           //['cccggg']
        setTodoList(editedToDoList);
      } else {
        // if (inputVal?.length>0) {
        setParagraph("");
        setTodoList([...todoList, inputVal]); //todoList blank array c te ode andr asi inputVal concatinate kr rhe aa
        setInputVal("");
      }
      setEditClick(false);
      setInputVal("");
    }
  };

  const deleteHandle = (index) => {
    setTodoList(todoList.filter((arr, i) => i !== index));
  };

  const editHandle = (index) => {
    const edit = todoList.filter((arr, i) => i == index);
    setInputVal(edit);

    if (edit) {
      setEditClick(true);
    }
    mySetIndex(index);
  };

  // console.log(inputVal);

  return (
    <>
      <div className="containerr">
        <h1>TODO LIST</h1>
        <hr />
        <div className="main-div">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            value={inputVal}
            onChange={changeHandle}
          />

          <p>{paragraph}</p>

          <button
            type="button"
            className="btn btn-primary add-btn"
            onClick={btnHandle}>
            {editClick ? "Edit List" : "Add"}
          </button>
          <div className="div-ul">
            <ul>
              {todoList.length > 0
                ? todoList?.map((item, index, i) => (
                    <li className="li" key={index}>
                      {item}
                      <button
                        type="button"
                        className="btn btn-info del-btn"
                        onClick={() => {
                          deleteHandle(index);
                        }}>
                        Delete
                      </button>
                      <button
                        className="edit-btn"
                        onClick={() => {
                          editHandle(index);
                        }}>
                        Edit
                      </button>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
