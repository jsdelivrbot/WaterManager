import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import WaterGauge from '../components/WaterGauge';
import * as actions from '../actions/index';

class waterGaugeContainer extends Component {

	componentDidMount(){
		this.props.initData();
	}




	renderGaugeList(building){
												
		return (
			<div>
			<div className="buildingTitle"> BATIMENT {building}</div> 
			{this.props.gaugeList.filter(ele=> ele.building === building)
						.reduce((newlist,ele)=>{
							let floor = ele.floor;
								if(!newlist[floor])
								{
									newlist[floor]=[];
								}
								newlist[floor].push(ele);
								return newlist},[])
						.map( (floor,index) => {
							
							let components = floor.map(ele=>{return (<WaterGauge key={ele.id} {...ele}/>);});	
							return (
								<div className="floor" key={"floor"+index} >
									<div className="floorAcrostic" >{ (index === 0) ? "REZ" : "ETAGE"+ index }</div>
									{ components}
								</div>
								)}
							)
			}
			</div> );
		
		

	}

  render() {

  	
    return (
      <div className="gaugeList">
       	{this.renderGaugeList("A")}
     	{this.renderGaugeList("B")}
     	{this.renderGaugeList("C")}
     	{this.renderGaugeList("D")}
     
      </div>
    );
  }
}

function mapStateToProps(state){

	return {
		gaugeList : state.gaugeList,
  		gaugeAddresses: state.gaugeAddresses, 
	};
}

export default connect(mapStateToProps,actions)(waterGaugeContainer);