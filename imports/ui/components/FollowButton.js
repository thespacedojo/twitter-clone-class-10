import React from 'react';

class FollowButton extends React.Component {
  constructor() {
    super();
    this.following = this.following.bind(this);
    this.followUser = this.followUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
  }

  following() {
    return _.contains(this.props.followingIds, this.props.userId)
  }

  followUser(event) {
    event.preventDefault();
    Meteor.call('user/follow', this.props.userId);
  }

  unfollowUser(event) {
    event.preventDefault();
    Meteor.call('user/unfollow', this.props.userId);
  }

  render() {
    if (this.following()) {
      return <Unfollow unfollowUser={this.unfollowUser}/>
    } else {
      return <Follow followUser={this.followUser}/>
    }
  }
}

const Follow = ({followUser}) => (
  <li className="follow-me"><button onClick={followUser} className="btn btn-primary"><i className="fa fa-plus"></i>&nbsp; Follow</button></li>
)

const Unfollow = ({unfollowUser}) => (
  <li className="follow-me"><button onClick={unfollowUser} className="btn btn-danger"><i className="fa fa-minus"></i>&nbsp; Unfollow</button></li>
)

export default FollowButton;
