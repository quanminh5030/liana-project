import { Typography } from '@material-ui/core';
import React from 'react';
import { Button, Form, FormControl, Image, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useStyles from './styles/navStyle';

export default function Menu() {
    const classes = useStyles();
    const items = [
        { title: 'Company', href: 'https://www.lianatech.com/resources/about-us/why-liana.html' },
        { title: 'Products', href: 'https://www.lianatech.com/services.html' },
        { title: 'Contact us', href: 'https://www.lianatech.com/contact-us/contact.html' },
    ]

    return (
        <Navbar expand="lg" style={{ marginBottom: 10 }}>
            <Navbar.Brand href="google.com">
                <Image src='https://www.lianatech.com/media/history/cache/liana-2005-378x200,c,q=75,e=png.jpg' fluid style={{ width: '70%', }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {items.map((item, index) =>
                        <Nav.Link href={item.href} key={index} target='_blank'>
                            <Typography className={classes.link} variant='h6'>
                                {item.title}
                            </Typography>
                        </Nav.Link>
                    )}
                </Nav>
                <Form inline style={{ marginRight: '10rem' }}>
                    <FormControl type="text" placeholder="Search" className={classes.form} />
                    <Button size='large'
                        variant='primary'
                        color='primary'
                        className={classes.btn}
                    >
                        Search
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
