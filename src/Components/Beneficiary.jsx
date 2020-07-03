import React, { Fragment } from 'react';
import { Card, Typography, Divider, Grid, Button } from '@material-ui/core';
import BeneficiaryForm from './BeneficiaryForm';


const Row = props => (
    <Grid container spacing={3} >
        <Grid item xs={3}><Typography style={{ color: '#000' }} variant="button">{props._key}</Typography></Grid>
        <Grid item xs={9}><Typography>{props.value}</Typography></Grid>
    </Grid>
)


const Beneficiary = props => (
    <Card style={{ margin: '10px 0', padding: 10 }} >
        <Typography variant="h6">Mayowa Bello</Typography>
        <Row _key='Gender' value='Male' />
        <Row _key='Age' value='11' />
        <Row _key='Current Class' value='Primary 5' />
        <Divider style={{ margin: '10px 0' }} />
        {/*  */}
        <Typography variant="body1">PRIMARY SCHOOL</Typography>
        {props.currentEditInstitution === 'primary' ?
            <Fragment>
                <BeneficiaryForm cancelEdit={props.cancelEdit} 
                updateBeneficiary={(e) => props.updateBeneficiary(e, 'primary')}
                 formValue changeInpValue={(e, field) => props.changeInpValue(e, field)} />
            </Fragment>
            :
            <Fragment >
                <Row _key='Institution Name' value='ST. Anthony Elementary School'
                />
                <Row _key='Country' value='Nigeria' />
                <Button variant="outlined" onClick={() => props.editBeneficiary('primary')} style={{ margin: '10px 0' }} >EDIT</Button>
            </Fragment>}
        <Divider style={{ margin: '10px 0' }} />
        {/*  */}
        {/*  */}
        <Typography variant="body1">SECONDARY SCHOOL</Typography>
        {props.currentEditInstitution === 'secondary' ?
            <Fragment>
                <BeneficiaryForm cancelEdit={props.cancelEdit} 
                updateBeneficiary={(e) => props.updateBeneficiary(e, 'secondary')}
                 formValue changeInpValue={(e, field) => props.changeInpValue(e, field)} />
            </Fragment>
            :
            <Fragment >
                <Row _key='Institution Name' value='ST. Anthony Elementary School'
                />
                <Row _key='Country' value='Nigeria' />
                <Button variant="outlined" onClick={() => props.editBeneficiary('secondary')} style={{ margin: '10px 0' }} >EDIT</Button>
            </Fragment>}
        <Divider style={{ margin: '10px 0' }} />
        {/*  */}
        {/*  */}
        <Typography variant="body1">UNDERGRAD</Typography>
        {props.currentEditInstitution === 'undergrad' ?
            <Fragment>
                <BeneficiaryForm cancelEdit={props.cancelEdit} 
                updateBeneficiary={(e) => props.updateBeneficiary(e, 'undergrad')}
                 formValue changeInpValue={(e, field) => props.changeInpValue(e, field)} />
            </Fragment>
            :
            <Fragment >
                <Row _key='Institution Name' value='ST. Anthony Elementary School'
                />
                <Row _key='Country' value='Nigeria' />
                <Button variant="outlined" onClick={() => props.editBeneficiary('undergrad')} style={{ margin: '10px 0' }} >EDIT</Button>
            </Fragment>}
        <Divider style={{ margin: '10px 0' }} />
        {/*  */}
        {/*  */}
        <Typography variant="body1">POSTGRAD</Typography>
        {props.currentEditInstitution === 'postgrad' ?
            <Fragment>
                <BeneficiaryForm cancelEdit={props.cancelEdit} 
                updateBeneficiary={(e) => props.updateBeneficiary(e, 'postgrad')}
                 formValue changeInpValue={(e, field) => props.changeInpValue(e, field)} />
            </Fragment>
            :
            <Fragment >
                <Row _key='Institution Name' value='ST. Anthony Elementary School'
                />
                <Row _key='Country' value='Nigeria' />
                <Button variant="outlined" onClick={() => props.editBeneficiary('postgrad')} style={{ margin: '10px 0' }} >EDIT</Button>
            </Fragment>}
        <Divider style={{ margin: '10px 0' }} />
        {/*  */}
        {/*  */}
        <Typography variant="body1">PHD</Typography>
        {props.currentEditInstitution === 'phd' ?
            <Fragment>
                <BeneficiaryForm cancelEdit={props.cancelEdit} 
                updateBeneficiary={(e) => props.updateBeneficiary(e, 'phd')}
                 formValue changeInpValue={(e, field) => props.changeInpValue(e, field)} />
            </Fragment>
            :
            <Fragment >
                <Row _key='Institution Name' value='ST. Anthony Elementary School'
                />
                <Row _key='Country' value='Nigeria' />
                <Button variant="outlined" onClick={() => props.editBeneficiary('phd')} style={{ margin: '10px 0' }} >EDIT</Button>
            </Fragment>}
        <Divider style={{ margin: '10px 0' }} />
        {/*  */}
    </Card>
)


export default Beneficiary;