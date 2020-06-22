var list = document.querySelector('ul');
list.addEventListener('click', function(linethrough) {
  if (linethrough.target.tagName === 'LI') {
  linethrough.target.classList.toggle('checked');
  }
}, false);
function addnewelement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputitems").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
  alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("inputitems").value = "";
  
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}
function removeallitems(){
  var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}
