import React,{useState, useEffect} from "react";
import oval from "../../assets/Oval.png"
import left from "../../assets/Left.svg"
import right from "../../assets/Right.svg"
import "../Recomended/Recomended.css"

const Recomended = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <>
            <div style={{ background: "#181818" }}>
                <div className="d-flex align-items-center p-3 justify-content-between mx-4">
                        <p className="name m-0">Recommended</p>
                    <div className="d-flex gap-3">
                        <img src={left} alt="" />
                        <img src={right} alt="" />
                    </div>
                </div>
                <ul className="d-flex list-unstyled m-0 gap-4 px-3 box-1 scrol">
                    {data.length && data.splice(0, 10).map(e => {
                        return <li className="item" key={e.id}>
                            <img className="img-ing" src={`https://picsum.photos/200/300?random=${e.id + 10}}`} alt={e.title} width={300} height={200} />
                            <h4 className="title">{e.title}</h4>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default Recomended