import React from 'react'

class Board extends React.Component { 
 constructor(){
     super();
     

     this.state = {
         toggle : new Array(new Array(7),new Array(7),new Array(7),new Array(7),new Array(7),new Array(7)),
         globalCounter : true,
         done : false
     }
 }

 checkEligiblety(row,column){
    if(this.state.toggle[row+1][column] === undefined){
        alert(this.state.toggle[row+1][column]);
        return false;
    }
    return true;
 }


 
 toggleBoard(element){
     if(!this.state.done){
        let row  = parseInt( element.target.id.slice(0,1) );
        let column  = parseInt( element.target.id.slice(1) );
    
    
        if( row === 5 || this.checkEligiblety(row,column) ){
           
            if(this.state.toggle[row][column] === undefined){
                if(this.state.globalCounter === true){

                    this.state.toggle[row][column] = true;
                    
                    element.target.style.backgroundColor = 'red'
                   
                    if ( this.checkHorizantally(this.state.globalCounter ,row ,column) ){
                        alert('RED WINS');
                        this.setState({done:true});
                    }
                    this.setState({globalCounter:false});
                }else{
                    this.state.toggle[row][column] = false;
                    this.setState({globalCounter:true});
                    element.target.style.backgroundColor = 'blue'
                }
            }
        }}
    
 }

//if True red,False Blue
checkHorizantally(color,row,column){
   
    let scoreCounter = 0;
    
    
    //checks Right
    for (let i = column; i < 7; i++) {
        console.log(i)

        if(this.state.toggle[row][i] === color)
        scoreCounter++;
        else 
        break;
        
    }

    console.log(scoreCounter)
    return scoreCounter >= 4;

    //checks Lift
    // for (let i = 0; i <= column; i++) {
    //     if(this.state.toggle[row][i] === color)
    //     scoreCounter++;
    // }
    // console.log(this.state.toggle)
   
}


render(){
    return(
    <div>
        <table id="table" border="5">
              <tbody>

         <tr id="firstRow">
           <td className='element' id="00" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="01" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="02" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="03" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="04" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="05" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="06" onClick={this.toggleBoard.bind(this)}></td>
         </tr>

       <tr id="secondRow">
           <td className='element' id="10" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="11" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="12" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="13" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="14" onClick={this.toggleBoard.bind(this)}></td>
           <td  className='element'id="15" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="16" onClick={this.toggleBoard.bind(this)}></td>
        </tr>
        <tr id="thirdRow">
            <td className='element' id="20" onClick={this.toggleBoard.bind(this)}></td>
            <td className='element' id="21" onClick={this.toggleBoard.bind(this)}></td>
            <td className='element' id="22" onClick={this.toggleBoard.bind(this)}></td>
            <td className='element' id="23" onClick={this.toggleBoard.bind(this)}></td>
            <td className='element' id="24" onClick={this.toggleBoard.bind(this)}></td>
            <td className='element' id="25" onClick={this.toggleBoard.bind(this)}></td>
            <td className='element'id="26" onClick={this.toggleBoard.bind(this)}></td>
        </tr>

        <tr id="forthRow">
           <td className='element' id="30" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="31" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="32" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element'id="33" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="34" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="35" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="36" onClick={this.toggleBoard.bind(this)}></td>
       </tr>

       <tr id="fivthRow">
           <td className='element' id="40" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="41" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="42" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="43" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="44" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="45" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="46" onClick={this.toggleBoard.bind(this)}></td>
       </tr>

       <tr id="sixthRow">
           <td className='element' id="50" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="51" onClick={this.toggleBoard.bind(this)}></td>
           <td  className='element'id="52" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="53" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="54" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="55" onClick={this.toggleBoard.bind(this)}></td>
           <td className='element' id="56 " onClick={this.toggleBoard.bind(this)}></td>
       </tr>

            </tbody>
   </table>
    </div>
    )
}
 }
 export default Board;

 