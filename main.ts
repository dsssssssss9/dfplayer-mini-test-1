input.onButtonPressed(Button.A, function () {
    basic.showNumber(Track)
    dfplayermini.playFile(Track, dfplayermini.isRepeat.No)
})
input.onButtonPressed(Button.B, function () {
    Track = Track + 1
    if (Track > 3) {
        Track = 1
    }
    basic.showNumber(Track)
})
let Track = 0
dfplayermini.connect(SerialPin.P16, SerialPin.P2)
basic.showString("A")
Track = 1
basic.showLeds(`
    . # . . .
    . # # . .
    . # # # .
    . # # . .
    . # . . .
    `)
