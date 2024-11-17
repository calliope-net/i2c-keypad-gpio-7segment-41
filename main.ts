function toByte (ziffer: number) {
    if (ziffer == 0) {
        return qwiicgpio.parseint("0111111", qwiicgpio.eRadix.BIN)
    } else if (ziffer == 1) {
        return qwiicgpio.parseint("0000110", qwiicgpio.eRadix.BIN)
    } else if (ziffer == 2) {
        return qwiicgpio.parseint("1011011", qwiicgpio.eRadix.BIN)
    } else if (ziffer == 3) {
        return qwiicgpio.parseint("1001111", qwiicgpio.eRadix.BIN)
    } else if (ziffer == 4) {
        return qwiicgpio.parseint("1100110", qwiicgpio.eRadix.BIN)
    } else if (ziffer == 5) {
        return qwiicgpio.parseint("1101101", qwiicgpio.eRadix.BIN)
    } else if (ziffer == 6) {
        return qwiicgpio.parseint("1111101", qwiicgpio.eRadix.BIN)
    } else if (ziffer == 7) {
        return qwiicgpio.parseint("0000111", qwiicgpio.eRadix.BIN)
    } else if (ziffer == 8) {
        return qwiicgpio.parseint("1111111", qwiicgpio.eRadix.BIN)
    } else if (ziffer == 9) {
        return qwiicgpio.parseint("1101111", qwiicgpio.eRadix.BIN)
    } else {
        return qwiicgpio.parseint("1000000", qwiicgpio.eRadix.BIN)
    }
}
pins.onKeyboardEvent(function (zeichenCode, zeichenText, isASCII) {
    byte = toByte(zeichenCode - 48)
    qwiicgpio.writeOUTPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x26), byte)
})
function Konfiguration () {
    pins.comment(pins.pins_text("i2c-keypad-gpio-7segment-71"))
    pins.comment(pins.pins_text("2 Erweiterungen"))
    pins.comment(pins.pins_text("calliope-net/gpio"))
    pins.comment(pins.pins_text("calliope-net/pins"))
}
let byte = 0
qwiicgpio.beimStart(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x26))
qwiicgpio.setMode(
qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x26),
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT
)
loops.everyInterval(500, function () {
    pins.raiseKeypadEvent(true)
})
