

// world most annoing button project

const btn = document.querySelector('button');
btn.addEventListener('mouseover', () => {
    const h = Math.floor(Math.random() * window.innerHeight)
    const w = Math.floor(Math.random() * window.innerWidth)
    btn.style.left = `${w}px`;
    btn.style.top = `${h}px`;

})

btn.addEventListener('click', function(){
    btn.innerText = "YOU GOT ME!";
    document.body.style.backgroundColor = "green";
})