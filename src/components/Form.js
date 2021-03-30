import { makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const CustomForm = ({ status, message, onValidated }) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    let isError = false;

    const sendSub = email => {
        setEmail('');
        if (email.length === 0) {
            window.alert('Please type your email address');
        } else {
            return email.indexOf("@") > -1 &&
                onValidated({
                    EMAIL: email,
                });
        }
    }

    return (
        <>
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && (
                <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    style={{ color: "green" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {(!email.includes('@') && email.length > 0) ? isError = true : isError}

            <TextField
                error={isError}
                value={email}
                variant='outlined'
                style={{ width: '70%', }}
                onChange={text => setEmail(text.target.value)}
                type="email"
                placeholder="Your email address"
                InputProps={{
                    classes: { input: classes.input }
                }}
            />
            <Button
                onClick={() => sendSub(email)}
                size='md'
                variant='primary'
                color='primary'
                className={classes.btn}
            >
                Subscribe
            </Button>
        </>
    );
};

const useStyles = makeStyles(theme => ({
    btn: {
        backgroundColor: '#4c8930',
        margin: '1%',
        height: 50,
        fontFamily: 'Open Sans',
        borderRadius: 5
    },
}))


export default CustomForm;