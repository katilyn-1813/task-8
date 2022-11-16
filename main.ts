input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() == 0) {
        basic.showString("N")
        music.playMelody("E D G F B A C5 B ", 120)
    } else if (input.compassHeading() == 90) {
        basic.showString("E")
        music.playMelody("G B A G C5 B A B ", 120)
    } else if (input.compassHeading() == 180) {
        basic.showString("S")
        music.playMelody("E B C5 A B G A F ", 120)
    } else if (input.compassHeading() == 270) {
        basic.showString("W")
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
basic.forever(function () {
    if (input.compassHeading() >= 45 || input.compassHeading() <= 135) {
        basic.showString("E ")
    }
    if (input.compassHeading() >= 136 || input.compassHeading() <= 225) {
        basic.showString("S")
    }
    if (input.compassHeading() >= 226 || input.compassHeading() <= 315) {
        basic.showString("W")
        if (input.compassHeading() <= 45 || input.compassHeading() >= 316) {
            basic.showString("W")
        }
    }
})
