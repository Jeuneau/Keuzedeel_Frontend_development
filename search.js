function searchFunction() {
    var input, filter, container, h2, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    container = document.getElementsByClassName("container");
    
    for (i = 0; i < container.length; i++) {
      h2 = container[i].getElementsByTagName("h2")[0];
      txtValue = h2.textContent || h2.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        container[i].style.display = "";
      } else {
        container[i].style.display = "none";
      }
    }
  }