{
  type: AUTH_USER,
    uid,
}

{
  type: UNAUTH_USER,
}

{
  type: FETCHING_USER,
}

{
  type: FETCHING_USER_FAILURE,
    error: 'Error fetching user,'
}

{
  type: FETCHING_USER_SUCCESS,
    uuid,
    user,
    timestamp,
}

// Flamingos

{
  type: FETCHING_FLAMINGO,
}

{
  type: FETCHING_FLAMINGO_ERROR,
    error: 'Error fetching flamingo'
}

{
  type: FETCHING_FLAMINGO_SUCCESS,
    flamingo
}

{
  type: REMOVE_FETCHING
}

{
  type: ADD_FLAMINGO,
    flamingo,
}

{
  type: ADD_MULTIPLE_FLAMINGOS,
    flamingos
}

// Feed
{
  type: SETTING_FEED_LISTENER,
}

{
  type: SETTING_FEED_LISTENER_ERROR,
    error: 'Error fetching feeds.',
}

{
  tyoe: SETTING_FEED_LISTENER_SUCCESS,
    flamingoIds,
}

{
  type: ADD_NEW_FLAMINGO_ID_TO_FEED,
    flamingoId,
}

{
  type: RESET_NEW_FLAMINGOS_AVAILABLE,
}

// Listeners

{
  ADD_LISTENER,
    listenerId,
}

// Modal
{
  type: OPEN_MODAL,
}

{
  type: CLOSE_MODAL,
}

{
  type: UPDATE_FLAMINGO_TEXT,
    newFlamingoText,
}

{
  type: FETCHING_REPLIES,
}

{
  type: FETCHING_REPLIES_ERROR,
    error: 'Error fetching replies',
}

{
  type: FETCHING_REPLIES_SUCCESS,
    replies,
    flamingoId,
    lastUpdated: Date.now(),
}

{
  type: ADD_REPLY,
    flamingoId,
    reply,
}

{
  type: ADD_REPLY_ERROR,
    error: 'Error adding reply',
}

{
  type: REMOVE_REPLY,
    replyId
}

{
  type: FETCHING_COUNT,
}

{
  type: FETCHING_COUNT_ERROR,
    error: 'Error fetching flamingo\'s like count'
}

{
  type: FETCHING_COUNT_SUCCESS,
    flamingoId,
    count,
}

{
  type: FETCHING_USERS_FLAMINGOS,
    uid,
}

{
  type: FETCHING_USERS_FLAMINGOS_ERROR,
    error: 'Error fetching Users Flamingo Ids',
}

{
  type: FETCHING_USERS_FLAMINGOS_SUCCESS,
    uid,
    flamingoIds,
    lastUpdated,
}

{
  type: ADD_SINGLE_USERS_FLAMINGO,
    uid,
    flamingoId,
    lastUpdated,
}

{
  type: FETCHING_LIKES,
}

{
  type: FETCHING_LIKES_ERROR,
    error: 'Error fetching likes',
}

{
  type: FETCHING_LIKES_SUCCESS,
    likes,
}

{
  type: ADD_LIKE,
    flamingoId,
}

{
  type: REMOVE_LIKE,
    flamingoId
}