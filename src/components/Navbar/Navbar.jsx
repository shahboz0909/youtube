import '../Navbar/Navbar.css'
import home from '../../assets/home.svg'
import ui01 from '../../assets/ui-01.svg'
import bnm from '../../assets/bnnam.svg'
import doc from '../../assets/doc.svg'
import oth from '../../assets/oth.svg'
import tech from '../../assets/tech.svg'
import star from '../../assets/Star.svg'
import u1 from '../../assets/u1.svg'
import ui2 from '../../assets/ui2.svg'
import oval from '../../assets/Oval.svg'
import oval2 from '../../assets/Oval2.svg'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="navber-box">
                <ul className="list-unstyled">
                    <NavLink  to='/home2'  className={({ isActive }) => isActive ? "clic" : "text-decoration-none"} >
                      <li className="d-flex align-items-center gap-3 ms-4 ps-2 pt-3">
                        <img className="img-home" src={home} alt="" width={25} height={25}/>
                        <span className="text-link">Home</span>                     
                     </li>
                    </NavLink>

                    <NavLink className={({ isActive }) => isActive ? " clic" : "text-decoration-none"}  to='/trending'>
                      <li className="d-flex align-items-center gap-3 ms-4 ps-2 pt-3 mt-2">
                        <img src={ui01} alt="" width={25} height={25}/>
                        <span className="text-link">Trending</span>                     
                     </li>
                    </NavLink>

                    <NavLink className="text-decoration-none" to='/subs'>
                      <li className="d-flex align-items-center gap-3 ms-4 ps-2 pt-3 mt-2">
                        <img src={bnm} alt="" width={25} height={25}/>
                        <span className="text-link">Subscriptions</span>
                     </li>
                    </NavLink>

                    <NavLink className="text-decoration-none" to='/subs'>
                      <li className="d-flex align-items-center gap-3 ms-4 ps-2 pt-3 mt-4">
                        <img src={doc} alt="" width={25} height={25}/>
                        <span className="text-link">Library</span>
                     </li>
                    </NavLink>

                    <NavLink className="text-decoration-none" to='/subs'>
                      <li className="d-flex align-items-center gap-3 ms-4 ps-2 pt-3 mt-2">
                        <img src={oth} alt="" width={25} height={25}/>
                        <span className="text-link">History</span>
                     </li>
                    </NavLink>

                    <NavLink className="text-decoration-none" to='/subs'>
                      <li className="d-flex align-items-center gap-3 ms-4 ps-2 pt-3 mt-2">
                        <img src={tech} alt="" width={25} height={25}/>
                        <span className="text-link">Watch later</span>
                     </li>
                    </NavLink>

                    <NavLink className="text-decoration-none" to='/subs'>
                      <li className="d-flex align-items-center gap-3 ms-4 ps-2 pt-3 mt-2">
                        <img src={star} alt="" width={25} height={25}/>
                        <span className="text-link">Favourites</span>
                     </li>
                    </NavLink>

                   

                    <NavLink className="text-decoration-none" to='/subs'>
                      <li className="d-flex align-items-center gap-3 ms-4 ps-2 pt-3 mt-2">
                        <img src={u1} alt="" width={25} height={25}/>
                        <span className="text-link">Music</span>
                     </li>
                    </NavLink>

                    <NavLink className="text-decoration-none" to='/subs'>
                      <li className="d-flex align-items-center gap-3 ms-4 ps-3 pt-3 mt-3">
                        <span className="text-link-2">Subscriptions</span>
                     </li>
                    </NavLink>

                    <NavLink className={({ isActive }) => isActive ? " clic" : "text-decoration-none"}  to='/private'>
                      <li className="d-flex align-items-center gap-3 ms-4 ps-2 pt-3 mt-2">
                        <img src={oval} alt="" width={25} height={25}/>
                        <span className="text-link">Gussie Singleton</span>
                     </li>
                    </NavLink>

                    <NavLink className={({ isActive }) => isActive ? " clic" : "text-decoration-none"}  to='/privateTwo'>
                      <li className="d-flex align-items-center gap-3 ms-4 ps-2 pt-3 mt-2">
                        <img src={oval2} alt="" width={25} height={25}/>
                        <span className="text-link">Nora Francis</span>
                     </li>
                    </NavLink>




                    <NavLink className="text-decoration-none" to='/subs'>
                      <li className="d-flex align-items-center gap-3 ms-4 ps-2 pt-3 mt-4 pb-3">
                        <img src={ui2} alt="" width={25} height={25}/>
                        <span className="text-link">Setting</span>
                     </li>
                    </NavLink>

                </ul>
            </div>
        </>
    )
}

export default Navbar;

