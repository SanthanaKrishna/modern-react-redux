import React from 'react';
import './SeasonDisplay.css';

const seasonConfig={
    summer:{
        text : 'Lets hit beach',
        iconName:'sun'
    },
    winter:{ 
        text: 'it is so chilly',
        iconName: 'snowflake'
    }
}
const getSeason=(latitude, longitude, date)=>{
    if(date.getMonth() > 2 && date.getMonth() < 9){
       return latitude > 0 ? 'summer' : 'winter'
    }else{
        return latitude> 0 ? 'winter': 'summer'
    }
    console.log('date', date.getMonth());
}
const SeasonDisplay =(props)=>{
    const season= getSeason(props.latitude, props.longitude, new Date())
    const { text, iconName}= seasonConfig[season] // return {text, iconName} object

    console.log('season', season);
    return <div className={`season-display ${season}`}>
            <i className={`icon-left big ${iconName} icon`}/><br/>
            {text}<br/>
            <i className={`icon-right huge ${iconName} icon`}/>
            </div>
     
}
export default SeasonDisplay;