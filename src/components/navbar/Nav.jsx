import { Link } from 'react-router-dom'
import Logo from '../../asset/image/clima.png'
import SearchBar from '../searchBar/SearchBar'
import './nav.css'

const Nav = ({ onSearch }) => {
    return (
        <div className="navbar navbar-dark top">
            <div className="container-fuild">
                <Link className="navbar-brand link" to="/" >
                    <img className="d-inline-block align-text-top imgTopBar" width="40" height="50" src={Logo} alt="logo" />
                    <h2 className="henry">Neri Heredia - Weather App</h2>
                </Link>
            </div>
            <div className="container-fluid stop">
                <div className="topLeft">
                    <Link style={{ textDecoration: "none" }} to={"/"} >
                        <span span className="liItems" >Home</span>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to={"/about"} >
                        <span className="liItems">About</span>
                    </Link>
                </div>
                <div className="topRight">
                    <SearchBar onSearch={onSearch} />
                </div>
            </div>
        </div >
    )
}

export default Nav
