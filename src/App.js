import React from "react";
import Footer from "./components/header/footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen.js';
import AppScreen from "./screens/AppScreen";
import WebsiteScreen from "./screens/WebsiteScreen";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
   <main>
    <Route path="/" exact={true} component={HomeScreen}/>
    <Route path="/app"  component={AppScreen} />
    <Route path="/website"  component={WebsiteScreen} />
    
   </main>
    {/* FOOTER */}
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
