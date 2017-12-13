import React, { Component }

class AllChart extends Component{
    constructor(){
        super()
        this.state = {
            clicked: false,
            style: {
                data: {fill: 'tomato'}
            }
        }
    }

    render() {
        const handleMouseOver = () => {
            const fillColor = this.state.clicked ? 'blue' : 'tomato'
            const clicked = !this.state.clicked
            this.setState({
                clicked,
                style: {
                    data: { fill: fillColor }
                }
            })
        }
        
        return (
            
        )
    }
}