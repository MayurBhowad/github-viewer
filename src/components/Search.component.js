import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getDataFromApi } from '../redux/actions/getData.action';

const Search = (props) => {
    const [stringToSearch, setStringToSearch] = React.useState();

    React.useEffect(() => {
        props.getDataFromApi(props.history, stringToSearch);
    }, [])


    function settingSearchString(e) {
        e.preventDefault();
        setStringToSearch(e.target.value);
    }

    function searchByString(e) {
        e.preventDefault();
        props.getDataFromApi(props.history, stringToSearch)
    }

    return (
        <div onSubmit={e => searchByString(e, stringToSearch)} className="search">
            <form className="search-form">
                <input className="search-input" type="search" onChange={e => setStringToSearch(e.target.value)}
                    placeholder="Search Github user's" />
                <input className="btn btn-search" type="submit" value="search" />
            </form>
        </div>
    )
}

const mapStateTopProps = state => ({
    data: state.data
})

export default connect(mapStateTopProps, { getDataFromApi })(withRouter(Search))
