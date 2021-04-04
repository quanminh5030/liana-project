import { Container, createMuiTheme, Grid, Link, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import useStyles from './styles/newStyle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function News() {
    const classes = useStyles();
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNews();
    }, []);

    const getNews = () => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.lianatech.com%2Fresources%2Fblog.rss')
            .then(response => response.json())
            .then(data => setNews(data.items))
            .catch(err => console.error(err))
    };

    return (
        <Grid container className={classes.container}>
            <Grid container justify='center' item xs={12}>
                <ThemeProvider theme={theme}>
                    <Typography variant='h3' className={classes.title}>
                        Lastest news
                        </Typography>
                </ThemeProvider>
            </Grid>

            <Grid container justify='center' item xs={12} style={{ marginBottom: 100 }}>
                {news.slice(0,3).map((item, index) =>
                    <Grid item md={3} key={index}>
                        <Container className={classes.newBox}>
                            <ThemeProvider theme={theme}>
                                <Typography variant='caption' className={classes.date}
                                >
                                    {moment(item.pubDate).format('DD.MM.YYYY')}
                                </Typography>

                                <Link href={item.link} color='inherit' target="_blank" >
                                    <Typography variant='body2' className={classes.desc}>{item.description}
                                    </Typography>
                                </Link>
                            </ThemeProvider>
                        </Container>
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}


