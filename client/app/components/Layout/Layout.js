import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Body from './Body/Body';

class Layout extends React.Component {
    render() {
        return ( 
           <div>
                <Header/>
                <Body/>
            </div>
        );
    }
}
export default Layout;
