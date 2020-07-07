import React from 'react';
import {
    FormControl, Grid, TextField, Button,
    InputLabel, Select, MenuItem, makeStyles
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
        <form sytle={{ width: '100%' }} onSubmit={e => props.saveBeneficiary(e)}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }} >
                <div style={{ width: '45%' }}>
                    <FormControl style={{ width: '100%' }} className={classes.formControl} >
                        <TextField className={classes.textInput} required value={props.formValue.name}
                            onChange={e => props.changeInpValue(e, 'name')}
                            id="outlined-basic" label="Full Names" variant="outlined" />
                    </FormControl>
                </div>
                <div style={{ width: '45%' }}>
                    <TextField className={classes.textInput} required value={props.formValue.currentClass}
                        onChange={e => props.changeInpValue(e, 'currentClass')}
                        id="outlined-basic" label="Current Class" variant="outlined" />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }} >
                <div style={{ width: '45%' }} >
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={props.formValue.gender}
                        onChange={e => props.changeInpValue(e, 'gender')}
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
                </div>
                <div style={{ width: '45%', }}>
                    <TextField className={classes.textInput} required value={props.formValue.age}
                        onChange={e => props.changeInpValue(e, 'age')}
                        id="outlined-basic" type="number" label="Current Class" variant="outlined" />
                </div>
            </div>
            <Button style={{ marginTop: 20 }}
                type="submit" variant="outlined" color="primary">SUBMIT</Button>
        </form>
    )
}

export default BeneficiaryForm;