import React, { Fragment } from 'react';
import { Card, Typography, Divider, Grid, Button } from '@material-ui/core';
import BeneficiarySchoolUpdateForm from './BeneficiarySchoolUpdateForm';
import BeneficiaryForm from './BeneficiaryForm';


const Row = props => (
    <Grid container spacing={3} >
        <Grid item xs={3}><Typography style={{ color: '#000' }} variant="button">{props._key}</Typography></Grid>
        <Grid item xs={9}><Typography>{props.value}</Typography></Grid>
    </Grid>
)


const Beneficiary = props => {
    let primaryContext = null;
    let secondaryContext = null;
    let undergradContext = null;
    let postgradContext = null;
    let phdContext = null;
    let levelCount = 0;
    if (props.beneficiary.primarySchool) {
        levelCount++;
        primaryContext = (
            <Fragment>
                <Typography variant="body1">PRIMARY SCHOOL</Typography>
                {
                    props.currentEditInstitution === 'primary' ?
                        <Fragment>
                            <BeneficiarySchoolUpdateForm cancelEdit={props.cancelEdit}
                                updateBeneficiaryLevel={(e) => props.updateBeneficiaryLevel(e, 'primary')}
                                formValue={props.formValue} changeInpValue={(e, field) => props.changeInpValue(e, field)} />
                        </Fragment>
                        :
                        <Fragment >
                            <Row _key='Institution Name' value={props.beneficiary.primarySchool.institutionName}
                            />
                            <Row _key='Country' value={props.beneficiary.primarySchool.country} />
                            <Button variant="outlined" onClick={() => props.editBeneficiaryLevel('primary')} style={{ margin: '10px 0' }} >EDIT</Button>
                        </Fragment>
                }
                < Divider style={{ margin: '10px 0' }
                } />
            </Fragment>
        )
    }
    if (props.beneficiary.secondarySchool) {
        levelCount++;
        secondaryContext = (
            <Fragment>
                <Typography variant="body1">SECONDARY SCHOOL</Typography>
                {props.currentEditInstitution === 'secondary' ?
                    <Fragment>
                        <BeneficiarySchoolUpdateForm cancelEdit={props.cancelEdit}
                            updateBeneficiaryLevel={(e) => props.updateBeneficiaryLevel(e, 'secondary')}
                            formValue={props.formValue} changeInpValue={(e, field) => props.changeInpValue(e, field)} />
                    </Fragment>
                    :
                    <Fragment >
                        <Row _key='Institution Name' value={props.beneficiary.secondarySchool.institutionName}
                        />
                        <Row _key='Country' value={props.beneficiary.secondarySchool.country} />
                        <Button variant="outlined" onClick={() => props.editBeneficiaryLevel('secondary')} style={{ margin: '10px 0' }} >EDIT</Button>
                    </Fragment>}
                <Divider style={{ margin: '10px 0' }} />
            </Fragment>
        )
    }
    if (props.beneficiary.underGraduate) {
        levelCount++;
        undergradContext = (
            <Fragment>
                <Typography variant="body1">UNDERGRAD</Typography>
                {props.currentEditInstitution === 'undergrad' ?
                    <Fragment>
                        <BeneficiarySchoolUpdateForm cancelEdit={props.cancelEdit}
                            updateBeneficiaryLevel={(e) => props.updateBeneficiaryLevel(e, 'undergrad')}
                            formValue={props.formValue} changeInpValue={(e, field) => props.changeInpValue(e, field)} />
                    </Fragment>
                    :
                    <Fragment >
                        <Row _key='Institution Name' value={props.beneficiary.underGraduate.institutionName}
                        />
                        <Row _key='Country' value={props.beneficiary.underGraduate.country} />
                        <Button variant="outlined" onClick={() => props.editBeneficiaryLevel('undergrad')} style={{ margin: '10px 0' }} >EDIT</Button>
                    </Fragment>}
                <Divider style={{ margin: '10px 0' }} />
            </Fragment>
        )
    }
    if (props.beneficiary.postGraduate) {
        levelCount++;
        postgradContext = (
            <Fragment>
                <Typography variant="body1">POSTGRAD</Typography>
                {props.currentEditInstitution === 'postgrad' ?
                    <Fragment>
                        <BeneficiarySchoolUpdateForm cancelEdit={props.cancelEdit}
                            updateBeneficiaryLevel={(e) => props.updateBeneficiaryLevel(e, 'postgrad')}
                            formValue={props.formValue} changeInpValue={(e, field) => props.changeInpValue(e, field)} />
                    </Fragment>
                    :
                    <Fragment >
                        <Row _key='Institution Name' value={props.beneficiary.postGraduate.institutionName}
                        />
                        <Row _key='Country' value={props.beneficiary.postGraduate.country} />
                        <Button variant="outlined" onClick={() => props.editBeneficiaryLevel('postgrad')} style={{ margin: '10px 0' }} >EDIT</Button>
                    </Fragment>}
                <Divider style={{ margin: '10px 0' }} />
            </Fragment>
        )
    }
    if (props.beneficiary.phD) {
        levelCount++;
        phdContext = (
            <Fragment>
                <Typography variant="body1">PHD</Typography>
                {props.currentEditInstitution === 'phd' ?
                    <Fragment>
                        <BeneficiarySchoolUpdateForm cancelEdit={props.cancelEdit}
                            updateBeneficiaryLevel={(e) => props.updateBeneficiaryLevel(e, 'phd')}
                            formValue={props.formValue} changeInpValue={(e, field) => props.changeInpValue(e, field)} />
                    </Fragment>
                    :
                    <Fragment >
                        <Row _key='Institution Name' value={props.beneficiary.phD.institutionName}
                        />
                        <Row _key='Country' value={props.beneficiary.phD.country} />
                        <Button variant="outlined" onClick={() => props.editBeneficiaryLevel('phd')} style={{ margin: '10px 0' }} >EDIT</Button>
                    </Fragment>}
            </Fragment>
        )
    }

    return (
        <Card style={{ margin: '10px 0', padding: 10 }} >
            <Typography variant="h6">{props.beneficiary.name}</Typography>
            <Row _key='Gender' value={props.beneficiary.gender} />
            <Row _key='Age' value={props.beneficiary.age} />
            <Row _key='Current Class' value={props.beneficiary.currentLevel} />

            <Divider style={{ margin: '10px 0' }} />
            <Grid >
                <Button variant="outlined"
                    onClick={() => props.changeUpdateBeneficiary(!props.toggleUpdateBeneficiary)} >
                    {props.toggleUpdateBeneficiary ? 'Cancel' : 'Update Beneficiary'}
                </Button>
            </Grid>
            {props.toggleUpdateBeneficiary ? <BeneficiaryForm
                formValue={props.beneficiaryFormValue}
                changeInpValue={(e, field) => props.updateBeneficiaryFormValue(e, field)} /> : null}
            <Divider style={{ margin: '10px 0' }} />
            {/*  */}
            {primaryContext}
            {/*  */}
            {secondaryContext}
            {/*  */}
            {undergradContext}
            {/*  */}
            {postgradContext}
            {/*  */}
            {phdContext}
            {/*  */}
            <Grid container justify="center" style={{ margin: '10px 0' }} >
                {levelCount!==5?<Button onClick={() => props.changeAddBeneficiary(!props.toggleAddBeneficiary)}
                    variant="outlined">ADD NEW LEVEL</Button>:null}
            </Grid>
            {props.toggleAddBeneficiary ? <Card style={{ padding: 10, margin: '10px 0' }} >
                <BeneficiarySchoolUpdateForm noEdit new
                    updateBeneficiaryLevel={(e) => props.updateBeneficiaryLevel(e, props.formValue.level, 'post')}
                    formValue={props.formValue}
                    changeInpValue={(e, field) => props.changeInpValue(e, field)} />
            </Card> : null}
        </Card>
    )
}


export default Beneficiary;