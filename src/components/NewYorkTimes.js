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
        let newFiltered = filtered.map(item => item.children)
        console.log(newFiltered)
        this.setState({
            items: newFiltered
        })
    })
	.catch(function(error) {
		console.log(error);
	});
    }

    state = {
        items: []
    }

    renderItems = () => {
        return(
        this.state.items.map(item => (
            <div className = "item">
                <a class='btn btn-link' href={item[1].value}><h3>{item[0].value}</h3></a>
                <p>{item[4].value}</p>
            </div>

        ))
        )
    }

    render (){
        return(
            <div className="feed">
                {this.renderItems()}
            </div>
            
        )
    }
}  

export default NewYorkTimes