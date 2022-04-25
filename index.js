var pokemon;
if(localStorage.getItem("pokemon")==null){
   const response=fetch("https://pokeapi.co/api/v2/pokemon/")
     response.then(response1=>response1.json())
     .then((res)=>{
         console.log(res.results);
         pokemon=res.results;
         localStorage.setItem("pokemon",JSON.stringify(pokemon));
     })
     
}else{
    pokemon=JSON.parse(localStorage.getItem(pokemon));
}
window.addEventListener("load",function(){
    var pokemon=JSON.parse(localStorage.getItem("pokemon"));
    console.log(pokemon);
    pokemon.forEach(function(ele,index){
        var row=document.createElement("tr");
        var id=document.createElement("td");
        id.innerText=index;
        var name=document.createElement("td");
        name.innerText=ele.name;
        //console.log(index,ele.name);
        row.append(id,name);
        document.querySelector("#pokemondetails").append(row);
    })
})


const response=fetch("https://pokeapi.co/api/v2/pokemon/pidgeot/")
     response.then(response1=>response1.json())
     .then((res)=>{
         console.log(res);
         
     })

function searchfn(){
    event.preventDefault();
    console.log("working");
    var name=document.querySelector("#pokemonname").value;
    var url="https://pokeapi.co/api/v2/pokemon/"+name+"/";
    console.log(url);
    const response=fetch(url)
    //console.log(result1);
    response.then(response1=>response1.json())
    .then((res)=>{
        console.log("not workinh")
        document.querySelector("#displayofpmondetails").innerHTML="";
        var box=document.createElement("div");
        var id=document.createElement("p");
        id.innerText="Id:"+res.id;
        var name=document.createElement("p");
        name.innerText="Name:"+res.name;
        var height=document.createElement("p");
        height.innerText="Height:"+res.height;
        var weight=document.createElement("p");
        weight.innerText="Weight:"+res.weight;
        var abilities=document.createElement("p");
        abilities.innerText=res.abilities;
        var moves=document.createElement("p");
        moves.innerText=res.moves;
        box.append(id,name,height,weight);
        document.querySelector("#displayofpmondetails").append(box);
        
    }).catch((err)=>{
       console.log("error");
    })
}