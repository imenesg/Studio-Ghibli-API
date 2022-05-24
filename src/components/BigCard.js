import React from "react";
import "../assets/css/films.css"
import tomato from "../assets/img/tomato.svg"



function BigCard(props){
    return(
        <div className="containerBigcard blurred-container">
            <div className="bigcard">
                <div className="close" onClick={props.remove}><i className='bx bx-x'></i></div>
                <img src={props.img} alt="movie banner"></img>

                <span className="title">{props.title}</span>

                <div className="Nota_duracao"> <span className="nota"><img className="tomato" src={tomato} alt="rt score"></img>{props.score}</span>       <span className="duracao"><i className='bx bxs-stopwatch time'></i>{props.time}m</span>    <span className="duracao"><i className='bx bxs-calendar time'></i>{props.release_date}</span></div>


                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default BigCard;