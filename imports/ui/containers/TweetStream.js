import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { TweetStream } from '/imports/ui/components/TweetStream.js';
import Tweets from '/imports/api/Tweets.js';

function composer(props, onData) {
  const handle = Meteor.subscribe('tweets/timeline');
  if (handle.ready()) {
    let tweets = Tweets.find({}, {sort: {tweetAt: -1}}).fetch();
    let currentUser = Meteor.user();
    onData(null, {tweets, currentUser})
  }
}

export default composeWithTracker(composer)(TweetStream);
