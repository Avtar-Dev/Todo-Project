import React, { useState, useEffect } from "react";
import "../Components/todo.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = () => {
  const [items, setItems] = useState({});
  const [Remove, setRemove] = useState(false);

  const addHandle = () => {
    setItems({
      name: "Avtar",
      age: 25,
      Job: "Developer",
    });
  };
useEffect(()=>{
  console.log('my items',items['name']);
},[items])
  const addNewHandle = () => {
    let addNew = { ...items, isMarried: "No" };
    console.log("addNew", addNew);
    setItems(addNew);
  };

  const editHandle = () => {
    let editItems = { ...items };
    editItems.Job = "Manager";
    setItems(editItems);
  };

  const removeHandle = () => {
    let remove = { ...items };
    delete remove.age;
    console.log("remove", remove);
    setItems(remove);
    setRemove(!Remove);
  };

  const deleteHandle = () => {
    setItems(!items.name);
  };
  return (
    <>
      <div className="containerr">
        <h1>TODO LIST</h1>
        <hr />
        <div className="main-div">
          {items.name ? (
            <div>
              <h2>name:{items?.name}</h2>
              {!Remove ? <h2>age:{items?.age}</h2> : null}
              <h2>job:{items?.Job}</h2>
              {/* <h2>isMarried:{items?.isMarried?.toString()}</h2> */}
              {items.isMarried ? (
                <h2>isMarried:{items?.isMarried?.toString()}</h2>
              ) : null}
            </div>
          ) : null}

          <div className="btn-div">
            <button
              type="button"
              className="add-btn btn btn-primary "
              onClick={addHandle}
              style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
                
              Add
            </button>
            <button
              type="button"
              className="add-btn btn btn-primary "
              onClick={addNewHandle}
              style={{display:"flex", justifyContent:'center', alignItems:'center', fontSize: '12px'}}>
              Add New
            </button>
            <button
              type="button"
              className="add-btn btn btn-primary "
              onClick={editHandle}
              style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
              Edit
            </button>
            <button
              type="button"
              className=" add-btn btn btn-primary"
              onClick={removeHandle}
              style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
              Remove
            </button>
            <button
              type="button"
              className=" add-btn btn btn-primary"
              onClick={deleteHandle}
              style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
