import React from 'react'
import { Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import { Doughnut} from 'react-chartjs-2'
import useStyles from './styles'
import useTransactions from '../../useTransactions';
import './Details.css'

const Details = ({title}) => {

    const classes = useStyles()
    const {total, chartData} = useTransactions(title)

    return (
      <Card className={title === "Income" ? classes.income : classes.expense}  style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
          <CardHeader title={title} />
          <CardContent>
              <Typography variant="h5">{total}</Typography>
              <Doughnut  className="canvas" data={chartData}  style={{ borderWidth: [0, 1, 1, 0]}}
              />
          </CardContent>


      </Card>
            
       
    )
}

export default Details
