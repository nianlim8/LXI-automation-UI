import logo from "../KeysightLogo.png"
import lxiLogo from"../Lxi.png"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo}/></a>
                &emsp;&emsp;
                <a className="navbar-brand bg-light" href="#"><img src={lxiLogo}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Instrument</Link>
                            {/* <a className="nav-link active" aria-current="page" href="#">Instrument</a> */}
                        </li>
                        <li className="nav-item">
                        <Link to="/test" className="nav-link">Testing</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul> 
              </li>*/} </ul>
                </div>
            </div>
        </nav>
        
    )

}
export default Header
