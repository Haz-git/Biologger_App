import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

//Components:
import SciCard from './SciCard';

const SciCarousel = ({ news }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const renderNews = () => (
        news.news.data.articles.map(article => (
            <SciCard
                key={uuid()}
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
            <Slider {...settings}>
                {renderNews()}
            </Slider>
        </>
    )
}

const mapStateToProps = state => {
    return {
        news: state.news,
    }
}

export default connect(mapStateToProps)(SciCarousel);