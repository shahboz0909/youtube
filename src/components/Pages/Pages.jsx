// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Pages = () => {
    
//   const [data, setData] = useState([]);
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const URL = `https://restcountries.com/v2/name/${name}`;
//   const getData = async () => {
//     const request = await fetch(URL);
//     const response = await request.json();
//     setData(response);
//   };
//   console.log(data);
//   useEffect(() => {
//     getData();
//   }, []);

// // const [data, setData] = useState([]);

// // useEffect(() => {
// //   fetch(`https://jsonplaceholder.typicode.com/photos`)
// //     .then((res) => res.json())
// //     .then((data) => setData(data));
// // }, []);


// return (
//     <>
//         {data?.map((el) => {
//           return (<>
//             <h1>{el.name}</h1>
//              <img src={`https://picsum.photos/200/300?random=${id}`} alt="" />
//              </>
//           )

//         })}
//     </>
// )
// }
// export default Pages

