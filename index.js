let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slide = document.querySelector('.slide')


//** to show background image */

next.addEventListener("click", event =>{
    let items = document.querySelectorAll('.item');
    // document.querySelector('.slide').appendChild(items[0]);
    slide.appendChild(items[0])

    console.log(slide)
})


/** prev  */

prev.addEventListener("click", event =>{
    let items = document.querySelectorAll('.item');
    slide.prepend(items[items.length - 1])
        // document.querySelector('.slide').prepend(items[items-length - 1]);

    console.log(slide)
})