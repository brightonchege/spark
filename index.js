
const searching = document.getElementById('search')
searching.addEventListener('click',()=>{
  
           let seaerchmusic = document.getElementById('searchmusic').value
           const results  = document.getElementById('results')
           const options = {
               method: 'GET',
               headers: {
                   'X-RapidAPI-Key': '68ca2b29famsh3659961ddfd0bc6p13afa2jsn2558945f180c',
                   'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
               }
           };
           fetch(`https://youtube-music1.p.rapidapi.com/v2/search?query=${seaerchmusic}`, options)
       
               .then(response => response.json())
               .then((response)=>{
                   
                   for(var i = 0 ;i < 30 ;i++){     
                //    console.log(response.result.songs[i].artists[0].name)
                //    console.log(response.result.songs[i].id) 

                  
   const musiccontainer = document.createElement('div')
   musiccontainer.className = "musiccontainer"                      //musiccontainer

   const imagecontainer = document.createElement('div')          
         imagecontainer.className = "imagecontainer"//image container
      const songimage = document.createElement('img')
            songimage.src = response.result.songs[i].thumbnail
            songimage.className = "songimage"
                     
    const headingscontainer = document.createElement('div')
          headingscontainer.className = "headingscontainer"//heading container alone
             const names = document.createElement('h3')
                     names.innerHTML = response.result.songs[i].artists[0].name
                     names.id="names"
             const songname= document.createElement('h2')
                      songname.innerHTML = response.result.songs[i].title
                      songname.id="songname"

   const  downloadcontainer = document.createElement('div')
          downloadcontainer.className = 'downloadcontainer' //control container

   const downloadlink =  document.createElement('a')
   const downloadbutton =  document.createElement('button') //button download
         downloadbutton.className= "donloadbutton"
    //     downloadbutton.innerHTML = "download"
     const donloadbuttonimg =  document.createElement('img')
      donloadbuttonimg.src= "icons/down1.png"
     donloadbuttonimg.className=" donloadbuttonimg"
   
     const songid = document.createElement('p')
     songid.className = "songid"
     songid.innerHTML = response.result.songs[i].id      
       results.append(musiccontainer)
       musiccontainer.append(imagecontainer,headingscontainer,downloadcontainer) 
       imagecontainer.append(songimage)
       headingscontainer.append(names,songname)
       downloadcontainer.append(downloadlink) 
       downloadlink.append(downloadbutton)
       downloadbutton.append(donloadbuttonimg)
       downloadcontainer.append(songid)
    
     
  
       

       let idname = songid.innerHTML
       const options1 = {
             method: 'GET',
             headers: {
                   'X-RapidAPI-Key': '68ca2b29famsh3659961ddfd0bc6p13afa2jsn2558945f180c',
                   'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
             }
       };
       
       fetch(`https://youtube-mp3-download1.p.rapidapi.com/dl?id=${idname}`, options1)
             .then(response => response.json())
             .then((response) =>{
                 //console.log(response.link)
        downloadlink.href = response.link
        downloadlink.target="_blank"
             } )
             .catch(err => console.error(err));
   const clear = document.getElementById('clear')
       clear.addEventListener('click',()=>{
           var getValue= document.getElementById("searchmusic").value
           if (getValue !="") {
               getValue = "";
           }
             musiccontainer.remove()
            })
        }
                   
    })

})

/** 
 * 



*/