import React, { Component } from 'react';
import moment from 'moment';
import { color } from '../../utilities/getLangColor.js';

class RepoCard extends Component {
    render() {
        let { repo } = this.props;
        return (
            <>
                <div className="repo-div text-gray">
                    <h3>
                        <a>{repo.name}</a>
                        <span className="float-right">
                            <button className="btn">
                                <i className="fa fa-star fa-sm" aria-hidden="true"></i>{" "}
                                Star
                            </button>
                        </span>
                    </h3>
                    {repo.fork && <small>
                        Forked from {"firstcontributions"}/{repo.forks_url.replace("https://api.github.com/repos/supreetsingh247/", "").replace("/forks", "")}
                    </small>}
                    {repo.description && <p>{repo.description}</p>}
                    <br />
                    <p>
                        {repo.language &&
                            <span className="repo-bottom">
                                <span className="lang-dot" style={{ background: color[repo.language] }}></span>
                                {repo.language}
                            </span>
                        }
                        {repo.stargazers_count !== 0 &&
                            <span className="repo-bottom">
                                <i className="fa fa-star" aria-hidden="true"></i>{" "}
                                {repo.stargazers_count}
                            </span>
                        }
                        {repo.forks_count !== 0 &&
                            <span className="repo-bottom">
                                <i className="fas fa-code-branch"></i>{" "}
                                {repo.forks_count}
                            </span>
                        }
                        {repo.license &&
                            <span className="repo-bottom">
                                <i className="fa fa-balance-scale" aria-hidden="true"></i>{" "}
                                {repo.license.name}
                            </span>
                        }
                        <small className="repo-bottom">
                            Updated on{" "}
                            {moment(repo.updated_at).format('D MMM YYYY')}
                        </small>
                    </p>
                </div>
                <hr />
            </>
        );
    }
}

export default RepoCard;