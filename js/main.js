const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

header.classList.add("header-scroll");

}else{

header.classList.remove("header-scroll");

}

});//ecosistema

const track = document.getElementById("ecosistemaTrack");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let autoSlide;

function nextSlide(){

    track.scrollBy({
        left:220,
        behavior:"smooth"
    });

}

function prevSlide(){

    track.scrollBy({
        left:-220,
        behavior:"smooth"
    });

}

if(nextBtn){
    nextBtn.addEventListener("click", () => {

        stopAutoSlide();
        nextSlide();
        startAutoSlide();

    });
}

if(prevBtn){
    prevBtn.addEventListener("click", () => {

        stopAutoSlide();
        prevSlide();
        startAutoSlide();

    });
}

function startAutoSlide(){

    autoSlide = setInterval(() => {

        const maxScroll =
        track.scrollWidth - track.clientWidth;

        if(track.scrollLeft >= maxScroll - 10){

            track.scrollTo({
                left:0,
                behavior:"smooth"
            });

        }else{

            nextSlide();

        }

    },1200);

}

function stopAutoSlide(){

    clearInterval(autoSlide);

}

track.addEventListener("mouseenter", stopAutoSlide);
track.addEventListener("mouseleave", startAutoSlide);

startAutoSlide();