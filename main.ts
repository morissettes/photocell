let PhotoresistorVal = 0
let calibrationVal = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
    serial.writeValue("photocell", PhotoresistorVal)
    basic.pause(1000)
    serial.writeValue("calibrage", calibrationVal)
    PhotoresistorVal = pins.analogReadPin(AnalogPin.P0)
    if (PhotoresistorVal < calibrationVal - 100) {
        basic.showString("N")
    } else {
        basic.showString("J")
    }
})
