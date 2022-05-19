import React from "react";
import { useEffect, useState } from "react";

const Comments = ({ product }) => {
  const { comment } = product;
  const [prod, setProd] = useState([]);
  const onComent = (id, text) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              coments: [...post.coments, { id: Math.random(), body: text }],
            }
          : { ...post }
      )
    );
  };
  return <div></div>;
};

export default Comments;
