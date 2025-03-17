import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = () => {
  const [items, setItems] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [random, setRandom] = useState(100);
  const [editClick, setEditClick] = useState(false);
  const [myIndex, setMyIndex] = useState(-1);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const addHandle = () => {
    if (inputVal.trim() !== "")
      if (editClick) {
        let updatedItems = [...items];

        console.log("before", items);
        updatedItems[myIndex].name = inputVal;
        console.log("updated items", updatedItems);
        setItems(updatedItems);
        setEditClick(false);
      } else {
        setRandom(random + 1);
        setItems((prev) => [...prev, { name: inputVal, id: random }]);
      }

    setInputVal("");
  };

  const deleteHandle = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const editHandle = (index) => {
    setInputVal(items[index].name);
    setMyIndex(index);
    setEditClick(!editClick);
  };

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
            onChange={(e) => setInputVal(e.target.value)}
          />

          <button
            type="button"
            className="btn btn-primary add-btn"
            onClick={addHandle}>
            {editClick ? "Edit List" : "Add"}
          </button>
          <div className="div-ul">
            <ul>
              {items.length > 0
                ? items.map((item, index) => (
                    <li className="li" key={index}>
                      {item.name}
                      <button
                        type="button"
                        className="btn btn-info del-btn"
                        onClick={() => deleteHandle(index)}>
                        Delete
                      </button>
                      <button
                        type="button"
                        className="edit-btn"
                        onClick={() => editHandle(index)}>
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
