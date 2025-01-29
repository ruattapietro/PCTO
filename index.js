let player
let lama
let sfondo
let anguria
let mela
let diamante
let altezzaSfondo = 830
let larghezzaSfondo = 1850
let punteggio = 0

let oggetti = []

function preload()
{
    lama = loadImage('katana.png')
    sfondo = loadImage('sfondo.png')
    anguria = loadImage('anguria.png')
    mela = loadImage('mela.png')
    diamante = loadImage('diamante.png')
}
function setup()
{
    frameRate(60)
    player = new Player()
    createCanvas(larghezzaSfondo, altezzaSfondo)
}
function draw()
{
    background(sfondo)
    if(random(1) < 0.05)
    {
        oggetti.push(new Oggetto())
    }
    for(let cont = oggetti.length - 1; cont >= 0; cont--)
    {
        let obj = oggetti[cont]
        obj.show()
        obj.move()

        if(player.hits(obj))
        {
            console.log("Oggetto colpito!")
            punteggio += obj.punti
            oggetti.splice(cont, 1)
            console.log(punteggio)
            
        }
        document.getElementById("punteggio").textContent = punteggio;
    }
    player.show()
}
function randomBetween(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}
