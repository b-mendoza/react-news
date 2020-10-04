import React from 'react';
import PropTypes from 'prop-types';

const News = ({ title, description, source, url, urlToImage }) => {
    const Image = urlToImage ? (
        <div className="card-image">
            <img src={urlToImage} alt="News Graphic Info" />
            <span className="card-title blue darken-4">
                {source.name.toUpperCase()}
            </span>
        </div>
    ) : null;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {Image}

                <div className="card-content">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a
                        className="waves-effect waves-light btn"
                        href={url}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Complete news
                    </a>
                </div>
            </div>
        </div>
    );
};

News.propTypes = {
    title: PropTypes.string.isRequired,
    source: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
};

export default News;
