import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#eceeef',
    },

    title: {
        fontWeight: 'bold',
        fontFamily: 'Open Sans',
        marginTop: 80,
        marginBottom: 100,
        color: 'rgb(55, 58, 60)',
    },

    newBox: {
        backgroundColor: 'white',
        padding: 30,
        marginTop: 20,
        width: '90%',
        margin: 'auto',
    },

    date: {
        fontFamily: 'Open Sans',
        fontSize: '1.25rem'
    },

    desc: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'rgb(55, 58, 60)',
        fontFamily: 'Open Sans',
        marginTop: 30,
    }
}))

export default useStyles;