import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useStyles from './styles/headerStyle';

export default function Header() {
    const classes = useStyles();
    const [language, setLanguage] = useState('In English');

    return (
        <Navbar expand="lg" className={classes.container}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="justify-content-end">
                    <Nav.Link href="https://www.lianatech.com/media" target='_blank'>
                        <Typography variant='subtitle1' className={classes.link}>News</Typography>
                    </Nav.Link>
                    <Nav.Link href="https://www.lianatech.fi/ratkaisut/verkkosivut/hinnoittelu/intranet-ja-extranet.html" target='_blank'>
                        <Typography variant='subtitle1' className={classes.link}>Intranet</Typography>
                    </Nav.Link>
                    <NavDropdown expand='sm' title={language} id="nav-dropdown" className={classes.dropdown}>
                        <NavDropdown.Item onSelect={() => setLanguage('In English')}>In English</NavDropdown.Item>
                        <NavDropdown.Item onSelect={() => setLanguage('In Finnish')}>In Finnish</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

