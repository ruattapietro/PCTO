let yMinGrandi = altezzaSfondo / 3.6
let yMaxGrandi = altezzaSfondo / 1.4
let yMinMedi1 = altezzaSfondo / 10.8
let yMaxMedi1 = yMinGrandi - 1
let yMinMedi2 = yMaxGrandi + 1
let yMaxMedi2 = altezzaSfondo - altezzaSfondo / 10
let yMinPiccoli1 = 0
let yMaxPiccoli1 = yMinMedi1 - 1
let yMinPiccoli2 = yMaxMedi2 + 1 
let yMaxPiccoli2 = altezzaSfondo
class Oggetto
{
    constructor()
    {
        this.x = larghezzaSfondo + 200
        this.dimensione = randomBetween(1, 3)
        this.layer = randomBetween(1, 2)
        this.xc
        this.yc
        this.punti = this.dimensione
        if(this.dimensione == 1)
        {
            this.immagine = anguria
            this.y = randomBetween(yMinGrandi, yMaxGrandi)
        }
        else if(this.dimensione == 2)
        {
            this.immagine = mela
            if(this.layer == 1)
            {
                this.y = randomBetween(yMinMedi1, yMaxMedi1)
            }
            else
            {
                this.y = randomBetween(yMinMedi2, yMaxMedi2)
            }
        }
        else
        {
            this.immagine = diamante
            if(this.layer == 1)
            {
                this.y = randomBetween(yMinPiccoli1, yMaxPiccoli1)
            }
            else
            {
                this.y = randomBetween(yMinPiccoli2, yMaxPiccoli2)
            }
        }
        
    }
    show()
    {
        image(this.immagine, this.x, this.y)
        this.xc = this.x + this.immagine.width / 2
        this.yc = this.y + this.immagine.height / 2
    }
    move()
    {
        this.x = this.x - 5
    }

}