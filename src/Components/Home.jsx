import React, { useState, useEffect } from 'react';
import { Grid, makeStyles, Typography, Card, Divider, Button } from '@material-ui/core';
import Table from './Table';
import { withRouter } from 'react-router-dom';

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

    const navigateToCreateSponsor = () => {
        props.history.push('/create-sponsor')
    }

    return (
        <Grid container className={classes.container} >
            <Grid item container spacing={3} >
                <Grid item md={3} xs={12} >
                    <Card className={classes.container} >
                        <Typography variant="h5">Welcome {userProfile.username}</Typography>
                        <Divider />
                        <Typography style={{margin: '10px 0'}}>Create a new Sponsor</Typography>
                        <Button style={{margin: '10px 0'}} color="primary"
                        onClick={navigateToCreateSponsor} variant="outlined" >create sponsor</Button>
                    </Card>
                </Grid>
                <Grid item md={9} xs={12} >
                    <Typography style={{margin: '20px 0'}} variant="h3">SPONSORS</Typography>
                    <Table />
                </Grid>
            </Grid>
        </Grid>
    )
}


export default withRouter(Home);