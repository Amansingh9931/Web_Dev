let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
let country="india";
btn.addEventListener("click",async ()=>{
    let state=document.querySelector("input").value;
    console.log(state);
    let colleges= await getColleges(state);
    console.log(colleges);
    show(colleges);
});

function show(colleges){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colleges){
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}
async function getColleges(state) {
    try{
        let res=await axios.get(url+country);
        return res.data;
    }
    catch(e){
        console.log("error - ",e);
        return [];
    }
}