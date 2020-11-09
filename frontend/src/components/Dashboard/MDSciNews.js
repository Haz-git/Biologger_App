import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../redux/sciNews/sciNewsActions';

import { AiOutlineReload } from 'react-icons/ai';

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
                <h2>Sci-News!
                    <button onClick={handleGetRequest}>
                        <AiOutlineReload />
                    </button>
                </h2>
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