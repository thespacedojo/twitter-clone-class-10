import { composeWithTracker } from 'react-komposer';
import { Profile } from '/imports/ui/components/Profile.js';
import Tweets from '/imports/api/Tweets.js';
import { Meteor } from 'meteor/meteor';

function composer(props, onData) {
  username = props.params.username;
  let profileHandle = Meteor.subscribe('profile/find', username);
  let profileTweetsHandle = Meteor.subscribe('profile/tweets/find', username);
  if (profileHandle.ready() && profileTweetsHandle.ready()) {
    let userProfile = Meteor.users.findOne({username});
    let tweets = Tweets.find({userId: userProfile._id}, {sort: {tweetAt: -1}}).fetch();
    let currentUser = Meteor.user();
    onData(null, {userProfile, tweets, currentUser});
  }
}

export default composeWithTracker(composer)(Profile);
