import Header from "./components/Header.js";
import Carousel from "./components/Carousel.js";
import Films from "./components/Films.js";
import Buttonslink from "./components/Buttonslink.js";


import "../src/assets/css/reset.css"
import "../src/assets/css/Variaveis.css"
import "../src/assets/css/body.css"
import "../src/assets/css/Header.css"

function App() {
  return (
    <>
    <Header></Header>
    <Carousel></Carousel>
    <Films></Films>
    <Buttonslink></Buttonslink>
    </>
   
  );
}

export default App;
