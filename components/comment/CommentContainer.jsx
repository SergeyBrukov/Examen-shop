import React from "react";
import { useEffect, useState } from "react";
const CommentContainer = ({ id, body, coments, onComent, onSecondComent }) => {
  const [value, setValue] = useState("");

  const [value1, setValue1] = useState("");
  return (
    <div>
      {coments &&
        coments.map((coment_1) => (
          <div key={coment_1.id}>
            <p>{coment_1.body}</p>
            {coment_1.sComents &&
              coment_1.sComents.map((coment_2) => (
                <p key={coment_2.id}>{coment_2.body}</p>
              ))}
            <input
              placeholder={"add comment"}
              onChange={(e) => setValue1(e.target.value)}
            />
            <button onClick={() => onSecondComent(id, coment_1.id, value1)}>
              Submit coment for coment
            </button>
          </div>
        ))}
      <input
        placeholder={"add comment"}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => onComent(id, value)}>Submit</button>
    </div>
  );
};

export default CommentContainer;
