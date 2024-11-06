import { NavLink } from "react-router-dom"
import './NavBar.css'


export const NavBar = () => {
    return (
        <div className="navBar" >
            <NavLink to={'/'}>
                <img src="https://cdn-icons-png.flaticon.com/512/10493/10493466.png" alt="link" />
                <p>Wallet</p>
            </NavLink>
            <NavLink to={'/Wallet1'}>
                <img src="https://cdn-icons-png.flaticon.com/512/10493/10493466.png" alt="link" />
                <p>Wallet</p>
            </NavLink>
            <NavLink to={'/Wallet2'}>
                <img src="https://cdn-icons-png.flaticon.com/512/10493/10493466.png" alt="link" />
                <p>Wallet</p>
            </NavLink>
            <NavLink to={'/Wallet3'}>
                <img src="https://cdn-icons-png.flaticon.com/512/10493/10493466.png" alt="link" />
                <p>Wallet</p>
            </NavLink>
        </div>
    )
}