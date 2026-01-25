import { MdOutlineAccountCircle } from "react-icons/md";
import logo from '../../accets/main/logo.svg'

import './Nav.css'

function Nav() {
    return(
        <nav className='nav'>
            <ul className="nav-list">
                <img src={logo} alt="" className="nav-logo" />
                <li className="nav-list-item">Who we are</li>
                <li className="nav-list-item">Contacts</li>
                <li className="nav-list-item">Menu</li>
            </ul>
            <div className="nav-acc">
                <button className="nav-acc-logSign">Sign Up</button>
                <MdOutlineAccountCircle className="nav-acc-profile" />
            </div>
        </nav>
    )
}
export default Nav