import React, { useState, useEffect, useMemo } from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../assets/logo.svg';
import { useMediaQuery } from '@material-ui/core';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0, // at which point of the page the effect will be trigger
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

/*
  makestyles is used to make inline style. Wherever we want to have a custom style for a component, we need it.
*/
const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em",
    // [theme.breakpoints.down("md")]: {
    //   marginBottom: '2em'
    // },
    // [theme.breakpoints.down("xs")]: {
    //   marginBottom: '1.25em'
    // },
  },
  logo: {
    height: '8em',
    // [theme.breakpoints.down("md")]: {
    //   marginBottom: '7em'
    // },
    // [theme.breakpoints.down("xs")]: {
    //   marginBottom: '5.5em'
    // },
  },
  logoContainer: {
    padding: 0, //remove padding around button containing image logo
    "&:hover": {
      backgroundColor: 'transparent'
    }
  },
  tabContainer: {
    marginLeft: "auto", //will add margin to the most left element and will push all next right element to the right
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    ...theme.typography.estimate,
    // fontFamily: "Pacifico",
    // fontSize: "1rem",
    // textTransform: "none",
    // color: "white"
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    },

  },
  // menuItemSelected: {
  //   backgroundColor: `${theme.palette.common.orange} !important`
  // },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawerIcon: {
    height: '50px',
    width: '50px'
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {

      opacity: 1
    }
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1
  }
}));

const Header = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  const classes = useStyles();
  // const [value, setValue] = useState(0);
  const theme = useTheme();
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md")); //it listens for matches to a CSS media query. It allows the rendering of components based on whether the query matches or not.

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); //will contain the dom element where the menu will appear
  const [openMenu, setOpenMenu] = useState(false);
  // const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  }

  const handleMenuItemClick = (e, index) => {
    setOpenMenu(false);
    setSelectedIndex(index);
    setAnchorEl(null);
  }

  const menuOptions = useMemo(() => ([
    {
      name: "Services",
      link: '/services',
      activeIndex: 1,
      selectedIndex: 0
    },
    {
      name: "Custom Software Development",
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 1
    },
    {
      name: "Mobile App Development",
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 2
    },
    {
      name: "Website Development",
      link: '/websites',
      activeIndex: 1,
      selectedIndex: 3
    }
  ]), []);

  const routes = useMemo(() => {
    return [
      {
        name: "Home",
        link: '/',
        activeIndex: 0,
      },
      {
        name: "Services",
        link: '/services',
        activeIndex: 1,
        anchorOwns: anchorEl ? 'simple-menu' : undefined,
        ariaPopup: anchorEl ? "true" : undefined,
        mouseOver: (event) => handleClick(event)
      },
      {
        name: "The Revolution",
        link: '/revolution',
        activeIndex: 2,
      },
      {
        name: "About Us",
        link: '/about',
        activeIndex: 3,
      },
      {
        name: "Contact Us",
        link: '/contact',
        activeIndex: 4,
      }
    ]
  }, [anchorEl]);

  useEffect(() => {

    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    })
  }, [value, selectedIndex, setSelectedIndex, setValue, routes, menuOptions])

  const tabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {/* <Tab label="Home" className={classes.tab} component={Link} to="/" />
              <Tab label="Services" className={classes.tab} component={Link} to="/services" />
              <Tab label="The Revolution" className={classes.tab} component={Link} to="/revolution" />
              <Tab label="About Us" className={classes.tab} component={Link} to="/about" />
              <Tab label="Contact Us" className={classes.tab} component={Link} to="/contact" /> */}
        {routes?.map((route, id) =>
          <Tab
            key={`${route.name}-${id}`}
            label={route.name}
            to={route.link}
            component={Link}
            className={classes.tab}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        )}
        {/* <ButtonInTabs color="secondary" variant="contained" className={classes.button} component={Link} to="/estimate" label="Free Estimate" /> */}
      </Tabs>
      <Button color="secondary" variant="contained" className={classes.button} >Free Estimate</Button>
      {/* MenuListProps helps to manipulate MenuList which is the base element of a Menu. We can pass event and method to handle them. Ex: {onMouseLeave:handleClose}*/}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }} //styling background of menu list item through paper
        elevation={0} //so the menupopup not stay on top o inside the navbar
        style={{ zIndex: 1308 }}
        keepMounted // our options should stay on the DOM regardless on if there are shown o not
      >
        {/* <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/services" classes={{ root: classes.menuItem }}>Services</MenuItem>
              <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/customsoftware" classes={{ root: classes.menuItem }}>Custom Software Development</MenuItem>
              <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/mobileapps" classes={{ root: classes.menuItem }}>Mobile App Development</MenuItem>
              <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/websites" classes={{ root: classes.menuItem }}>Website Development</MenuItem> */}
        {menuOptions.map((option, index) => (
          <MenuItem
            key={`${option.name}-${index}`}
            selected={index === selectedIndex && value === 1}
            onClick={(event) => { handleClose(); setValue(1); handleMenuItemClick(event, index) }}
            component={Link}
            to={option.link}
            classes={{
              root: classes.menuItem,
              //selected: classes.menuItemSelected 
            }}
          >{option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }} // use classes to override custom classes of Material ui
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <>
            {routes?.map((route, idx) => (
              <ListItem
                key={idx}
                divider
                button
                component={Link}
                to={route.link}
                onClick={(e) => { setOpenDrawer(false); setValue(route.activeIndex) }}
                selected={value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
              >
                <ListItemText disableTypography className={classes.drawerItem}>{route.name}</ListItemText>
              </ListItem>

            ))}
            <ListItem
              divider
              button
              component={Link}
              to={"/estimate"}
              onClick={(e) => { setOpenDrawer(false); setValue(5) }}
              selected={value === 5}
              classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }}
            >
              <ListItemText disableTypography className={classes.drawerItem}>Free Estimate</ListItemText>
            </ListItem>
          </>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );


  return (
    <>
      <ElevationScroll>
        {/* AppBar position has position fixed by default. 
        if ou pass a color to the color property of AppBar, the color passed will override the default one.
        Example: color={'secondar'} will pass the color setted up into palette.secondary.main...
      */}
        <AppBar position='fixed' color='primary' className={classes.appBar}>
          {/* Toolbar helps to create a horizontal bar that will stay on top like a navbar. It's need to be inside an AppBar component */}
          {/* disableGutters remove padding on Toolbar */}
          <ToolBar disableGutters>
            {/* disabledRipple remove default effect on button */}
            <Button disableRipple component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)}>
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export const ButtonInTabs = ({ className, onClick, children, label, variant, component, to, color }) => {
  return <Button color={color} variant={variant} className={className} component={component} to={to} children={children}>{label}</Button>
};
export default Header