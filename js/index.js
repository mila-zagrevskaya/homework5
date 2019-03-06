// moved of pictures 
// resize

let collection = Array.from (document.getElementsByClassName ('screen'))

collection.forEach (
  function (elem) {
    elem.onclick = function (event) {
      this.style.maxWidth = "900px";
    }
  }
)
collection.forEach (
  function (elem) {
    elem.onmouseout = function (event) {
      this.style.maxWidth = "800px";
    }
  }
)

