
class App extends React.Component{
    constructor(props){
        super(props);
          this.state = {
            counter:0,
            name:'',
            email:'',
            password:'',
            addressLine1:'',
            addressLine2:'',
            stat:'',
            zip:'',
            city:'',
            cardNumber:'',
            ccv:'',
            exDate:'',
            billingAdress:''
        }
        this.nameChangedHundler = this.nameChangedHundler.bind(this)
    }

    

    nameChangedHundler() {
        this.setState({
             counter : this.state.counter+=1
        });
    }
    

    

    render(){
        return(
            <div>
                <h2>
                The Form
                </h2>
           
                
                <h2>  {this.state.name}  </h2>
                <button onClick={this.nameChangedHundler}>click</button>
               { this.state.counter === 1 && <F2 />}
               { this.state.counter === 2 && <F3 />}
            </div>
            ) 
    }
    
    reRenderHundler(){
        console.log( this.state.name )
      
    }

     
    
}



class F2 extends React.Component {
    render(){
        return(
        <div>
       <h2>Abobker</h2>
       <h2>elaghel</h2>
       </div>
       )}
}

class F3 extends React.Component {
    render(){
        return(
            <div><input type="text" name="name" id="nameTextArea" placeholder="Name" /><br/>
            <input type="email" name="email" id="emailTextArea" placeholder="email"  /><br/>
            <input type="password" name="password " id="passwordTextArea" placeholder="password" /><br/> </div>
        
       )}
}





ReactDOM.render(<App />, document.getElementById('root'));
// class F2 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <input type="text" name="name" id="nameTextArea" placeholder="Name" onChange = {nameChangedHundler}/><br/>
//                 <input type="email" name="email" id="emailTextArea" placeholder="email"  onChange = {emailChangedHundler}/><br/>
//                 <input type="password" name="password " id="passwordTextArea" placeholder="password" onChange = {passwordChangedHundler} /><br/>
//                 <input type="password" name="password " id="passwordTextArea" placeholder="password" onChange = {passwordChangedHundler} /><br/>
//                 <button onClick={this.reRenderHundler}>Next</button>
//            </div>
//         )
//     }
// }