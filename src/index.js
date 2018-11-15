import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyBJR6kNtsAtBnrx5xDVC3CKpHI6Jg_DIds';
//Use classed component when we need states
//When state changes, the component re-renders
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.searchVideo('girls like you');
    }

    searchVideo(term){
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
            //this.setState({videos: videos})
        });
    }
    render() {
        const videoSearch = _.debounce((term) => {this.searchVideo(term)}, 300 )
        return (
            <div>
                <SearchBar onSearchChange={videoSearch}/>
                <div className="row">
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList 
                videos = {this.state.videos}
                onVideoChange = {selectedVideo => this.setState({selectedVideo})}/>
                </div>               
            </div>
        )
    }
}



ReactDOM.render(<App />, document.querySelector('.container'));