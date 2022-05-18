import { Grid, Container, Button } from '@mui/material'
import * as React from 'react'
import { Slide, Fade } from 'react-reveal'


export const Portal = (props) => {

    React.useEffect(() => {
        // scroll to stop
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])
    
    return (
        <div>
            <Grid container style={{justifyContent: 'center', padding: '20px'}}>
                <Grid item xs={12} md={6}>
                    <Fade>
                    <h1 style={{textAlign: 'center'}}>Portal To Nodes</h1>
                    <div className='divider' style={{maxWidth: '500px', marginTop: '0'}}></div>
                    <p className='centered' style={{fontSize: '1.5em'}} >BanklessDAO is only a part of a larger <span style={{color: '#f00'}}>ecosystem of nodes </span>
                     that amplify the Bankless movement.</p> 
                     </Fade>
                </Grid>
            </Grid> 

            <Container>
            <Grid container>
                <Grid item xs={12} md={12} style={{minHeight: '300px', backgroundColor: '#fff2'}} >

                </Grid>

            
                <Grid item xs={12} md={5} style={{padding: '25px'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/DAO-Punk-Invest.webp'} alt="dao punks" style={{maxWidth: '100%', borderRadius: '20px'}} />
                    </Fade>
                </Grid>
                <Grid item xs={12} md={7} style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
                    <Slide up>
                    <h1>DAO PUNKS</h1>
                    <p className='textWreck'>
                    Is a node within the Bankless ecosystem that helps contributors transition to full-time DAO. DAOpunk NFTs designed by Crypto Bushi allow access to the Discord server. Join to connect with other punks making the journey to liberating, decentralized work.
                    </p>
                    <Button color="error" variant="contained">Invest in a DAOPunk NFT</Button>
                    </Slide>
                </Grid>


                <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                    <Slide bottom>
                    <h2 style={{textTransform: 'uppercase', textAlign: 'center'}}>BANKLESS HQ</h2>
                    <div className='divider'></div>
                    <p className='textWreck centered' style={{color: '#fff'}}>Is the founding node of the Bankless media ecosystem. Led by David Hoffman and Ryan Sean Adams, this node runs the original Bankless podcast and the Bankless newsletter. It’s often referred to as “Bankless HQ” or “Bankless LLC.”</p>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                    <Slide bottom>
                    <h2 style={{textTransform: 'uppercase', textAlign: 'center'}}>International Media Nodes</h2>
                    <div className='divider'></div>
                    <p></p>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={12} style={{padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '100px'}}>
                    { nodeList.map((node) => {
                        return (
                            <div style={{padding: '20px', textDecoration: 'underline'}}>{ node.name }</div>
                        )
                    })}
                </Grid>
            </Grid>
            </Container>

        </div>
    )
}

class Node {
    constructor(name,path) {
        this.name = name;
        this.path = path;
    }
}

const nodeList = [
    new Node("Bankless Adria",''),
    new Node("Bankless Africa",''),
    new Node("Bankless Australia",''),
    new Node("Bankless Brazil",''),
    new Node("Bankless Bulgaria",''),
    new Node("Bankless China",''),
    new Node("Bankless Czech",''),
    new Node("Bankless Farsi",''),
    new Node("Bankless France",''),
    new Node("Bankless Germany",''),
    new Node("Bankless Greece",''),
    new Node("Bankless Hindi",''),
    new Node("Bankless Italy",''),
    new Node("Bankless Spain",''),
    new Node("Bankless Sweden",''),
    new Node("Bankless Turkey",''),
    new Node("Bankless Ukraine",''),
    new Node("Bankless Vietnam",''),
]