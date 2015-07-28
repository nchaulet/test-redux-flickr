import FlickrApi from '../lib/api';

const Actions = {
  SEARCH_PENDING: 'SEARCH_PENDING',
  SEARCH_RESULT: 'SEARCH_RESULT',
}

function loadPhotos(dispatch, searchText, page) {
  dispatch({
    type: Actions.SEARCH_PENDING
  });
  FlickrApi.getPhotos(searchText, page, (error, photos) => {
    dispatch({
      type: Actions.SEARCH_RESULT,
      payload: {
        searchText: searchText,
        page: page,
        photos: photos
      }
    });
  });
};

export function searchPhotos(searchText) {
  return (dispatch) => {
    loadPhotos(dispatch, searchText, 1);
  };
};

export function nextPage() {
  return (dispatch, getState) => {
    const photos = getState().photos;
    loadPhotos(dispatch, photos.get('searchText'), photos.get('page') + 1);
  };
};
