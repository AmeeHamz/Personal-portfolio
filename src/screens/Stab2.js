import React from 'react';
import Services from './../servicesData';
import { HomeTechnology } from '../components/header/servicesComponents/servicesComponents';

function Stab3() {
    return (
        <>
           <div className="container rows">
            <div className="tabcontent" id="London">
              <div className="row">
              {Services.Technology.map((technology) => ( 
              <HomeTechnology key={technology.id} technology={technology} />
              ))}
        </div>
      </div>
      </div> 
        </>
    );
}

export default Stab3;


