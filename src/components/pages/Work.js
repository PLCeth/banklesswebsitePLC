import { Container, Grid, Tabs, Typography, Button, Tab, Box } from '@mui/material'
import * as React from 'react'
import { Fade } from 'react-reveal';

export const Work = (props) => {

    const [valueOne, setValueTabOne] = React.useState(1);
    const [valueTwo, setValueTabTwo] = React.useState(1);
    const [valueThree, setValueTabThree] = React.useState(1);
    const [valueFour, setValueTabFour] = React.useState(1);


    const handleChangeOne  = (event, newValue) => {
        setValueTabOne(newValue);
    };

    const handleChangeTwo  = (event, newValue) => {
        setValueTabTwo(newValue);
    };

    const handleChangeThree  = (event, newValue) => {
        setValueTabThree(newValue);
    };
    const handleChangeFour  = (event, newValue) => {
        setValueTabFour(newValue);
    };

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
                    <img src={process.env.PUBLIC_URL + '/assets/media/wwus.png'} alt="Work with Us" style={{maxWidth: '100%'}}/>
                </Grid>
            </Grid>
            </Fade>

            <Container>
                <Grid container>
                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <h1 style={{textAlign: 'center'}}>Consulting and Education</h1>
                        <p style={{textAlign: 'center'}}>Learn from Web3 experts</p>
                    </Grid>
                    <Grid item xs={12} md={12} style={{paddingTop: '100px'}}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}  style={{display: 'flex', justifyContent: 'space-around'}}>
                            <Tabs value={valueOne} onChange={handleChangeOne} aria-label="basic tabs example" >
                            <Tab label="Bankless Academy" {...a11yProps(0)} className="fontTab" />
                            <Tab label="Bankless Consulting" {...a11yProps(1)} className="fontTab" />
                            <Tab label="Global Tax Consulatancy" {...a11yProps(2)} className="fontTab" />
                            </Tabs>
                        </Box>
                        <TabPanel value={valueOne} index={0}>
                            <div style={{minHeight: '200px'}}>Bankless Academy</div>
                        </TabPanel>
                        <TabPanel value={valueOne} index={1}>
                            <div style={{minHeight: '200px'}}>
                                { /* Bankless Consulting */ }
                                <Grid container>
                                    <Grid item xs={12} md={6} style={{padding: '25px'}}>
                                        <img src={process.env.PUBLIC_URL + '/assets/media/bconsulting.png'} alt="Bankless Consulting" style={{maxWidth: '100%'}} />
                                    </Grid>
                                    <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                                        <p className="biggerText">Our Web3-native consulting service draws on the expertise of bDAO members to help DAOs launch and scale their presence.
                                            Bankless Consultancy also helps traditional organizations take the first step into Web3.</p> 
                                        <a href="https://www.banklessconsulting.com/" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" color="error">Visit Bankless Consulting</Button></a>
                                    </Grid>
                                </Grid>
                            </div>
                        </TabPanel>
                        <TabPanel value={valueOne} index={2}>
                            <div style={{minHeight: '200px'}}>Global Tax Consulatancy</div>
                        </TabPanel>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <h1 style={{textAlign: 'center'}}>Software and DAO tooling</h1>
                        <p style={{textAlign: 'center'}}>Level-up your organization with cutting-edge tooling</p>
                    </Grid>
                    <Grid item xs={12} md={12} style={{paddingTop: '100px'}}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}  style={{display: 'flex', justifyContent: 'space-around'}}>
                            <Tabs value={valueTwo} onChange={handleChangeTwo} aria-label="basic tabs example">
                            <Tab label="Degen" {...a11yProps(0)} className="fontTab" />
                            <Tab label="Bounty Board" {...a11yProps(1)}  className="fontTab"/>
                            <Tab label="DAO Dash" {...a11yProps(2)}  className="fontTab"/>
                            </Tabs>
                        </Box>
                        <TabPanel value={valueTwo} index={0}>
                            <div style={{minHeight: '200px'}}>Degen</div>
                        </TabPanel>
                        <TabPanel value={valueTwo} index={1}>
                            <div style={{minHeight: '200px'}}>Bounty Board</div>
                        </TabPanel>
                        <TabPanel value={valueTwo} index={2}>
                            <div style={{minHeight: '200px'}}>DAO Dash</div>
                        </TabPanel>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <h1 style={{textAlign: 'center'}}>Creative Services</h1>
                        <p style={{textAlign: 'center'}}>Tell your story and reach a new audience</p>
                    </Grid>
                    <Grid item xs={12} md={12} style={{paddingTop: '100px'}}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}  style={{display: 'flex', justifyContent: 'space-around'}}>
                            <Tabs value={valueThree} onChange={handleChangeThree} aria-label="basic tabs example">
                            <Tab label="Custom Articles" {...a11yProps(0)}  className="fontTab"/>
                            <Tab label="DAOS Newsletter" {...a11yProps(1)}  className="fontTab"/>
                            <Tab label="Custom Designs" {...a11yProps(2)}  className="fontTab"/>
                            <Tab label="Audio/Visual Services" {...a11yProps(3)}  className="fontTab"/>
                            </Tabs>
                        </Box>
                        <TabPanel value={valueThree} index={0}>
                            <div style={{minHeight: '200px'}}>Custom Articles</div>
                        </TabPanel>
                        <TabPanel value={valueThree} index={1}>
                            <div style={{minHeight: '200px'}}>State of the DAOS Newsletter feature</div>
                        </TabPanel>
                        <TabPanel value={valueThree} index={2}>
                            <div style={{minHeight: '200px'}}>Custom Designs</div>
                        </TabPanel>
                        <TabPanel value={valueThree} index={3}>
                            <div style={{minHeight: '200px'}}>Audio/Visual Services</div>
                        </TabPanel>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <h1 style={{textAlign: 'center'}}>Sponsorships and Marketing</h1>
                        <p style={{textAlign: 'center'}}>Scale your presence in Web3</p>
                    </Grid>
                    <Grid item xs={12} md={12} style={{paddingTop: '100px'}}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}  style={{display: 'flex', justifyContent: 'space-around'}}>
                            <Tabs value={valueFour} onChange={handleChangeFour} aria-label="basic tabs example">
                            <Tab label="Newsletter Sponsorships" {...a11yProps(0)} className="fontTab" />
                            <Tab label="Podcast Sponsorships" {...a11yProps(1)} className="fontTab" />
                            <Tab label="Marketing Services" {...a11yProps(2)} className="fontTab" />
                            </Tabs>
                        </Box>
                        <TabPanel value={valueFour} index={0}>
                            <div style={{minHeight: '200px'}}>Newsletter Sponsorships</div>
                        </TabPanel>
                        <TabPanel value={valueFour} index={1}>
                            <div style={{minHeight: '200px'}}>Podcast Sponsorships</div>
                        </TabPanel>
                        <TabPanel value={valueFour} index={2}>
                            <div style={{minHeight: '200px'}}>Marketing Services</div>
                        </TabPanel>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}



const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography >{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  