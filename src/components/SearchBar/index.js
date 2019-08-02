import React from 'react';

export default class SearchBar extends React.Component{
    state = {searchTerm:''};

    onInputChange = (event) =>{
        this.setState({searchTerm:event.target.value});
    };

    onFormSubmit = (event) =>{
        event.preventDefault();

        //Make sure to call
        //call back from parent component

    };

    render(){
        return (
        <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                    type="text" 
                    value={this.state.searchTerm}
                    onChange={this.onInputChange}/>
                </div>
            </form>
        </div>
        );
    }
}

