import React from 'react';

function RecentWeb(props) {
    const {website} = props;
    return (
        <div className="shop col-lg-3 col-md-4 col-sm-6">
        <div className="shopBack">
          <img src={website.image} alt={website.name} />
          <div className="shoplebal">
            <a href={`/websites/${website.id}`}>Read More</a>
          </div>
        </div>
        <div className="shoptext">
          <p>{website.name}</p>
          <h3> {website.description} </h3>
        </div>
      </div>
    );
}

export default RecentWeb;