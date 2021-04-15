import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import TweetErrorsReducer from './tweet_errors_reducer'

export default combineReducers({
  session: SessionErrorsReducer,
  tweet: TweetErrorsReducer
});