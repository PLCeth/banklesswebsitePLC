import { Button, Container, Grid } from '@mui/material'
import * as React from 'react'

import { Fade, Slide } from 'react-reveal';
import { Circles } from '../Circles';
import TwitterIcon from '@mui/icons-material/Twitter';

import { Arrow } from '../Utils';

class BoxForPage {
    constructor(page, desc, image, link) {
        this.page = page;
        this.desc = desc;
        this.image = image;
        this.link = link;
    }
}

const Boxes = [
    new BoxForPage("MEDIA", "Producing cutting-edge written, visual, and audio content", "/assets/media/media.webp", "#"),
    new BoxForPage("CONSULTING", "Providing consulting services for other DAOs and Web3-native companies.", "/assets/media/consulting.webp", "#"),
    new BoxForPage("DAO TOOLING", "Shipping products and services that are changing the future of work.", "/assets/media/dao-tooling.webp", "#"),
    new BoxForPage("COMING HOME", "Creating a social homebase for artists, thought-leaders, builders, scholars, and innovators in Web3.", "/assets/media/coming-home.webp", "#"),
]


export const HomePage = (props) => {
    return (
        <div style={{paddingBottom: '100px'}}>
            <Fade>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <h1 className='mainHeader'>Media and Social DAO Onboarding 1 billion people to crypto</h1>
                        <div className='divider'></div>
                        <p className='centered'>
                            We're Headed West. <a href={'#k'} className='linkStyle'>Join Us</a>
                        </p>
                    </Grid>
                </Grid>
            </Container>

            <video autoPlay loop muted id="background-video" playsInline>
                <source src={process.env.PUBLIC_URL + '/assets/media/DAOhandLogo.mp4'} type="video/mp4" />
            </video>
            </Fade>

            <Container>
                <Grid container>
                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <Slide bottom>
                        <h2 style={{textTransform: 'uppercase', textAlign: 'center'}}>We Take a Decentralized approach To:</h2>
                        <div className='divider'></div>
                        </Slide>
                    </Grid>

                    { Boxes.map((box => {
                        return (
                            <Grid item xs={12} md={6}>
                            <Fade>
                            <div className="gridBox">
                                <img src={process.env.PUBLIC_URL + box.image} alt={box.page} className='gridImage'/>
                                <div className="paddedBox">
                                    <h2 className='subHeader'>Media</h2>
                                    <p style={{padding: '20px', fontSize: '1.2em', color: '#bbb'}}>
                                        { box.desc }
                                    </p>
                                    <div className="smallDivider"></div>
                                    <div style={{paddingTop: '15px', paddingLeft: '20px'}}>
                                    <span style={{padding: '10px', paddingTop: '25px', borderBottom: '1px solid #222'}}>
                                        <a href={box.link} style={{color: '#FFF', textDecoration: 'none'}}>Start <Arrow /></a>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                        </Grid>
                        )
                    }))}

                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <h1 style={{textTransform: 'uppercase', textAlign: 'center'}}>Community-Owned and Operated through the:</h1>
                        <div className='divider'></div>
                    </Grid>

                </Grid>
            </Container>

            <Grid container>
                <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', textAlign: 'center', alignItems: 'center'}}>
                    <img src={process.env.PUBLIC_URL + '/assets/media/bankless-coin.webp'} alt="Bankless Coin" style={{maxWidth: '250px'}}/>
                    <h2 style={{paddingTop: '20px'}}>BANK Token</h2>
                </Grid>

                <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', textAlign: 'center', alignItems: 'center'}}>
                    <img src={process.env.PUBLIC_URL + '/assets/media/ethereum-icon.webp'} alt="Ethereum" style={{maxWidth: '150px'}} />
                    <h2 style={{paddingTop: '20px'}}>Ethereum Blockchain</h2>
                </Grid>

                <Grid item xs={12} md={12} style={{paddingTop: '100px', paddingBottom: '100px'}}>
                    <h1 style={{textTransform: 'uppercase', color: '#444', textAlign: 'center', letterSpacing: '10px'}}>The Most Widely-held social token</h1>
                </Grid>
            </Grid>

            <Container>
                <Fade>
                <div className='whiteBox'>
                    <h2 style={{textAlign: 'center', color:'#000'}}>Onboarding 1 billion people, Minting 1 billion BANK tokens</h2>
                    <div style={{display: 'flex', justifyContent: 'space-around', padding: '20px', flexWrap: 'wrap'}}>
                        <Button variant="contained" color="error" style={{marginBottom: '10px'}}>Buy BANK</Button>
                        <Button variant="contained" style={{backgroundColor: '#FFF', color: '#F00'}}>BANK TOKEN LEGAL ASSESSMENT</Button>
                    </div>
                </div>
                </Fade>


                <Grid container style={{paddingTop: '100px'}}>
                    <Grid item xs={12} md={3} style={{justifyContent: 'center', display: 'flex', marginTop: '20px'}}>
                        <Slide bottom>
                        <img src={process.env.PUBLIC_URL + '/assets/media/david-hoffman.webp'} alt="David Hoffman" className='circledPic' style={{boxShadow: '-18px 0px 35px red'}} />
                        </Slide>
                    </Grid>
                    <Grid item xs={12} md={3} style={{justifyContent: 'center', display: 'flex', marginTop: '20px'}}>
                        <Slide bottom>
                        <img src={process.env.PUBLIC_URL + '/assets/media/ryan-sean-adams.webp'} alt="Ryan Sean Adams" className='circledPic' style={{boxShadow: '18px 0px 35px red'}}  />
                        </Slide>
                    </Grid>
                    <Grid item xs={12} md={6} style={{padding: '20px'}}>
                        <Fade>
                        <div style={{fontSize: '1.4em', color: '#999', lineHeight: '1.5em'}}>
                            BanklessDAO was founded by <span style={{fontWeight: 'bold', color: '#FFF'}}>David Hoffman</span> and <span style={{fontWeight: 'bold', color: '#FFF'}}>Ryan Sean Adams</span> on May 4th, 2021, when they airdropped 35,000 BANK tokens to 
                            each Bankless premium subscriber.
                        </div>
                        </Fade>
                    </Grid>

                    <Grid item xs={12} md={12} style={{textAlign: 'center', lineHeight: '1.75em', padding: '20px', color: '#999', paddingTop: '75px'}}>
                    Following the true ethos of decentralization, they stepped back and let the DAO take shape. While their media company, Bankless LLC, 
                    continues to operate as its own media node, the Bankless brand is propagated through the DAO and its sub-DAOs. Now, the Bankless ecosystem 
                    as a whole creates user-friendly onramps for people to discover decentralized financial technologies through education, media and culture.
                    </Grid>

                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <h1 style={{textTransform: 'uppercase', textAlign: 'center'}}>Treasury Multi-Sig Owners</h1>
                        <div className='divider'></div>
                    </Grid>

                    { /* People Grid */ }
                    <Grid container style={{display: 'flex', justifyContent: 'center'}}>
                        { TreasuryGuild.map((person) => {
                            return (
                                <Grid item xs={12} md={4} className="circleP">
                                    <img src={process.env.PUBLIC_URL + person.image} alt="pic" className='circledPic' style={{boxShadow: '-8px 0px 13px red'}}  />
                                    <h3>{ person.name }
                                    <a href={person.link} target="_blank" rel="noreferrer" className='destyle'><TwitterIcon style={{color: 'rgb(29, 155, 240)', width: '20px', height: '20px', marginLeft: '10px'}}></TwitterIcon></a></h3>
                                </Grid>
                            )
                        })}
                    </Grid>

                    <Grid item xs={12} md={12} style={{paddingTop: '75px'}}>
                        <Slide bottom>
                        <h1 style={{textTransform: 'uppercase', textAlign: 'center'}}>Grants Committee Members</h1>
                        <div className='divider'></div>
                        </Slide>
                    </Grid>

                    <Fade >
                    <Grid container style={{display: 'flex', justifyContent: 'center'}}>
                        { GrantsCommittee.map((person) => {
                            return (
                                <Grid item xs={12} md={4} className="circleP">
                                    <img src={process.env.PUBLIC_URL + person.image} alt="pic" className='circledPic' style={{boxShadow: '-8px 0px 13px red'}}  />
                                    <h3>{ person.name }
                                    <a href={person.link} target="_blank" rel="noreferrer" className='destyle'><TwitterIcon style={{color: 'rgb(29, 155, 240)', width: '20px', height: '20px', marginLeft: '10px'}}></TwitterIcon></a></h3>
                                </Grid>
                            )
                        })}
                    </Grid>
                    </Fade>
                </Grid>

                <Grid container style={{paddingTop: '100px', paddingBottom: '100px'}}>
                    <Grid item xs={12} md={6}>
                        <h1>Start Your Journey</h1>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Circles />
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}

class Person {
    constructor(name, image, link) {
        this.name = name;
        this.link = link;
        this.image = image;
    }
}

const TreasuryGuild = [
    new Person("Kouros", "/assets/media/people/kouros.webp", "https://twitter.com/davidcoleto"),
    new Person("Grendel", "/assets/media/people/grendel.webp", "https://twitter.com/GrendelMarco"),
    new Person("IcedCool", "/assets/media/people/icedcool.webp", "https://twitter.com/icedcool_eth"),
    new Person("Chuck", "/assets/media/people/chuck.webp", "https://twitter.com/mr_cgc"),
    new Person("Montgomery", "/assets/media/people/montgomery.webp", "https://twitter.com/WPMonty"),
    new Person("Lion917", "/assets/media/people/lion917.webp", "https://twitter.com/lion917_eth"),
    new Person("Links", "/assets/media/people/links.webp", "https://twitter.com/almithani"),
]

const GrantsCommittee = [
    new Person("Kouros", "/assets/media/people/kouros.webp", "https://twitter.com/davidcoleto"),
    new Person("0xLucas", "/assets/media/people/0xlucas.webp", "https://twitter.com/0x_Lucas"),
    new Person("AboveAverageJoe", "/assets/media/people/aboveaveragejoe.webp", "https://twitter.com/Abv_Avg_Joe"),
    new Person("Grendel", "/assets/media/people/grendel.webp", "https://twitter.com/GrendelMarco"),
    new Person("FrogMonkee", "/assets/media/people/frogmonkee.webp", "https://twitter.com/frogmonkee"),
    new Person("IcedCool", "/assets/media/people/icedcool.webp", "https://twitter.com/icedcool_eth"),
    new Person("RedVan", "/assets/media/people/redvan.webp", "https://mobile.twitter.com/0xredvan"),
]

