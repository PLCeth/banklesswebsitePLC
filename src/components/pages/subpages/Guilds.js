import { Grid } from '@mui/material'
import * as React from 'react'


export const Guilds = (props) => {


    return (
        <div>
            <Grid container style={{justifyContent: 'center'}}>
                <Grid item xs={12} md={6}>
                    <h1 style={{textAlign: 'center'}}>Guilds</h1>
                    <div className='divider' style={{maxWidth: '500px', marginTop: '0'}}></div>
                    <p className='centered' style={{fontSize: '1.5em', lineHeight: '1.8em'}} >
                        Guilds are the way we organize our contributors.  These talent pools serve as a way for individuals 
                        who share common interests, professional backgrounds, and skills to come together and incubate 
                        projects.  There are 13 guilds within bDAO.</p> 
                </Grid>
                <Grid item xs={12} md={12} style={{minHeight: '500px'}} >
                </Grid>
            </Grid>
        </div>
    )
}