import React, { Component } from 'react';
import {connect} from 'react-redux'; 

import * as actions from '../actions/index';

class controlPanel extends Component {

	constructor(props){
		super(props);
		this.state = {id : 0, building:"A", floor:0 , apartment: 1 , newRate: 3}; 
		this.handleChangeInputRate = this.handleChangeInputRate.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	 handleChangeInputRate(event) {
	 	console.log(this.state);
    	this.setState({newRate: event.target.value});
    	console.log(this.state);
  	}


  	handleSelectChange(event){
  		console.log(this.state);
  		this.setState({ [event.target.name]: event.target.value});
  		console.log(this.state);
  		this.setId();
  		}

  	setId(){
  	       let selectedGauge = this.props.gaugeList.filter(gauge =>{ 
  				return ( gauge.building == this.state.building && 
  						gauge.floor == this.state.floor &&
  						gauge.apartment == this.state.apartment); 

   			});
  	       if (selectedGauge.length == 1)
  	       {
  	       		this.setState({id: selectedGauge[0].id}) ;
  	        }
  	       else 
  	       	{
  	       		this.setState({id:0} ); 
 			}
  	}

	render() {

    return (
    	<div>Ceci est le control panel de l'admin 
			<div> Seletionner le compter  
    			<select id="building" name="building" onChange={this.handleSelectChange} >Batiment : 
		    		<option value="A">Batiment A</option> 
		 			<option value="B">Batiment B</option>
		 			<option value="C">Batiment C</option>
		 			<option value="D">Batiment D</option>
    			</select >
    			<select id="floor" name="floor" onChange={this.handleSelectChange} >Etage : 
		    		<option value="0">rez de chaussé</option> 
		 			<option value="1">1er étage</option>
		 			<option value="2">2ème étage</option>
		 			<option value="3">3ème étage </option>
		 			<option value="4">4ème étage </option>
		    	</select >
		    	<select id="apartment" name="apartement" onChange={this.handleSelectChange} >Etage : 
		    		<option value="1">Appartement 1</option> 
		 			<option value="2">Appartement 2</option>
		 			<option value="3">Appartement 3</option>
		 			<option value="4">Appartement 4 </option>
		 	   	</select >
		 	   	<br/>
	    		<button onClick={()=> this.props.toogleGauge(this.state.id)} disabled={this.state.id == 0 } >Switch </button>
	    		<input  type="number" value={this.state.newRate} min="0" max="64" onChange={this.handleChangeInputRate}/>
	    		<button onClick={()=> this.props.setGaugeRate(this.state.id,this.state.newRate)} disabled={this.state.id == 0 } >Changez le debit</button>
		    </div>
		</div>

    	);
	}
}

function mapStateToProps(state){

	return {
		gaugeList: state.gaugeList, 
	};
}



export default connect(mapStateToProps,actions)(controlPanel);
