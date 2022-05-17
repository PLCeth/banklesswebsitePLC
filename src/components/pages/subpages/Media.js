import { Grid } from '@mui/material'
import * as React from 'react'


export const Media = (props) => {


    return (
        <div>
            <Grid container style={{justifyContent: 'center'}}>
                <Grid item xs={12} md={6}>
                    <h1 style={{textAlign: 'center'}}>Media Kit</h1>
                    <div className='divider' style={{maxWidth: '300px', marginTop: '0'}}></div>
                    <p className='textWreck centered' style={{textTransform: 'uppercase'}}>For Journalists, podcasters, and the media:</p>
                </Grid>
                <Grid item xs={12} md={12} style={{minHeight: '500px'}} >
                </Grid>
            </Grid>
        </div>
    )
}