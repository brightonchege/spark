const search = document.getElementById('search');
const middle = document.getElementById('middle');
const searchMusic = document.getElementById('searchmusic');
const clear = document.getElementById('clear');

// Search button event listener
search.addEventListener('click', () => {
    const searchQuery = searchMusic.value.trim();
    if (!searchQuery) return; // Exit if search input is empty

    // Clear previous results
    middle.innerHTML = '';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '68ca2b29famsh3659961ddfd0bc6p13afa2jsn2558945f180c',
            'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
        }
    };

    // Fetch search results
    fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${encodeURIComponent(searchQuery)}`, options)
        .then(response => {
            if (!response.ok) throw new Error('Search API request failed');
            return response.json();
        })
        .then(response => {
            // Limit to 30 results or available items
            const items = response.items || [];
            const maxResults = Math.min(items.length, 30);

            for (let i = 0; i < maxResults; i++) {
                // Create music container
                const musicContainer = document.createElement('div');
                musicContainer.className = 'musiccontainer';

                // Image section
                const image = document.createElement('div');
                image.className = 'image';
                const pic = document.createElement('img');
                pic.src = response.items[i].thumbnails[0]?.url || '';

                // Name section
                const namePlace = document.createElement('div');
                namePlace.className = 'nameplace';

                const musicianCont = document.createElement('div');
                musicianCont.className = 'musiciancont';
                const musician = document.createElement('h4');
                musician.className = 'musician';
                musician.innerHTML = response.items[i].author?.name || 'Unknown Artist';

                const songCont = document.createElement('div');
                songCont.className = 'songcont';
                const song = document.createElement('h3');
                song.className = 'song';
                song.innerHTML = response.items[i].title || 'Unknown Title';

                // Download section
                const downloadContainer = document.createElement('div');
                downloadContainer.className = 'downloadcontainer';
                const downloadLink = document.createElement('a');
                const downloadBtn = document.createElement('button');
                downloadBtn.className = 'down';
                const icon = document.createElement('ion-icon');
                icon.name = 'arrow-down-outline';
                const songId = document.createElement('p');
                songId.className = 'songid';
                songId.innerHTML = response.items[i].id || '';

                // Append elements
                middle.append(musicContainer);
                musicContainer.append(image, namePlace, downloadContainer);
                image.append(pic);
                namePlace.append(musicianCont, songCont);
                musicianCont.append(musician);
                songCont.append(song);
                downloadContainer.append(downloadLink);
                downloadLink.append(downloadBtn);
                downloadBtn.append(icon, songId);

                // Fetch download link
                const downloadOptions = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '68ca2b29famsh3659961ddfd0bc6p13afa2jsn2558945f180c',
                        'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
                    }
                };

                fetch(`https://youtube-mp3-download1.p.rapidapi.com/dl?id=${songId.innerHTML}`, downloadOptions)
                    .then(response => {
                        if (!response.ok) throw new Error('Download API request failed');
                        return response.json();
                    })
                    .then(data => {
                        downloadLink.href = data.link || '#';
                        downloadLink.target = '_blank';
                    })
                    .catch(err => console.error('Download error:', err));
            }
        })
        .catch(err => console.error('Search error:', err));
});

// Clear button event listener
clear.addEventListener('click', () => {
    searchMusic.value = '';
    middle.innerHTML = '';
});
