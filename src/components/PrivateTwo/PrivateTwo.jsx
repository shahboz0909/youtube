import cover from "../../assets/Cover.png";
import Snake from "../../assets/Snake.svg";
import React, { useEffect, useState } from "react";
import "../PrivateTwo/PrivateTwo.css"

const Private = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="" style={{ background: "#181818", width: "1296px" }}>
        <img className="ms-4 mt-3" src={cover} alt="" width={1220} />
        <div className="d-flex align-items-center gap-3 pt-3 mx-4 me-5 ps-4 justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <img src={Snake} alt="snake" width={70} height={70}/>
            <div>
              <p className="m-0 name">Margaret Phelps</p>
              <p className="name-2">245K subscribed</p>
            </div>
          </div>
          <div>
            <button className="btn-dan">Subscribe 2.3m</button>
          </div>
        </div>

        <div style={{ background: "#181818" }}>
          {/* <div className="d-flex align-items-center p-3 justify-content-between mx-4">
                <div className="d-flex align-items-center gap-3">
                    <img src={oval} alt="" />
                    <p className="name m-0">Dollie Blair</p>
                </div>
                <div className="d-flex gap-3">
                    <img src={left} alt="" />
                    <img src={right} alt="" />
                </div>
            </div> */}
          <div className="d-flex gap-4">
            <h4 className="qwer">Home</h4>
            <h4 className="qwer-2">Videos</h4>
            <h4 className="qwer-2">Playlists</h4>
            <h4 className="qwer-2">Channels</h4>
            <h4 className="qwer-2">Discussion</h4>
            <h4 className="qwer-2">About</h4>
          </div>
          <ul className="d-flex list-unstyled bnnima gap-4 mt-4 ms-4 m-0 px-3">
            {data.length &&
              data.splice(0, 20).map((e) => {
                return (
                  <li className="item" key={e.id}>
                    <img
                      className="img-ing"
                      src={`https://picsum.photos/200/300?random=${e.id+22}}`}
                      alt={e.title}
                      width={250}
                      height={150}
                    />
                    <h4 className="title">{e.title}</h4>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Private;
