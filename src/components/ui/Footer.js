import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden'; //use to hidden element based on breakpoints

import footerAdorment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative" // is positioned relative to its normal position.Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position.Other content will not be adjusted to fit into any gap left by the element.

    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down('md')]: {
            width: '21em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em'
        },
    },
    mainContainer: {
        position: "absolute",
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: '3em'
    },
    icon: {
        height: '4em',
        width: '4em',
        [theme.breakpoints.down('xs')]: {
            height: '2.5em',
            width: '2.5em',
        }
    },
    socialContainer: {
        position: 'absolute',
        marginTop: "-6em",
        right: '1.25em',
        [theme.breakpoints.down('xs')]: {
            right: '0.6em',
        }
    }
}));

const Footer = ({ setValue, setSelectedIndex }) => {

    const classes = useStyles();

    return (
        <footer className={classes.footer} >
            {/* All grid element will be hide for medium size screen to less */}
            <Hidden mdDown>
                <Grid container className={classes.mainContainer} justifyContent="center">
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item component={Link} to="/" onClick={() => { setValue(0) }} className={classes.link}>
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item component={Link} to="/services" onClick={() => { setValue(1); setSelectedIndex(0) }} className={classes.link}>
                                Services
                            </Grid>
                            <Grid item component={Link} to="/customsoftware" onClick={() => { setValue(1); setSelectedIndex(1) }} className={classes.link}>
                                Custom Sofware Development
                            </Grid>
                            <Grid item component={Link} to="/mobileapps" onClick={() => { setValue(1); setSelectedIndex(2) }} className={classes.link}>
                                Mobile App Development
                            </Grid>
                            <Grid item component={Link} to="/websites" onClick={() => { setValue(1); setSelectedIndex(3) }} className={classes.link}>
                                Website Development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item component={Link} to="/revolution" onClick={() => { setValue(2) }} className={classes.link}>
                                The Revolution
                            </Grid>
                            <Grid item component={Link} to="/revolution" onClick={() => { setValue(2) }} className={classes.link}>
                                Vision
                            </Grid>
                            <Grid item component={Link} to="/revolution" onClick={() => { setValue(2) }} className={classes.link}>
                                Technology
                            </Grid>
                            <Grid item component={Link} to="/revolution" onClick={() => { setValue(2) }} className={classes.link}>
                                Process
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item component={Link} to="/about" onClick={() => { setValue(3) }} className={classes.link}>
                                About Us
                            </Grid>
                            <Grid item component={Link} to="/about" onClick={() => { setValue(3) }} className={classes.link}>
                                Mission Statement
                            </Grid>
                            <Grid item component={Link} to="/about" onClick={() => { setValue(3) }} className={classes.link}>
                                History
                            </Grid>
                            <Grid item component={Link} to="/about" onClick={() => { setValue(3) }} className={classes.link}>
                                Team
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item component={Link} to="/contact" onClick={() => { setValue(4) }} className={classes.link}>
                                Contact Us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>

            <img src={footerAdorment} alt="black decorative slash" className={classes.adornment} />

            <Grid container justifyContent="flex-end" spacing={2} className={classes.socialContainer}>
                <Grid item component={"a"} href="https://www.facebook.com" rel='noopener noreferrer' target='_blank'>
                    <img src={facebook} alt="facebook logo" className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel='noopener noreferrer' target='_blank'>
                    <img src={twitter} alt="twitter logo" className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com" rel='noopener noreferrer' target='_blank'>
                    <img src={instagram} alt="instagram logo" className={classes.icon} />
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;