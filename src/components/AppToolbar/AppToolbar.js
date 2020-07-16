import React, { useState } from 'react';
import { List, Drawer,Toolbar, AppBar, Typography, ListItemIcon, ListItem, ListItemText, Divider } from '@material-ui/core';
import CategoryIcon from '@material-ui/icons/Category';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

function AppToolbar() {
  const TITLE_APP = "Pokedex";
  const [drawer, setDrawer] = useState(false);

  const useStyles = makeStyles((theme) => ({
    list: {
      width: 250,
    }
  }));

  const classes = useStyles();

  function setMenu() {
    setDrawer(!drawer);
  }

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon onClick={setMenu}/>
          <Typography>
            {TITLE_APP}
          </Typography>
        </Toolbar>
        <Drawer className={classes.root} open={drawer} onClose={setMenu}>
          <List className={classes.list}>
            <ListItem button>
              <ListItemIcon><CategoryIcon style={{fill: "black"}} /></ListItemIcon>
              <ListItemText>Categorías</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon><FavoriteIcon style={{fill: "red"}}/></ListItemIcon>
              <ListItemText>Favoritos</ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>Creado por Juanma Perez</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </React.Fragment>
  );
}

export default AppToolbar;