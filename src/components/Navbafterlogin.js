import React, { useState } from 'react'
import {  Container, Nav, Navbar, Dropdown, } from 'react-bootstrap'
import newlogo from '../components/images/newlogo.png'
import { Link } from 'react-router-dom'

const Navbafterlogin = () => {

    return (
        <>
            <div>
                <Navbar bg="light" className='navvbarr' expand="lg">
                    <Container>
                        <Link to={'/'} className='navlink3'><div className='navlogo'>tabara3<img src={newlogo} /></div></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to={'/'} className='navlink2'>الرئيسية</Link>
                                <Link to={'/listeofmotabari3in'} className='navlink' >قائمة المتبرعين</Link>
                                <Dropdown  >
                                    <Dropdown.Toggle className='dropdownprofile' variant="success" id="dropdown-basic">
                                        aladinta68@gmail.com
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">حسابي</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">تسجيل الخروج</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
export default Navbafterlogin
