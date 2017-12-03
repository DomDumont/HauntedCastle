
import * as Phaser from "phaser-ce";
import Boot from "./states/boot";

class App extends Phaser.Game {
    constructor(config: Phaser.IGameConfig) {
        super (config);

        this.state.add("boot", Boot);

        this.state.start("boot");
    }
}


function startApp(): void {

    // There are a few more options you can set if needed, just take a look at Phaser.IGameConfig
    const gameConfig: Phaser.IGameConfig = {
        width: 800,
        height: 600,
        renderer: Phaser.AUTO,
        parent: "",
        resolution: 1
    };

    const app = new App(gameConfig);
}

window.onload = () => {
    startApp();
}