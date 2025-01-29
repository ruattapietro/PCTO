class Player
{
    constructor()
    {
        this.x = mouseX
        this.y = mouseY
        this.katana = lama
    }
    show()
    {
        image(this.katana, mouseX - this.katana.width / 2, mouseY - this.katana.height / 2)
    }
    hits(oggetto)
    {
        return collideCircleCircle(mouseX, mouseY, this.katana.height, oggetto.xc, oggetto.yc, oggetto.immagine.height)
    }

}