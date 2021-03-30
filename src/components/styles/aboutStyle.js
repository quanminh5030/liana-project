import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        width: '90%',
        height: 296,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        '&:hover': {
            opacity: 0.7,
        }
    },

    title: {
        color: 'white',
        fontFamily: 'Open Sans',
        padding:  '7rem'
    }

}))

export default useStyles;