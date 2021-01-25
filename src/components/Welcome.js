import React from 'react';
import rd3 from 'react-d3-library';
// import simulation from './simulation.js';
import DropDownMenu from './DropDownMenu.js'
// import Comment from './Comment.js'
// import ForceDirectedGraphCanvas from './ForceDirectedGraphCanvas'
import StreamgraphTransitions from './StreamgraphTransitions'
// import node from 'd3file'; <Comment />



const Welcome = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <DropDownMenu />
            <StreamgraphTransitions />
        </div>

    )
}

export default Welcome;
