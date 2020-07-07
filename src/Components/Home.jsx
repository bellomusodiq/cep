import React, { useState, useEffect } from 'react';
import {
    Grid, makeStyles, Typography, Card, Divider, Button,
    CircularProgress
} from '@material-ui/core';
import Table from './Table';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../CONFIG';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 10
    }
}))


const Home = (props) => {
    const classes = useStyles();

    const [userProfile, changeUserProfile] = useState({
        username: 'user',
        email: ''
    })

    const [loadingSponsors, changeLoadingSponsors] = useState(false);

    const [sponsors, changeSponsors] = useState(null);

    const [sponsorsError, changeSponsorError] = useState(false);

    const navigateToCreateSponsor = () => {
        props.history.push('/create-sponsor')
    }

    const fetchSponsors = (params = null) => {
        changeLoadingSponsors(true);
        let url = BASE_URL + '/sponsors';
        axios.get(url)
            .then(res => {
                changeSponsors(res.data.sponsor);
                changeLoadingSponsors(false);
                changeSponsorError(false);
            })
            .catch(err => {
                changeLoadingSponsors(false);
                changeSponsorError(true);
            })
    }

    useEffect(() => {
        fetchSponsors();
    }, [])

    let context = null;

    if (loadingSponsors) {
        context = <Grid container justify="center"><CircularProgress size={55} color="secondary" /></Grid>
    }
    if (sponsors) {
        context = (
            <Grid item container spacing={3} >
                <Grid item md={3} xs={12} >
                    <Card className={classes.container} >
                        <Typography variant="h5">Welcome {userProfile.username}</Typography>
                        <Divider />
                        <Typography style={{ margin: '10px 0' }}>Create a new Sponsor</Typography>
                        <Button style={{ margin: '10px 0' }} color="primary"
                            onClick={navigateToCreateSponsor} variant="outlined" >create sponsor</Button>
                    </Card>
                </Grid>
                <Grid item md={9} xs={12} >
                    <Typography style={{ margin: '20px 0' }} variant="h3">SPONSORS</Typography>
                    <Table data={sponsors} />
                </Grid>
            </Grid>
        )
    }
    return (
        <Grid container className={classes.container} >
            {context}
        </Grid>
    )
}


export default withRouter(Home);