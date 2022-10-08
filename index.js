
function showmovies(){
    
    let movie=document.querySelector("#input").value
    
    const url=`http://www.omdbapi.com/?t=${movie}&apikey=14fddc23`


    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function (res){
        //console.log(res)
        displayData(res)

    })
    .catch(function(err){
        //appendErr(err)
        console.log(err);
        //alert("movie Not found")
        
    })
}


var cont=document.querySelector("#cont")


function displayData(data){
    console.log(data)
   cont.innerHTML=""
    if(data.Response=="True"){
        var box=document.createElement("div")
        // name imbd realer poster
    
        var h3=document.createElement("h3")
        h3.innerText=data.Title
        var p1=document.createElement("p")
        p1.innerText=data.Released
        var p2=document.createElement("p")
        p2.innerText=`IMDb:${data.imdbRating}/10`
        if(Number(data.imdbRating)>8.5){
            var p3=document.createElement("p")
            p3.innerText="Recommended"
            p3.setAttribute("id","p3")
            box.append(p3)
            cont.append(box)
        }
        var img=document.createElement("img")
        img.src=data.Poster
        box.append(h3,p1,p2,img)
        cont.append(box)
    
    }
    else{
        let img=document.createElement("img")
img.setAttribute("id","errimg")
img.src="https://wallpaperaccess.com/full/2267932.png"

    cont.append(img)
    }
        

    
    // var h1=createElement("h1")
    // h1.innerText=`Total${data.totalResults}Movies Found.`
    // document.querySelector("#foot").append(h1)
    
}       

//imdb URl
//var imdburl="https://www.imdb.com/title/"+data.Search[0].imdbID+"/";


// function appendErr(err){

// let img=document.createElement("img")
// img.setAttribute("id","errimg")
// img.src="https://wallpaperaccess.com/full/2267932.png"

//     cont.append(img)
// }




