import React from 'react';
import useStyles from './timeLine.ts';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from './timeLineItem/timeLineItem.tsx';

const TimeLine: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.timeLine}>
                <Timeline position="alternate">
                    <TimelineItem value='1941' imgSrc='./icon.png' text="hello" />
                    <TimelineItem value='1643' imgSrc='./icon.png' text="hello" />
                    <TimelineItem value='1935' imgSrc='./icon.png' text="hello" />
                    <TimelineItem value='1941' imgSrc='./icon.png' text="hello" />
                </Timeline>
            </div>
        </>
    )
};

export default TimeLine;
