import { Grid, Container } from '@mui/material'
import * as React from 'react'


export const Footer = (props) => {


    return (
        <div>
            <Container>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <img src={process.env.PUBLIC_URL + '/assets/media/bankless.png'} alt="Bankless" style={{maxHeight: '75px'}} />
                    <p style={{maxWidth: '300px', lineHeight: '1.5em', textAlign: 'justify'}}>
                        A decentralized autonomus organization that acts as a steward of the Bankless Movement progressing the world towards a future
                        of greater freedom.
                    </p>
                    <div>

                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
                        <div>Join Olympus Pro</div>
                        <div>BANK</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
                        <div>Wiki</div>
                        <div>Privacy</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
                        <div>Forum</div>
                        <div>Github</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
                        <div>Vote</div>
                        <div>TwitchTV</div>
                    </div>
                </Grid>
            </Grid>
            </Container>
            <Container>
            <div style={{padding: '20px', color: '#999', paddingTop:'50px'}}>GoBankless &copy; 2022. All Rights Reserved.</div>
            </Container>
        </div>
    )
}