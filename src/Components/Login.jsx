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
        email: '',
        password: '',
    })
    const [formErrors, changeFormErrors] = useState(null)
    const changeInpValue = (e, field) => {
        changeFormValue({ ...formValue, [field]: e.target.value });
    }
    const login = e => {
        e.preventDefault();
        const data = formValue;
        axios.post(BASE_URL + '/auth/login/', data)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                props.history.replace('/')
            })
            .catch(err => {
                changeFormErrors(err.response.data.message);
            })
    }
    return (
        <Grid container justify='center' mt={10} >
            <Grid item lg={4} md={5} sm={10} >

                <Card className={classes.root} raised >
                    <form onSubmit={e => login(e)}>
                        <CardContent>
                            <Typography variant="h4" className={classes.title} >
                                Login
                        </Typography>
                            {formErrors?<Typography style={{ color: 'tomato' }}>{formErrors}</Typography>:null}
                            <br />
                            <FormControl className={classes.formControl} >
                                <TextField className={classes.textInput} required value={formValue.email}
                                    onChange={e => changeInpValue(e, 'email')}
                                    type="email"
                                    label="email" variant="outlined" />
                                <TextField className={classes.textInput} required value={formValue.password}
                                    onChange={e => changeInpValue(e, 'password')}
                                    type="password" label="password" variant="outlined" />
                            </FormControl>
                        </CardContent>
                        <CardActions>
                            <Button type="submit" variant="outlined" color="primary">
                                Login
                        </Button>
                            <Link to='/signup' >Or Signup</Link>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
}

export default withRouter(OutlinedCard);
