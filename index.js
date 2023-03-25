/*const search = document.getElementById('search')
search.addEventListener('click',()=>{
    const middle = document.getElementById('middle')
     
    let seaerchmusic = document.getElementById('searchmusic').value
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
    for(var i = 0; i < 30 ;i++){
        const musiccontainer = document.createElement('div')
              musiccontainer.className='musiccontainer'
        
        const image = document.createElement('div')
              image.className = "image"
              const pic = document.createElement('img')
                   pic.src = response.result.songs[i].thumbnail

        const nameplace = document.createElement('div')
              nameplace.className = "nameplace"

              const musciancont = document.createElement('div')
              musciancont.className = "musciancont"

                     const musician = document.createElement('h4')
                           musician.className = "muscian"
                           musician.innerHTML = response.result.songs[i].artists[0].name

              const songcont = document.createElement('div')
              songcont.className = "songcont"

                     const song = document.createElement('h3') 
                           song.className = "song"
                           song.innerHTML = response.result.songs[i].title
            
     const downloadlink =  document.createElement('a')

        const downloadconatainer  = document.createElement('div')
              downloadconatainer.className = "downloadcontainer"

              const downloadbtn  = document.createElement('button')
                    downloadbtn.className="down"
              const icon = document.createElement('ion-icon')
                    icon.name = "arrow-down-outline"

                    const songid = document.createElement('p')
                    songid.className = "songid"
                    songid.innerHTML = response.result.songs[i].id 

middle.append(musiccontainer)
musiccontainer.append(image,nameplace,downloadconatainer)
downloadconatainer.append(downloadlink)
image.append(pic)
nameplace.append(musciancont,songcont)
musciancont.append(musician)
songcont.append(song)
downloadlink.append(downloadbtn)
downloadbtn.append(icon,songid)

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

*/
const search = document.getElementById('search')
search.addEventListener('click',()=>{
    const middle = document.getElementById('middle')
     
    let seaerchmusic = document.getElementById('searchmusic').value



    
/*    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '68ca2b29famsh3659961ddfd0bc6p13afa2jsn2558945f180c',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
    };*/

   /* const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '68ca2b29famsh3659961ddfd0bc6p13afa2jsn2558945f180c',
            'X-RapidAPI-Host': 'ytube-videos.p.rapidapi.com'
        }
    };*/
   // fetch(`https://youtube-music1.p.rapidapi.com/v2/search?query=${seaerchmusic}`, options)
 //  fetch(`https://youtube138.p.rapidapi.com/auto-complete/?q=${seaerchmusic}&hl=en&gl=US`, options)
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68ca2b29famsh3659961ddfd0bc6p13afa2jsn2558945f180c',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};

fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${seaerchmusic}`, options)
	.then(response => response.json())

// fetch(`https://ytube-videos.p.rapidapi.com/search-video?q=${seaerchmusic}&lang=EN`, options)
  //      .then(response => response.json())
        .then((response)=>{
    for(var i = 0; i < 30 ;i++){
        const musiccontainer = document.createElement('div')
              musiccontainer.className='musiccontainer'
        
        const image = document.createElement('div')
              image.className = "image"
              const pic = document.createElement('img')
                //   pic.src = response.result.songs[i].thumbnail
                pic.src = response.items[i].thumbnails[0].url

        const nameplace = document.createElement('div')
              nameplace.className = "nameplace"

              const musciancont = document.createElement('div')
              musciancont.className = "musciancont"

                     const musician = document.createElement('h4')
                           musician.className = "muscian"
                      //     musician.innerHTML = response.result.songs[i].artists[0].name
                      musician.innerHTML = response.items[i].author.name

              const songcont = document.createElement('div')
              songcont.className = "songcont"

                     const song = document.createElement('h3') 
                           song.className = "song"
                        //   song.innerHTML = response.result.songs[i].title
                        song.innerHTML = response.items[i].title
            
     const downloadlink =  document.createElement('a')

        const downloadconatainer  = document.createElement('div')
              downloadconatainer.className = "downloadcontainer"

              const downloadbtn  = document.createElement('button')
                    downloadbtn.className="down"
              const icon = document.createElement('ion-icon')
                    icon.name = "arrow-down-outline"

                    const songid = document.createElement('p')
                    songid.className = "songid"
                   // songid.innerHTML = response.result.songs[i].id
                   songid.innerHTML = response.items[i].id

middle.append(musiccontainer)
musiccontainer.append(image,nameplace,downloadconatainer)
downloadconatainer.append(downloadlink)
image.append(pic)
nameplace.append(musciancont,songcont)
musciancont.append(musician)
songcont.append(song)
downloadlink.append(downloadbtn)
downloadbtn.append(icon,songid)

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
