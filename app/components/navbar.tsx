'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'



function toggleDropdown() {
    // const myNav = document.querySelector("#my-nav")
    const burger = document.querySelector("#burger")
    // myNav?.classList.toggle("is-active")
    burger?.classList.toggle("is-active")
}

export default function NavBar() {
    const [isActive, setIsActive] = useState(false);

    return (
    <nav className="navbar is-fixed-top is-primary" style={{backgroundColor: '#55A8DC'}}  role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                {/* <Link className="navbar-item" href="/"> */}
                {/* <img src="https://bulma.io/images/bulma-logo.png" width="" height=""></img> */}

                {/* </Link> */}

                <a href='/' style={{ padding: 0, objectFit: 'cover', height: 65 }}>
                    <Image

                        src="/logo.jpg"
                        alt="Vercel Logo"
                        className={styles.vercelLogo}
                        style={{ padding: 0 }}
                        objectFit='cover'
                        width={64}
                        height={200}
                        priority
                    />
                </a>
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
                <div className="navbar-start" style={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Link className="navbar-item" href="/" onClick={() => setIsActive(false)}>Home</Link>
                    <Link className="navbar-item" href="/events" onClick={() => setIsActive(false)}>Events</Link>


                    <div className='navbar-item has-dropdown is-hidden-touch'>
                        <div className="dropdown is-hoverable">
                            <div className="navbar-link">
                                <Link href="/classes" style={{color:'white'}} onClick={() => setIsActive(false)}>
                                    Classes
                                </Link>
                            </div>
                            <div className="dropdown-menu " id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <Link id={styles.navbarItem} className="navbar-item"  href="/classes" onClick={() => setIsActive(false)}>General Info</Link>
                                    <Link className="navbar-item" href="/classes/schedule" onClick={() => setIsActive(false)}>Class Schedule</Link>
                                    <Link className="navbar-item" href="/classes/locations" onClick={() => setIsActive(false)}>Locations</Link>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable is-hidden-desktop" id={styles.navbarItem}>
                        <div className="navbar-link">
                            <Link href="/classes" onClick={() => setIsActive(false)}>
                                Classes
                            </Link>
                        </div>


                        <div className="navbar-dropdown ">
                            <Link className="navbar-item" href="/classes" onClick={() => setIsActive(false)}>General Info</Link>
                            <Link className="navbar-item" href="/classes/schedule" onClick={() => setIsActive(false)}>Class Schedule</Link>
                            <Link className="navbar-item" href="/classes/locations" onClick={() => setIsActive(false)}>Locations</Link>




                            {/* <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a> */}
                        </div>
                    </div>

                    <Link className="navbar-item" href="/team" onClick={() => setIsActive(false)}>Team</Link>
                    <Link className="navbar-item" href="/about" onClick={() => setIsActive(false)}>About</Link>


                </div>



                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary" href='https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgID=551569'>
                                <strong>Parent Portal</strong>
                            </a>
                            {/* <a className="button is-light">
                                Log in
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
}

