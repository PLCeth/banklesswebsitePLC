import { Grid } from '@mui/material'
import * as React from 'react'


export const Coordination = (props) => {


    return (
        <div>
            <Grid container style={{justifyContent: 'center'}}>
                <Grid item xs={12} md={6}>
                    <h1 style={{textAlign: 'center'}}>Coordination Stack</h1>
                    <div className='divider' style={{maxWidth: '500px', marginTop: '0'}}></div>
                    <p className='centered textWreck' style={{textTransform: 'uppercase'}}>Tools for coordinating our global community of contributors</p> 
                </Grid>
                <Grid item xs={12} md={12} style={{minHeight: '500px'}} >
                </Grid>
            </Grid>
        </div>
    )
}