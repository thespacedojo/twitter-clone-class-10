import React from 'react';

const Username = function({user}) {
  return (
    <li>
      <a href="#">{user && user.emails && user.emails[0].address}</a>
    </li>
  )
}

const LoginButton = () => (
  <li className="dropdown">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account? <span class="caret"></span></a>
    <ul className="dropdown-menu">
      <li><a href="/signin">Sign In</a></li>
      <li><a href="/signup">Sign Up</a></li>
    </ul>
  </li>
)

class AccountButton extends React.Component { 
  render() {
    if (this.props.user) {
      return (
        <Username user={this.props.user} />
      )
    } else {
      return <LoginButton />
    }
  }
}

export default AccountButton;
