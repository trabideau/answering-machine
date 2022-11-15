input.onButtonPressed(Button.A, function () {
    basic.showString("Yes")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("no")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("maybe")
})
basic.showString("Ask me a question")
