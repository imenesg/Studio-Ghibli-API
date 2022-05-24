import React, { useState } from "react";

import "../assets/css/carousel.css"

function Carousel(){

    const [baner, setBaner] = useState(0)

    const banners = ["https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg", "https://image.tmdb.org/t/p/original/h5pAEVma835u8xoE60kmLVopLct.jpg", "https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg", "https://image.tmdb.org/t/p/original/hjlvbMKhQm7N8tYynr8yQ8GBmqe.jpg","https://image.tmdb.org/t/p/original/6a1qZ1qat26mAIK3Lq8iYdGpyHm.jpg"]

    function MudaBaner(){

          
    if(baner < banners.length ){
        setTimeout(() => {
            setBaner(baner + 1)
          }, "4000")
    }else{
        setBaner(0);
    }
}

MudaBaner()

    return(
        <div className="carousel">
            <div className="banners" >
                <img className="mySlides" src={banners[baner]} style={{width:'100%'}}></img>
            </div>
        </div>
    );
}

export default Carousel ;