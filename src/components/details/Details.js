import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut, Line, Pie } from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions';

const Details = ({ title, subheader }) => {
    const { total, chartData } = useTransactions(title);
    const classes = useStyles();

    return (
        <Card className={title === 'Income' ? classes.income : classes.expense} style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
        
                <CardHeader className="card-header" title={title} subheader={subheader} />
                <Typography className={title === 'Income' ? classes.incomefont : classes.expensefont} variant="h6">${total}</Typography>
              
            <Doughnut data={chartData}  
                   />

                   

        </Card>
    );
};


export default Details
