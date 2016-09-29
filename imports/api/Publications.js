import { Meteor } from 'meteor/meteor';
import Tweets from '/imports/api/Tweets.js';

Meteor.publish('tweets/timeline', function() {
  console.log('Subscribed to tweets timeline');
  return Tweets.find({}, {sort: {tweetAt: 1}});
})

Meteor.publish('profile/find', function(username) {
  check(username, String);
  return Meteor.users.find({username: username}, {fields: {username: 1, profile: 1}});
});

Meteor.publish('profile/tweets/find', function(username) {
  check(username, String);
  let user = Meteor.users.findOne({username: username});
  return Tweets.find({userId: user._id});
});
