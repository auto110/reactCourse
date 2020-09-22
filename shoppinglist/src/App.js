import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddItem from './AddItem';

// Import List, ListItem and ListItemText components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Contact from './Contact';
import Home from './Home';

function App() {
  const [items, setItems] = React.useState([]);
  const addItem = (item) => {
    setItems([item, ...items]);
  }

  const listItems = items.map((item, index) => 
    <ListItem key={index}>
      <ListItemText primary={item.product} secondary={item.amount} />
    </ListItem>
    );

  return (
    <div className="App">
     <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            Shopping Cart
          </Typography>
        </Toolbar>
      </AppBar>

    {/* Routing */}
    <BrowserRouter>
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to="/contact">Contact</Link>{' '} 
          <Link to="/links">Links</Link>{' '} 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/links" render={() => <h1>Links</h1>} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
          </div>
      </BrowserRouter> 

      <AddItem addItem={addItem} /> 
      <List>{listItems}</List>
    </div>
  );
}

export default App;
