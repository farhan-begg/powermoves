import { makeStyles } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { flexbox } from '@material-ui/system'

export default makeStyles(() => ({
    income : {
        borderBottom: "1px solid rgb(57,255,20)",
        height: 300,
        width: 200,
        marginLeft: 10,
        color: 'green',
        paddingBottom: 20
        
    },	

    incomefont : {

        color: 'green',
        marginLeft: 20,

        
    },	
    expensefont : {

        color: 'red',
        marginLeft: 20,

        
    },	


 
    expense : {
        borderBottom: "1px solid rgba(255,0, 0)",
        color: 'red',
        height: 300,
        width: 200,
        marginLeft: 10,
        paddingBottom: 20
        

    },




}))