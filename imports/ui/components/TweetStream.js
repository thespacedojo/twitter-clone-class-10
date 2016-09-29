import React from 'react';
import AddTweet from '/imports/ui/components/AddTweet.js';
import Tweets from '/imports/ui/components/Tweets.js';

export const TweetStream = ({tweets}) => (
  <div id="stream" className="container">
    <div className="row">
      <div className="col-md-4 col-lg-3">
        <div id="profile-panel" className="panel panel-default">
          <div className="media panel-body">

            <a className="pull-left" href="#">
              <img className="media-object" src="https://pbs.twimg.com/profile_images/431476628166696960/xQCVJI_u_bigger.jpeg" alt="..." />
            </a>

            <div className="media-body">
              <span className="username"><strong>josh owens</strong></span> <br />
              <span className="handle">@joshowens</span>
            </div>

            <table id="profile-stats" className="table">
              <tbody>
                <tr className="head">
                  <td><strong>Tweets</strong></td>
                  <td><strong>Following</strong></td>
                  <td><strong>Followers</strong></td>
                </tr>
                <tr className="numbers">
                  <td>500</td>
                  <td>240</td>
                  <td>1,600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <AddTweet />
        </div>

        <div id="trending" className="panel panel-default">
          <div className="panel-body">
            <h4>Trending Topics</h4>
          </div>
          <ul className="list-group">
            <a href="#" className="list-group-item">#food</a>
            <a href="#" className="list-group-item">#meteorclub</a>
            <a href="#" className="list-group-item">#loremipsumdolor</a>
            <a href="#" className="list-group-item">#dracodormiens</a>
            <a href="#" className="list-group-item">#atmospherejs</a>
          </ul>
        </div>
      </div>

      <Tweets tweets={tweets} header="Tweets"/>


      <div id="who-to-follow" className="col-md-8 col-md-offset-4 col-lg-3 col-lg-offset-0">
        <div className="panel panel-default">

          <div className="panel-body">
            <h4>Who to follow</h4>
          </div>

          <ul className="list-group">
            <a href="#" className="list-group-item"><strong>Josh Owens</strong> @joshowens</a>
            <a href="#" className="list-group-item"><strong>Sacha Greif</strong> @sachagreif</a>
            <a href="#" className="list-group-item"><strong>Tom Coleman</strong> @tmeasday</a>
          </ul>

          <div className="panel-footer short">
            <p>Find <a href="#">people you know</a>?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
