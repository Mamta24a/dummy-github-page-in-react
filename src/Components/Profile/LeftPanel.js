import React, { Component } from 'react';

class LeftPanel extends Component {

    componentDidMount() {
        this.props.userDetailsApi(this.props.currentUserHandle);
    }

    render() {
        let { loadingUser, userDetails } = this.props;
        return (
            <div className="col-lg-3 col-sm-12 right-padding-2">
                {loadingUser ?
                    "Loading" :
                    <div>
                        <img
                            className="profile-pic"
                            src={userDetails.avatar_url}
                            alt="surpreet_image"
                        />
                        <div className="block-div">
                            <h2 className="">{userDetails.name}</h2>
                            <h3 className="text-gray top-margin-0 remove-bold">{userDetails.login}</h3>
                        </div>
                        <button className="btn btn-block">Follow</button>
                        <div className="block-div">
                            <p>{userDetails.bio}</p>
                            <p>
                                <i className="fas fa-user-friends" style={{ color: "gray" }}></i>{" "}
                                {userDetails.company}
                            </p>
                            <p>
                                <i className="fas fa-map-marker-alt" style={{ color: "gray" }}></i>{" "}
                                {userDetails.location}
                            </p>
                            <p>
                                <i className="far fa-envelope" style={{ color: "gray" }}></i>{" "}
                                <a href="mailto:supreetsingh.247@gmail.com?Subject=Hello%20again" target="_top">supreetsingh.247@gmail.com</a>
                            </p>
                            <br />
                            <p>Block or report user</p>
                        </div>
                    </div>}
            </div>
        );
    }
}

export default LeftPanel;