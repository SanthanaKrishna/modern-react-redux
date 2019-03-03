import React from 'react';
import SearchBar from './searchBar';
import youtube from '../api/youtube';
import VideoList from './videoList';

class VideoSearch extends React.Component{
    state={ videos: [] }
    onTermSubmit =async(term)=>{
       const response = await youtube.get('/search',{
            params:{
                q: term
            }
        });
        console.log('response', response);
        this.setState({ videos: response.data.items});
    };
    render(){
        return(
            <div>
             <h2>Video Search</h2>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}
export default VideoSearch;