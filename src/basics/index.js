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
    constructor(props){  // constructor is called any time when instance os created first 
        super(props);   // super is refernce to parent class
        this.state={
            latitude: null, 
            longitude: null,
            errorMessage:''
        }
        window.navigator.geolocation.getCurrentPosition(
            position=>{
                this.setState({latitude: position.coords.latitude, longitude:position.coords.longitude})  
                console.log(position);
            },
            error =>{
                this.setState({errorMessage: error});
                console.log(error);
            } 
        );
    }
componentDidMount(){
    console.log('cmponent Did Mount')
}

componentDidUpdate(){
    console.log('component did update')
}
    render(){
        if(this.state.errorMessage && !this.state.latitude && !this.state.latitude){
            return <div>Error:{this.state.errorMessage}</div>
        }
        if(this.state.latitude || this.state.longitude && !this.setState.errorMessage){
            return <div> latitude:{this.state.latitude}<br/>
                         Longitude: {this.state.longitude}
                         {console.log('latitude,longitude',this.state.latitude,this.state.longitude)}

            </div>
        }
        return <div>Loading....</div>
        }
    }
export default GeoLocation;
