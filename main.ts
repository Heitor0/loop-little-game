input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(game.score())
    basic.pause(5000)
})
input.onButtonPressed(Button.AB, function () {
    Shoot = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    Shoot.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        Shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (Shoot.isTouching(Enemy)) {
            game.addScore(1)
        }
        if (Shoot.get(LedSpriteProperty.Y) <= 0) {
            Shoot.delete()
            game.addScore(1)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    while (true) {
        Enemy.set(LedSpriteProperty.X, 0)
        Player.set(LedSpriteProperty.X, 0)
    }
})
let EnemyFire: game.LedSprite = null
let Shoot: game.LedSprite = null
let Player: game.LedSprite = null
let Enemy: game.LedSprite = null
game.setLife(5)
game.setScore(0)
Enemy = game.createSprite(2, -4)
Player = game.createSprite(2, 4)
basic.forever(function () {
    Enemy.move(1)
    basic.pause(100)
    Enemy.ifOnEdgeBounce()
    EnemyFire = game.createSprite(Enemy.get(LedSpriteProperty.X), Enemy.get(LedSpriteProperty.Y))
    EnemyFire.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        EnemyFire.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        if (EnemyFire.isTouching(Player)) {
            game.removeLife(1)
            basic.showIcon(IconNames.Skull)
        }
        if (EnemyFire.get(LedSpriteProperty.Y) >= 4) {
            EnemyFire.delete()
        }
    }
})
