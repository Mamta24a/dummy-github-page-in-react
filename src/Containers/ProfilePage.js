import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftPanel from '../Components/Profile/LeftPanel';
import RightPanel from '../Components/Profile/RightPanel';
import { userRepoListApi, userDetailsApi } from '../actions/profileActions';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUserHandle: props.match.params.handle,
            userDetails: props.profileStates.userDetails,
            loadingUser: props.profileStates.loadingUser,
            userRepoList: props.profileStates.repoList,
            loadingRepo: props.profileStates.loadingRepo,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentUserHandle: nextProps.match.params.handle,
            userDetails: nextProps.profileStates.userDetails,
            loadingUser: nextProps.profileStates.loadingUser,
            userRepoList: nextProps.profileStates.repoList,
            loadingRepo: nextProps.profileStates.loadingRepo,
        })
    }

    render() {
        let { currentUserHandle, userDetails, loadingUser, userRepoList, loadingRepo } = this.state;
        let { userDetailsApi, userRepoListApi } = this.props;
        return (
            <div className="container">
                <div className="row row-direction">
                    <LeftPanel
                        currentUserHandle={currentUserHandle}
                        userDetailsApi={userDetailsApi}
                        loadingUser={loadingUser}
                        userDetails={userDetails}
                    />
                    <RightPanel
                        currentUserHandle={currentUserHandle}
                        userRepoListApi={userRepoListApi}
                        loadingRepo={loadingRepo}
                        userRepoList={userRepoList}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profileStates: state.profileStates
})

const mapActionsToProps = {
    userRepoListApi: userRepoListApi,
    userDetailsApi: userDetailsApi,
}

export default connect(mapStateToProps, mapActionsToProps)(ProfilePage);