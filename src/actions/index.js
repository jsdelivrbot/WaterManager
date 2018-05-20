export const initData = () => (dispatch) => {
	dispatch({type:"INIT_DATA" });
};


export const toogleGauge = id =>(dispatch) => {
	dispatch({type:"TOOGLE_GAUGE", payload: id});
};

export const setGaugeRate = (id,rate)=>(dispatch) => {
	dispatch({type:"SET_GAUGE_RATE", payload: {id, rate} });
};
