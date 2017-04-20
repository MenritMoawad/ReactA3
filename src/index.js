import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import VideoList from './VideoList';
import VideoPreview from './VideoPreview';

import './index.css';

/* API information */

const API_KEY = "AIzaSyCPQZ7N1L0LEzFiZHSTkoJLbE0fgFpv8Hk";

const API_URL = 'https://www.googleapis.com/youtube/v3/search';

let params = {
  part: 'snippet',
  key: API_KEY,
  q: "",
  type: 'video',
  maxResults: 20
};

/******************/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      activeVideo: {}
    }

    this.searchVideos = this.searchVideos.bind(this);
  }

  searchVideos(event) {
    event.preventDefault();
    let keyword = this.refs.keyword.value;
    params.q = keyword;

    axios.get(API_URL, {params: params}).then(response => {
      this.setState({videos: response.data.items});
    });
  }

  render() {
    return (
      <div className="search-container">
        <img src="youtube.png" alt=""/>
        <form onSubmit={this.searchVideos}>
          <input ref="keyword" type="text" placeholder="Search"/>
        </form>
        <div className="list-container">
          <VideoList videos={this.state.videos}/>
        </div>
        <div className="main-content">
          <VideoPreview/>
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <App></App>, document.getElementById('root'));
