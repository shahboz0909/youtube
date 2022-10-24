import React,{ useState } from "react";
import logoh from '../../assets/logoh.svg'
import youtube from '../../assets/Black.svg'
import search from '../../assets/Shape.svg'
import vedio from '../../assets/phone-18.svg'
import ui from '../../assets/ui-11.svg'
import ui1 from '../../assets/Userpic.svg'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="d-flex align-items-center" style={{background: "#202020", padding: "13px"}}>
                    <div className="d-flex gap-4 ms-3">
                        <img src={logoh} alt="" width={30} height={"auto"}/>
                        <img src={youtube} alt="" />
                    </div>
                    <div className="mx-auto d-flex align-items-center">
                        <input className="py-2 ps-3 form-control rounded-0" 
                        style={{width: "500px", background: "#121212", border: "2px solid #2F2F2F"}} 
                        type="search" 
                        placeholder="Введите запрос" />
                        <p className="m-0 p-2" 
                        style={{background: "#2F2F2F", height: "44px"}}
                        >
                            <img className="bg-transparent" src={search} alt="" width={20}/>
                        </p>
                    </div>
                    <div className="d-flex align-items-center gap-4 me-3">
                        <Link to="/">
                             <button className="btn btn-dark text-light" 
                             style={{border: "2px solid #2F2F2F"}}
                             >Log out</button>
                        </Link>
                        <img src={vedio} alt="" />
                        <img src={ui} alt="" />
                        <img src={ui1} alt="" />
                    </div>
                </div>
            </div>
        </>
        )
}

export default Home;