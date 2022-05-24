import React, { useState ,useEffect } from "react";

import "../assets/css/films.css"


import BigCard from "./BigCard";

function Films(){
    

    const [films, setFilms] =  useState(null)

    const [infoFIlm , setInfoFIlm] = useState(null)

  
  function setaInfos(img, title, score, time, description ){
    setInfoFIlm([img, title, score, time, description])
  }

   function resetInfoFIlm(){
    setInfoFIlm(null)
  }
    function BusacaFilms() {

      useEffect(()=>{
        fetch(
          `https://ghibliapi.herokuapp.com/films`
        )
          .then((resposta) => {
            if (resposta.status === 200) {
              return resposta.json();
            }
          })
          .then((dados) => {
            setFilms(dados);
          });
      },[]);
      
      }
      BusacaFilms()
      
      
    return(
      
        <div className="Films">
        
        <h2 className="h2Films">FILMS</h2>
       
        <div className="allFilms">

          {films? (
            <>
            {
              infoFIlm? (<BigCard img={infoFIlm[0]} title={infoFIlm[1]} score={infoFIlm[2]} time={infoFIlm[3]} description={infoFIlm[4]} remove={resetInfoFIlm}> </BigCard>)
              :null
            }
            
            
            {films.map((film, index)=>{
              return(
                <img className="movie_img" src={film.image} key={index} alt="Movie banner" onClick={()=> setaInfos(film.movie_banner, film.title, film.rt_score, film.running_time, film.description) }></img>
              )
              
            })}
            </>
             
          ): null}

        

          

          </div>
        </div>
    );
}


export default Films;