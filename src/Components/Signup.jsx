import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField, FormControl } from "@material-ui/core";
import { Link } from 'react-router-dom';


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

export default function OutlinedCard(props) {
    const classes = useStyles();
    const [formValue, changeFormValue] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
      const changeInpValue = (e, field) => {
        changeFormValue({ ...formValue, [field]: e.target.value });
      }
      const signup = e => {
          e.preventDefault();
          
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
                                <TextField className={classes.textInput} value={formValue.username}
                                required onChange={e => changeInpValue(e, 'username')}
                                    id="outlined-basic" label="username" variant="outlined" />
                                <TextField className={classes.textInput} value={formValue.email}
                                required onChange={e => changeInpValue(e, 'email')}
                                    id="outlined-basic" type="email" label="email" variant="outlined" />
                                <TextField className={classes.textInput} value={formValue.password}
                                required onChange={e => changeInpValue(e, 'password')}
                                    id="outlined-basic" type="password" label="password" variant="outlined" />
                                <TextField className={classes.textInput} value={formValue.confirmPassword}
                                required onChange={e => changeInpValue(e, 'confirmPassword')}
                                    id="outlined-basic" type="password" label="confirm password" variant="outlined" />
                            </FormControl>
                        </CardContent>
                        <CardActions>
                            <Button type="submit" variant="outlined" color="primary">
                                Login
                        </Button>
                            <Link to='/login' >Or Login</Link>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
}
