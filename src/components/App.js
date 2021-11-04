import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import classes from './App.module.css';
import { addMovies, setShowFavourites } from '../actions';

class App extends React.Component {
  componentDidMount (){
    const { store }=this.props;
    store.subscribe(() => {
      console.log('updated');
      this.forceUpdate();
    })
    //make api call
    //dispatch an action
    store.dispatch(addMovies(data));
    console.log('state',this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState()
    const index = movies.favourites.indexOf(movie);
    if(index!==-1){
        //we found movie
        return true;
    }
    return false;
  }
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val))
  }

  render(){
    const { movies } = this.props.store.getState();
    const { list, favourites, showFavourites }= movies;
    const displayMovies = showFavourites ? favourites : list;

    console.log('rendered state',this.props.store.getState());
    return (
      <div className={classes.App}>
        <Navbar />
        <div className={classes.main}>
          <div className={classes.tabs}>
            <div className={`${classes.tab} ${showFavourites ? "" : classes.activeTab}`} 
              onClick={() => this.onChangeTab(false)}>
                Movies
            </div>
            <div className={`${classes.tab} ${showFavourites ? classes.activeTab : ""}`} 
              onClick={() => this.onChangeTab(true)}>
                Favourties
            </div>
          </div>
          <div className={classes.list}>
            {displayMovies.map((movie,index) => {
              return <MovieCard 
                movie={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            })}
          </div>
          {displayMovies.length ===0 ? <div className={classes.noMovies}>No movies to display</div> : null}
        </div>
      </div>
    );
  };
}

export default App;