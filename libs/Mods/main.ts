//% color=#AA00FF icon="\uf0c3" block="Mods"
namespace myModTab {
    //% block="say hello"
    export function sayHello(): void {
        game.splash("Hello from my Mod Tab!")
    }

    //% block="add %a and %b"
    export function add(a: number, b: number): number {
        return a + b
    }
}
