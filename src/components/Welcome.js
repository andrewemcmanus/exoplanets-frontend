import React from 'react';
import rd3 from 'react-d3-library';
import simulation from './simulation.js';
import ForceDirectedGraphCanvas from './ForceDirectedGraphCanvas'
import StreamgraphTransitions from './StreamgraphTransitions'
// import node from 'd3file';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <StreamgraphTransitions />
            // <ForceDirectedGraphCanvas />
        </div>

    )
}

export default Welcome;
