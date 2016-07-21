import React from 'react';
import ReactDOM from 'react-dom';

//components
import Header from './components/Header';
import Content from './components/Content';

class Layout extends React.Component {
   render() {
      return (
         <div className="container">
            <Header />
            <Content />
         </div>
      );
   }
}

ReactDOM.render(<Layout />, document.getElementById('app'));