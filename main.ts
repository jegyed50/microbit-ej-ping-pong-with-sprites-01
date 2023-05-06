input.onButtonPressed(Button.A, function () {
    if (utoBal.get(LedSpriteProperty.X) > 0) {
        utoBal.change(LedSpriteProperty.X, -1)
        utoJobb.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (utoBal.get(LedSpriteProperty.X) < 3) {
        utoBal.change(LedSpriteProperty.X, 1)
        utoJobb.change(LedSpriteProperty.X, 1)
    }
})
let utoJobb: game.LedSprite = null
let utoBal: game.LedSprite = null
utoBal = game.createSprite(2, 4)
utoJobb = game.createSprite(3, 4)
let labda = game.createSprite(randint(0, 4), 0)
let Xirany = 1
let Yirany = randint(-1, 1)
basic.pause(500)
basic.forever(function () {
    labda.change(LedSpriteProperty.X, Xirany)
    labda.change(LedSpriteProperty.Y, Yirany)
    if (labda.isTouching(utoBal) || labda.isTouching(utoJobb)) {
        if (labda.get(LedSpriteProperty.X) > 1) {
            labda.change(LedSpriteProperty.X, Xirany * -1)
        } else if (labda.get(LedSpriteProperty.X) < 4) {
            labda.change(LedSpriteProperty.X, Xirany * 1)
        }
        if (labda.get(LedSpriteProperty.Y) > 2) {
            labda.change(LedSpriteProperty.Y, Xirany * -1)
        } else if (labda.get(LedSpriteProperty.Y) > 4) {
            labda.change(LedSpriteProperty.X, Yirany * -1)
        }
    } else {
        if (labda.get(LedSpriteProperty.Y) <= 0) {
            Yirany = 1
            Xirany = randint(-1, 1)
        } else if (labda.get(LedSpriteProperty.Y) >= 4) {
            labda.set(LedSpriteProperty.Blink, 1)
            basic.pause(2000)
            game.gameOver()
        }
        if (labda.get(LedSpriteProperty.X) <= 0) {
            Xirany = 1
        } else if (labda.get(LedSpriteProperty.X) <= 4) {
            Xirany = -1
        }
        basic.pause(500)
    }
})
