import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import logo from "../images/logo.png";
import "./Header.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    paddingLeft: "5vw",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
  },
  logo: {
    height: "50px",
    objectFit: "contain",
  },
  headerLink: {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "right",
  },
  headerOption: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
    marginRight: "10px",
  },
  spacer: {
    paddingLeft: "1vw",
  },
  headerLineOne: {
    fontSize: "13px",
  },
  headerLineTwo: {
    headerLineTwo: "15px",
    fontWeight: "bold",
  },
}));
const Header = () => {
  const classes = useStyles();
  const showAboutUs = () => {
    const elmnt = document.getElementById("about");
    if (elmnt) {
      elmnt.scrollIntoView({ behavior: "smooth" });
    }
  };
  const showProduct = () => {
    const elmnt = document.getElementById("product");
    if (elmnt) {
      elmnt.scrollIntoView({ behavior: "smooth" });
    }
  };
  const showPackage = () => {
    const elmnt = document.getElementById("package");
    if (elmnt) {
      elmnt.scrollIntoView({ behavior: "smooth" });
    }
  };
  const showContactUs = () => {
    const elmnt = document.getElementById("contactus");
    if (elmnt) {
      elmnt.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to="/">
            <img className={classes.logo} src={logo} alt="logo" />
          </Link>
          <Typography variant="h6">MTD Bank benim icin </Typography>
          <Button className={classes.button} onClick={showAboutUs}>
            About Us Hakkimizda{" "}
          </Button>
          <Button className={classes.button} onClick={showProduct}>
            Product
          </Button>
          <Button className={classes.button} onClick={showPackage}>
            Package
          </Button>
          <Button className={classes.button} onClick={showContactUs}>
            Contact Us
          </Button>
          <div className={classes.spacer}></div>
          <Link to="/login" className={classes.headerLink}>
            <div className={classes.headerOption}>
              <span className={classes.headerLineOne}>Hello</span>
              <span className={classes.headerLineTwo}>Sign In</span>
            </div>
          </Link>
          <Link to="/register" className={classes.headerLink}>
            <div className={classes.headerOption}>
              <span className={classes.headerLineOne}>New User</span>
              <span className={classes.headerLineTwo}>Register</span>
            </div>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
