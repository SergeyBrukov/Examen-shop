import React, { useEffect, useState } from "react";
import { db } from "../components/autorized/firebese";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";


const Accessories = () => {
  // const [todo, setTodo] = useState("");
  // const [todos, setTodos] = useState([]);
  // const [isEdit, setIsEdit] = useState(false);
  // const [tempUuid, setTempUuid] = useState("");

  // const handlTodoChange = (e) => {
  //   setTodo(e.target.value);
  // };
  // //write
  // const writeTodoDatabase = () => {
  //   const uuid = uid();
  //   set(ref(db, `/${uuid}`), {
  //     todo,
  //     uuid,
  //   });
    
  // };

  // // read
  // useEffect(() => {
  //   onValue(ref(db), (snapshot) => {
  //     setTodos([]);
  //     const data = snapshot.val();
  //     if (data !== null) {
  //       Object.values(data).map((todo) => {
  //         setTodos((prev) => [...prev, todo]);
  //       });
  //     }
  //   });
  // }, []);

  // //update
  // const handlUpdate = (todo) => {
  //   setIsEdit(true);
  //   setTempUuid(todo.uuid);
  //   setTodo(todo.todo)
  // };

  // const handlSubmitChange = () => {
  //   update(ref(db, `/${tempUuid}`), {
  //     todo,
  //     tempUuid,
  //   })
  //   setTodo("");
  //   setIsEdit(false);
  // } 

  // //delete
  // const handlDelete = (todo) => {
  //   remove(ref(db, `/${todo.uuid}`));
  // };

  return (
    <div>
      {/* <input type="text" value={todo} onChange={handlTodoChange} />
      {isEdit ? (
        <>
          <button onClick={handlSubmitChange}>Submit Change</button>
          <button onClick={() => {
            setIsEdit(false)
            setTodo("")
          }}>X</button>
        </>
      ) : (
        <button onClick={writeTodoDatabase}>Submit</button>
      )}
      {todos.map((todo) => {
        return (
          <>
            <h1>{todo.todo}</h1>
            <button onClick={() => handlUpdate(todo)}>update</button>
            <button onClick={() => handlDelete(todo)}>delete</button>
          </>
        );
      })} */}

    </div>
  );
};

export default Accessories;
