Meteor.methods({
  'user/follow': function(followId) {
    check(followId, String);
    if (this.userId)
      Meteor.users.update(this.userId, {$addToSet: {'profile.followingIds': followId}});
  },
  'user/unfollow': function(followId) {
    check(followId, String);
    console.log(followId);
    if (this.userId)
      Meteor.users.update(this.userId, {$pull: {'profile.followingIds': followId}});
  }
});
