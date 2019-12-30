
import User from '../User/User.js';
import React from 'react'
class App extends React.Component{
    constructor(props){
        super(props);
 
    }

    render(){
        return(
            <div>
                <h2>
                The Form
                </h2>
                <User />
                <button type="button" name="next" id="nextButton">Next</button>
            </div>
            )
    }
    
    
}

ReactDOM.render(<App />, document.getElementById('root'));
    console.log("connected")