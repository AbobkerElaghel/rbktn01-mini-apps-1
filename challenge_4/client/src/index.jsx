import React from 'react'
import Board from './components/Board.jsx'
class App extends React.Component {


    any(){
        console.log("asdasd")
    }

    render(){
        return(
            <div>
              <h2 onClick={this.any}>
                This Form 
                
              </h2>
              <Board />
            </div>
              )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));