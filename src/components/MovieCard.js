import React from 'react';
import { addToFavourites } from '../actions';
import { removeFromFavourites } from '../actions';
import classes from './MovieCard.module.css';

class MovieCard extends React.Component{
    handleFavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(addToFavourites(movie));
    }
    handleFavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(removeFromFavourites(movie));
    }

    render(){
        const { movie, isFavourite } = this.props;
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
                        {
                            isFavourite
                            ?<button className={`${classes.UnfavouriteBtn} ${classes.Btn}`} onClick={this.handleUnfavouriteClick}>Unfavourite</button>
                            :<button className={classes.Btn} onClick={this.handleFavouriteClick}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;