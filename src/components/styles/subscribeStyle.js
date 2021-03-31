import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    title: {
        fontWeight: 'bold',
        fontFamily: 'Open Sans',
        marginTop: 80,
        color: 'rgb(55, 58, 60)',
        textAlign: 'center'
    },

    info: {
        fontFamily: 'Open Sans',
        marginTop: 20,
        color: 'rgb(55, 58, 60)',
    },
}))

export default useStyles;