import { makeStyles } from "@material-ui/core";
import BgImageBody from '../../images/background.jpg';

const useStyles = makeStyles(theme => ({
    container: {
        height: 933,
        backgroundSize: 'cover',
        background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${BgImageBody})`
    },

    title: {
        color: 'white',
        fontFamily: 'Open Sans'
    },

    btn: {
        backgroundColor: '#4c8930',
        fontFamily: 'Open Sans',
        padding: 15,
        borderRadius: 5
    },

    textContainer: {
        height: '50%'
    },

    btnContainer: {
        height: '40%',
        marginTop: 30
    },
}))

export default useStyles;