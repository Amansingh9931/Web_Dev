// let url="https://catfact.ninja/fact";
// fetch(url)
//     .then((res)=>{
//         console.log(res);
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("data 1= ",data.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("data2 = ",data2.fact);
//     })
//     .catch((err)=>{
//         console.log("Error - ",err);
//     });


// let url="https://catfact.ninja/fact";
// async function getfact() {
//     try{
//         let res=await fetch(url);
//         let data =await res.json();
//         console.log(data.fact);

//         let res2=await fetch(url);
//         let data2 =await res2.json();
//         console.log(data2.fact);
//     } catch(e){
//         console.log("error - ",e);
//     }
//     console.log("bye");
// }



let btn=document.querySelector("button");
let url2="https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click",async()=>{
    let link=await getImage();
    // console.log(link);
    let img=document.querySelector("#result");
    img.setAttribute("src",link);
});


async function getImage() {
    try{
        let res=await axios.get(url2);
        // return(res.data.fact);
       return  res.data.message;
    } catch(e){
        console.log("error - ",e);
        return "/";
    }
        
}


// btn.addEventListener("click",async()=>{
//     let fact=await getfact();
//     console.log(fact);
//     let p=document.querySelector("#result");
//     p.innerText=fact;
// });

// let url="https://catfact.ninja/fact";

// async function getfact() {
//     try{
//         let res=await axios.get(url);
//         return(res.data.fact);
//     } catch(e){
//         console.log("error - ",e);
//         return "NO fact found";
//     }
        
// }