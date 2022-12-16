
import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} `}>
                <div className="container-fluid">
                    <a className={`nav-link mx-4 text-center fs-3 fw-bold text-${props.mode === 'light' ? 'black' : 'light'}`} href="/">{props.title}</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
                            <li className="nav-item mx-3 ">
                                {/* <Link className={`nav-link text-${props.mode === 'light' ? 'black' : 'light'} `} to="/">Home</Link> */}
                                <a className={`nav-link text-${props.mode === 'light' ? 'black' : 'light'} `} href="/">Home</a>
                            </li>
                            {/* <li className="nav-item mx-3">
                            <Link className={`nav-link text-${props.mode === 'light' ? 'black' : 'light'} `} to="/about">{props.aboutText}</Link>
                        </li> */}
                        </ul>
                        <div className='d-flex'>
                            <button type="button" className="btn btn-primary mx-2" onClick={props.darkModeBlue} />
                            <button type="button" className="btn btn-secondary mx-2" onClick={props.darkModeGray} />
                            <button type="button" className="btn btn-success mx-2" onClick={props.darkModeGreen} />
                        </div>

                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            <label className={`form-check-label text-${props.mode === 'light' ? 'black' : 'light'} `} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>


                </div>
            </nav>


        </>

    )
}
Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'Set about text here',
}
