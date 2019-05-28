import parser from "./parser.js"

function parseInput(input){
  /* DO PARSE STUFF HERE */
  let type = input.split(/\s(.+)/)[0];
  let rest = input.split(/\s(.+)/)[1];
  if(type ==="api"){
    let result = parser.api.func(rest);
    //Create New Query//
    let query = {
      result:result,
      id:Math.floor(Math.random() * Math.floor(1000000))
    }

    return {
      type:'api',
      query:query
    }
  }else if(type === "deck"){
    let result = parser.deck.func(rest);
    if("action" in result){
      switch(result.action){
        case "new":
          return{
            type:'deck',
            action:result.action,
            format:result.format,
            name:result.name
          }
          break;
        /*case "edit":
          console.log("Edit Deck");
          if(this.props.state.deck === null){
            var newOutput = this.state.output;
            newOutput.push(this.state.inputString + input);
            newOutput.push(this.state.returnString + "No deck loaded, please a load a deck with [deck action=new] first")
            this.setState({
              output:newOutput,
              input:""
            });
          }else{
            var newOutput = this.state.output;
            newOutput.push(this.state.inputString + input);
            newOutput.push(this.state.returnString + "Editing Deck Data");
            this.setState({
              output:newOutput,
              input:""
            });
          }
          break;*/
        /*case "delete":
          console.log("Delete Deck");
          var newOutput = this.state.output;
          newOutput.push(this.state.inputString + input);
          newOutput.push(this.state.returnString + "Deleting Deck");
          this.setState({
            output:newOutput,
            input:""
          });
          break;*/
        case "save":
          return{
            type:'deck',
            action:result.action,
            flag:result.flag
          }
          break;
        case "load":
          return{
            type:'deck',
            action:result.action,
            name:result.name
          }
        default:
          var newOutput = this.state.output;
          newOutput.push(this.state.inputString + input);
          newOutput.push(this.state.returnString + "Editing Deck");
          this.setState({
            output:newOutput,
            input:""
          });
          console.log("Edit Deck");
          break;
      }
    /*}else{
        console.log("Edit Deck");
        if(this.props.state.deck === null){
          var newOutput = this.state.output;
          newOutput.push(this.state.inputString + input);
          newOutput.push(this.state.returnString + "No deck loaded, please a load a deck with [deck action=new] first")
          this.setState({
            output:newOutput,
            input:""
          });
        }else{
          var newOutput = this.state.output;
          newOutput.push(this.state.inputString + input);
          newOutput.push(this.state.returnString + "Editing Deck");
          this.setState({
            output:newOutput,
            input:""
          });
        }
      }*/
    /*}else if(type === "card"){*/
    }
  }else{
    let newOutput = this.state.output;
    newOutput.push(this.state.inputString + input);
    newOutput.push(this.state.returnString + "return");
    this.setState({
      output:newOutput,
      input:""
    });
    console.log(this.state.output);
  }
}

export default parseInput;
