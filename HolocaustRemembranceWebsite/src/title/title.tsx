import React from 'react';
import useStyles from './title.ts';

const Title:React.FC = () => {
  const classes = useStyles();
  
  return (
    <>
      <div className={classes.title}>
      Echoes of Humanity: A Tribute to Holocaust Remembrance
      </div>
    </>
  )
};

export default Title;
