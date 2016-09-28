import { composeWithTracker } from 'react-komposer';

import { TweetStream } from '/imports/ui/components/TweetStream.js';
import Tweets from '/imports/api/Tweets.js';

function composer(props, onData) {
  const handle = Meteor.subscribe('tweets/timeline');
  if (handle.ready()) {
    let tweets = Tweets.find({}, {sort: {tweetAt: -1}}).fetch();
    onData(null, {tweets})
  }
}

export default composeWithTracker(composer)(TweetStream);
