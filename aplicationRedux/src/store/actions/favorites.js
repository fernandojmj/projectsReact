export const addFavoriteRequest = repository => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: { repository },
});

export const addFavoriteSuccess = data => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: { data },
});

export const addFavoriteFalure = error => ({
  type: 'ADD_FAVORITE_FALURE',
  payload: { error },
});
