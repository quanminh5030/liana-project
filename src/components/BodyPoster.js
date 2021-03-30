import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';
import useStyles from './styles/bodyStyle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function BodyPoster() {
    const classes = useStyles();

    return (
        <Grid container item xs={12} className={classes.container} >
            <Grid container justify='center' alignItems='flex-end' item xs={12} className={classes.textContainer}>
                <ThemeProvider theme={theme}>
                    <Typography variant='h1' className={classes.title}>
                        Software fueling digital marketing
                    </Typography>
                </ThemeProvider>
            </Grid>

            <Grid container justify='center' alignItems='flex-start' item xs={12} className={classes.btnContainer}>
                <Link href='https://www.lianatech.com/resources/about-us/facts-and-figures.html#mm-0' target='_blank'>
                    <Button size='lg' color='primary' className={classes.btn}>
                        Learn more
                 </Button>
                </Link>
            </Grid>
        </Grid>
    )
}


