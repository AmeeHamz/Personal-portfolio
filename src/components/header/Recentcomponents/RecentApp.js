import React from 'react';

function RecentApp(props) {
    const {app} = props;
    return (
        <div className="shop col-lg-3 col-md-4 col-sm-6">
        <div className="shopBack">
          <img src={app.image} alt={app.name} />
          <div className="shoplebal">
            <a href={`/apps/${app.id}`}>Read More</a>
          </div>
        </div>
        <div className="shoptext">
          <p>{app.name}</p>
          <h3> {app.description.substring(0, 50)}... </h3>
        </div>
      </div>
    );
}

export default RecentApp;