var change = document.querySelectorAll('p')[6]
var newtext = document.querySelectorAll('p')[7]


function toggletext(){
  change.classList.toggle('none')
  newtext.classList.toggle('none')
}

function changenewtext(){
  newtext.classList.toggle('none')
}

function bgchange(){
  document.querySelector('body').classList.toggle('bg')
}

setInterval(function() {
  toggletext()
}, 3000);

document.querySelectorAll('button')[2].addEventListener("click", function(){
  bgchange();
})
