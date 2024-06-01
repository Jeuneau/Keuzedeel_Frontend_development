window.onload = function() {
    loadList('watchlist', 'animeWatchlist');
    loadList('watched', 'watchedAnime');
};

function loadList(listName, listId) {
    var list = JSON.parse(localStorage.getItem(listName)) || [];
    var ul = document.getElementById(listId);
    ul.innerHTML = ''; // Clear the list
    list.forEach(function(anime) {
        addToList(ul, list, anime, listName);
    });
}

function addToList(ul, list, anime, listName) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(anime));
    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function() {
        this.parentNode.remove();
        var index = list.indexOf(anime);
        if (index !== -1) {
            list.splice(index, 1);
            localStorage.setItem(listName, JSON.stringify(list));
        }
    };
    li.appendChild(removeBtn);
    ul.appendChild(li);
}

document.getElementById('watchlistInput').addEventListener('change', function() {
    var list = JSON.parse(localStorage.getItem('watchlist')) || [];
    var anime = this.value;
    if (anime && !list.includes(anime)) {
        list.push(anime);
        localStorage.setItem('watchlist', JSON.stringify(list));
        addToList(document.getElementById('animeWatchlist'), list, anime, 'watchlist');
    }
});

document.getElementById('watchedInput').addEventListener('change', function() {
    var list = JSON.parse(localStorage.getItem('watched')) || [];
    var anime = this.value;
    if (anime && !list.includes(anime)) {
        list.push(anime);
        localStorage.setItem('watched', JSON.stringify(list));
        addToList(document.getElementById('watchedAnime'), list, anime, 'watched');
    }
});

document.getElementById('clearWatchlist').addEventListener('click', function() {
    clearList('watchlist', 'animeWatchlist');
});

document.getElementById('clearWatchedAnime').addEventListener('click', function() {
    clearList('watched', 'watchedAnime');
});

function clearList(listName, listId) {
    localStorage.removeItem(listName);
    var ul = document.getElementById(listId);
    ul.innerHTML = '';
}