import React, { useState, useEffect } from 'react';
import AppToolbar from '../AppToolbar/AppToolbar';
import Searcher from '../Searcher/Searcher';
import './App.css';
import { Card, CardActions, Button, makeStyles, CardContent, Typography, CardMedia, Spinner } from '@material-ui/core';
import get from '../../services/API';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
  card: {
    margin: 8,
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  cardContent: {
    flexGrow: 0.01
  },
  cardActions: {
    flexGrow: 0.01
  },
  button: {
    width: '100%'
  },
  image: {
    flexGrow: 0.98
  },
  paginator: {
    marginTop: 16
  }
})

function App() {
  const classes = useStyles();
  const [pokemonList, setPokemonList] = useState([]);
  const [count, setCount] = useState(0);
  const [offset, setOffset] = useState(0);

  function getData(offset){
    get(offset, 8)
    .then(res => res.json())
    .then((data) => {
      setCount(data.count);
      setPokemonList(data.results);
    })
    .catch(console.error)
  }

  function changePage(event, value){
    var offset = (value - 1) * 8;
    setOffset(offset);
    getData(offset);
  }

  function getIndex(pokemonToSearch){
    console.log("GET INDEX")
    var indexImage = 0;

    pokemonList.filter((currentValue, index) => {
      if(currentValue === pokemonToSearch) indexImage = index + 1 + offset;
    })

    return indexImage;
  }

  function getNumber(index){
    if(index < 10) {
      return "#00" + index;
    }else if(index < 100 && index >= 10){
      return "#0" + index;
    }else{
      return "#" + index;
    }
  }

  return (
    <div className="App">
      <AppToolbar/>
      <Searcher />
      <Button onClick={() => getData(0, 8)}>Get Data</Button>
      <div className="grid">
        {pokemonList.map((pokemon) => (
          <Card  className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6">
              {pokemon.name.toUpperCase()}
            </Typography>
            <Typography variant="subtitle1">
              {getNumber(getIndex(pokemon))}
            </Typography>
          </CardContent>
            <CardMedia
              className={classes.image}
              image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + getIndex(pokemon) + ".png"}
            />
          <CardActions className={classes.cardActions}>
            <Button className={classes.button} 
            size="small">Detalles</Button>
          </CardActions>
        </Card> 
        ))}
      </div>
      <Pagination 
      className={classes.paginator} 
      count={Math.ceil(count / 8)}
      onChange={changePage}
       />
    </div>
  );
}

export default App;
