import { makeStyles } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { flexbox } from '@material-ui/system'

export default makeStyles(() => ({
    trackerIncome: {
        borderBottom: "1px solid rgb(57,255,20)",
        height: 280,
        width: 410,
        marginLeft: 10,
        paddingBottom: 20,
        color: 'green',
        marginTop: 10,
        marginBottom: 10
  
        
    },	

    incomefont : {

        color: 'green',
        margin: 10,


        
    },	
    expensefont : {

        color: 'red',

        margin: 10,

        
    },	





 
    trackerExpense : {
        borderBottom: "1px solid rgba(255,0, 0)",
        color: 'red',
        height: 270,
        width: 410,
        marginLeft: 10,
        marginBottom: 10,
        paddingBottom: 20,

        

    },




}))