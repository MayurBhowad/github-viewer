import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DataContext from '../../DataContext';
import Repo from './Repo.component';

function UserHome(props) {
    let { avatar_url, name, login, location, bio, public_repos } = props.data.user_info;
    return (
        <div className="App">
            <div className="go-back">
                <Link className='link' to="/">GO Back</Link>

            </div>
            <div className="user-display">
                <img src={avatar_url} className="user-avatar" alt="" />
                <h1>{name}</h1>
                <p className="user-username">@{login} from {location}</p>
            </div>
            <div className="details">
                {bio ? (<div className="bio">
                    <p>{bio}</p>
                </div>) : null}
                <h4>Total Public Repositories: {public_repos}</h4>
            </div>
            <Repo stateData={props.data} />
        </div>
    )
}

const mapStateTopProps = state => ({
    data: state.data
})

export default connect(mapStateTopProps, {})(UserHome)
