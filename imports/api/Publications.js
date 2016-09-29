import { Meteor } from 'meteor/meteor';
import Tweets from '/imports/api/Tweets.js';

Meteor.publish('tweets/timeline', function() {
  if (!this.userId)
    return []
  this.autorun(function() {
    let cursors = [];

    let user = Meteor.users.findOne(this.userId);
    let followingIds = [];
    followingIds.push(user.profile.followingIds);
    followingIds.push(this.userId);
    followingIds = _.flatten(followingIds);

    users = Meteor.users.find({_id: {$in: followingIds}}, {fields: {profile: 1, username: 1}});
    tweets = Tweets.find({userId: {$in: followingIds}}, {sort: {tweetAt: -1}});

    cursors.push(tweets);
    cursors.push(users);
    return cursors;
  });
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
