import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    title: {
        fontWeight: 'bold',
        fontFamily: 'Open Sans',
        marginTop: 80,
        marginBottom: 100,
        color: 'rgb(55, 58, 60)',
    },

    refContainer: {
        marginBottom: 200, 
        width: '60%', 
    },

    refBox: {
        width: '90%',
        margin: 'auto',
        backgroundColor: 'white',
        padding: 30,    
        border: '1px solid rgb(221, 221, 221)',
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5 
    },

    logo: {
        width: theme.spacing(100),
        margin: 'auto'
    },

    subTitle: {
        color: 'rgb(55, 58, 60)',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '5%'
    }
}))

export default useStyles;