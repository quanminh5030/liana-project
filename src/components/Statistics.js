import React, { useEffect, useState } from 'react';
import BusinessLogo from '../images/business.png';
import FaceLogo from '../images/face.png';
import PublicLogo from '../images/public.png';
import { createMuiTheme, Grid, makeStyles, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core';
import { Container, Image } from 'react-bootstrap';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Statistics() {
    const classes = useStyles();
    const [clients, setClients] = useState(0);
    const [employees, setEmployees] = useState(0);
    const [users, setUsers] = useState(0);
    const items = [
        { logo: BusinessLogo, name: clients, title: 'clients' },
        { logo: FaceLogo, name: employees, title: 'employees' },
        { logo: PublicLogo, name: users, title: 'users' }
    ]

    useEffect(() => {
        clients < 3000 && setTimeout(() => setClients(clients + 20), 10);
        employees < 180 && setTimeout(() => setEmployees(employees + 1), 10);
        users < 10000 && setTimeout(() => setUsers(users + 50), 10);
    }, [clients, employees, users]);

    return (
        <Grid container justify='center' item xs={12}>
            {items.map((item, index) =>
                <Grid style={{ marginBottom: 100 }} key={index} alignItems='center' container item md={3}>
                    <Grid container item xs={6} justify='flex-end'>
                        <Image src={item.logo} fluid />
                    </Grid>
                    <Grid container item xs={6} >
                        <Container style={{ height: 80 }}>
                            <ThemeProvider theme={theme}>
                                <Typography variant='h2' className={classes.text}>
                                    {item.name}
                                </Typography>
                            </ThemeProvider>
                        </Container>
                        <Container>
                            <ThemeProvider theme={theme}>
                                <Typography variant='h4' className={classes.text2}>
                                    {item.title}
                                </Typography>
                            </ThemeProvider>
                        </Container>
                    </Grid>

                </Grid>
            )}
        </Grid>
    )
}

const useStyles = makeStyles(theme => ({
    text: {
        color: 'rgb(55, 58, 60)',
        fontFamily: 'Open Sans',
    },

    text2: {
        fontFamily: 'Open Sans',
        fontWeight: 450,
    },
}))

