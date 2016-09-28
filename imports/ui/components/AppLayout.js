import React from 'react';
import { AppNavbar } from '/imports/ui/components/Header.js';

class AppLayout extends React.Component {
  render() {
    return (
      <div className="app-root">
        <header>
          <AppNavbar />
        </header>

        <div className="mainContent">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default AppLayout;
