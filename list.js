function addWatchedAnime(animeValue) {
    var ul = document.getElementById("watchedAnime");
    var anime = document.getElementById("watchedInput");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(animeValue || anime.value));
    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function() {
        this.parentNode.remove();
        // Remove from local storage
        var watchedAnime = JSON.parse(localStorage.getItem('watchedAnime')) || [];
        var index = watchedAnime.indexOf(animeValue || anime.value);
        if (index !== -1) watchedAnime.splice(index, 1);
        localStorage.setItem('watchedAnime', JSON.stringify(watchedAnime));
    };
    li.appendChild(removeBtn);
    ul.appendChild(li);
    // Add to local storage
    if (!animeValue) {
        var watchedAnime = JSON.parse(localStorage.getItem('watchedAnime')) || [];
        watchedAnime.push(anime.value);
        localStorage.setItem('watchedAnime', JSON.stringify(watchedAnime));
        anime.value = "";
    }
}

function addToWatchlist(animeValue) {
    var ul = document.getElementById("animeWatchlist");
    var anime = document.getElementById("watchlistInput");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(animeValue || anime.value));
    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function() {
        this.parentNode.remove();
        // Remove from local storage
    };
    li.appendChild(removeBtn);
    ul.appendChild(li);
    // Add to local storage
    if (!animeValue) {
        var animeWatchlist = JSON.parse(localStorage.getItem('animeWatchlist')) || [];
        animeWatchlist.push(anime.value);
        localStorage.setItem('animeWatchlist', JSON.stringify(animeWatchlist));
        anime.value = "";
    }
}





