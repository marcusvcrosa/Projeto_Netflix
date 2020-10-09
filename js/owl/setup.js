$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{ // menor que 600px ou mais 3 itens na tela
            items:1
        },
        600:{ //600px ou mais 3 itens na tela
            items:3
        },
        1000:{ //1000px ou mais 5 itens na tela.
            items:5
        }
    }
})