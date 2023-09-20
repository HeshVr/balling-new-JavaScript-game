controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
game.showLongText("PLS PRESS A TO START and b to reset", DialogLayout.Full)
game.setDialogTextColor(8)

scene.setBackgroundColor(9)
let player = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(player)

scene.setBackgroundColor(9)
let ball = sprites.create(assets.image`ball`, SpriteKind.Food)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {

}) 

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprites, otherSprite) {
info.changeScoreBy(1)
otherSprite.setPosition(randint(0, 160), randint(0, 120))
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
info.changeScoreBy(0)
otherSprite.setPosition(randint(1, 160), randint(0, 120))
info.startCountdown(10)
})

scene.setBackgroundColor(9)
game.showLongText("Level 1 press A to start", DialogLayout.Full)
info.changeScoreBy(0) 