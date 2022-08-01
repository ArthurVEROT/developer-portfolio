import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";

import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaBloggerB,
  FaRedditAlien,
  FaStackOverflow,
  FaCodepen,
  FaInstagram,
  FaGitlab,
  FaMediumM,
} from "react-icons/fa";

import { makeStyles } from "@material-ui/core/styles";

import { socialsData } from "../../data/socialsData";

function Footer() {
  const shortname = (name) => {
    if (name.length > 10) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };
  const { theme } = useContext(ThemeContext);
  const useStyles = makeStyles((t) => ({
    input: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.primary600}`,
      },
    },
    message: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.primary600}`,
      },
    },
    label: {
      backgroundColor: `${theme.secondary}`,
      color: `${theme.primary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 600,
      fontSize: "0.9rem",
      padding: "0 5px",
      transform: "translate(25px,50%)",
      display: "inline-flex",
    },
    socialIcon: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "21px",
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    detailsIcon: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "23px",
      transition: "250ms ease-in-out",
      flexShrink: 0,
      "&:hover": {
        transform: "scale(1.1)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    submitBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.08)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className="footer" id="footer" style={{ backgroundColor: theme.secondary }}>
      <div className="socialmedia-icons-contacts">
        {/* {socialsData.twitter && (
          <a
            href={socialsData.twitter}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaTwitter aria-label="Twitter" />
          </a>
        )} */}
        {socialsData.github && (
          <a
            href={socialsData.github}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaGithub aria-label="GitHub" />
          </a>
        )}
        {socialsData.linkedIn && (
          <a
            href={socialsData.linkedIn}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaLinkedinIn aria-label="LinkedIn" />
          </a>
        )}
        {/* {socialsData.instagram && (
          <a
            href={socialsData.instagram}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaInstagram aria-label="Instagram" />
          </a>
        )} */}
        {/* {socialsData.medium && (
          <a
            href={socialsData.medium}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaMediumM aria-label="Medium" />
          </a>
        )} */}
        {/* {socialsData.blogger && (
          <a
            href={socialsData.blogger}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaBloggerB aria-label="Blogger" />
          </a>
        )} */}
        {/* {socialsData.youtube && (
          <a
            href={socialsData.youtube}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaYoutube aria-label="YouTube" />
          </a>
        )} */}
        {/* {socialsData.reddit && (
          <a
            href={socialsData.reddit}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaRedditAlien aria-label="Reddit" />
          </a>
        )} */}
        {/* {socialsData.stackOverflow && (
          <a
            href={socialsData.stackOverflow}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaStackOverflow aria-label="Stack Overflow" />
          </a>
        )} */}
        {/* {socialsData.codepen && (
          <a
            href={socialsData.codepen}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaCodepen aria-label="CodePen" />
          </a>
        )} */}
        {/* {socialsData.gitlab && (
          <a
            href={socialsData.gitlab}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaGitlab aria-label="GitLab" />
          </a>
        )} */}
      </div>
      <div>
        <p style={{ color: theme.tertiary }}>arthur.verot96@gmail.com</p>
      </div>
      <div>
        <p style={{ color: theme.tertiary }}>
          Made with
          <span
            style={{ color: theme.primary, margin: "0 0.5rem -1rem 0.5rem" }}
          >
            ❤
          </span>
          by {shortname(headerData.name)}
        </p>
      </div>
    </div>
  );
}

export default Footer;
