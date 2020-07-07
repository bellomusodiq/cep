import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField, FormControl } from "@material-ui/core";
import { Link, withRouter } from 'react-router-dom';

import axios from 'axios';

import { BASE_URL } from '../CONFIG';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 20,
        marginTop: 40
    },
    pos: {
        marginBottom: 12,
    },
    textInput: {
        width: '100%',
        margin: '5px 0'
    },
    formControl: {
        width: '100%'
    }
});

function OutlinedCard(props) {
    const classes = useStyles();
    const [formValue, changeFormValue] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [formErrors, changeFormErrors] = useState({
        name: null,
        email: null,
        password: null
    })
    const changeInpValue = (e, field) => {
        changeFormValue({ ...formValue, [field]: e.target.value });
    }
    const signup = e => {
        e.preventDefault();
        changeFormErrors({
            name: null,
            email: null,
            password: null
        })
        const { password } = formValue;
        const { confirmPassword, ...data } = formValue;
        if (password.trim() !== confirmPassword.trim()) {
            changeFormErrors({...formErrors, password: 'Password do no match!'})
            return
        }
        axios.post(BASE_URL + '/auth/signup/', data)
            .then(res => {
                props.history.push('/login')
            })
            .catch(err => {
                const errors = err.response.data.data;
                let newFormErrors = {...formErrors};
                for (let error of errors) {
                    newFormErrors[error.param] = error.msg;
                }
                changeFormErrors(newFormErrors);
            })
    }
    return (
        <Grid container justify='center' mt={10} >
            <Grid item lg={4} md={5} sm={10} >

                <Card className={classes.root} raised >
                    <form onSubmit={e => signup(e)}>
                        <CardContent>
                            <Typography variant="h4" className={classes.title} >
                                Signup
                        </Typography>
                            <FormControl className={classes.formControl} >
                                <TextField className={classes.textInput} value={formValue.name}
                                    error={formErrors.name?true:false} helperText={formErrors.name}
                                    required onChange={e => changeInpValue(e, 'name')}
                                    id="outlined-basic" label="name" variant="outlined" />
                                <TextField className={classes.textInput} value={formValue.email}
                                    error={formErrors.email?true:false} helperText={formErrors.email}
                                    required onChange={e => changeInpValue(e, 'email')}
                                    id="outlined-basic" type="email" label="email" variant="outlined" />
                                <TextField className={classes.textInput} value={formValue.password}
                                    required onChange={e => changeInpValue(e, 'password')}
                                    id="outlined-basic" type="password" label="password" variant="outlined" />
                                <TextField className={classes.textInput} value={formValue.confirmPassword}
                                    error={formErrors.password?true:false} helperText={formErrors.password}
                                    required onChange={e => changeInpValue(e, 'confirmPassword')}
                                    id="outlined-basic" type="password" label="confirm password" variant="outlined" />
                            </FormControl>
                        </CardContent>
                        <CardActions>
                            <Button type="submit" variant="outlined" color="primary">
                                Signup
                        </Button>
                            <Link to='/login' >Or Login</Link>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
}

export default withRouter(OutlinedCard);
