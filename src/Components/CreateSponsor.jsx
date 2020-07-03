import React, { useState, useEffect } from 'react';
import {
    Container, Typography, Divider, FormControl, makeStyles,
    TextField, Grid, MenuItem, InputLabel, Select, Button
} from '@material-ui/core';


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
        margin: '10px 0'
    },
    formControl: {
        width: '100%'
    }
});

const CreateSponsor = props => {
    const classes = useStyles();

    const [formValue, changeFormValue] = useState({
        name: '',
        nationality: '',
        dob: '1960-01-01',
        gender: '',
        address: '',
        occupation: '',
        maritalStatus: '',
        maidenName: '',
        mobileNumber: '',
        email: ''
    })
    const changeInpValue = (e, field) => {
        changeFormValue({ ...formValue, [field]: e.target.value })
    }
    const createSponsor = e => {
        e.preventDefault();
    }
    return (
        <Container>
            <Typography variant="h2">Create Sponsor</Typography>
            <Divider />
            <form onSubmit={createSponsor}>
                <FormControl className={classes.formControl} >
                    <Grid container spacing={3} >
                        <Grid item md={6}>
                            <TextField className={classes.textInput} required value={formValue.name}
                                onChange={e => changeInpValue(e, 'name')}
                                id="outlined-basic" label="Full Names" variant="outlined" />
                        </Grid>
                        <Grid item md={6}>
                            <TextField className={classes.textInput} required value={formValue.nationality}
                                onChange={e => changeInpValue(e, 'nationality')}
                                id="outlined-basic" label="Nationality" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item md={6} >
                            <TextField className={classes.textInput} required value={formValue.dob}
                                onChange={e => changeInpValue(e, 'dob')}
                                id="outlined-basic" label="Date of Birth" type='date' variant="outlined" />
                        </Grid>
                        <Grid item md={6} >
                            <FormControl required className={classes.formControl}>
                                <InputLabel id="demo-customized-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={formValue.gender}
                                    onChange={e => changeInpValue(e, 'gender')}
                                    required
                                    variant="outlined"
                                    className={classes.textInput}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value='male'>Ten</MenuItem>
                                    <MenuItem value='female'>Twenty</MenuItem>
                                    <MenuItem value='others'>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} >
                        <Grid item md={6}>
                            <TextField className={classes.textInput} required value={formValue.address}
                                onChange={e => changeInpValue(e, 'address')}
                                id="outlined-basic" label="Address" variant="outlined" />
                        </Grid>
                        <Grid item md={6}>
                            <TextField className={classes.textInput} required value={formValue.occupation}
                                onChange={e => changeInpValue(e, 'occupation')}
                                id="outlined-basic" label="Occupation/Profession" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} >
                        <Grid item md={6}>
                            <FormControl required className={classes.formControl}>
                                <InputLabel id="demo-customized-select-label">Marital Status</InputLabel>
                                <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={formValue.maritalStatus}
                                    onChange={e => changeInpValue(e, 'maritalStatus')}
                                    required
                                    variant="outlined"
                                    className={classes.textInput}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value='male'>Ten</MenuItem>
                                    <MenuItem value='female'>Twenty</MenuItem>
                                    <MenuItem value='others'>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={6}>
                            <TextField className={classes.textInput} value={formValue.maidenName}
                                onChange={e => changeInpValue(e, 'maidenName')}
                                id="outlined-basic" label="Maiden Name" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} >
                        <Grid item md={6}>
                            <TextField className={classes.textInput} required value={formValue.mobileNumber}
                                onChange={e => changeInpValue(e, 'mobileNumber')}
                                id="outlined-basic" label="Mobile Number" variant="outlined" />
                        </Grid>
                        <Grid item md={6}>
                            <TextField className={classes.textInput} required value={formValue.email}
                                onChange={e => changeInpValue(e, 'email')}
                                id="outlined-basic" type="email" label="Email" variant="outlined" />
                        </Grid>
                    </Grid>
                </FormControl>
                <Button style={{marginTop: 20}}
                 type="submit" variant="outlined" color="primary">SUBMIT</Button>
            </form>
        </Container>
    )
}

export default CreateSponsor;