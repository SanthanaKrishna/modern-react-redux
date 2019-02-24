import React from 'react';
import SeasonDisplay from './SeasonDisplay';

// const GeoLocation = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (error) => console.log(error)
//      );
//     return <div> Latitude: </div>
// }
class GeoLocation extends React.Component{
    // constructor(props){  // constructor is called any time when instance os created first 
    //     super(props);   // super is refernce to parent class
    //     this.state={
    //         latitude: null, 
    //         longitude: null,
    //         errorMessage:''
    //     }
    // }
    //Alertnative way of state declaration
    // constructor automatically create by babel no need to write constructor
    state={
        latitude: null, 
        longitude: null,
        errorMessage:''
    }
componentDidMount(){
    console.log('cmponent Did Mount')
    window.navigator.geolocation.getCurrentPosition(
        position=>{ this.setState({latitude: position.coords.latitude, longitude:position.coords.longitude})  
            console.log(position);
        },
        error =>{
            this.setState({errorMessage: error});
            console.log(error);
        } 
    );
}

componentDidUpdate(){
    console.log('component did update')
}
    render(){
        if(this.state.errorMessage && !this.state.latitude && !this.state.latitude){
            return <div>Error:{this.state.errorMessage}</div>
        }
        if(this.state.latitude || this.state.longitude && !this.setState.errorMessage){
            return <SeasonDisplay latitude={this.state.latitude}
                                  longitude={this.state.longitude}
                    />
        }
        return <div>Loading....</div>
        }
    }
export default GeoLocation;
