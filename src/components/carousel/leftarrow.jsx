import React, { Component } from 'react';

class LeftArrow extends Component {
    state = {}
    render() {
        return (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlnsXlink="http://www.w3.org/1999/xlink" height="35px" width="35px" enableBackground="new 0 0 129 129">
                <g>
                    <path className="left_arrow_svg" fill="black" d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" />
                </g>
            </svg>
        );
    }
}

export default LeftArrow;