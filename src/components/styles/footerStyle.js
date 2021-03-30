import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: 'black',
        fontFamily: 'Open Sans',
        marginTop: 80,
        color: 'white',
    },

    title: {
        marginBottom: '3rem'
    },

    link: {
        margin: 10,
        color: 'white',
    },

    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(),
        },
        justifyContent: 'flex-end'
    },

    icon: {
        backgroundColor: '#4c8930',
        '&:hover': {
            backgroundColor: '#007bff'
        }
    }

}))

export default useStyles;