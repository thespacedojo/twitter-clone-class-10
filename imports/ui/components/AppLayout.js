import React from 'react';
import { AppNavbar } from '/imports/ui/components/Header.js';
import FlashDisplay from '/imports/ui/containers/FlashMessage.js';


class AppLayout extends React.Component {
  render() {
    return (
      <div className="app-root">
        <header>
          <AppNavbar />
        </header>
        <div className="mainContent">
          <FlashDisplay />
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default AppLayout;
