import { makeStyles, useTheme } from '@material-ui/core/styles';
import React from 'react'
import Lottie from "lottie-react";
import animationData from '../animations/landinganimation/data';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';

import ButtonArrow from '../components/ui/ButtonArrow';

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: '50em',
        minWidth: '21em',
        marginTop: '2em',
        marginLeft: '10%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '30em',
        },
    },
    estimate: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: '50px',
        height: '45px',
        width: '145px',
        marginRight: 40,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: '1em'
    },
    learnButtonHero: {
        borderColor: theme.palette.common.blue,
        borderWidth: '2px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        color: theme.palette.common.blue,
        textTransform: 'none',
        borderRadius: '50px',
        height: '45px',
        width: '145px',
    },
    mainContainer: {
        marginTop: '5em',
        [theme.breakpoints.down('md')]: {
            marginTop: '3em',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2em',
        },
    },
    heroTextContainer: {
        minWidth: '21.5em',
        marginLeft: '1em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    }
}));

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    // redererSettings: {
    //     preserveAspectRatio: 'xMidYmid slice'
    // }
};
const LandingPage = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid container direction='column' className={classes.mainContainer}>
            <Grid item>
                <Grid container direction='row' justifyContent="flex-end" alignItems="center">
                    {/* sm without specify a number => only at the sm breakpoint, each item will occupied full row */}
                    <Grid item sm className={classes.heroTextContainer}>
                        <Typography align="center" variant='h2'>Bringing West Coast Technology<br />to the MidWest</Typography>
                        <Grid container justifyContent="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button variant='contained' className={classes.estimate}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' className={classes.learnButtonHero}>
                                    <span style={{ marginRight: 10 }}>Learn more</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm className={classes.animation} >
                        <Lottie {...defaultOptions} style={{ width: '100%', height: '100%' }} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default LandingPage