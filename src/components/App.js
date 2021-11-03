import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import classes from './App.module.css';
import { addMovies } from '../actions';

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
    const { favourites } = this.props.store.getState()
    const index = favourites.indexOf(movie);
    if(index!==-1){
        //we found movie
        return true;
    }
    return false  
}

  render(){
    const { list }= this.props.store.getState();
    console.log('rendered state',this.props.store.getState());
    return (
      <div className={classes.App}>
        <Navbar />
        <div className={classes.main}>
          <div className={classes.tabs}>
            <div className={classes.tab}>Movies</div>
            <div className={classes.tab}>Favourties</div>
          </div>
          <div className={classes.list}>
            {list.map((movie,index) => {
              return <MovieCard 
                movie={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            })}
          </div>
        </div>
      </div>
    );
  };
}

export default App;