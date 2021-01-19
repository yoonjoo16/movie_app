import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster }) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title}></img>
            <div class="movie__data">
                <h3 class="movies__title">{title}</h3>
                <h5 class="movies__year">{year}</h5>
                <p class="movie__summary">{summary.slice(0,140)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;