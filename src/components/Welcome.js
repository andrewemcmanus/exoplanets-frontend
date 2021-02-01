import React from 'react';
// import rd3 from 'react-d3-library';
// import Comment from './Comment.js'
import SystemNames from './SystemNames'
// import ForceDirectedGraphCanvas from './ForceDirectedGraphCanvas'
import StreamgraphTransitions from './StreamgraphTransitions'
// import ForceDirectedLattice from './ForceDirectedLattice'
import NewComponent from './NewComponent'

const Welcome = () => {
    return (
        <div>
            <h1>Visualize Exoplanetary Systems in D3!</h1>
            <h3>Select from over 70 different systems below.</h3>
            <h3>Visualizations like this will be used to model temperature differences between planets and the host star:</h3>
            <StreamgraphTransitions />
            <SystemNames />
        </div>

    )
}

export default Welcome;
