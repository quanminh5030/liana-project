import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative', 
        marginBottom: 30,
        '&:hover': {
            opacity: 0.5
        }
    },

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