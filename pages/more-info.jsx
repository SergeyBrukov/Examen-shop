// import { useEffect, useState } from "react";

// const PostWrapper = ({ id, body, coments, onComent, onSecondComent }) => {
//   const [value, setValue] = useState("");

//   const [value1, setValue1] = useState("");
//   console.log(value1);
//   return (
//     <div>
//       <p>Post: {body}</p>
//       {coments &&
//         coments.map((coment_1) => (
//           <div key={coment_1.id}>
//             <p>{coment_1.body}</p>
//             {coment_1.sComents &&
//               coment_1.sComents.map((coment_2) => (
//                 <p key={coment_2.id}>{coment_2.body}</p>
//               ))}
//             <input
//               placeholder={"add comment"}
//               onChange={(e) => setValue1(e.target.value)}
//             />
//             <button onClick={() => onSecondComent(id, coment_1.id, value1)}>
//               Submit coment for coment
//             </button>
//           </div>
//         ))}
//       <input
//         placeholder={"add comment"}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button onClick={() => onComent(id, value)}>Submit</button>
//     </div>
//   );
// };
// export default function App() {
//   const [posts, setPosts] = useState([]);

//   const onComent = (id, text) => {
//     setPosts((prev) =>
//       prev.map((post) =>
//         post.id === id
//           ? {
//               ...post,
//               coments: [...post.coments, { id: Math.random(), body: text }]
//             }
//           : { ...post }
//       )
//     );
//   };

//   const onSecondComent = (id, sId, text) => {
//     console.log(id, sId, text);
//     setPosts((prev) =>
//       prev.map((post) =>
//         post.id === id
//           ? {
//               ...post,
//               coments: post.coments.map((_coment) =>
//                 _coment.id === sId
//                   ? {
//                       ..._coment,
//                       sComents: _coment.sComents
//                         ? [
//                             ..._coment.sComents,
//                             { id: Math.random(), body: text }
//                           ]
//                         : [{ id: Math.random(), body: text }]
//                     }
//                   : { ..._coment }
//               )
//             }
//           : { ...post }
//       )
//     );
//   };
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => {
//         json.map((post) => (post.coments = []));

//         setPosts(json.slice(0, 10));
//       });
//   }, []);

//   console.log(posts[0]);
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       {posts.map((item, index) => (
//         <PostWrapper
//           key={`index_${index}_${Math.random()}`}
//           {...item}
//           onComent={onComent}
//           onSecondComent={onSecondComent}
//         />
//       ))}
//     </div>
//   );
// }

import React from 'react';

const MoreInfo = () => {
  return (
    <div>
      
    </div>
  );
}

export default MoreInfo;
