import React, { Component } from 'react';
import RepoCard from './RepoCard';
import Tabs from './Tabs';

class RightPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLangMenu: false,
            showTypeMenu: false,
            typeFilter: "All",
            langFilter: "All",
            userRepoList: props.userRepoList,
            filteredRepoList: props.userRepoList,
            searchQuery: ""
        };
        this.typeMenuRef = React.createRef();
        this.langMenuRef = React.createRef();
    }

    componentDidMount() {
        this.props.userRepoListApi(this.props.currentUserHandle);
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            userRepoList: nextProps.userRepoList,
            filteredRepoList: nextProps.userRepoList
        })
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (e) => {
        if (this.typeMenuRef.current && !this.typeMenuRef.current.contains(e.target)) {
            this.setState({
                showTypeMenu: false,
                showLangMenu: false,
            })
        } else if (this.langMenuRef.current && !this.langMenuRef.current.contains(e.target)) {
            this.setState({
                showTypeMenu: false,
                showLangMenu: false,
            })
        }
    }

    handleType = () => {
        this.setState({
            showTypeMenu: true,
            showLangMenu: false,
        })
    }

    handleLang = () => {
        this.setState({
            showLangMenu: true,
            showTypeMenu: false,
        })
    }

    updateTypeFilter = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value,
            showLangMenu: false,
            showTypeMenu: false,
        }, () => {
            this.filterRepo(name)
        })
    }

    filterRepo = (stateName) => {
        let newArray = []
        if (stateName === "searchQuery") {
            newArray = this.state.userRepoList.filter((repo) => (
                (repo.name.toUpperCase().indexOf(this.state[stateName].toUpperCase()) > -1)
            ))
            this.setState({
                filteredRepoList: newArray
            })
        }
        if (stateName === "typeFilter") {
            switch (this.state[stateName]) {
                case "Forks":
                    newArray = this.state.userRepoList.filter((repo) => (
                        repo.forks_count > 0
                    ))
                    this.setState({
                        filteredRepoList: newArray
                    })
                    break;
                case "Archived":
                    newArray = this.state.userRepoList.filter((repo) => (
                        repo.archived === true
                    ))
                    this.setState({
                        filteredRepoList: newArray
                    })
                    break;
                case "Mirrors":
                    newArray = this.state.userRepoList.filter((repo) => (
                        repo.mirror_url !== null
                    ))
                    this.setState({
                        filteredRepoList: newArray
                    })
                    break;
                case "Sources":
                    this.setState({
                        filteredRepoList: []
                    })
                    break;
                case "All":
                    this.setState({
                        filteredRepoList: this.state.userRepoList
                    })
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        let { loadingRepo, currentUserHandle } = this.props;
        let { typeFilter, langFilter, showLangMenu, showTypeMenu, filteredRepoList, searchQuery } = this.state;
        let typeOptions = ["All", "Sources", "Forks", "Archived", "Mirrors"]
        return (
            <div className="col-lg-9 col-sm-12" >
                <Tabs />
                <hr className="margin-0" />
                <br />

                <div className="row padding-0 row-direction">
                    <div className="col-lg-8 col-sm-12 padding-0">
                        <input
                            type="text"
                            placeholder="Find a repository"
                            className="search-repo input-width"
                            name="searchQuery"
                            value={searchQuery}
                            onChange={this.updateTypeFilter}
                        />
                    </div>
                    <div className="col-lg-4 col-sm-12 padding-0">
                        <div className="row  padding-0 float-lg-right">
                            <div className="">
                                <div className="menubar-container">
                                    <button className="btn margin-sm-t-1 margin-r-1" onClick={this.handleType}>
                                        <span className="text-gray">Type</span>{" "}
                                        <b>{typeFilter}</b>{" "}
                                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                                    </button>
                                    {showTypeMenu &&
                                        (<div className="dropdown" ref={this.typeMenuRef}>
                                            <select
                                                id="cars"
                                                className="select"
                                                size={6}
                                                onChange={this.updateTypeFilter}
                                                name="typeFilter"
                                            >
                                                <option className="select-item" disabled >
                                                    Select type
                                                </option>
                                                {typeOptions.map(optn => (
                                                    <option key={optn} value={optn} className="select-item" >
                                                        {optn}&emsp;{(typeFilter === optn) && "✔"}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>)
                                    }
                                </div>
                            </div>
                            <div className="">
                                <div className="menubar-container">
                                    <button className="btn margin-sm-t-1" onClick={this.handleLang}>
                                        <span className="text-gray">Language</span>{" "}
                                        <b>{langFilter}</b>{" "}
                                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                                    </button>
                                    {showLangMenu &&
                                        <div className="dropdown" ref={this.langMenuRef}>
                                            <select id="cars" className="select" size={2} onChange={() => { this.setState({ showLangMenu: false }) }}>
                                                <option value="" className="select-item">Select type</option>
                                                <option value="" className="select-item">All&emsp; {"✔"}</option>
                                            </select>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <hr />
                {loadingRepo ?
                    <h2 className="text-gray">Loading...</h2> :
                    (filteredRepoList.length !== 0 ?
                        filteredRepoList.map(repo => (
                            <RepoCard repo={repo} key={repo.id} />
                        )) :
                        <h3 className="center">{currentUserHandle} doesn’t have any repositories that match.</h3>
                    )
                }
            </div>
        );
    }
}

export default RightPanel;