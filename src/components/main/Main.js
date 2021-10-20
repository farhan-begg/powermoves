import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import useStyles from './styles';
import Form from './form/Form';
import List from './list/List';

const Main = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}  style={{ backgroundColor: "rgba(0,0,0,0.3)" }}> 
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance $100</Typography>
                <Typography variant="subtitle" style={{lineHeight: '1.5em', marginTop: '20px'}}>
                    {/* Infor Card */}
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <List />
                    </Grid>
                
                </Grid>
            </CardContent>

        </Card>
    )
}

export default Main
