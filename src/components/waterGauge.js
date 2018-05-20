import React, { Component } from 'react';

export default  class waterGauge extends Component {
 
	getStrokevalue()
	{


		let ratio = Math.round(this.props.rate / 15 * 100 ) ;
		let strokevalue = ratio +" "+(100 - ratio);
		return  strokevalue ;
	}

	getDisplayColor(){

		if (this.props.rate > 10) 
		{
			return "orange";
		} 
		else if(this.props.rate > 25)
		{
			return "red";
		}
		else
		{
			return "green";
		}	
				
	}
  render() {
    return (
      <div className="gaugeItem" >
      	<p  className="gaugeTitle">Appartement : {this.props.apartment}</p>
      	   	
       	<svg width={200} height={100} viewBox="0 0 42 42" >
       		 
       		 <circle  cx="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"
       		  cy="21" strokeDasharray="50 50" strokeDashoffset="50"></circle>
       		 {this.props.state && 
       		 	<circle  cx="21" r="15.91549430918954" fill="transparent" stroke={this.getDisplayColor()} strokeWidth="3" strokeDasharray={this.getStrokevalue()}
       		 cy="21" strokeDashoffset="50"></circle>
       		}
       		 <text textAnchor="middle" x="21" y="18" baselineShift="" style={{fontSize: "4px"}} >
                <tspan >{this.props.rate}</tspan>
                <tspan  >L/min</tspan>
            </text>
       		 <text textAnchor="middle" x="21" y="25" baselineShift="" style={{fontSize: "4.5px"}} >
                <tspan >{this.props.comsuption}</tspan>
                <tspan  >L</tspan>
            </text>

      	</svg>
     
      </div>
    );
  }
}
