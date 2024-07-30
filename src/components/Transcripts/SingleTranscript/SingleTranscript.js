import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaPlay, FaCode } from "react-icons/fa";
import Fade from "react-reveal/Fade";

import placeholder from "../../../assets/png/placeholder.png";
import "./SingleTranscript.css";

function SingleTranscript({
  id,
  level,
  school,
  desc,
  link,
  image,
  theme,
}) {
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
      "&:hover": {},
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div
        key={id}
        className="singleProject"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className="projectContent">
          <h2
            id={level.replace(" ", "-").toLowerCase()}
            style={{ color: theme.tertiary }}
          >
            {level}
          </h2>
          <img src={image ? image : placeholder} alt={level} />
          <div className="project--showcaseBtn">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${level.replace(" ", "-").toLowerCase()} ${level
                .replace(" ", "-")
                .toLowerCase()}-demo`}
            >
              <FaPlay
                id={`${level.replace(" ", "-").toLowerCase()}-demo`}
                className={classes.icon}
                aria-label="Demo"
              />
            </a>
          </div>
        </div>
        <p
          className="project--desc"
          style={{
            background: theme.secondary,
            color: theme.tertiary,
          }}
        >
          {desc}
        </p>
        <div
          className="project--lang"
          style={{
            background: theme.secondary,
            color: theme.tertiary80,
          }}
        >
          <span key={id}>{school}</span>
        </div>
      </div>
    </Fade>
  );
}

export default SingleTranscript;
