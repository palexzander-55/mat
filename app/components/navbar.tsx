'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './navbar.module.css'



function toggleDropdown() {
    // const myNav = document.querySelector("#my-nav")
    const burger = document.querySelector("#burger")
    // myNav?.classList.toggle("is-active")
    burger?.classList.toggle("is-active")
}

export default function NavBar() {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" href="/">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
                </Link>

                {/* <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
    </a> */}

                <a role="button"
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    onClick={() => setIsActive(!isActive)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`} >
                <div className="navbar-start" style={{flexGrow: 1, justifyContent: 'center'}}>
                    <Link className="navbar-item" href="/">Home</Link>
                    <Link className="navbar-item" href="/team">Team</Link>
                    <Link className="navbar-item" href="/events">Events</Link>
                    <Link className="navbar-item" href="/about">About</Link>

                    <div className="navbar-item has-dropdown is-hoverable " id={styles.navbarItem}>
                        <a className="navbar-link">
                            Classes
                        </a>

                        <div className="navbar-dropdown ">
                            <a className="navbar-item">
                                General Info
                            </a>
                            <a className="navbar-item">
                                Class Schedule
                            </a>
                            <a className="navbar-item">
                                Locations
                            </a>
                            {/* <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a> */}
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

