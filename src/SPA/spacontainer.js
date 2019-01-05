import React from 'react';
import Menu from './menu/menu';
import Content from './content/content';

class SPAContainer extends React.Component {
    
    render() { 
        return ( 
            <div>
                SPA will come here!
                <Menu></Menu>
                <Content></Content>
            </div>

         );
    }
}
 
export default SPAContainer;