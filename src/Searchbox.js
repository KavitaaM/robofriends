import React from 'react';
class Searchbox extends React.Component{
    render(){
        return(
            <div className="pa3">
            <input className="pa3 ba b--green bg-lightest-bluetype=" type ="search" placeholder="Search for your friends" onChange={this.props.searchboxchange}/>
            </div>
        );
    }
}

export default Searchbox;