import * as React from 'react'
import { Button, Container } from '@mui/material';

export class Slider {
    constructor(title, content, id) {
        this.title = title;
        this.content = content;
        this.id = id;
    }
}

export const ContentSlider = (props) => {
    const [ curSlide, setSlide ] = React.useState(0)

    const setCurSlide = (sl) => {
        setSlide(sl)
    }

    return (
        <Container>
            
            <div style={{textAlign: 'center'}}>
                { /* Buttons */ }
                { props.slides.map((slide) => {
                    return (
                        <Button color="error" variant="contained" style={{marginBottom: '10px', borderBottom: (curSlide === slide.id ? '2px solid #f00':'')}} onClick={() => {setCurSlide(slide.id)}} className="slideBtn">{ slide.title }</Button>
                    )
                })}
            </div>
            <div>
                { props.slides[curSlide].content }
            </div>
        </Container>
    )
}
