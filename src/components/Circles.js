import * as React from 'react'
import { Journey } from './StartJourney'


export const Circles = (props) => {

    return (
        <div>

        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingTop: '100px', paddingBottom: '100px'}}>
            <div style={{borderRadius: '100%', border: '20px solid #f00', backgroundColor: '#000', minWidth: '50px', minHeight: '50px', opacity: '0.3'}}></div>
            <div style={{borderRadius: '100%', border: '30px solid #f00', backgroundColor: '#000', minWidth: '100px', minHeight: '100px'}}></div>
            <div style={{borderRadius: '100%', border: '20px solid #f00', backgroundColor: '#000', minWidth: '50px', minHeight: '50px', opacity: '0.3'}}></div>
        </div>
        <div>
            <Journey />
        </div>
        </div>
    )
}