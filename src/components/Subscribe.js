import React from 'react';
import { createMuiTheme, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import CustomForm from './Form';
import useStyles from './styles/subscribeStyle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Subscribe() {
    const classes = useStyles();
    const url = "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e";

    return (
        <Grid container className={classes.container} spacing={2}>
            <Grid container justify='center' item xs={12}>
                <ThemeProvider theme={theme}>
                    <Typography variant='h3' className={classes.title}>
                        Subscribe to our newsletter
                    </Typography>
                </ThemeProvider>
            </Grid>

            <Grid container item xs>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <ThemeProvider theme={theme}>
                        <Typography align='center' variant='h5' className={classes.info}>
                            Follow our story and get the latest promotonial news about our products and events.
                    </Typography>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>

            <Grid container item xs={12}>
                <Grid item xs={3}></Grid>
                <Grid container justify='center' alignItems='center' item xs>
                    <MailchimpSubscribe
                        url={url}
                        render={({ subscribe, status, message }) => (
                            <CustomForm
                                status={status}
                                message={message}
                                onValidated={formData => subscribe(formData)}
                            />
                        )}
                    />

                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </Grid>
    )
}


