import Immutable from 'immutable';

const defaultPhotoState = Immutable.fromJS({
    searchText: null,
    page: null,
    photos: [],
    status: null
});

export function photos(state = defaultPhotoState, action) {
    switch (action.type) {
        case 'SEARCH_PENDING':
            return state.merge({
                status: 'PENDING'
            });
            break;
        case 'SEARCH_RESULT':
            var results = action.payload;
            var photos = results.photos;
            if (results.page != 1 && results.searchText === state.get('searchText')) {
                photos =  state.get('photos').concat(Immutable.fromJS(photos));
            }

            return state.merge({
                searchText: results.searchText,
                page: results.page,
                photos: photos,
                status: 'DONE'
            });
            break;
        default:
            return state;
            break;
    }
};
