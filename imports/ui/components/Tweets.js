import React from 'react';
import Tweet from '/imports/ui/components/Tweet.js';

const Tweets = ({tweets, header}) => (
  <div className="col-md-8 col-lg-6">
    <ul id="tweet-stream" className="list-group">
      <li className="list-group-item">
        <h4 className="list-group-item-heading">{header}</h4>
      </li>

      {tweets.map((tweet) => {
        return <Tweet tweet={tweet} key={tweet._id} />
      })}


      <li className="list-group-item load-more">
        <a href="#">Load more tweets</a>
      </li>
    </ul>
  </div>
)

Tweets.defaultProps = { tweets: [] }

export default Tweets;
