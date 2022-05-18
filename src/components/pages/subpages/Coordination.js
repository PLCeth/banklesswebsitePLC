import { Container, Grid, Button } from '@mui/material'
import * as React from 'react'
import { Fade } from 'react-reveal'

export const Coordination = (props) => {

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
                <Grid item xs={12} md={6}>
                    <h1 style={{textAlign: 'center', fontSize: '3em'}}>Coordination Stack</h1>
                    <div className='divider' style={{maxWidth: '500px', marginTop: '0'}}></div>
                    <p className='centered textWreck' style={{textTransform: 'uppercase'}}>Tools for coordinating our global community of contributors</p> 
                </Grid>
                <Grid item xs={12} md={12} >
                    <div style={{color: '#fff', textAlign: 'center', fontSize: '1.8em', lineHeight: '1.8em'}}>BanklessDAO runs around the clock and spans the globe.  To keep it running, we use a variety of coordination tools.</div>
                </Grid>
                <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                    <h1 style={{borderBottom: '2px solid #fff2', paddingBottom: '10px'}}>Working</h1>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Fade>
                    <Stack stack={stackOne} />
                    </Fade>
                </Grid>

                <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                    <h1 style={{borderBottom: '2px solid #fff2', paddingBottom: '10px'}}>Paying</h1>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Fade>
                    <Stack stack={stackTwo} />
                    </Fade>
                </Grid>

                <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                    <h1 style={{borderBottom: '2px solid #fff2', paddingBottom: '10px'}}>Governing</h1>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Fade>
                    <Stack stack={stackThree} />
                    </Fade>
                </Grid>
            </Grid>
        </Container>
    )
}

/* Content Stacks */
class StackC {
    constructor(name, content, id) {
        this.name = name;
        this.content = content;
        this.id = id;
    }
}



const Stack = (props) => {
    const [ currentStack, setStack ] = React.useState(0)

    const changeId = (e) => {
        setStack(parseInt(e.target.getAttribute('data-id')))
    }

    React.useEffect(() => {

    }, [currentStack])

    return (
        <Grid container style={{paddingBottom: '100px'}}>
            <Grid item xs={12} md={3}>
                { props.stack.map((stack) => {
                    return (
                        <Button style={{color: '#FFF', textTransform: 'uppercase'}} onClick={changeId} data-id={stack.id}>{ stack.name }</Button>
                    )
                })}
            </Grid>
            <Grid item xs={12} md={9}>
                <div style={{backgroundColor: '#111', borderRadius: '10px', padding: '20px'}}>
                    { props.stack[currentStack].content }
                </div>
            </Grid>
        </Grid>
    )
}



/* Stacks Below */
const workOne = new StackC("Our Workplace", (
    <div><h1 style={{textTransform: 'uppercase'}}>DISCORD</h1><p className='textWreck' style={{fontSize: '1.2em'}}>Discord is bDAO's lifebool, our headquarters, our home.  We hold our work meetings, 
        have governance conversations, and run polls within these channels.  Grab the tags you need at the #role-select channel and get involved</p></div>
), 0)
const workTwo = new StackC("Our Knowledge Harbor", (
    <div><h1 style={{textTransform: 'uppercase'}}>Notion</h1><p className='textWreck' style={{fontSize: '1.2em'}}>Notion is our database of knowledge, meeting notes, and collaborative documents.
     Your can find all the information about our guilds, projects, calendars, and weekly meetings on the individual guild and project Notion pages.</p></div>
), 1)
const workThr = new StackC("Our Automation Wizard", (
    <div><h1 style={{textTransform: 'uppercase'}}>Degen + Mad Hatter</h1><p className='textWreck' style={{fontSize: '1.2em'}}>Degen and Mad Hatter are two in-server bots built by BanklessDAO 
    developers.  They distribute POAPs, fetch information, and initiate commands.  They make our lives a lot easier.</p></div>
), 2)
const workFou = new StackC("Our Task-Finder", (
    <div><h1 style={{textTransform: 'uppercase'}}>Bounty Board</h1><p className='textWreck' style={{fontSize: '1.2em'}}>Bounty Board, built by BanklessDAO developers, is a tool for 
    BanklessDAO contributors to share and find work.  Check out our live bounty board to see what work is available.</p></div>
), 3)
let stackOne = [workOne, workTwo,workThr,workFou]



const payOne = new StackC("Our Payment Solution", (
    <div><h1 style={{textTransform: 'uppercase'}}>Parcel</h1><p className='textWreck' style={{fontSize: '1.2em'}}>Parcel is the software we use to execute transactions.  Guilds and
    projects have multi-signature wallets, which we interact with via Parcel's sleek interface to send payments to our contributers.</p></div>
), 0)
const payTwo = new StackC("Our Reward Mechanism", (
    <div><h1 style={{textTransform: 'uppercase'}}>Coordinape</h1><p className='textWreck' style={{fontSize: '1.2em'}}>This unique peer-to-peer compensation platform allows contributors 
    to reward each other for their work outside of role-holder payouts or bountied work.  Coordinape is our monthly way of saying "thank you" to each other.</p></div>
), 1)
const payThr = new StackC("Our Tipping Integration", (
    <div><h1 style={{textTransform: 'uppercase'}}>Collab land</h1><p className='textWreck' style={{fontSize: '1.2em'}}>Collab.land is a Discord integration that connects 
    with our Eth wallets so we can tip each other BANK in real time in the Discord server with no gas fees.  Tipping is as simple as writing: !tip,Contributor 
    handle, #, BANK.  Visit our #hype-and-recognition channel to see what people are getting tipped for!</p></div>
), 2)
let stackTwo = [payOne, payTwo,payThr]


const govOne = new StackC("Our Think Tank", (
    <div><h1 style={{textTransform: 'uppercase'}}>Forum</h1><p className='textWreck' style={{fontSize: '1.2em'}}>Forum is like the town square - it's where we share ideas, propose 
    new governance methods, and make decision before holding a formal vote.  Visit Forums to get a crash course in DAO governance and engage with some 
    of the space's most active thought-leaders.</p></div>
), 0)
const govTwo = new StackC("Our Voting Booth", (
    <div><h1 style={{textTransform: 'uppercase'}}>Snapshot</h1><p className='textWreck' style={{fontSize: '1.2em'}}>We hold votes on seasonal 
    funding and large-scale governance initiatives via Snapshot.  Any BANK holder can vote, and the size of your BANK holding determines 
    how much power your vote has.</p></div>
), 1)
let stackThree = [govOne, govTwo]
