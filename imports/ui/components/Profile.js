import React from 'react';
import Tweets from '/imports/ui/components/Tweets.js';
import FollowButton from '/imports/ui/components/FollowButton.js';

export const Profile = ({tweets, currentUser, userProfile}) => (
  <div>
    <div id="profile-background"></div>

    <nav id="profile-navigation" className="navbar navbar-default" role="navigation">
      <div className="container no-collapse">
        <ul className="nav navbar-nav">

          <li className="img-mover hidden-xs"></li>

          <li>
            <span className="info">Tweets</span>
            <span className="number">500</span>
          </li>
          <li>
            <span className="info">Following</span>
            <span className="number">240</span>
          </li>
          <li>
            <span className="info">Followers</span>
            <span className="number">1,600</span>
          </li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          <FollowButton followingIds={currentUser.profile.followingIds} userId={userProfile._id} />
        </ul>


      </div>
    </nav>

    <div id="profile-stream" className="container">
      <div className="row">
        <div className="col-md-4 col-lg-3">

          <div className="profile-information">
            <img src="https://pbs.twimg.com/profile_images/431476628166696960/xQCVJI_u_400x400.jpeg" alt="" className="profile-image" />

            <h3 className="username">User Fullname</h3>
            <span className="handle">@{userProfile.username}</span>
            <p className="user-profile-description">designs &amp; develops websites. spends a lot of time in photoshop. likes science, cats, and magic the gathering.</p>

            <ul className="user-profile-info">
              <li><i className="fa fa-fw fa-map-marker"></i> Cincinnati, OH</li>
              <li><i className="fa fa-fw fa-link"></i> <a href="http://joshowens.me">joshowens.me</a></li>
              <li><i className="fa fa-fw fa-clock-o"></i> Joined April 04, 1980</li>
            </ul>
          </div>

        </div>

        <Tweets tweets={tweets} header="My Latest Tweets"/>

        <div className="col-md-8 col-md-offset-4 col-lg-3 col-lg-offset-0">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4>Who to follow</h4>
            </div>
            <ul className="list-group">
              <a href="#" className="list-group-item"><strong>Josh Owens</strong> @joshowens</a>
              <a href="#" className="list-group-item"><strong>Sacha Greif</strong> @sachagreif</a>
              <a href="#" className="list-group-item"><strong>Tom Coleman</strong> @tmeasday</a>
            </ul>

            <div className="panel-footer">
              <p>Find <a href="#">people you know</a>?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
