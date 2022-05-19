import { Container, Grid, Box, MobileStepper, Button } from '@mui/material'
import * as React from 'react'
import { Fade } from 'react-reveal'
import { Circles } from '../Circles'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Arrow } from '../Utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
      label: 'Education',
      imgPath:
        process.env.PUBLIC_URL + '/assets/media/our-values-education.png',
    },
    {
      label: 'Culture',
      imgPath:
        process.env.PUBLIC_URL + '/assets/media/our-values-culture.png',
    },
    {
      label: 'Decentralized Governance',
      imgPath:
        process.env.PUBLIC_URL + '/assets/media/our-values-decentralized-governance.png',
    },
  ];

export const Stepper = (props) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };

    return (
        <Box>
    <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        
      >
        {images.map((step, index) => (
          <div key={step.label}>
            <h2 >{ step.label}</h2>
            {Math.abs(activeStep - index) <= 2 ? (
              <div style={{position: 'relative'}}>
              <Box
                component="img"
                sx={{
                  height: 250,
                  display: 'block',
                  overflow: 'hidden',
                  maxWidth: '500px',
                  marginLeft: 'auto', marginRight: 'auto',
                  width: '100%',
                  textAlign: 'center',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            style={{color: '#f00'}}
          >
            Next
              <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} style={{color: '#f00'}}>
              <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
      </Box>
    )
}


export const About = (props) => {

    return (
        <div style={{minHeight: '100vh', paddingBottom: '400px'}}>
            <Container>
                <Fade>
                <Grid container>
                    <Grid item xs={12} md={6} style={{minHeight: '350px'}}>
                        <img src={process.env.PUBLIC_URL + '/assets/media/instructor.webp'} alt="Instructor" style={{maxWidth: '100%'}} />
                    </Grid>
                    <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'}}>
                        <h1>WANT ALPHA?</h1>
                        <h2>Join BanklessDAO</h2>
                        <a href="https://twitter.com/RyanSAdams" target="_blank" rel="noreferrer" style={{color: '#FFF'}}>RSA <Arrow /></a>
                    </Grid>

                    <Grid item xs={12} md={12} style={{paddingTop: '30px'}}>
                        { /* Links to subpages */ }
                        <div style={{display: 'flex', flexWrap: 'wrap', textTransform: 'uppercase', justifyContent: 'center'}}>
                            <div style={{padding: '10px', paddingRight: '20px', paddingTop: '0px'}}>
                                <Link to="/governance" className='destyle'><h2>Governance</h2></Link>
                            </div>
                            <div style={{padding: '10px', paddingRight: '20px', paddingTop: '0px'}}>
                                <Link to="/guilds" className='destyle'><h2>Guilds</h2></Link>
                            </div>
                            <div style={{padding: '10px', paddingRight: '20px', paddingTop: '0px'}}>
                                <Link to="/projects" className='destyle'><h2>Projects</h2></Link>
                            </div>
                            <div style={{padding: '10px', paddingRight: '20px', paddingTop: '0px'}}>
                                <Link to="/coordination" className='destyle'><h2>Coordination</h2></Link>
                            </div>
                            <div style={{padding: '10px', paddingRight: '20px', paddingTop: '0px'}}>
                                <Link to="/community" className='destyle'><h2>Community Calls</h2></Link>
                            </div>
                            <div style={{padding: '10px', paddingRight: '20px', paddingTop: '0px'}}>
                                <Link to="/portal" className='destyle'><h2>Portal Nodes</h2></Link>
                            </div>
                            <div style={{padding: '10px', paddingRight: '20px', paddingTop: '0px'}}>
                                <Link to="/media" className='destyle'><h2>Media Kit</h2></Link>
                            </div>
                        </div>
                        <div className="elip"></div>
                    </Grid>
                </Grid>
                </Fade>

                <Grid container style={{paddingTop: '150px'}}>
                    <Grid item xs={12} md={8} style={{padding: '20px'}} order={{xs: 2, md: 1}}>
                        <h3 style={{textAlign: 'right'}}>Bankless is a movement for Web3 pioneers</h3>
                        <p style={{fontSize: '1.2em', lineHeight: '1.8em', color: '#ccc'}}>We seek new ways to build wealth, solve human coordination problems, create culture, and develop cutting-edge thought
                        leadership in the crypto space. Going Bankless means taking control of your financial health by adopting decentralized 
                        and permissionless money systems. Bankless is the movement educating the world on how to do it.</p>
                    </Grid>
                    <Grid item xs={12} md={4} style={{textAlign: 'center'}} order={{xs: 1, md: 2}}>
                        <img src={process.env.PUBLIC_URL + '/assets/media/bankless-movement.webp'} alt="bankless movement" style={{borderRadius: '20px'}} />
                    </Grid>

                    <Grid item xs={12} md={4} style={{textAlign: 'center', paddingTop: '50px'}} order={{xs: 3, md: 3}}>
                        <img src={process.env.PUBLIC_URL + '/assets/media/bankless-dao.webp'} alt="bankless movement" style={{borderRadius: '20px'}} />
                    </Grid>
                    <Grid item xs={12} md={8} style={{padding: '20px', paddingTop: '50px'}} order={{xs: 4, md: 4}}>
                        <h3 style={{textAlign: 'left'}}>BanklessDAO is the homebase</h3>
                        <p style={{fontSize: '1.2em', lineHeight: '1.8em', color: '#ccc'}}>
                            BanklessDAO is a community of passionate Web3 thought-leaders who aim to educate new users, produce written and audio media, 
                            build DAO tooling, provide consulting services, develop Web3 scholarship, and create a social and creative home base for 
                            anyone in Web3. We’re so much more than a social DAO—we’re a shipping, building, and innovating DAO.</p>
                    </Grid>
                </Grid>

                <Grid container style={{paddingTop: '100px'}}>
                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <h1 style={{textTransform: 'uppercase', textAlign: 'center'}}>Our Mission is to onboard 1 Billion people to crypto</h1>
                        <div className='divider'></div>
                        <h3 style={{color: '#ccc', lineHeight: '1.5em', textAlign: 'center'}}>The nodes in our growing ecosystem collaborate to create user-friendly onramps for people to discover, use, learn, and 
                            enjoy the benefits of Web3. Everyone falls down the rabbithole a different way - we provide all the ways.
                        </h3>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={12} style={{minHeight: '500px'}}>
                    <div style={{textAlign: 'center'}}><img src={process.env.PUBLIC_URL + '/assets/media/chakra.png'} alt="chakra" style={{maxWidth: '100%'}} /></div>
                </Grid>

                <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                    <h1 style={{textTransform: 'uppercase', textAlign: 'center'}}>OUR VISION IS TO MAKE FINANCIAL INDEPENDENCE, DECENTRALIZED WORK, AND CREATIVE FREEDOM ACCESSIBLE TO ALL</h1>
                    <div className='divider'></div>
                    <h3 className="textWreck centered">
                    We work to build a world where anyone with an internet connection has access to the tools needed to achieve financial independence. We want everyone to be able to open a computer, find a DAO, start working, 
                    and get paid. We want to enable visionaries to unlock their true creative freedom with the power of Web3.</h3>
                </Grid>
            </Container>

            <Container style={{paddingTop: '30px', paddingBottom: '30px'}}>
                <Grid container>
                
                    <Grid item xs={12} md={12}>
                    <div style={{padding: '20px', minHeight: '200px'}}>
                        <h2 style={{textTransform: 'uppercase'}}>Our Values</h2>
                    </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        { /* Slides here */ }
                        <Stepper />

                    </Grid>
                </Grid>

            </Container>

            <Container>


                <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                    <h1 style={{textTransform: 'uppercase', textAlign: 'center'}}>Join Us</h1>
                    <div className='divider'></div>
                    <h3 style={{color: '#999', lineHeight: '1.5em', textAlign: 'left', fontSize: '1.3em'}}>
                    This open and liberal financial system is just getting started. We’re building new economies,
                     new ways to work, new thought leadership and scholarship, and new forms of art.</h3>
                </Grid>

                <Grid item xs={12} md={12}>
                    <h2 style={{paddingTop: '20px', paddingBottom: '20px'}}>Join us and embark on our mission:</h2>
                    <p style={{lineHeight: '1.75em', color: '#999', fontSize: '1.3em'}}>To educate the masses in this new decentralized money system that anyone can use to build wealth and climb the economic ladder.
                        To create new paradigms in how people coordinate, organize, and work.
                        To be at the forefront of art and culture.
                        To provide alpha every day and every hour of the year.</p>
                </Grid>

                <Grid item xs={12} md={12}>
                    <video  autoPlay loop muted id="background-video" controls style={{minHeight: '480px'}}>
                        <source src={process.env.PUBLIC_URL + '/assets/media/joinus_scaled.mp4'} type="video/mp4" />
                    </video>
                </Grid>

                <Grid item xs={12} md={12}>
                    <Circles />
                </Grid>
            </Container>
        </div>
    )
}