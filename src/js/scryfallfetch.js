let scryfallfetch = (queryList)=>{
  let fullQuery = "https://api.scryfall.com/cards/search?q=";
  for(var i = 0; i < queryList.length; i++){
    if(i===0){
      fullQuery=fullQuery+queryList[i].result;
    }else{
      fullQuery=fullQuery+"+"+queryList[i].result;
    }
  }
  return fetch(fullQuery)
  .then(res=>res.json())
  .then(json=>{
    return json
  });
}


export default scryfallfetch;
