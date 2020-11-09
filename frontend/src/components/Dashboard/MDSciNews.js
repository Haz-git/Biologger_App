import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../redux/sciNews/sciNewsActions';

import SciCard from './SciCard';
/*
news api key: 3c9c2e2fa85142fb957890523a2bc4fc
documentation: https://newsapi.org/docs/get-started

**Should probably create a new reducer for this one, and save to local host via redux-persist.

1. Create action creator that dispatches a GET request to newsAPI with correct apikey and settings
**Make sure to limit to ~10 or 12 articles, and take note of 100 requests per day... so maybe just add a button to refresh news or a timer instead of a refresh on load. --> I think this is done...

2. action creator returns with response, load response in new reducer.

3. Create SciCard components that are rendered within the Sci-News component.

4. Sci-News component should connect to store via connect and map out all sources into SciCards.

5. Refresh button sends request to action creator to get a new batch of news.
*/

const MDSciNews = ({ getNews, news }) => {

    const handleGetRequest = e => {
        e.preventDefault();
        console.log('GET request dispatched');
        getNews();
    }

    const renderNews = () => (
        news.news.data.articles.map(article => (
            <SciCard
                source={article.source.name}
                author={article.author}
                title={article.title}
                description={article.description}
                url={article.url}
                img={article.urlToImage}
                pubTime={article.publishedAt}
            />
        ))
    )

    
    return (
        <>
            <h2>Sci-News</h2>
            <div>
                <div>
                    <button onClick={handleGetRequest}>
                        Refresh News
                    </button>
                </div>
            </div>
            <div>
                <div>
                    {renderNews()}
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