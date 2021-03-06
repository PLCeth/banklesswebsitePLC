import { Container, Grid, Button } from '@mui/material'
import * as React from 'react'
import { Fade, Slide } from 'react-reveal'


export const Governance = (props) => {
    React.useEffect(() => {
        // scroll to stop
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])
    
    return (
        <div style={{minHeight: '100vh'}}>
            <Container>
                <Grid container style={{justifyContent: 'center'}}>
                    <Grid item xs={12} md={12} style={{textAlign: 'center'}}>
                        <Slide up>
                        <h1 style={{fontSize: '3em'}}>Governance</h1>
                        <div className='divider'></div>
                        <div style={{textAlign: 'center', color: '#aaa'}}>GOVERNANCE IS EVERYONE’S RESPONSIBILITY AT BANKLESSDAO</div>
                        </Slide>
                    </Grid>
                    <Grid item xs={12} md={10} style={{padding: '20px', paddingTop:'30px', lineHeight: '1.5em', fontSize: '1.5em', textAlign: 'center'}}>
                        <Fade><div>
                        At BanklessDAO, all decisions regarding governance, treasury, projects, and proposals are made through a democratic process. 
                        BANK holders ratify decisions on-chain through <span style={{color: '#f00'}}>Snapshot</span> votes. 
                        Any BANK holder can vote in a snapshot. The more tokens you hold, the more voting power you have. See our 
                        recent governance decisions <span style={{color: '#f00'}}>here.</span> 
                        </div></Fade>
                    </Grid>
                    <Grid item xs={12} md={12} style={{padding: '20px', lineHeight: '1.5em', fontSize: '1.5em', textAlign: 'center'}}>
                        <Fade><div>
                    While decisions are formally ratified on-chain, decision-making happens informally in our Discord channels, our 
                    <span style={{color: '#f00'}}> forum posts</span>, and our voice rooms. </div></Fade>
                    </Grid>


                    <Grid item xs={12} md={12} style={{textAlign: 'center', paddingTop: '100px'}}>
                        <Slide up>
                        <h1 style={{fontSize: '2em'}}>How to kickstart a project within the DAO</h1>
                        <div className='divider'></div>
                        </Slide>
                    </Grid>

                    <Grid item xs={12} md={6}  style={{padding: '20px'}}>
                        <Slide up>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={process.env.PUBLIC_URL + '/assets/media/support.webp'} style={{height: '50px', width:"50px", marginRight: '10px'}} alt="support" />
                        <h3>GAIN SUPPORT</h3>     
                        </div>
                        <p className='textWreck'>Pitch your idea to fellow contributors so you can find a group that aligns with your goals and wants to see your idea come to life. Typically, this involves hours spent on multiple Discord meetings and lots of discussions in channels. You are encouraged to have these conversations in public channels so that other like-minded individuals can get involved.</p>               
                        </Slide>
                    </Grid>
                    <Grid item xs={12} md={6}  style={{padding: '20px'}}>
                        <Slide up>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={process.env.PUBLIC_URL + '/assets/media/draft.webp'} style={{height: '50px', width:"50px", marginRight: '10px'}} alt="support" />
                        <h3>DRAFT A PROPOSAL</h3>        
                        </div>
                        <p className='textWreck'>Write a forum post following this template. The bDAO community will vote on your proposal and leave feedback on our forum. If your proposal is particularly complex or technical, share educational materials so voters can better understand it and make an informed decision.</p>            
                        </Slide>
                    </Grid>

                    <Grid item xs={12} md={6}  style={{padding: '20px'}}>
                        <Slide up>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={process.env.PUBLIC_URL + '/assets/media/workshop.webp'} style={{height: '50px', width:"50px", marginRight: '10px'}} alt="support" />
                        <h3>WORKSHOP THE PROPOSAL</h3>        
                        </div>
                        <p className='textWreck'>The majority of proposals don’t pass muster in their original form. This is our iteration process in action. Keep an eye out for the comments and feedback from our contributors on your proposal: they are invaluable to making it a success. Incorporate the feedback you get and prepare a second or third draft if necessary.</p>            
                        </Slide>
                    </Grid>

                    <Grid item xs={12} md={6}  style={{padding: '20px'}}>
                        <Slide up>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={process.env.PUBLIC_URL + '/assets/media/vote.webp'} style={{height: '50px', width:"50px", marginRight: '10px'}} alt="support" />
                        <h3>VOTE</h3>        
                        </div>
                        <p className='textWreck'>If your proposal is up for at least seven days, receives at least 30 votes, and has a majority in favor, you’re approved to begin work! If you don’t require funding from the Grants Committee you can begin work immediately.</p>            
                        </Slide>
                    </Grid>

                    <Grid item xs={12} md={12}  style={{padding: '20px'}}>
                        <Slide up>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={process.env.PUBLIC_URL + '/assets/media/funding.webp'} style={{height: '50px', width:"50px", marginRight: '10px'}} alt="support" />
                        <h3>ACQUIRE FUNDING</h3>        
                        </div>
                        <p className='textWreck'>If your proposal is up for at least seven days, receives at least 30 votes, and has a majority in favor, you’re approved to begin work! If you don’t require funding from the Grants Committee you can begin work immediately.</p>            
                        <p style={{color: '#fff'}}>In order to acquire funding, you need to meet these preliminary requirements:</p>
                        <ul style={{lineHeight: '1.5em'}}>
                            <li>One or more project champions who serve as the main point of contact.</li>
                            <li>A channel in the BanklessDAO Discord.</li>
                            <li>project page on BanklessDAO’s Notion.</li>
                            <li>A multisig with at least three signers that will receive the grant funding.</li>
                        </ul>
                        </Slide>
                    </Grid>

                    <Grid item xs={12} md={12}  style={{padding: '20px'}}>
                        <Fade>
                        <h1>QUORUM REQUIREMENTS</h1>
                        <p className='textWreck'>Depending on the financial ask, quorum requirements for forum posts are scaled. The table below shows how many voters will need to be present to approve your request.</p>
                        </Fade>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Fade>
                        <div style={{backgroundColor: '#222', padding: '10px'}}>
                            <Grid container style={{fontSize: '0.8em'}}>
                                <Grid item xs={6} md={6} style={{padding: '5px'}}>
                                    <div style={{backgroundColor: '#111', padding: '5px', borderRadius: '10px'}}>
                                    <h3 className='centered'>Funding Requested</h3>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={6} style={{padding: '5px'}}>
                                    <div style={{backgroundColor: '#111', padding: '5px', borderRadius: '10px'}}>
                                    <h3 className='centered'>Number of voters required</h3>
                                    </div>
                                </Grid>

                                { Fundings.map((req) => {
                                    return (
                                        <Grid container>
                                        <Grid item xs={6} md={6} style={{padding: '5px'}}>
                                            <div style={{backgroundColor: '#333', padding: '2px', borderRadius: '10px'}}>
                                            <h3 className='centered'>{ req.title }</h3>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} md={6} style={{padding: '5px'}}>
                                            <div style={{backgroundColor: '#333', padding: '2px', borderRadius: '10px'}}>
                                            <h3 className='centered'>{ req.votes }</h3>
                                            </div>
                                        </Grid>
                                        </Grid>
                                    )
                                })}

                            </Grid>
                        </div>
                        </Fade>
                    </Grid>

                    <Grid item xs={12} md={12} style={{backgroundColor: 'rgb(34, 0, 1)', borderRadius: '20px', padding: '20px', marginTop: '100px'}}>
                        <Slide up>
                        <h1>Seasons</h1>
                        <p className='textWreck'>A Season at bDAO is similar to a corporate quarter and generally lasts three months. They provide funding landmarks for bDAO coordinators and the Grants Committee. Each season has a fixed amount of BANK allocated to pay contributors in the DAO.</p>
                        <p className='textWreck' style={{color: '#fff'}}>Read our Seasonal Specifications on Mirror:</p>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <Button className="grayButt">Season 1</Button>
                            <Button className="grayButt">Season 2</Button>
                            <Button className="grayButt">Season 3</Button>
                        </div>
                        </Slide>
                    </Grid>

                    <Grid item xs={12} md={12} style={{paddingTop: '75px'}}>
                        <h1 style={{textAlign: 'center'}}>CONTRIBUTOR LEVELS</h1>
                        <p className='textWreck' style={{textAlign: 'center'}}>Membership delineation is an important aspect of governance. BanklessDAO server members fit into these categories:</p>
                    </Grid>

                    <Grid item xs={12} md={6} style={{padding: '15px'}}>
                        <h2>Guest Pass</h2>
                        <p className='biggerLines'>An individual who does not yet have 35,000 BANK in their wallet. This person can participate in the DAO for free, but must have their pass renewed every two weeks by a Level 2 (L2) contributor.</p>
                    </Grid>

                    <Grid item xs={12} md={6} style={{padding: '15px'}}>
                        <h2>MEMBER Level 1:</h2>
                        <p className='biggerLines'>An individual who has 35,000 BANK in their wallet. L1s have access to perks and are eligible to be nominated to L2.</p>
                    </Grid>

                    <Grid item xs={12} md={6} style={{padding: '15px'}}>
                        <h2>CONTRIBUTOR level 2:</h2>
                        <p className='biggerLines'>An individual who has 35,000 BANK in their wallet and has been nominated by and voted in by the existing L2 contributors. L2s are trusted community members who embody the BanklessDAO mission.</p>
                    </Grid>

                    <Grid item xs={12} md={6} style={{padding: '15px'}}>
                        <h2>WHALE Level 3:</h2>
                        <p className='biggerLines'>An individual who has 150,000 BANK in their wallet.</p>
                    </Grid>

                    <Grid item xs={12} md={8} style={{padding: '10px'}}>
                        <Slide up>
                        <h1 style={{fontSize: '2.5em'}}>Get Started in Governance Today</h1>
                        <p className='textWreck'>Join the <span style={{color:'#f00'}}>Discussion on Forums</span></p>
                        <a href="#k" style={{padding: '5px', borderBottom: '1px solid #111', color: '#fff'}}>Buy Bank</a>
                        </Slide>
                    </Grid>
                    <Grid item xs={12} md={4} style={{padding: '10px'}}>
                        <Fade>
                        <img src={process.env.PUBLIC_URL + '/assets/media/some3d.webp'} alt="BANK Coin" style={{maxWidth: '100%'}} />
                        </Fade>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Fade>
                        <h2 style={{padding: '20px', textAlign: 'center'}}>Join the <span style={{color: '#f00'}}>Discord Server</span></h2>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


class FundingReq {
    constructor(title, votes) {
        this.title = title;
        this.votes = votes;
    }
}

const Fundings = [
    new FundingReq("Less than 50,000 BANK", "25 voters"),
    new FundingReq("50,001 - 250,000 BANK", "31 voters"),
    new FundingReq("250,001 - 500,000 BANK", "40 voters"),
    new FundingReq("500,001 - 1,000,000 BANK", "51 voters"),
    new FundingReq("Greater than 1,000,001 BANK", "63 voters"),
    new FundingReq("Governance proposals", "63 voters"),
    new FundingReq("Emergency proposals", "91 voters"),
]