import { Container, Grid } from '@mui/material'
import * as React from 'react'
import { Fade } from 'react-reveal';
import { ContentSlider } from '../ContentSlider';
import { slidesOne, slidesTwo, slidesThree, slidesFour } from '../workSlides';

export const Work = (props) => {

    return (
        <div style={{minHeight: '100vh'}}>

            <Fade>
            <Container style={{paddingTop: '100px', paddingBottom: '40px'}}>

                <Grid container style={{justifyContent:'center'}}>
                    <Grid item xs={12} md={12}>
                        <h1 style={{textAlign: 'center', fontSize: '2.5em'}}>Web3 products and services from crypto-native contributors</h1>
                    </Grid>
                    <Grid item xs={12} md={7}>
                    <p style={{textAlign: 'center', fontSize: '1.2em'}}>BanklessDAO has multiple consulting, media, and development arms within its arsenal.
                        Commission BanklessDAO’s talent now:</p>
                    </Grid>

                </Grid>
            </Container>
            

            <Grid container>
                <Grid item xs={12} md={12} style={{textAlign: 'center'}}>
                    <img src={process.env.PUBLIC_URL + '/assets/media/wwus.webp'} alt="Work with Us" style={{maxWidth: '100%'}}/>
                </Grid>
            </Grid>
            </Fade>

            <Container>
                <Grid container>
                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <h1 style={{textAlign: 'center'}}>Consulting and Education</h1>
                        <p style={{textAlign: 'center'}}>Learn from Web3 experts</p>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <ContentSlider slides={slidesOne} />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <h1 style={{textAlign: 'center'}}>Software and DAO tooling</h1>
                        <p style={{textAlign: 'center'}}>Level-up your organization with cutting-edge tooling</p>
                    </Grid>
                    <Grid item xs={12} md={12} style={{paddingTop: '100px'}}>
                        <ContentSlider slides={slidesTwo} />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <h1 style={{textAlign: 'center'}}>Creative Services</h1>
                        <p style={{textAlign: 'center'}}>Tell your story and reach a new audience</p>
                    </Grid>
                    <Grid item xs={12} md={12} style={{paddingTop: '100px'}}>
                        <ContentSlider slides={slidesThree} />
                    </Grid>
                </Grid>

                <Grid container style={{paddingBottom: '150px'}}> 
                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <h1 style={{textAlign: 'center'}}>Sponsorships and Marketing</h1>
                        <p style={{textAlign: 'center'}}>Scale your presence in Web3</p>
                    </Grid>
                    <Grid item xs={12} md={12} style={{paddingTop: '100px'}}>
                        <ContentSlider slides={slidesFour} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

