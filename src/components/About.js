import { Container, createMuiTheme, Grid, Link, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import CompanyImage from '../images/company.png';
import ProductImage from '../images/product.png';
import ContactImage from '../images/contact.png';
import useStyles from './styles/aboutStyle';
import { Image } from 'react-bootstrap';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function About() {
    const classes = useStyles();
    const items = [
        { title: 'Company', img: CompanyImage, href: 'https://www.lianatech.com/resources/about-us/why-liana.html' },
        { title: 'Products', img: ProductImage, href: 'https://www.lianatech.com/services.html' },
        { title: 'Contact us', img: ContactImage, href: 'https://www.lianatech.com/contact-us/contact.html' },
    ]

    return (
        <Grid container justify='center' item xs={12} style={{ marginTop: 80, marginBottom: 50 }}>
            {items.map((item, index) =>
                <Grid key={index} item md={3}>
                    <Link style={{ textDecoration: 'none', }} href={item.href} target='_blank'>
                        <Container className={classes.container}>
                            <Image src={item.img} fluid />
                            <Container className={classes.textContainer}>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='h5' className={classes.title}>
                                        {item.title}
                                    </Typography>
                                </ThemeProvider>
                            </Container>
                        </Container>
                    </Link>
                </Grid>

            )}
        </Grid>

    )
}



