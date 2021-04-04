import { makeStyles } from "@material-ui/core";
import styled from 'styled-components';

export const useStyles = makeStyles(theme => ({
    infoContainer: {
        position: 'absolute',
        display: 'flex',
        top: 0,
        height: '100%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: 'white',
        fontFamily: 'Open Sans',
        fontWeight: '100',
        textAlign: 'center'
    },

    btn: {
        backgroundColor: '#4c8930',
        fontFamily: 'Open Sans',
        padding: 15,
        borderRadius: 5,
    },

    textContainer: {
        height: '50%'
    },

    btnContainer: {
        height: '40%',
        marginTop: 10
    },
}))

export const Button = styled.div`
color: white;
font-family: 'Open Sans';

&:hover {
  background: #007bff;
}

@media (max-width: 1000px) {
    padding: 12px;
    font-size: 10px
};

@media (max-width: 700px) {
    padding: 8px;
    font-size: 8px
}
`;

export const Text = styled.div`
font-size: 80px;
@media (max-width: 1300px) {
    font-size: 60px;
};

@media (max-width: 1000px) {
    font-size: 40px
};

@media (max-width: 700px) {
    font-size: 30px
};

@media (max-width: 500px) {
    font-size: 20px
};
`;
