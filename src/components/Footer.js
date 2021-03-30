import { Avatar, Container, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import useStyles from './styles/footerStyle';

export default function Footer() {
    const classes = useStyles();
    const menus = [
        { id: 1, name: 'Company' },
        { id: 2, name: 'Products' },
        { id: 3, name: 'Contact us' },
        { id: 4, name: 'News' },
        { id: 5, name: 'Intranet' },
    ];
    const icons = [
        { logo: FaFacebookF, href: 'https://www.facebook.com/lianatech/' },
        { logo: FaTwitter, href: 'https://twitter.com/lianatech/' },
        { logo: FaLinkedinIn, href: 'https://www.linkedin.com/mwlite/company/liana-technologies' }
    ]

    return (
        <Grid container justify='center' className={classes.container}>
            <Grid container justify='center' style={{ margin: '3rem', }}>
                <Grid item md={4}>
                    <Typography variant='h4' className={classes.title}>
                        Liana Technologies
                    </Typography>
                    <Typography variant='h5'>
                        Sales and inquiries
                    </Typography>
                    <Typography variant='body1' style={{ marginBottom: '1rem' }}>
                        Email: sales@lianatech.com<br />
                        Phone: +358 10 387 7053
                    </Typography>
                </Grid>

                <Grid item md={4} style={{ textAlign: 'right' }}>
                    <Container style={{ marginBottom: '3rem' }}>
                        {menus.map(menu =>
                            <Link className={classes.link} href='#' key={menu.id}>
                                {menu.name}
                            </Link>
                        )}
                    </Container>
                    <Container justify='flex-end' className={classes.root}>
                        {icons.map((icon, index) =>
                            <Link
                                target="_blank"
                                key={index}
                                href={icon.href}
                            >
                                <Avatar className={classes.icon}>
                                    <icon.logo />
                                </Avatar>
                            </Link>
                        )}
                    </Container>
                </Grid>
            </Grid>
        </Grid>
    )
}



