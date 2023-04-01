import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Home from "@material-ui/icons/Home";
import { Link } from "react-router-dom";





const useStyles = makeStyles((theme) => ({
  
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  home : {
    color: "white"
  }
 
}));


function Header() {
  const classes = useStyles();

  

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            🎬
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Movie-Club
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
            </div>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          </div>
          <Link to='/'>
            <Home className={classes.home}/>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;