import React from 'react';
import Tweets from '/imports/api/Tweets.js';

class AddTweet extends React.Component {
  constructor() {
    super();
    this.addTweet = this.addTweet.bind(this);
  }
  addTweet(event) {
    event.preventDefault();
    let form = event.target;
    Tweets.insert({
      tweetText: this.refs.tweetText.value
    }, (err, id) => {
      if (err) {
        console.log(err);
      } else {
        form.reset();
      }
    });
  }
  render() {
    return (
      <div className="panel-footer">
        <form id="tweetForm" onSubmit={this.addTweet} >
          <input ref="tweetText" type="text" className="form-control tweet-text" placeholder="Compose new Tweet..." />
          <div className="row">
            <input type="submit" className="btn btn-default btn-xs pull-right tweet-btn" value="Tweet" />
          </div>
        </form>
      </div>
    )
  }
}

export default AddTweet;
