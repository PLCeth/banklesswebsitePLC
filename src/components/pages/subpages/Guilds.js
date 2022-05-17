import { Container, Grid } from '@mui/material'
import * as React from 'react'
import { Fade } from 'react-reveal'

export const Guilds = (props) => {
    React.useEffect(() => {
        // scroll to stop
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])
    
    return (
        <Container>
            <Grid container style={{justifyContent: 'center'}}>
                <Grid item xs={12} md={12} order={{xs: 1, md:1}}>
                    <Fade>
                    <h1 style={{textAlign: 'center'}}>Guilds</h1>
                    <div className='divider' style={{maxWidth: '500px', marginTop: '0'}}></div>
                    <p className='centered' style={{fontSize: '1.5em', lineHeight: '1.8em'}} >
                        Guilds are the way we organize our contributors.  These talent pools serve as a way for individuals 
                        who share common interests, professional backgrounds, and skills to come together and incubate 
                        projects.  There are 13 guilds within bDAO.</p> 
                    </Fade>
                </Grid>

                <Grid item xs={12} md={5} style={{padding: '25px'}} order={{xs: 2, md:2}}>  
                    <img src={process.env.PUBLIC_URL + '/assets/media/analytic-guild.png'} alt="analytics guild" style={{maxWidth: '100%'}} />
                </Grid>
                <Grid item xs={12} md={7} order={{xs: 3, md:3}}
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                    <h2 style={{textTransform: 'uppercase'}}>Analytics Guild</h2>
                    <p className='textWreck' style={{textAlign: 'justify'}}>
                    The Analytics Guild builds data products and uses data analytics to equip bDAO members to achieve our mission with data-driven intelligence. The Analytics Guild also incubated DAO DASH.
                    </p>
                </Grid>

                <Grid item xs={12} md={7} order={{xs: 4, md:3}}
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                    <h2 style={{textTransform: 'uppercase'}}>AUDIOVISUAL GUILD</h2>
                    <p className='textWreck' style={{textAlign: 'justify'}}>
                    The AV Guild is the home of BanklessDAO video and audio content. From broadcasting the Community Call to building the next version of our audio-recording bot, bDAO contributors rely on the AV Guild for crisp, clear audio solutions for unifying contributors across time zones.
                    </p>
                </Grid>
                <Grid item xs={12} md={5} style={{padding: '25px'}} order={{xs: 3, md: 4}}>  
                    <img src={process.env.PUBLIC_URL + '/assets/media/eye-analytics.png'} alt="audio visual guild" style={{maxWidth: '100%'}} />
                </Grid>

                <Grid item xs={12} md={5} style={{padding: '25px'}} order={{xs: 5, md:5}}>  
                    <img src={process.env.PUBLIC_URL + '/assets/media/happy-faces.png'} alt="daolationships guild" style={{maxWidth: '100%'}} />
                </Grid>
                <Grid item xs={12} md={7} order={{xs: 6, md:6}}
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                    <h2 style={{textTransform: 'uppercase'}}>DAOLATIONSHIPS GUILD</h2>
                    <p className='textWreck' style={{textAlign: 'justify'}}>
                        The DAOlationships Guild facilitates and coordinates relationships between external organizations and the guilds within BanklessDAO. This guild helps us best represent our DAO to anyone outside bDAO.
                    </p>
                </Grid>

                <Grid item xs={12} md={7} order={{xs: 8, md:7}}
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                    <h2 style={{textTransform: 'uppercase'}}>DESIGN GUILD</h2>
                    <p className='textWreck' style={{textAlign: 'justify'}}>
                    The DAOlationships Guild facilitates and coordinates relationships between external organizations and the guilds within BanklessDAO. This guild helps us best represent our DAO to anyone outside bDAO.
                    </p>
                </Grid>
                <Grid item xs={12} md={5} style={{padding: '25px'}} order={{xs: 7, md:8}}>  
                    <img src={process.env.PUBLIC_URL + '/assets/media/design-guild.png'} alt="design guild" style={{maxWidth: '100%'}} />
                </Grid>

                <Grid item xs={12} md={5} style={{padding: '25px'}}  order={{xs: 9, md:9}}>  
                    <img src={process.env.PUBLIC_URL + '/assets/media/dev-guild.png'} alt="dev guild" style={{maxWidth: '100%'}} />
                </Grid>
                <Grid item xs={12} md={7}  order={{xs: 10, md:10}}
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                    <h2 style={{textTransform: 'uppercase'}}>DEVELOPERS GUILD</h2>
                    <p className='textWreck' style={{textAlign: 'justify'}}>
                    The Developers Guild builds tooling, provides developer education, and helps developers do their best work in Web3. They also incubated the DEGEN, Gov-Bot, Mobile App and Bounty Board projects.
                    </p>
                </Grid>

                <Grid item xs={12} md={7}  order={{xs: 12, md:11}}
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                    <h2 style={{textTransform: 'uppercase'}}>EDUCATION GUILD</h2>
                    <p className='textWreck' style={{textAlign: 'justify'}}>
                    The Education Guild provides educational tools and resources to empower bDAO members with knowledge about Web3, DeFi, NFTs and the greater crypto ecosystem. They also incubated the Bankless Academy project.
                    </p>
                </Grid>
                <Grid item xs={12} md={5} style={{padding: '25px'}} order={{xs: 11, md:12}}>  
                    <img src={process.env.PUBLIC_URL + '/assets/media/edu-guild.png'} alt="education guild" style={{maxWidth: '100%'}} />
                </Grid>

                <Grid item xs={12} md={5} style={{padding: '25px'}} order={{xs: 13, md:13}}>  
                    <img src={process.env.PUBLIC_URL + '/assets/media/legal-guild.png'} alt="dev guild" style={{maxWidth: '100%'}} />
                </Grid>
                <Grid item xs={12} md={7} order={{xs: 14, md:14}}
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                    <h2 style={{textTransform: 'uppercase'}}>LEGAL GUILD</h2>
                    <p className='textWreck' style={{textAlign: 'justify'}}>
                    The Legal Guild authored the BANK legal assessment and white paper. It also provides regular updates on the legal developments in crypto and DAO governance. They also incubated the Decentralized Law newsletter and legal podcast project.
                    </p>
                </Grid>

                <Grid item xs={12} md={7} order={{xs: 16, md:15}}
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                    <h2 style={{textTransform: 'uppercase'}}>MARKETING GUILD</h2>
                    <p className='textWreck' style={{textAlign: 'justify'}}>
                    The Marketing Guild amplifies the values and mission of BanklessDAO by delivering creative Web3 marketing solutions to place the stakeholders in front of the right people with the right message.
                    </p>
                </Grid>
                <Grid item xs={12} md={5} order={{xs: 15, md:16}}
                    style={{padding: '25px'}}>  
                    <img src={process.env.PUBLIC_URL + '/assets/media/marketing-guild.png'} alt="marketing guild" style={{maxWidth: '100%'}} />
                </Grid>

                <Grid item xs={12} md={5} order={{xs: 17, md:17}} style={{padding: '25px'}}>  
                    <img src={process.env.PUBLIC_URL + '/assets/media/operation-guild.png'} alt="operations guild" style={{maxWidth: '100%'}} />
                </Grid>
                <Grid item xs={12} md={7} order={{xs: 18, md:18}} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                    <h2 style={{textTransform: 'uppercase'}}>OPERATIONS GUILD</h2>
                    <p className='textWreck' style={{textAlign: 'justify'}}>
                    The Operations Guild administers the daily activities of BanklessDAO and facilitates core operations, such as Community Calls and voting procedures.
                    </p>
                </Grid>

                <Grid item xs={12} md={7} order={{xs: 20, md:19}} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                    <h2 style={{textTransform: 'uppercase'}}>Research GUILD</h2>
                    <p className='textWreck' style={{textAlign: 'justify'}}>
                    The Research Guild operates as a support node for conducting, guiding, and funding research that aligns with BanklessDAO’s mission.
                    </p>
                </Grid>
                <Grid item xs={12} md={5} order={{xs: 19, md:20}} style={{padding: '25px'}}>  
                    <img src={process.env.PUBLIC_URL + '/assets/media/research-guild.png'} alt="research guild" style={{maxWidth: '100%'}} />
                </Grid>


                <Grid item xs={12} md={5} order={{xs: 21, md:21}} style={{padding: '25px'}}>  
                    <img src={process.env.PUBLIC_URL + '/assets/media/treasury-guild.png'} alt="treasury guild" style={{maxWidth: '100%'}} />
                </Grid>
                <Grid item xs={12} md={7} order={{xs: 22, md:22}}
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                    <h2 style={{textTransform: 'uppercase'}}>TREASURY GUILD</h2>
                    <p className='textWreck' style={{textAlign: 'justify'}}>
                    The Treasury Guild is responsible for preserving, enhancing, and supporting BanklessDAO's financial resources.
                    </p>
                </Grid>

                <Grid item xs={12} md={7} order={{xs: 24, md:23}} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                    <h2 style={{textTransform: 'uppercase'}}>TRANSLATORS GUILD</h2>
                    <p className='textWreck' style={{textAlign: 'justify'}}>
                    The Translators Guild spreads the Bankless mission across the world by translating our media into dozens of languages, then publishing them through the International Media Nodes.
                    </p>
                </Grid>
                <Grid item xs={12} md={5} style={{padding: '25px'}} order={{xs: 23, md:24}}>  
                    <img src={process.env.PUBLIC_URL + '/assets/media/translators-guild.png'} alt="translators guild" style={{maxWidth: '100%'}} />
                </Grid>


                <Grid item xs={12} md={5} order={{xs: 25, md:25}} style={{padding: '25px'}}>  
                    <img src={process.env.PUBLIC_URL + '/assets/media/writers-guild.png'} alt="writers guild" style={{maxWidth: '100%'}} />
                </Grid>
                <Grid item xs={12} md={7} order={{xs: 26, md:26}} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                    <h2 style={{textTransform: 'uppercase'}}>WRITERS GUILD</h2>
                    <p className='textWreck' style={{textAlign: 'justify'}}>
                    The Writers Guild is the umbrella for all writing projects coming out of the DAO. They incubated the Newsletter project, the Editing/Publishing Arm, and the Client Services project.
                    </p>
                </Grid>
            </Grid>
        </Container>
    )
}