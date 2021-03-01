import React from 'react'

function Repo(props) {
    let displayRepo;
    if (props.stateData.All_repos.length > 0) {
        displayRepo = props.stateData.All_repos.map(el => (
            <RepoRow repoInfo={el} />
        ))
    }
    return (
        <div>
            <hr />
            <p>All Repositories</p>
            {displayRepo}
        </div>
    )
}

function RepoRow(props) {
    let { id, full_name, stargazers_count, watchers, has_issues, open_issues, forks } = props.repoInfo;
    let { login } = props.repoInfo.owner;
    return (
        <div key={id} className="repo-row">
            <h3>{full_name}</h3>
            <h4 className="text-muted">Owner: @{login}</h4>

            <div className="repo-details">
                <div className="left">
                    <p>Stars: {stargazers_count}</p>
                    <p>Watch: {watchers}</p>
                </div>
                <div className="right">
                    <p>Issues: {has_issues ? open_issues : '0'}</p>
                    <p>Forks: {forks}</p>
                </div>
            </div>
        </div>
    )
}


export default Repo
