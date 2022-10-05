const btn = document.querySelector('button')

btn.addEventListener(`click`, function() {
    document.body.style.background = randomBg()
})

function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
    document
}

setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#"+randomColor;
    },1000);