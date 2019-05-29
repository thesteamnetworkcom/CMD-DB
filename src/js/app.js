import React from "react";
import {Component, Fragment} from "react"
import Footer from "./footer.js"
import AppBody from "./appbody.js"
import Header from "./header.js"
import parser from "./parser.js"
import css from "../css/main.scss"
import scryfallfetch from "./scryfallfetch.js"
import parseInput from "./parseInput"

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      intro:"Scryfall DeckBuilder",
      version:"Vers: [1.0.0.0]",
      format:"No Format",
      queries:[],
      cardList:[],
      curList:0,
      deck:null,
      optionState:false,
      cardDisplayState:false,
      displayCard:{},
      decks:{},
      inputString:"!$> ",
      returnString:"%$> ",
      output:[],
      input:"",
      optionState:false,
      loginDetails:{},
      showLogin:false,
      content:{
        about:null,
        instructions:null
      }
    };
    this.inputUpdate = this.inputUpdate.bind(this);
    this.removeQuery = this.removeQuery.bind(this);
    this.addCard = this.addCard.bind(this);
    this.check = this.check.bind(this);
    this.checkRem=this.checkRem.bind(this);
    this.updateQty = this.updateQty.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.switchAbout = this.switchAbout.bind(this);
    this.clear = this.clear.bind(this);
    this.switchLogin = this.switchLogin.bind(this);
  }
  componenetWillMount(){

  }
  inputUpdate(e){
    if(event.key === "Backspace"){
      event.preventDefault();
      this.setState({
        input:this.state.input.slice(0,-1)
      });
    }else if(event.key === "Shift"){
    }else if(event.key === "Enter"){
      var res = parseInput(this.state.input);
      if(res.type === 'api'){
        this.state.queries.push(res.query);
        scryfallfetch(this.state.queries)
        .then(function(json){
          this.state.output.push({
            result:this.state.inputString + this.state.input,
            key:Math.floor(Math.random()*Math.floor(1000000))
          });
          this.state.output.push({
            result:this.state.returnString + "Total Cards: " + json.total_cards,
            key:Math.floor(Math.random()*Math.floor(1000000))
          });
          this.state.cardList=[];
          this.state.curList=0;
          this.state.cardList.push(json);
          this.state.input = "";
          this.setState({});
        }.bind(this));
      }
      else if(res.type === 'deck'){
        if(res.action === 'new'){
          this.state.output.push({
            result:this.state.inputString+this.state.input,
            key:Math.floor(Math.random()*Math.floor(1000000))
          });
          this.state.output.push({
            result:this.state.returnString + "Creating New Deck...",
            key:Math.floor(Math.random()*Math.floor(1000000))
          });
          this.state.queries = [];
          this.setState({});
          this.state.deck = {
            name:res.name,
            format:res.format,
            cards:{}
          }
          this.setState({});
          this.state.output.push({
            result:this.state.returnString + "Created Deck [ " + this.state.deck.name + "]",
            key:Math.floor(Math.random()*Math.floor(1000000))
          });
          if(res.format !== null & res.format !== undefined){
            this.state.queries.push({
              result:"f:" + res.format,
              id:Math.floor(Math.random()*Math.floor(1000000))
            });
            this.state.output.push({
              result:this.state.returnString+"Querying...",
              key:Math.floor(Math.random()*Math.floor(1000000))
            });
            this.setState({});
            scryfallfetch(this.state.queries)
            .then(function(json){
              this.state.input="";
              this.state.output.push({
                result:this.state.returnString + "Total Cards: " + json.total_cards,
                key:Math.floor(Math.random()*Math.floor(1000000))
              });
              this.state.cardList=[];
              this.state.curList=0;
              this.state.cardList.push(json);
              this.setState({});
            }.bind(this));
          }
        }
        else if(res.action === 'save'){
          this.state.output.push({
            result:this.state.inputString + this.state.input,
            key:Math.floor(Math.random()*Math.floor(1000000))
          });
          if(this.state.deck === null){
            this.state.output.push({
              result:this.state.returnString + "No Deck Loaded, try 'deck action=new name=test.dec'",
              key:Math.floor(Math.random()*Math.floor(1000000))
            });
            this.state.input="";
            this.setState({});
          }else if(res.flag === 'ow'){
            this.state.output.push({
              result:this.state.returnString + "Saving Deck...",
              key:Math.floor(Math.random()*Math.floor(1000000))
            });
            this.state.input = "";
            this.state.decks[this.state.deck.name] = this.state.deck;
            this.state.output.push({
              result:this.state.returnString + "Deck Saved...",
              key:Math.floor(Math.random()*Math.floor(1000000))
            });
            this.setState({});
          }else{
            console.log(this.state.decks);
            if(this.state.decks.hasOwnProperty(this.state.deck.name)){
              this.state.output.push({
                result:this.state.returnString + "Deck Exists Already, Add flag=ow To Overwrite",
                key:Math.floor(Math.random()*Math.floor(1000000))
              });
              this.setState({});
            }else{
              this.state.output.push({
                result:this.state.returnString + "Saving Deck...",
                key:Math.floor(Math.random()*Math.floor(1000000))
              });
              this.state.input = "";
              this.state.decks[this.state.deck.name] = this.state.deck;
              this.state.output.push({
                result:this.state.returnString + "Deck Saved...",
                key:Math.floor(Math.random()*Math.floor(1000000))
              });
              this.setState({});
            }
          }
        }
        else if(res.action === 'load'){
          this.state.output.push({
            result:this.state.inputString + this.state.input,
            key:Math.floor(Math.random()*Math.floor(1000000))
          });
          if(res.name === undefined || !this.state.decks.hasOwnProperty(res.name)){
            this.state.output.push({
              result:this.state.returnString + "Bad/No Name, Add 'name=' corresponding to one the following decks:",
              key:Math.floor(Math.random()*Math.floor(1000000))
            });
            console.log(this.state.decks);
            Object.keys(this.state.decks).forEach(function(key){
              this.state.output.push({
                result:this.state.returnString + key
              });
            }.bind(this));
            this.setState({});
          }else{
            var newDeck = JSON.parse(JSON.stringify(this.state.decks[res.name]));
            this.state.deck = newDeck;
            this.state.queries = [];
            this.state.output.push({
              result:this.state.returnString + "Deck Loaded, querying...",
              key:Math.floor(Math.random()*Math.floor(1000000))
            });
            this.setState({});
            if(this.state.deck.format !== undefined){
              this.state.queries.push({
                result:"f:" + this.state.deck.format,
                id:Math.floor(Math.random()*Math.floor(1000000))
              });
              scryfallfetch(this.state.queries)
              .then(function(json){
                this.state.input="";
                this.state.output.push({
                  result:this.state.returnString + "Total Cards: " + json.total_cards,
                  key:Math.floor(Math.random()*Math.floor(1000000))
                });
                this.state.cardList=[];
                this.state.curList=0;
                this.state.cardList.push(json);
                this.setState({});
              }.bind(this));
            }
          }
        }
      }
    }else{
      this.setState({
        input:this.state.input + event.key
      });
    }
  }
  removeQuery(key){
    let removeQuery = {};
    let queryList = this.state.queries;
    let newList = queryList.filter(function(e){
      if(e.id === key){
        removeQuery = e;
      }
      return e.id !== key;
    });
    this.state.queries = newList;
    scryfallfetch(this.state.queries)
    .then(function(json){
      this.state.cardList=[];
      this.state.curList=0;
      this.state.cardList.push(json);
      this.state.output.push({
        result:this.state.returnString + "Removing [" + removeQuery.result + "]...",
        key:Math.floor(Math.random()*Math.floor(1000000))
      });
      this.state.output.push({
        result:this.state.returnString + "Tota Cards: " + json.total_cards,
        key:Math.floor(Math.random()*Math.floor(1000000))
      });
      this.setState({});
    }.bind(this));
  }
  addCard(card, qty){
    console.log(card);
    let types = card.type_line.split(" ");
    if(types.includes("Creature")){
      this.check("Creatures", card, qty);
    }else if(types.includes("Instant") || types.includes("Sorcery")){
      this.check("Spells", card, qty);
    }else if(types.includes("Enchantment")){
      this.check("Enchantments", card, qty);
    }else if(types.includes("Artifact")){
      this.check("Artifacts", card, qty);
    }else if(types.includes("Planeswalker")){
      this.check("Planeswalkers", card, qty);
    }else if(types.includes("Land")){
      this.check("Lands", card, qty);
    }
    this.setState({
      deck:this.state.deck
    });
  }
  check(key, card, qty){
    if(this.state.deck.cards[key] === undefined){
      this.state.deck.cards[key] = [];
    }
    let test = false;
    for(var i = 0; i < this.state.deck.cards[key].length; i++){
      if(this.state.deck.cards[key][i].card.name === card.name ){
        this.state.deck.cards[key][i].qty = this.state.deck.cards[key][i].qty + qty;
        if(this.state.deck.cards[key][i].qty === 0){
            this.clear(this.state.deck.cards[key][i].card);
        }
        test=true;
      }
    }
    if(!test){
      this.state.deck.cards[key].push({
        card:card,
        qty:qty
      });
    }
  }
  checkRem(key, card){
      if(this.state.deck.cards[key] === undefined){
          return;
      }
      let test = false;
      let deleteKey = "";
      let deleteInd = 0;
      for(var i = 0; i < this.state.deck.cards[key].length; i++){
          console.log(this.state.deck.cards[key][i].card.name);
          console.log(card.name);
          if(this.state.deck.cards[key][i].card.name === card.name){
              deleteInd = i;
              deleteKey = key;
              console.log(i);
              test = true;
              break;
          }
      }
      if(test){
          this.state.deck.cards[deleteKey].splice(deleteInd, 1);
          if(this.state.deck.cards[deleteKey].length === 0){
              this.state.deck.cards[deleteKey] = undefined;
          }
      }
  }
  updateQty(e, updateTarget){
    if((e.target.value)===''){
      updateTarget.qty='';
    }else{
      updateTarget.qty=parseInt(e.target.value);
      if(updateTarget.qty === 0){
          this.clear(updateTarget.card);
      }
    }
    this.setState({});
  }
  clear(clearTarget){
      console.log(clearTarget);
      let types=clearTarget.type_line.split(" ");
      if(types.includes("Creature")){
          this.checkRem("Creatures", clearTarget);
      }else if(types.includes("Instant") || types.includes("Sorcery")){
          this.checkRem("Spells", clearTarget);
      }else if(types.includes("Enchantment")){
          this.checkRem("Enchantments", clearTarget);
      }else if(types.includes("Artifact")){
          console.log("here");
          this.checkRem("Artifacts", clearTarget);
      }else if(types.includes("Planeswalker")){
          this.checkRem("Planeswalkers", clearTarget);
      }else if(types.includes("Land")){
          this.checkRem("Lands", clearTarget);
      }
      this.setState({
        deck:this.state.deck
      });
  }
  next(){
    console.log(this.state.cardList.length -1);
      console.log(this.state.curList);
      if(this.state.cardList.length - 1 > this.state.curList){
          this.setState({
              curList:this.state.curList + 1
          });
      }else if(this.state.cardList[this.state.curList].has_more === true){
          console.log("Fetching...");
          fetch(this.state.cardList[this.state.curList].next_page)
          .then(res => res.json())
          .then(json => {
              console.log(json);
              var cardList = this.state.cardList;
              this.state.cardList.push(json);
              this.setState({
                  cardList:cardList,
                  curList:this.state.curList + 1
              });
          });
      }
  }
  prev(){
    if(this.state.curList === 0){

    }else{
      this.setState({
        curList:this.state.curList -1
      });
    }
  }
  switchAbout(){
    this.state.optionState=!this.state.optionState;
    this.setState({});
  }
  switchLogin(){
      this.state.showLogin=!this.state.showLogin;
      this.setState({});
  }
  render(){
    return(
      <Fragment>
        {/*<div data-netlify-identity-menu></div>*/}
        <Header
            switchAbout={this.switchAbout}
            loginDetails={this.state.loginDetails}
            showLogin={this.state.showLogin}
            switchLogin={this.switchLogin}
        />
        <AppBody
          optionState={this.state.optionState}
          inputString={this.state.inputString}
          returnString={this.state.returnString}
          output={this.state.output}
          input={this.state.input}
          intro={this.state.intro}
          version={this.state.version}
          deck={this.state.deck}
          queries={this.state.queries}
          cardList={this.state.cardList}
          curList={this.state.curList}
          deck={this.state.deck}

          inputUpdate={this.inputUpdate}
          removeQuery={this.removeQuery}
          addCard={this.addCard}
          switchCardState={this.switchCardState}
          updateQty={this.updateQty}
          clear={this.clear}
          prev={this.prev}
          next={this.next}
        />
        <Footer />
      </Fragment>
    )
  }
}

export default App;
