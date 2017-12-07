
const imgBunny: any = require("../public/data/images/zelda1.png");
export default class Boot extends Phaser.State {

    private text: Phaser.Text;
    public preload(game: Phaser.Game): void {
        console.log("preload");
        game.load.image("einstein", imgBunny);
    }
    public create(game: Phaser.Game): void {
        const s = game.add.sprite(80, 0, "einstein");

        s.rotation = 0.14;



            this.text = game.add.text(game.world.centerX, game.world.centerY, "The Haunted Castle");
            this.text.anchor.setTo(0.5);

            this.text.font = "Mystery Quest";
            this.text.fontSize = 60;

            //  x0, y0 - x1, y1
            const grd: CanvasGradient = this.text.context.createLinearGradient(0, 0, 0, this.text.canvas.height);
            grd.addColorStop(0, "#8ED6FF");
            grd.addColorStop(1, "#004CB3");
            this.text.fill = grd;

            this.text.align = "center";
            this.text.stroke = "#000000";
            this.text.strokeThickness = 2;
            this.text.setShadow(5, 5, "rgba(0,0,0,0.5)", 5);

            this.text.inputEnabled = true;
            this.text.input.enableDrag();


        }
}