import React from 'react';
import 'tachyons';
//import robots from './robots';
class Card extends React.Component{
    render(){
        return(
           <div className="tc bg-light-yellow dib br3 ma2 grow bw2 shadow-5">
           <img src={`https://robohash.org/${this.props.id}.png?set=set3`} alt="Robots" width="200" height="200"/>
               <div className='tc'>
                <h6>{this.props.name}</h6>
                <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}
export default Card;