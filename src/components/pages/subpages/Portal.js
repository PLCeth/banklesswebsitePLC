import { Grid } from '@mui/material'
import * as React from 'react'


export const Portal = (props) => {


    return (
        <div>
            <Grid container style={{justifyContent: 'center'}}>
                <Grid item xs={12} md={6}>
                    <h1 style={{textAlign: 'center'}}>Portal To Nodes</h1>
                    <div className='divider' style={{maxWidth: '500px', marginTop: '0'}}></div>
                    <p className='centered' style={{fontSize: '1.5em'}} >BanklessDAO is only a part of a larger <span style={{color: '#f00'}}>ecosystem of nodes </span>
                     that amplify the Bankless movement.</p> 
                </Grid>
                <Grid item xs={12} md={12} style={{minHeight: '500px'}} >
                </Grid>
            </Grid>
        </div>
    )
}