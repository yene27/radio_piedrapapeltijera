radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    if (opcion == 1 && receivedNumber == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (opcion == 2 && receivedNumber == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (opcion == 3 && receivedNumber == 2) {
        basic.showIcon(IconNames.Happy)
    } else if (opcion == receivedNumber) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    opcion = randint(1, 3)
    dibujar(opcion)
    basic.pause(1000)
    radio.sendNumber(opcion)
})
// opcion=1 piedra
// opcion=2 papel
// opcion=3 tijera
function dibujar (opcion: number) {
    if (opcion == 1) {
        basic.showIcon(IconNames.Square)
    } else if (opcion == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
}
let opcion = 0
basic.showIcon(IconNames.Giraffe)
radio.setGroup(10)
