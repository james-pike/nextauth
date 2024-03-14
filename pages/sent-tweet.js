import { useState } from 'react';
import { postTweet } from '../utils/twitter';

export default function SendTweet() {
  const [tweetText, setTweetText] = useState('');

  const handleSendTweet = async () => {
    try {
      await postTweet(tweetText);
      alert('Tweet posted successfully!');
    } catch (error) {
      alert('Error posting tweet. Please try again.');
    }
  };

  return (
    <div>
      <textarea
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
        placeholder="Enter your tweet..."
        rows={5}
        cols={50}
      />
      <br />
      <button onClick={handleSendTweet}>Send Tweet</button>
    </div>
  );
}
