import { composeWithTracker } from 'react-komposer';
import { FlashDisplay, FlashMessages } from '/imports/ui/components/FlashMessage.js';

function composer(props, onData) {
  let messages = FlashMessages.find().fetch();
  onData(null, {messages: messages});
}

export default composeWithTracker(composer)(FlashDisplay);
