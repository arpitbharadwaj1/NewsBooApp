import React from 'react'
import { Link } from "react-router-dom";

const NavBar = (props) => {

    return (
        <div>
            <nav className='navbar navbar-expand-lg fixed-top' style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>NewsBoo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Technology</Link>
                            </li>

                        </ul>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            onClick={props.toggleMode}
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            Enable {props.mode === 'dark' ? 'light' : 'dark'} mode
                        </label>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
