import React from 'react';

const About = () => {
    return (
        <div>
            <h1>About:</h1>
            <h3>Visualize data from <a href="https://exoplanetarchive.ipac.caltech.edu/index.html">NASA's database of exoplanets</a> using <a href="https://d3js.org/D3">D3!</a></h3>
          <p>Create visualizations that draw on these data types:</p>
            <ul>
              <p>Star Metallicity</p>
              <p>Star Luminosity</p>
              <p>Star Optical Magnitude</p>
              <p>Star Gravity</p>
              <p>Star Mass</p>
              <p>Star Effective Temperature</p>
              <p>Planet Equilibrium Temperature</p>
              <p>Planet Radius</p>
              <p>Planet Orbital Period</p>
              <p>Planet Orbital Eccentricity</p>
              <p>Planet Density</p>
              <p>Planet Semi-Major Axis</p>
            </ul>
        </div>
    )
}

export default About;

// componentDidMount
// fetch GET request from Visual
// Postman: should list all the available systems by name!
// SELECT system_name FROM main_app_visual;
// put systems in STATE
// dropdown menu component reflects the state
