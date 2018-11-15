import React, { Component } from 'react';
//same as const Component = react.Compnent
// const SearchBar = () => {
//     return <input />
// };
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    onSearch(term){
        this.setState({term});
        this.props.onSearchChange(this.state.term)
    }
    render() {
        return (
            <div className="search-bar">
                <input
                value = {this.state.term}
                onChange={(event) => this.onSearch(event.target.value)} />
            </div>
        );
        ;
    };
}

export default SearchBar;