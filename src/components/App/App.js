import React from 'react';
import AppToolbar from '../AppToolbar/AppToolbar';
import Searcher from '../Searcher/Searcher';
import './App.css';
import { Card, CardActions, Button, makeStyles, CardContent, Typography, CardMedia } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import get from '../../services/API';

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
  }
})

function App() {
  const classes = useStyles();

  function getData(){
    get();
  }

  return (
    <div className="App">
      <AppToolbar/>
      <Searcher />
      <div className="grid">
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6">
              Titulo
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
            onClick={getData}
            size="small">Detalles</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default App;
