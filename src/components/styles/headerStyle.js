import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#4c8930',
    },

    dropdown: {
        backgroundColor: 'white',
        borderRadius: 5,
        fontFamily: 'Open Sans',
        marginRight: '10rem',
    },

    link: {
        fontFamily: 'Open Sans',
        color: 'white',
        marginRight: 30
    }
}))
 
export default useStyles;