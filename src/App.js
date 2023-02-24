import Header from "./Components/Header";
import "./Components/Style/App.scss";


import Home from "./Components/Home";

import Contact from "./Components/Contact";


import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import "./Components/Style/Mediaquery.scss"

const App=()=>{
  return(<>
  <Router>
    
    <Header></Header>
    <Routes>
      <Route  exact path="/"  element={<Home/>}></Route>
      
      <Route exact path="/contact" element={<Contact/>}></Route>
      <Route exact path="/services" element={<Services></Services>}></Route>
      <Route path="*" element={<Home/>}></Route>

    </Routes>
    <Footer></Footer>
   
    </Router>
    </>
  )
}
export default App;