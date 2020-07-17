import React, { useState, useEffect } from 'react';
import AppToolbar from '../AppToolbar/AppToolbar';
import Searcher from '../Searcher/Searcher';
import './App.css';
import { Card, CardActions, Button, makeStyles, CardContent, Typography, CardMedia } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
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
    flexGrow: 0.98,
    backgroundColor: red[500]
  },
  paginator: {
    marginTop: 16
  }
})

function App() {
  const classes = useStyles();
  const [pokemon, setPokemon] = useState([]);
  const [count, setCount] = useState(0);

  function getData(offset){
    get(offset, 8)
    .then(res => res.json())
    .then((data) => {
      setCount(data.count);
      setPokemon(data.results);
      console.log("Data: ", data.count);
    })
    .catch(console.error)
  }

  function changePage(event, value){
    var offset = (value - 1) * 8;
    getData(offset);
  }


  useEffect(() => {
    console.log("Estado: ", pokemon);
  })
  

  return (
    <div className="App">
      <AppToolbar/>
      <Searcher />
      <Button onClick={() => getData(0, 8)}>Get Data</Button>
      <div className="grid">
        {pokemon.map((p) => (
          <Card  className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6">
              {p.name.toUpperCase()}
            </Typography>
            <Typography variant="subtitle1">
              #000
            </Typography>
          </CardContent>
          <CardMedia
              className={classes.image}
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
