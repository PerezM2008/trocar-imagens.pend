'use strick'

function carregarImagens (){
    const imagens = [

        {
            nome: 'cachorro',
            url: './img/Cane-Corso.jpg'
        },
        {
            nome: 'caneta',
            url: './img/canetas-de-luxo.jpg'
        },
        {
            nome: 'casa',
            url: './img/casas-classicas-1.jpg' 
        },
        {
            nome: 'cavaleiro',
            url: './img/cavaleiro-medieval-com-espada-wallpaper-11670.jpg'
        },
        {
            nome: 'carro',
            url: './img/red-threads-and-black-sports-cars-fjbt2g5om3l6ewvx.jpg'
        },
        {
            nome: 'terno',
            url: './img/man-in-suit-with-red-tie-bbxlx2cazbx62ivd.jpg'
        },
        {
            nome: 'paisagem',
            url: './img/maravillas-da-amazonia.jpeg.webp'
        },
        {
            nome: 'igreja',
            url: './img/Notre-Dame_de_Paris,_4_October_2017.jpg'
        },
        {
            nome: 'relogio',
            url: './img/rolex-relogios-luxo-investimento-valorizacao-diversificacao-alternativo-boston-consulting-group-bcg-ibovespa.jpg'
        },
        {
            nome: 'sapato',
            url: './img/sapato-masculino-derby-andrews-whisky-5.avif'
        }




        // "./img/Cane-Corso.jpg",
        // "./img/canetas-de-luxo.jpg",
        // "./img/casas-classicas-1.jpg",
        // "./img/cavaleiro-medieval-com-espada-wallpaper-11670.jpg",
        // "./img/man-in-suit-with-red-tie-bbxlx2cazbx62ivd.jpg",
        // "./img/maravillas-da-amazonia.jpeg.webp",
        // "./img/Notre-Dame_de_Paris,_4_October_2017.jpg",
        // "./img/rolex-relogios-luxo-investimento-valorizacao-diversificacao-alternativo-boston-consulting-group-bcg-ibovespa.jpg",
        // "./img/sapato-masculino-derby-andrews-whisky-5.avif",
        // "./img/images.jpeg"
    ]

    function criarImagem (Imagem) {
        const galeria = document.getElementById('galeria')
        const img = document.createElement('img')
        img.src = Imagem.url

        galeria.appendChild(img)
    
    }
    const descricao = document.createElement('descricao')
    


    

    // let contador = 0 
    // const limite = imagens.length
    //     while (contador < limite) {
    //     console.log(imagens[contador])
    //     contador++

        
    // }

    imagens.forEach(criarImagem)
}

carregarImagens()