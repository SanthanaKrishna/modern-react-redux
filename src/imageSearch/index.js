import React from 'react';
import unsplash from '../api/unsplash';
import axios from 'axios';
import SearchBar from './searchBar';
import ImageList from './imageList';
class PicsSearch extends React.Component {
    state = {
        images: null
    }
    onSearchSubmit = async (term) => { //onSearchSubmit is instance property
        const response = await unsplash.get('search/photos', {
            params: { query: term },
        });
        console.log('response', response);
        this.setState({ images: response.data.results })
    }
    // onSearchSubmit(term){
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params:{ query: term},
    //         headers: {
    //             Authorization: 'Client-ID 90ed05d321a92177e520896816081dea8e1971a1a1a0d70dd146aa290d9df82d'
    //          }
    //     }
    //       );
    // }
    render() {
        console.log("state", this.state.images);
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default PicsSearch;
