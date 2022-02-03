import React from 'react';
import { HomeService } from '../components/header/servicesComponents/servicesComponents';
import Services from './../servicesData';


function Stab1() {
    return (
        <>
          <div className="container rows">
        <div className="tabcontent" id="London">
          <div className="row">
          {Services.services.map((service) => ( 
          <HomeService key={service.id} service={service} />
         ))}
          </div>
          </div>
          </div>  
        </>
    );
}

export default Stab1;