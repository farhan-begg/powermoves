import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut, Line } from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions';

const Tracker = ({ title, subheader }) => {
    const { total, chartDataLine } = useTransactions(title);
    const classes = useStyles();

    return (
        <Card className={title === 'Income' ? classes.trackerIncome : classes.trackerExpense} style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
        
                <Typography className={title === 'Income' ? classes.incomefont : classes.expensefont}   title={title} subheader={subheader} />
                <div>{title === 'Income' ? 'Income '  : 'Expense '}</div>
                <Typography className={title === 'Income' ? classes.incomefont : classes.expensefont} variant="h6"> 
                ${total}
  
                </Typography>
              
            <Line data={chartDataLine} 
            
            
   
            />


                   

        </Card>
    );
};


export default Tracker
