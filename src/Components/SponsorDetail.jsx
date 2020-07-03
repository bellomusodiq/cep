import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Divider, 
    Button, Card } from '@material-ui/core';
import Beneficiary from './Beneficiary';
import BeneficiaryForm from './BeneficiaryForm';


const Row = props => (
    <Grid container spacing={3} >
        <Grid item xs={3}><Typography style={{ color: '#000' }} variant="button">{props._key}</Typography></Grid>
        <Grid item xs={9}><Typography>{props.value}</Typography></Grid>
    </Grid>
)

const SponsorDetail = props => {

    const [sponsorDetail, updateSponsorDetail] = useState({
        name: 'Mayowa Bello',
        nationality: 'Nigerian',
        dob: '1960-01-01',
        gender: 'Male',
        address: '1, Elaloro street, Itire, Surulere, Lagos',
        occupation: 'Software Engineer',
        maritalStatus: 'Single',
        maidenName: null,
        mobileNumber: '08123258600',
        email: 'bmayowa25@gmail.com'
    })

    const [formValue, updateFormValue] = useState({
        institution: '',
        country: ''
    })

    const [level, changeLevel] = useState(null)

    const [toggleAddBeneficiary, changeAddBeneficiary] = useState(false);

    const updateBeneficiary = (e, level, method) => {
        e.preventDefault();
        if (method === 'post') {
            // create Beneficiary
        } else {
            // update Beneficiary
        }
        console.log(level)
    }

    const editBeneficiary = (level) => {
        changeLevel(level)
    }

    return (
        <Container>
            <Row _key='Full Names' value={sponsorDetail.name} />
            <Row _key='Nationality' value={sponsorDetail.nationality} />
            <Row _key='Date of Birth' value={sponsorDetail.dob} />
            <Row _key='Gender' value={sponsorDetail.gender} />
            <Row _key='Address' value={sponsorDetail.address} />
            <Row _key='Occupation/Profession' value={sponsorDetail.occupation} />
            <Row _key='Marital Status' value={sponsorDetail.maritalStatus} />
            <Row _key='Maiden Name' value={sponsorDetail.maidenName} />
            <Row _key='Mobile Number' value={sponsorDetail.mobileNumber} />
            <Row _key='Email' value={sponsorDetail.email} />
            <Divider style={{ margin: '10px 0' }} />
            <Typography variant="h5">Beneficiaries</Typography>
            <Beneficiary cancelEdit={() => changeLevel(null)}
                formValue changeInpValue={(e, field) => updateFormValue({ ...formValue, [field]: e.target.value })}
                updateBeneficiary={(e, level) => updateBeneficiary(e, level, 'update')}
                editBeneficiary={(level) => editBeneficiary(level)} currentEditInstitution={level} />
            <Grid container justify="center" style={{margin: '10px 0'}} >
                <Button onClick={() => changeAddBeneficiary(!toggleAddBeneficiary)}
                variant="outlined">ADD NEW BENEFICIARY</Button>
            </Grid>
            {toggleAddBeneficiary?<Card style={{ padding: 10, margin: '10px 0' }} >
                <BeneficiaryForm noEdit
                    updateBeneficiary={(e) => updateBeneficiary(e, 'phd', 'post')}
                    formValue
                    changeInpValue={(e, field) => updateFormValue({ ...formValue, [field]: e.target.value })} />
            </Card>:null}
        </Container>
    )
}

export default SponsorDetail;