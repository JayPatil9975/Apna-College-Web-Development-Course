let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let fact = await getImg();
    let img = document.querySelector("#result");
    img.setAttribute("src",fact);
});



let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

async function getImg(){
    try{
        let res = await axios.get(url2);
        console.log(res.data.message);
        return res.data.message;
    }catch(e){
        console.log("Error catch :",e);
        return "No result Found";
    }
    
}