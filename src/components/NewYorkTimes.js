import Axios from 'axios';
import React, { Component } from 'react';
import XMLParser from 'react-xml-parser';


class NewYorkTimes extends Component {

    componentDidMount(){
        Axios
	.get("https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", {
		"Content-Type": "application/xml; charset=utf-8"
	 })
	.then(response => (response.data))
    .then(data => {
        var xml = new XMLParser().parseFromString(data);
        let filtered = xml.children[0].children.filter(d => d.name ==="item")
        console.log(filtered)
        this.setState({
            items: filtered
        })
    })
	.catch(function(error) {
		console.log(error);
	});
    }

    state = {
        items: []
    }

    render (){
        return(
            <div>test</div>
        )
    }
}  

export default NewYorkTimes