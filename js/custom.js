$('.banner .owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    items: 1,
})

new Mmenu(document.querySelector("#menu"));

document.addEventListener("click", function (evnt) {
    var anchor = evnt.target.closest('a[href="#/"]');
    if (anchor) {
        alert("Thank you for clicking, but that's a demo link.");
        evnt.preventDefault();
    }
});