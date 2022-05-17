import { Grid } from '@mui/material'
import * as React from 'react'


export const Projects = (props) => {


    return (
        <div>
            <Grid container style={{justifyContent: 'center'}}>
                <Grid item xs={12} md={6}>
                    <h1 style={{textAlign: 'center'}}>Projects</h1>
                    <div className='divider' style={{maxWidth: '500px', marginTop: '0'}}></div>
                    <p className='centered' style={{fontSize: '1.5em', lineHeight: '1.8em', textAlign: "justify"}} >
                        Projects enable Guilds and bDAO members to collaborate and scale the Bankless 
                        movement.  From consulatancy services to bot integrations to newsletters, we 
                        have multiple ongoing projects and more coming on the docket.  Here are our current projects:</p> 
                </Grid>
                <Grid item xs={12} md={12} style={{minHeight: '500px'}} >
                </Grid>
            </Grid>
        </div>
    )
}