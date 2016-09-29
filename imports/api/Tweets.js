import { Mongo } from 'meteor/mongo';
import moment from 'moment';

const Tweets = new Mongo.Collection('tweets');

Tweets.allow({
  insert(userId, doc) {
    return userId;
  },

  update(userId, doc, fields, modifier) {
    return false;
  },

  remove(userId, doc) {
    return userId === doc.userId;
  }
});

Tweets.before.insert(function(userId, doc) {
  doc.tweetAt = new Date();
  doc.userId = userId;
})

Tweets.helpers({

  user() {
    return Meteor.users.findOne({_id: this.userId});
  }, 

  username() {
    if (this.user()) {
      return this.user().username;
    }
  },

  fullName() {
    if (this.user() && this.user().profile) {
      return this.user().profile.name;
    } 
  },

  tweetedTime() {
    return moment(this.tweetAt).fromNow();  
  }
});

export default Tweets;
