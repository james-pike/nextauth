import Twitter from 'twitter-lite';

export const postTweet = async (message) => {
  const user = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

  try {
    const tweet = await user.post('statuses/update', {
      status: message,
    });
    return tweet;
  } catch (error) {
    console.error('Error posting tweet:', error);
    throw error;
  }
};
