import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    textContainer: {
        position: 'absolute', 
        display: 'flex', 
        top: 0, 
        height: '100%', 
        width: '80%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    title: {
        color: 'white',
        fontFamily: 'Open Sans',
        textAlign: 'center',
    }

}))

export default useStyles;