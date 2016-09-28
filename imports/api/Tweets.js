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
  tweetedTime() {
    return moment(this.tweetAt).fromNow();  
  }
});

export default Tweets;
