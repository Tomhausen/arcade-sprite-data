// tests go here; this will not be compiled when this package is used as an extension.
const alex = sprites.create(sprites.duck.duck1, SpriteKind.Player)
alex.setFlag(SpriteFlag.BounceOnWall, true)
sprites.setDataString(alex, "name", "alex")
sprites.setDataNumber(alex, "points", 0)
sprites.setDataBoolean(alex, "sleepy", false)
const steve = sprites.create(sprites.food.smallBurger, SpriteKind.Food)
sprites.setDataString(steve, "name", "steve")
sprites.setDataNumber(steve, "points", 0)
sprites.setDataBoolean(steve, "sleepy", false)
steve.setFlag(SpriteFlag.BounceOnWall, true)

alex.setVelocity(Math.randomRange(-50, 50), Math.randomRange(-50, 50))  
steve.setVelocity(Math.randomRange(-50, 50), steve.vy + Math.randomRange(-50, 50))  

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite: Sprite, otherSprite: Sprite) {
    sprite.say(`hi ${sprites.readDataString(otherSprite, "name")}`, 300)  
    otherSprite.say(`hi ${sprites.readDataString(sprite, "name")}`, 300)  

    sprites.changeDataNumberBy(sprite, "points", 1)
    sprites.changeDataNumberBy(otherSprite, "points", 1)
})

game.onUpdateInterval(1000, function () {
    alex.say(`${sprites.readDataNumber(alex, "points")}, ${sprites.readDataBoolean(alex, "sleepy")} sleepy`)
})