import Logo from '../../asset/image/logoHenry.png'
import SearchBar from '../searchBar/SearchBar'
import './nav.css'

const Nav = ({ onSearch }) => {
    return (
        <div className="navbar navbar-dark top">
            <div className="container-fluid">
                <a className="navbar-brand link" href="#">
                    <img className="d-inline-block align-text-top" width="40" height="50" src={Logo} alt="logo" />
                    <h2 className="henry">Henry - Weather App</h2>
                </a>
                <div className="topRight">
                    <SearchBar onSearch={onSearch} />
                </div>
            </div>
        </div>
    )
}

export default Nav
