
let img_bunny: any = require("../public/data/images/zelda1.png");
export default class Boot extends Phaser.State {
    public preload(game: Phaser.Game): void{
        console.log("preload");
        game.load.image("einstein", img_bunny);
    } 
    public create(game: Phaser.Game): void {
        const s = game.add.sprite(80, 0, "einstein");
        
        s.rotation = 0.14;
    }
}