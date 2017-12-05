

export default class Boot extends Phaser.State {
    public preload(game: Phaser.Game): void{
        console.log("preload");
        game.load.image("einstein", "assets/pics/ra_einstein.png");
    } 
    public create(game: Phaser.Game): void {
        const s = game.add.sprite(80, 0, "einstein");
        
        s.rotation = 0.14;
    }
}