import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Body from './Body/Body';

//require('./Layout.scss');

class Layout extends React.Component {
    render() {
        return ( 
           <div className='Layout'>
                <Header/>
                <Body/>
            </div>
        );
    }
}
export default Layout;
