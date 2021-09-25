basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 26) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Skull)
    }
    while (input.temperature() > 34) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Skull)
    }
    basic.showIcon(IconNames.Heart)
})
