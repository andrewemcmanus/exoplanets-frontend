import React from 'react';
import rd3 from 'react-d3-library';
// import simulation from './simulation.js';
// import Comment from './Comment.js'
import SystemNames from './SystemNames'
// import ForceDirectedGraphCanvas from './ForceDirectedGraphCanvas'
import StreamgraphTransitions from './StreamgraphTransitions'
// import node from 'd3file'; <Comment />



const Welcome = () => {
    return (
        <div>
            <StreamgraphTransitions />
            <h1>Visualize Exoplanetary Systems in D3!</h1>
            <SystemNames />

        </div>

    )
}

export default Welcome;
