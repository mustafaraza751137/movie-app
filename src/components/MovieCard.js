import React from 'react';
import classes from './MovieCard.module.css';

class MovieCard extends React.Component{
    render(){
        const { movie } = this.props;
        return (
            <div className={classes.movieCard}>
                <div className={classes.left}>
                    <img alt={classes.moviePoster} src={movie.Poster} />
                </div>
                <div className={classes.right}>
                    <div className={classes.title}>{movie.Title}</div>
                    <div className={classes.plot}>{movie.Plot}</div>
                    <div className={classes.footer}>
                        <div className={classes.rating}>{movie.imdbRating}</div>
                        <button className={classes.favouriteBtn}>Favourite</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;