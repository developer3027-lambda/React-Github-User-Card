import React from 'react';


class SearchTheme extends React.Component {
    constructor() {
        super();
    this.state = {
        query: ""
    }
}

    handleChange = (e) => {
        this.setState({
          query: e.target.value
        });
      };

render() {
    return(
        <div className="navBase">
            <div className="mainNav">
                <div className="logo">
                    <h3>Github Friends</h3>
                </div>
                <div className="searchForm">
                {/* <form onSubmit={()=> this.props.search(this.state.query)}>*/}
                        <input 
                        type="text"
                        name="find" 
                        placeholder="Search" 
                        value={this.state.query}
                        onChange={this.handleChange}/>
                        <button onClick={()=> this.props.search(this.state.query)}>Go</button>
                    {/*</form>*/} 
                    <select>
                        <option>Light Theme</option>
                        <option>Dark Theme</option>
                    </select>
                </div>
            </div>
        </div>
        );
    }
}


export default SearchTheme;