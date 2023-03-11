import React from "react";

function Card(props){
          return(
                    <div className="card-list">
                              <img src={props.item.coverimg} alt="" className="hero-img" />
                                        <div className="card-detail">
                                                  <h1 className="card-header">{props.item.title}</h1>
                                                  <p className="card-paragraph">{props.item.description}</p>
                                        </div>

                                        <div className="description">
                                                  {/* <img src="../images/world.jpg" alt="location" className="location" />  */}
                                                  <span className="country">{props.item.country}</span>                                                  
                                                  <div className="date-detail">
                                                            <span className="start-date">Start Date : {props.item.start_date}</span><br />
                                                            <span className="end-date">End Date : {props.item.end_date}</span><br /> 
                                                            <a href={props.item.map} className="map" target="_blank">View on Google Map </a>   
                                                  </div>                                   
                                        </div>
                    </div>

          )
}
export default Card
