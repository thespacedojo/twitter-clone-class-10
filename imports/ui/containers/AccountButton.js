import { composeWithTracker } from 'react-komposer';
import AccountButton from '/imports/ui/components/AccountButton.js';

function composer(props, onData) {
  let user = Meteor.user();
  if (user) {
    onData(null, { user });
  } else {
    onData(null, {});
  }
};

export default composeWithTracker(composer)(AccountButton);
