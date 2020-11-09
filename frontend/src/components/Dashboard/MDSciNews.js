import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../redux/sciNews/sciNewsActions';

//Components:
import SciCarousel from './SciCarousel';

const MDSciNews = ({ getNews, news }) => {

    const handleGetRequest = e => {
        e.preventDefault();
        console.log('GET request dispatched');
        getNews();
    }

    return (
        <>
            <div>
                <h2>Sci-News</h2>
                <button onClick={handleGetRequest}>
                    Refresh News
                </button>
            </div>
            <div>
                <div>
                    <SciCarousel />
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        news: state.news,
    }
}

export default connect(mapStateToProps, { getNews })(MDSciNews);