import { Meteor } from 'meteor/meteor';
import Tweets from '/imports/api/Tweets.js';

Meteor.publish('tweets/timeline', function() {
  console.log('Subscribed to tweets timeline');
  return Tweets.find({}, {sort: {tweetAt: 1}});
})
