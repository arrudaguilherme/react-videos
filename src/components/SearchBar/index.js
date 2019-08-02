import React from 'react';

export default class SearchBar extends React.Component{
    state = {term:''};

    onInputChange = (event) =>{
        this.setState({term:event.target.value});
    };

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);

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
                    value={this.state.Term}
                    onChange={this.onInputChange}/>
                </div>
            </form>
        </div>
        );
    }
}

