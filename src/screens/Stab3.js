import React from 'react';
import { HomeIndustry } from '../components/header/servicesComponents/servicesComponents';
import Services from './../servicesData';

const Stab2 = () => {
    return (
        <>
         <div className="container rows">
        <div className="tabcontent" id="London">
          <div className="row">
          {Services.Industry.map((industry) =>( 
          <HomeIndustry key={industry.id} industry={industry} />
         ))}
          </div>
          </div>
          </div>   
        </>
    );
}

export default Stab2;
