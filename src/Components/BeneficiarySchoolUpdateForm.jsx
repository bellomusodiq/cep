import React, { useState } from 'react';
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

const BeneficiaryForm = props => {
    const classes = useStyles();

    return (
        <form style={{ width: '100%' }} onSubmit={e => props.updateBeneficiaryLevel(e)}>
            <FormControl fullWidth className={classes.formControl}>
                <Grid >
                    {props.new?<FormControl required className={classes.formControl}>
                        <InputLabel id="demo-customized-select-label">School Level</InputLabel>
                        <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            value={props.formValue.level}
                            onChange={e => props.changeInpValue(e, 'level')}
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
                    </FormControl>:null}
                </Grid>
                <Grid justify="space-around" style={{ margin: '10px 0' }} container spacing={3} >
                    <div style={{ width: '45%' }} item md={6}>
                        <TextField className={classes.textInput} required value={props.formValue.institution}
                            onChange={e => props.changeInpValue(e, 'institution')}
                            id="outlined-basic" label="Institution Name" variant="outlined" />
                    </div>
                    <div style={{ width: '45%' }} item md={6}>
                        <TextField className={classes.textInput} required value={props.formValue.country}
                            onChange={e => props.changeInpValue(e, 'country')}
                            id="outlined-basic" label="Country" variant="outlined" />
                    </div>
                </Grid>
            </FormControl>
            <Grid>
                <Button style={{ margin: '0 20px' }} type="submit" variant="outlined">Submit</Button>
                {!props.noEdit ? <Button onClick={props.cancelEdit} variant="outlined">Cancel</Button> : null}
            </Grid>
        </form>
    )
}

export default BeneficiaryForm;