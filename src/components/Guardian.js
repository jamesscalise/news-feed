import React, { Component } from 'react';
import Guardian  from 'guardian-js';

class GuardianComponent extends Component {

    renderItems = () => {
        const guardian = new Guardian(process.env.REACT_APP_GUARDIAN_API_KEY, false)
        guardian.content.search('news')
        .then(response => {
            console.log(response.body)
        })
    }

    render (){
        return(
        <div>{this.renderItems()}</div>
        )
    }
}  

export default GuardianComponent