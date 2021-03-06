import React from 'react';
import Tweets from '/imports/api/Tweets.js';
import { FlashMessages } from '/imports/ui/components/FlashMessage.js';

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
        FlashMessages.insert({type: "danger", message: err.reason});
      } else {
        FlashMessages.insert({type: "success", message: "Your tweet was added!"})
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
