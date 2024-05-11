import React from 'react';
import useStyles from './app.ts';
import Title from './title/title.tsx';
import TimeLine from './timeLine/timeLine.tsx';


const App: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.app}>
        <Title />
        <TimeLine />
      </div>
    </>
  )
};

export default App;
