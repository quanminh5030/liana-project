import { Grid, Link } from '@material-ui/core';
import React from 'react';
import { Image } from 'react-bootstrap';
import { useStyles, Button, Text } from './styles/bodyStyle';
import BgImageBody from '../images/Background2.png';

export default function BodyPoster() {
    const classes = useStyles();

    return (
        <Grid container style={{ position: 'relative' }}>
            <Image src={BgImageBody} fluid style={{ filter: 'brightness(60%)' }} />

            <Grid container item xs={12} className={classes.infoContainer}  >
                <Grid container justify='center' alignItems='flex-end' item xs={12} className={classes.textContainer}>
                    <Text>
                        <p className={classes.title}>Software fueling digital marketing</p>
                    </Text>
                </Grid>

                <Grid container justify='center' alignItems='flex-start' item xs={12} className={classes.btnContainer}>
                    <Link href='https://www.lianatech.com/resources/about-us/facts-and-figures.html#mm-0' target='_blank'>
                        <Button className={classes.btn}>
                            Learn more
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}


