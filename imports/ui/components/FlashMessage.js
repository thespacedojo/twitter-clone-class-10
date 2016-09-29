import React from 'react';
import { Alert } from 'react-bootstrap';
import { Mongo } from 'meteor/mongo';

const FlashMessages = new Mongo.Collection(null);

class FlashDisplay extends React.Component {

  dismiss(message) {
    FlashMessages.remove({_id: message._id});
  }

  render() {
    if (this.props.messages.length > 0) {
      return (
        <div className="col-sm-offset-2 col-sm-8">
          {this.props.messages.map((message) => {
              return (
                <Alert
                  key={message._id}
                  bsStyle={message.type}
                  onDismiss={this.dismiss.bind(this, message)}>
                  {message.message}
                </Alert>
              )
            }
          )}
        </div>
      )
    } else {
      return null
    }
  }
}

const clearFlashMessages = () => {
  FlashMessages.remove({});
}

export { FlashMessages, FlashDisplay, clearFlashMessage }
