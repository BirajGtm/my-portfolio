import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { transcriptsData } from '../../data/transcriptsData';

import './Transcripts.css';
import SingleTranscript from './SingleTranscript/SingleTranscript';

function Transcripts() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      transition: 'color 0.2s',
      '&:hover': {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: '40px',
      height: '40px',
      padding: '0.5rem',
      fontSize: '1.05rem',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      '&:hover': {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {transcriptsData.length > 0 && (
        <div
          className="projects"
          id="transcripts"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Transcripts</h1>
          </div>
          <div className="projects--body">
            <div className="projects--bodyContainer">
              {transcriptsData.slice(0, 3).map((transcript) => (
                <SingleTranscript
                  theme={theme}
                  key={transcript.id}
                  id={transcript.id}
                  level={transcript.level}
                  school={transcript.school}
                  desc={transcript.desc}
                  link={transcript.link}
                  image={transcript.image}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Transcripts;
