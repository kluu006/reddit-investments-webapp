import React, { Component } from 'react';
import {Chart, Line} from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css'

class ChartScript extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    
    callBack(data){
        console.log(data);
        var chart_data = data;
        var array = []
        var x = []
        for(let point in chart_data){
            x.push(chart_data[point].date);
            array.push(chart_data[point].score);
        }
        var bart_data = this.test(array,x)

        return bart_data;
    };
    test(mata, x){
        var data = {
        labels: x,
        datasets: [
                {
                    label: "Stonkssssss",
                    backgroundColor: 'rgb(255, 99, 132)',
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,0.8)",
                    data: mata
                }
            ]
        };
        return data;
    
    };

    handleClick = (event) =>{
        fetch(`/threads/${event.target.innerText}`)
            .then(res => res.json()) 
            .then(threads => this.setState({data: threads}, console.log(threads)));
    }
    
    componentDidMount(){
        /*
        fetch('/threads/CLOV')
            .then(res => res.json())
            .then(threads => this.setState({data: threads}, console.log(threads)));
        */
    }
    render(){
        return(
            <div>
                <DropdownButton id="dropdown-basic-button" title ="stocks dropdown">
                    <Dropdown.Item onClick={this.handleClick}>CLOV</Dropdown.Item>
                    <Dropdown.Item onClick={this.handleClick}>AAPL</Dropdown.Item>
                    <Dropdown.Item onClick={this.handleClick}>GME</Dropdown.Item>
                </DropdownButton>
                <Button variant="primary" onClick={this.buttonClick}>
                    Line
                </Button>
                <button onClick={this.handleClick}>
                    TEST
                </button>
                <canvas id="myChart"></canvas>
                <Line data={this.callBack(this.state.data)}/>
            </div>
        );
    }
}

export default ChartScript;