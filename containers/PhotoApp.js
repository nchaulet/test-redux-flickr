import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import * as Actions from '../actions';
import SearchBar from '../components/SearchBar';
import PhotoList from '../components/PhotoList';

@connect(state => ({
  photos: state.photos.get('photos'),
  status: state.photos.get('status')
}))
class PhotoApp extends React.Component
{
    render() {
        const actions = bindActionCreators(Actions, this.props.dispatch);
        const { photos, status, dispatch } = this.props;
        return (
            <div className="container">
                <SearchBar searchPhotos={actions.searchPhotos}/>
                <PhotoList photos={photos} status={status} actions={actions} />
            </div>
        );
    }
}

export default PhotoApp;
