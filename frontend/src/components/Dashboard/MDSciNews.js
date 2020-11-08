import React from 'react';
/*
news api key: 3c9c2e2fa85142fb957890523a2bc4fc
documentation: https://newsapi.org/docs/get-started

**Should probably create a new reducer for this one, and save to local host via redux-persist.

1. Create action creator that dispatches a GET request to newsAPI with correct apikey and settings
**Make sure to limit to ~10 or 12 articles, and take note of 100 requests per day... so maybe just add a button to refresh news or a timer instead of a refresh on load.

2. action creator returns with response, load response in new reducer.

3. Create SciCard components that are rendered within the Sci-News component.

4. Sci-News component should connect to store via connect and map out all sources into SciCards.

5. Refresh button sends request to action creator to get a new batch of news.
*/

const MDSciNews = () => {
    return (
        <>
            <h2>Sci-News</h2>
        </>
    )
}

export default MDSciNews;