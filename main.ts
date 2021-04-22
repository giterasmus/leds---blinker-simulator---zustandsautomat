function ZeigePfeilLinks () {
    x = 4
    y = 0
    WH = 5
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < WH; index++) {
            led.plot(x, y)
            y += 1
        }
        basic.pause(100)
        if (x > 2) {
            y = 0
            x += -1
        } else if (x > 1) {
            WH = 3
            y = 1
            x += -1
        } else {
            WH = 1
            y = 2
            x += -1
        }
    }
}
// Blinker zeigt nach rechts (Zustand = 2)
input.onButtonPressed(Button.A, function () {
    zustand = 2
})
function zustandsautomat () {
    // 1 = rechts
    // 2 = links
    // 0 = aus
    // 
    if (zustand == 1) {
        ZeigePfeilRechts()
    } else if (zustand == 2) {
        ZeigePfeilLinks()
    } else {
        basic.clearScreen()
    }
}
// Blinker aus (Zustand = 0)
input.onButtonPressed(Button.AB, function () {
    zustand = 0
})
// Blinker zeigt nach links (Zustand = 1)
input.onButtonPressed(Button.B, function () {
    zustand = 1
})
function ZeigePfeilRechts () {
    x = 0
    y = 0
    WH = 5
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < WH; index++) {
            led.plot(x, y)
            y += 1
        }
        basic.pause(100)
        if (x <= 1) {
            y = 0
            x += 1
        } else if (x <= 2) {
            WH = 3
            y = 1
            x += 1
        } else {
            WH = 1
            y = 2
            x += 1
        }
    }
}
// Zustand 0 = Blinker aus
// Zustand 1 = Blinker rechts
// Zustand 2 = Zustand links
let WH = 0
let y = 0
let zustand = 0
let x = 0
basic.showLeds(`
    . # # # #
    . . # . #
    . . # # .
    . . # . #
    . # # # #
    `)
x = 0
x = 0
zustand = 0
basic.forever(function () {
    zustandsautomat()
    basic.pause(100)
    basic.clearScreen()
})
