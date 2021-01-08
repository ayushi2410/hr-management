import {useState,useEffect} from 'react';
import M from 'materialize-css';
const Attendance=(props)=>{
	return(
		<div className="col">
		<>
			{ 
			props.emp.map((e,index)=><div class="row">

				               <div class="row">
								    <div class="col s12 m6">
								      <div class="card blue-grey darken-1">
								     
								        <div class="card-content white-text">
								          <span class="card-title">{e.name}</span>
								          <p>{e.role}</p>
								         
								        </div>
								        <div class="card-action">
								          <a href="#">Present</a>
								          <a href="#">Absent</a>
								        </div>
								      </div>
								    </div>
                                  </div>
			                   </div>
			              )
			}
	</>
	</div>
		);
}
export default Attendance;