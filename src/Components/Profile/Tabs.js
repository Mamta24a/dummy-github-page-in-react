import React, { Component } from 'react';

class Tabs extends Component {
    render() {
        return (
            <div className="tabs">
                <div className="tab-menu">Overview</div>
                <div className="tab-menu active-tab">Repositories{" "}
                    <span className="counter hide-sm">12</span>
                </div>
                <div className="tab-menu">Projects{" "}
                    <span className="counter hide-sm">0</span>
                </div>
                <div className="tab-menu">Stars{" "}
                    <span className="counter hide-sm">7</span>
                </div>
                <div className="tab-menu">Followers{" "}
                    <span className="counter hide-sm">6</span>
                </div>
                <div className="tab-menu">Following{" "}
                    <span className="counter hide-sm">2</span>
                </div>
            </div>
        );
    }
}

export default Tabs;