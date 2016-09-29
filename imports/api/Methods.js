Meteor.methods({
  'user/follow': function(followId) {
    check(followId, String);
    Meteor.users.update(this.userId, {$addToSet: {'profile.followingIds': followId}});
  }
});
