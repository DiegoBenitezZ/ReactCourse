import logo from "./img/react.png"
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <img 
                        src={logo}
                        alt="React"
                        style={{height: "35px", verticalAlign: "top"}}
                    />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => isActive ? "nav-link active text-danger" : "nav-link"} 
                                aria-current="page" to="/"
                            >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cryptoDetail/BTC/10">Crypto Details</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item" to="/product">Product</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/product/list">Product List</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/product/details/5">Product Details</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/product/create">Create Product</Link>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;