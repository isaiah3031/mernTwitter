import * as TweetAPIUtil from '../util/tweet_api_util'

export const RECEIVE_NEW_TWEET = 'RECEIVE_NEW_TWEET'
export const RECEIVE_USER_TWEETS = 'RECEIVE_USER_TWEETS'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

export const receiveNewTweet = tweet => ({
  type: RECEIVE_NEW_TWEET,
  tweet
})

export const receiveUserTweets = tweets => ({
  type: RECEIVE_USER_TWEETS,
  tweets
})

export const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
})

export const composeTweet = tweet => dispatch =>
  TweetAPIUtil.writeTweet(tweet).then(() => (
    dispatch(receiveNewTweet(tweet))
  ), err => (
    dispath(receiveErrors(err.response.data))
  ))

export const fetchTweets = () => dispatch => {
  TweetAPIUtil.fetchTweets().then(tweets => (
    dipatch(receiveTweets(tweets))
  ), err => (
    dispatch(receiveErrors(err.response.data))
  ))
}

export const fetchUserTweets = id => dispatch => {
  TweetAPIUtil.fetchUserTweets(id).then(tweets =>
    dispatch(receiveUserTweets(tweets))
  ), err => (
    dispatch(receiveErrors(err.response.data))
  )
}