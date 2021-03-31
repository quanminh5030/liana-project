import { Container, createMuiTheme, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import boschLogo from '../images/boschLogo.png';
import bodyshopLogo from '../images/bodyshopLogo.png';
import laplandhotelsLogo from '../images/laplandhotelsLogo.png';
import ikeaLogo from '../images/ikeaLogo.png';
import { Image } from 'react-bootstrap';
import useStyles from './styles/referenceStyle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function References() {
    const classes = useStyles();
    const references = [
        { logo: boschLogo, title: 'Robert Bosch', desc: 'Bosch is a multinational engineering and electronics company.' },
        { logo: bodyshopLogo, title: 'The Body Shop', desc: 'The Body Shop is a global beauty brand and it has more than 3,0' },
        { logo: laplandhotelsLogo, title: 'Lapland Hotels', desc: 'Lapland Hotels is the largest and the most diverse hotel chain ' },
        { logo: ikeaLogo, title: 'IKEA', desc: 'IKEA is a multinational furniture store.' }
    ];

    return (
        <Grid container spacing={2} justify='center'>
            <Grid container justify='center' item xs={12}>
                <ThemeProvider theme={theme}>
                    <Typography variant='h3' className={classes.title}>
                        References
                    </Typography>
                </ThemeProvider>
            </Grid>

            <Grid container justify='center' item md={9} style={{ marginBottom: 100 }}>
                {references.map((ref, index) =>
                    <Grid key={index} item md className={classes.refContainer}>
                        <Container className={classes.refBox}>
                            <Image
                                src={ref.logo}
                                fluid
                                className={classes.logo}
                            />
                        </Container>
                        <Container className={classes.refBox} style={{ height: '70%' }}>
                            <ThemeProvider theme={theme}>
                                <Typography variant='h4' className={classes.subTitle}>
                                    {ref.title}
                                </Typography>
                                <Typography variant='h6' className={classes.subTitle}>
                                    {ref.desc}
                                </Typography>
                            </ThemeProvider>
                        </Container>
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}
