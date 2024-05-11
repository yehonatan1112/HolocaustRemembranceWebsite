import useStyles from './timeLineItem.ts';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


interface Props {
    value: string | undefined,
    imgSrc: string | undefined,
    text: string | undefined
};

const TimeLineItem: React.FC<Props> = ({ value, imgSrc, text }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={classes.timeLineItem}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Button variant="outlined" sx={{ color: 'red[500]' }} onClick={handleClickOpen}>{value}</Button>
                        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">{value}</DialogTitle>
                            <DialogContent dividers>
                                <img src={imgSrc}></img>
                                <Typography gutterBottom>{text}</Typography>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleClose}>Close</Button>
                            </DialogActions>
                        </Dialog>
                    </TimelineContent>
                </TimelineItem>
            </div>
        </>
    )
};

export default TimeLineItem;
