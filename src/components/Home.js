import React, { Component } from 'react';

class Home extends Component {

    renderTime = () => {
        var today = new Date();

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        var date = (monthNames[today.getMonth()])+' '+today.getDate()+', '+today.getFullYear();
        return date

    }

    render (){
        return(
            <div>
                <p>Welcome! Today's date is {this.renderTime()}</p>
            </div>
        )
    }
}  

export default Home