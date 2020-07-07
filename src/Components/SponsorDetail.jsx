import React, { useState, useEffect } from 'react';
import {
    Container, Typography, Grid, Divider,
    Button, Card, CircularProgress
} from '@material-ui/core';
import Beneficiary from './Beneficiary';
import BeneficiaryForm from './BeneficiaryForm';
import { withRouter } from 'react-router-dom';

import { BASE_URL } from '../CONFIG';
import axios from 'axios';


const Row = props => (
    <Grid container spacing={3} >
        <Grid item xs={3}><Typography style={{ color: '#000' }} variant="button">{props._key}</Typography></Grid>
        <Grid item xs={9}><Typography>{props.value}</Typography></Grid>
    </Grid>
)

const SponsorDetail = props => {

    const [loadingSponsor, updateLoadingSponsor] = useState(false);

    const [sponsorDetail, updateSponsorDetail] = useState(null);

    const [sponsorError, updateSponsorError] = useState(false);

    const [beneficiaries, updateBeneficiaries] = useState([]);

    const [formValue, updateFormValue] = useState({
        institution: '',
        country: '',
        level: ''
    })

    const [beneficiaryFormValue, updateBeneficiaryFormValue] = useState({
        name: '',
        gender: '',
        age: '',
        currentClass: ''
    })

    const [level, changeLevel] = useState(null)

    // update this on detail fetch
    // use it to track levels select in BeneficiarySchoolUpdateForm
    const [levels, changeLevels] = useState([
        { primary: 'PRIMARY SCHOOL' },
        { secondary: 'SECONDARY SCHOOL' },
        { undergrad: 'UNDERGRAD SCHOOL' },
        { postgrad: 'POSTGRAD' },
        { PHD: 'PHD' },
        { primary: 'PRIMARY SCHOOL' },
    ])

    const [toggleAddBeneficiary, changeAddBeneficiary] = useState(false);
    const [toggleUpdateBeneficiary, changeUpdateBeneficiary] = useState(false);

    const [toggleBene, toggleAddBene] = useState(false);

    const updateBeneficiaryLevel = (e, level, method) => {
        e.preventDefault();
        if (method === 'post') {
            // create Beneficiary
        } else {
            // update Beneficiary
        }
        console.log(level)
    }

    const editBeneficiaryLevel = (level) => {
        changeLevel(level)
        updateFormValue({ ...formValue, level: level })
    }

    const fetchSponsor = () => {
        const sponsorId = props.location.pathname.split('/')[2];
        updateLoadingSponsor(true);
        const url = BASE_URL + '/sponsors/' + sponsorId;
        axios.get(url)
            .then(res => {
                updateLoadingSponsor(false);
                updateSponsorDetail({
                    name: res.data.sponsor.name,
                    nationality: res.data.sponsor.nationality,
                    dob: res.data.sponsor.dob,
                    gender: res.data.sponsor.gender,
                    address: res.data.sponsor.address,
                    occupation: res.data.sponsor.occupation,
                    maritalStatus: res.data.sponsor.maritalStatus,
                    maidenName: res.data.sponsor.maidenName,
                    mobileNumber: res.data.sponsor.mobileNumber,
                    email: res.data.sponsor.email
                })
                updateBeneficiaries(res.data.sponsor.beneficiaries);
            })
            .catch(err => {
                updateLoadingSponsor(false);
                updateSponsorError(true);
            })
    }

    useEffect(() => {
        fetchSponsor();
    }, [])

    let context = null;

    if (loadingSponsor) {
        context = <Grid container justify="center"><CircularProgress size={55} color="secondary" /></Grid>
    }

    let beneficiariesContext;
    console.log(beneficiaries)
    if (beneficiaries && beneficiaries.length > 0) {
        beneficiariesContext = (
            beneficiaries.map(beneficiary => (
                <Beneficiary cancelEdit={() => changeLevel(null)}
                    formValue={formValue} changeInpValue={(e, field) => updateFormValue({ ...formValue, [field]: e.target.value })}
                    updateBeneficiaryLevel={(e, level) => updateBeneficiaryLevel(e, level, 'update')}
                    editBeneficiaryLevel={(level) => editBeneficiaryLevel(level)} currentEditInstitution={level}
                    toggleAddBeneficiary={toggleAddBeneficiary} changeAddBeneficiary={val => changeAddBeneficiary(val)}
                    beneficiaryFormValue={beneficiaryFormValue}
                    updateBeneficiaryFormValue={(e, field) => updateBeneficiaryFormValue({ ...beneficiaryFormValue, [field]: e.target.value })}
                    changeUpdateBeneficiary={val => changeUpdateBeneficiary(val)}
                    toggleUpdateBeneficiary={toggleUpdateBeneficiary}
                    beneficiary={beneficiary} />
            ))
        )
    }

    if (sponsorDetail) {
        context = (
            <Container style={{ paddingBottom: 20 }} >
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

                <Divider style={{ margin: '10px 0' }} />
                <Typography variant="h5">Beneficiaries</Typography>
                {beneficiariesContext}
                <Grid container justify="center" >
                    <Button onClick={() => toggleAddBene(!toggleBene)}
                        variant="outlined">{!toggleBene ? 'Add New Beneficiary' : 'Cancel'}</Button>
                </Grid>
                {toggleBene ? <BeneficiaryForm
                    formValue={beneficiaryFormValue}
                    updateBeneficiaryFormValue={(e, field) => props.updateBeneficiaryFormValue(e, field)} /> : null}
            </Container>
        )
    }

    if (sponsorError) {
        context = (
            <Typography variant="h2" align="center">404 Sponsor Not Found</Typography>
        )
    }

    return context;
}

export default withRouter(SponsorDetail);