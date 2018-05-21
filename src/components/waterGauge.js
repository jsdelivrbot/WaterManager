import React, { Component } from 'react';

export default  class waterGauge extends Component {
 
	getStrokevalue()
	{


		let ratio = Math.round(this.props.rate / 20 * 50 ) < 50 ? Math.round(this.props.rate / 20 * 50 ) : 50 ;
		let strokevalue = ratio +" "+(100 - ratio);
		return  strokevalue ;
	}

	getDisplayColor(){

		if (this.props.rate > 20) 
		{
			return "red";
		} 
		else if(this.props.rate > 10)
		{
			return "orange";
		}
		else
		{
			return "#8066c2";
		}	
				
	}
  render() {
    return (
      <div className="gaugeItem" >
      	<p  className="gaugeTitle">Appartement {this.props.apartment}</p>
      	   	
       	<svg width={200} height={100} viewBox="0 0 42 42" >
       		 
       		 <circle  cx="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"
       		  cy="21" strokeDasharray="50 50" strokeDashoffset="50"></circle>
       		 {this.props.state && 
       		 	<circle  cx="21" r="15.91549430918954" fill="transparent" stroke={this.getDisplayColor()} strokeWidth="3" strokeDasharray={this.getStrokevalue()}
       		 cy="21" strokeDashoffset="50"></circle>
       		}
       		 <text textAnchor="middle" x="21" y="19" baselineShift="" fill="white" style={{fontSize: "4px"}} >
                <tspan >{this.props.rate}</tspan>
                <tspan  >L/min</tspan>
            </text>
       		 <text textAnchor="middle" x="21" y="26" baselineShift="" fill="white" style={{fontSize: "5px"}} >
                <tspan >{this.props.comsuption}</tspan>
                <tspan  >L</tspan>
            </text>

      	</svg>
     
      </div>
    );
  }
}
