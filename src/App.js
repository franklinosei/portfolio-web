import React, { Component } from 'react';
import './App.scss';
import Navbar from './common/components/navbar';
import Sidebar from './common/components/sidebar';
import AppRoutes from './routes/app.routes';

class App extends Component {

  render() {
    let navbarComponent = <Navbar />;

    let sidebarComponent = <Sidebar />;

    return (
      <div className="container-scroller">

        {sidebarComponent}

        <div className="container-fluid ">

          {navbarComponent}

          <div className="main-panel page-body-wrapper">

            <div className="content-wrapper">
              <AppRoutes />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
