import React from 'react';
import Home from './home';
import Contact from './contact';
import About from './about';
import Blog from './blog';
import {Switch,Route} from "react-router-dom";


class Content extends React.Component {
   
    render() { 
        return (  
            <Switch>
              <Route exact path="/home" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/blog" component={Blog}/>

              </Switch>

           

        );
    }
}
 
export default Content;