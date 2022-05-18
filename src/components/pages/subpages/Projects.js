import { Container, Grid, Button } from '@mui/material'
import * as React from 'react'
import { Fade, Slide } from 'react-reveal'

export const Projects = (props) => {
    React.useEffect(() => {
        // scroll to stop
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])
    

    return (
        <Container style={{padding: '20px'}}>
            <Grid container style={{justifyContent: 'center'}}>
                <Grid item xs={12} md={12} order={{xs: 1, md: 1}} >
                    <Slide up>
                    <h1 style={{textAlign: 'center'}}>Projects</h1>
                    <div className='divider' style={{maxWidth: '500px', marginTop: '0'}}></div>
                    <p className='centered' style={{fontSize: '1.5em', lineHeight: '1.8em'}} >
                        Projects enable Guilds and bDAO members to collaborate and scale the Bankless 
                        movement.  From consulatancy services to bot integrations to newsletters, we 
                        have multiple ongoing projects and more coming on the docket.  Here are our current projects:</p> 
                    </Slide>
                </Grid>
                
                <Grid item xs={12} md={6} style={{padding: '20px'}}  order={{xs: 2, md: 2}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/banklessc.png'} alt="Bankless consulting" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 3, md: 3}}
                    style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>BANKLESS CONSULTING</h1>
                    <p>Bankless Consulting is the consulting services arm of BanklessDAO. It connects over 15,000+ talented Web3 natives to professional services in marketing, tech, legal, finance, and management. Bankless Consulting helps decentralized, Web3-native, and traditional businesses leverage the power of Web3.</p>
                    <a href="https://www.banklessconsulting.com/" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 4, md: 3}}
                    style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>DEGEN PROJECT</h1>
                    <p>This workgroup is building the DEGEN and Mad Hatter Discord-integration bots to automate administrative tasks and ease operations across bDAO. The DEGEN bot is already deployed in dozens of Discord servers across the Web3 space.</p>
                    <a href="https://bankless.notion.site/DEGEN-f5e1c8e3e9b546ce83025a8359f98da8" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 3, md: 4}} 
                    style={{padding: '20px', textAlign: 'center'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/DEGEN-logo_250.png'} alt="degen project" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 5, md: 5}} 
                    style={{padding: '20px'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/money-tree.jpg'} alt="Bounty board" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 6, md: 6}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>BOUNTY BOARD</h1>
                    <p>The Bounty Board creates an efficient mechanism of coordination between organizers and contributors. It provides a way to quickly access Web3 talent within the DAO for bountied work.</p>
                    <a href="https://bankless.notion.site/Bounty-Board-Project-Page-318dc164cc5640cca17e0fb5f484fd90" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 8, md: 7}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>NEWSLETTER PROJECT</h1>
                    <p>The Newsletter project provides a written voice for the Bankless movement through four newsletters that each have tens of thousands of subscribers: Weekly Rollup, State of the DAOs, Decentralized Art and Gearing Up.</p>
                    <a href="https://banklessdao.substack.com/" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 7, md: 8}} style={{padding: '20px', textAlign: 'center'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/newsletterp.jpg'} alt="newsletter project" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 9, md: 9}} style={{padding: '20px'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/editing-publishing.jpg'} alt="Editing Publishing" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 10, md: 10}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>EDITING AND PUBLISHING ARM OF EPA</h1>
                    <p>The EPA is the center for longform writing in BanklessDAO. The skilled editors and writers in this group ship multiple pieces per week. Any writer can submit to the EPA and get paid in crypto. Read their stories on Medium and Mirror.</p>
                    <a href="https://bankless.notion.site/The-Editorial-Publishing-Arm-EPA-5218f8cbb6214fb7803c2d76553d23fa" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 12, md: 11}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>PODCAST HATCHERY</h1>
                    <p>Podcast Hatchery empowers individual creators to develop their own podcasts, improve their production skills, grow an audience and ultimately generate high-quality audio storytelling that will represent the mission, ethos, and diversity of BanklessDAO.</p>
                    <a href="https://bankless.notion.site/Podcast-Hatchery-0c2676175267445180c8f5cb3d3f14bb" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 11, md: 12}} style={{padding: '20px', textAlign: 'center'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/newsletterp.jpg'} alt="PODCAST HATCHERY" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 13, md: 13}} style={{padding: '20px'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/rainbow.jpg'} alt="DAOversity" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 14, md: 14}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>DAOVERSITY</h1>
                    <p>DAOversity aims to understand and improve diversity within BanklessDAO. It works to provide a safe and inclusive space for discussing and addressing the challenges minority groups face in DAOs and Web3.</p>
                    <a href="https://bankless.notion.site/DAOversity-Project-39f3facbf2234fa5940e2180dc985522" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 16, md: 15}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>DAO HEAT</h1>
                    <p>DAO Heat is a collaborative contest that features the hottest writing and designs. The contest involves two stages, the writing and the design contest. The winning design is converted into a set of limited edition NFTs and sold.</p>
                    <a href="https://mobile.twitter.com/dao_heat" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 15, md: 16}} style={{padding: '20px', textAlign: 'center'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/DAO_Heat_Logo.png'} alt="DAO Heat" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 17, md: 17}} style={{padding: '20px'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/website.jpg'} alt="Website" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 18, md: 18}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>WEBSITE PROJECT</h1>
                    <p>The Website project aims to constantly improve the code, content, and design of the current bDAO website to streamline the introduction and onboarding of new members to the Bankless movement.</p>
                    <a href="https://www.notion.so/bankless/bDAO-Website-1320df854ac54cb3a65018173b9e5445" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 20, md: 19}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>FIGHT CLUB</h1>
                    <p>Fight Club aims to create opportunities for the bDAO community to pool capital, invest in projects, and share proceeds while offering venture investing education.</p>
                    <a href="https://twitter.com/fight_club_vc" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 19, md: 20}} style={{padding: '20px', textAlign: 'center'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/fight-club.jpg'} alt="Fight club" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 21, md: 21}} style={{padding: '20px'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/loans.jpg'} alt="Website" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 22, md: 22}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>BANKLESS LOANS</h1>
                    <p>The Bankless Loans Project Team is building a DeFi application for BanklessDAO that supports its goal of onboarding one billion people to crypto while generating revenue for the bDAO treasury.</p>
                    <a href="https://bankless.notion.site/Bankless-Loans-c6b90fad24b24312b184840e49694f7f" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 24, md: 23}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>BANKLESS ACADEMY</h1>
                    <p>Bankless Academy is an app that will take someone with zero knowledge of crypto and smart contracts and lead them down the journey of becoming a competent crypto user. They provide lessons in interactive formats and have fun rewards along the way.</p>
                    <a href="https://app.banklessacademy.com/" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 23, md: 24}} style={{padding: '20px', textAlign: 'center'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/academy.png'} alt="bankless academy" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 25, md: 25}} style={{padding: '20px'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/content-gateway.jpg'} alt="content gateway" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 26, md: 26}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>CONTENT GATEWAY</h1>
                    <p>Content Gateway aims to build a web service layer that enables content aggregation and provides all the DAO products with a single DAO Gateway API.</p>
                    <a href="https://bankless.notion.site/Content-Gateway-2436c434dc954e05af3ffbe5738ca902" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 28, md: 27}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>MOBILE APP</h1>
                    <p>The Mobile App project aims to build a mobile application for all things bDAO.</p>
                    <a href="https://www.notion.so/Bankless-Mobile-App-8c7c4a36130e49a286d6267b970b38d7" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 27, md: 28}} style={{padding: '20px', textAlign: 'center'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/mobile.jpg'} alt="mobile app" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 29, md: 29}} style={{padding: '20px'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/content-gateway.jpg'} alt="content gateway" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 30, md: 30}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>CRYPTO SAPIENS</h1>
                    <p>Humpty, one of bDAO’s active contributors, hosts a weekly podcast featuring insightful voices of Web3. Listen here.</p>
                    <a href="https://linktr.ee/CryptoSapiensOfficial" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 32, md: 31}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>FIRST QUEST</h1>
                    <p>First Quest is building our onboarding process, which has become famous within Web3. First Quest project aims to serve new joiners with a simplified and gamified onboarding process.</p>
                    <a href="https://bankless.notion.site/First-Quest-Project-Page-abc1393b83ae47f5836004ae96f55072" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 31, md: 32}} style={{padding: '20px', textAlign: 'center'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/first-quest.png'} alt="first quest" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 33, md: 33}} style={{padding: '20px'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/international-media.jpg'} alt="content gateway" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 34, md: 34}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>INTERNATIONAL MEDIA NODES</h1>
                    <p>International Media Nodes (IMN) are Bankless channels that spread the message of the Bankless movement to regions beyond North America. They translate BanklessDAO content, publish original pieces, run Twitter pages, and ship newsletters to cover many of the regions and languages of the world.</p>
                    <a href="https://bankless.notion.site/International-Media-Nodes-IMN-02e74eb50014493bae4dc3953921ab83" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={6}  order={{xs: 36, md: 35}} style={{padding: '20px', display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
                    <Slide up>
                    <h1>DECENTRALIZES-LAW-NEWSLETTER</h1>
                    <p>The Legal Guild runs a legal newsletter that covers developments in the crypto-legal landscape. It is a premier newsletter in the crypto space, publishing cutting-edge legal analysis twice a month.</p>
                    <a href="https://banklessdao.substack.com/s/decentralized-law" target="_blank" rel="noreferrer" className="destyle"><Button variant='contained' color='error'>Learn More</Button></a>
                    </Slide>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs: 35, md: 36}} style={{padding: '20px', textAlign: 'center'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/bitcoin-law.jpg'} alt="bitcoin law" style={{maxWidth: '100%', borderRadius: '30px'}} />
                    </Fade>
                </Grid>

            </Grid>
        </Container>
    )
}