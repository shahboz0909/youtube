import React,{useEffect, useState} from "react"
import "../Home2/Home2.css"
import oval from "../../assets/Oval.png"
import left from "../../assets/Left.svg"
import right from "../../assets/Right.svg"
import {NavLink} from "react-router-dom"

const Home2 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <>
            <div style={{background: "#181818"}}>
            <div className="d-flex align-items-center p-3 justify-content-between mx-4">
                <div className="d-flex align-items-center gap-3">
                    <img src={oval} alt="" />
                    <p className="name m-0">Dollie Blair</p>
                </div>
                <div className="d-flex gap-3">
                    <img src={left} alt="" />
                    <img src={right} alt="" />
                </div>
            </div>
            <ul className="d-flex list-unstyled bnnima gap-4 m-0 px-3">
                {data.length && data.splice(0, 20).map(e => {
                    return <li className="item" key={e.id}>
                                  <NavLink to={"/photos/"+e.id}><img className="img-ing" src={`https://picsum.photos/200/300?random=${e.id}}`} alt={e.title} width={250} height={150}/></NavLink>
                                  <h4 className="title">{e.title}</h4>
                          </li>
                })}
            </ul>
            </div>
            
        </>
    )
}
export default Home2