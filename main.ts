enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
scene.setTileMap(img`
    d d 7 7 7 7 7 7 d d
    d d d d 3 d d d d d
    d 7 7 7 7 7 7 7 7 7
    7 7 d d d d d d d 7
    d 7 d 7 7 7 7 7 d 7
    7 7 7 7 d 7 d 7 7 7
    d d d d d 3 d d d d
    d d 7 7 7 7 7 7 d d
`)
let KOKO = sprites.create(img`
    . e e e e e e e e e e e . . . .
    . e 9 4 9 9 9 9 9 4 9 e . . . .
    . e f f f 2 f 2 f f f e 9 . . .
    3 3 f f f f 2 f f f f 3 9 . . .
    3 3 b b b b b b b b b 3 9 . . .
    3 3 b b b b b b b b b 3 9 . . .
    3 3 b b b b b b b b b 3 9 . . .
    3 3 b b b b b b b b b 9 e 9 . .
    3 3 b b b b b b b b b 3 e . . .
    . . b b b b b b b b b . . . . .
    . . f f f f f f f f f . . . . .
    . . f f f f f f f f f . . . . .
    . . f f f f f f f f f . . . . .
    . . f f f . . . f f f . . . . .
    . . f f f . . . f f f . . . . .
    . . f f f . . . f f f . . . . .
`, SpriteKindLegacy.Player)
let KAKA = sprites.create(img`
    e e e e e e e e e e . . . . . .
    e 3 6 6 3 3 6 6 3 e . . . . . .
    e 3 6 6 3 3 6 6 3 e . . . . . .
    e 3 3 3 3 3 3 3 3 e . . . . . .
    e 3 3 3 3 3 3 3 3 e . . . . . .
    e 6 6 3 3 3 3 6 6 e e . . . . .
    e 6 6 6 6 6 6 6 6 3 e . . . . .
    e 6 6 6 6 6 6 6 6 e . . . . . .
    e 6 6 6 6 6 6 6 6 3 e . . . . .
    3 6 6 6 6 6 6 6 6 3 e . . . . .
    3 6 6 6 6 6 6 6 6 3 e . . . . .
    . e e e e e e e e . e . . . . .
    . e e e e e e e e e . . . . . .
    . e e e e e e e e . . . . . . .
    . e e e . . e e e . . . . . . .
    . e e e . . e e e . . . . . . .
`, SpriteKindLegacy.Player)
let o_links = sprites.create(img`
    . . . . e e e e e e e e . . . .
    . . . . 3 5 3 3 3 3 5 3 . . . .
    . . . . 3 3 6 3 3 6 3 3 . . . .
    . . . . 3 3 3 6 6 3 3 3 . . . .
    . . . . . . . 3 3 . . . . . . .
    9 . . 7 7 7 7 7 7 7 7 7 7 . . .
    9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 .
    9 7 . 7 7 7 7 7 7 7 7 7 7 . 7 .
    9 7 . 7 7 7 7 7 7 7 7 7 7 . 7 .
    . 6 . 7 7 7 7 7 7 7 7 7 7 . . .
    . . 6 7 7 b b b b b b 7 7 . . .
    . . . b b b b . . b b b b . . .
    . . . b b b . . . . b b b . . .
    . . . b b . . . . . . b b . . .
    . . . b . . . . . . . . b . . .
    . . . b . . . . . . . . b . . .
`, SpriteKind.Player)
let o_rechts = sprites.create(img`
    . . . . e e e e e e e e . . . .
    . . . . 3 5 3 3 3 3 5 3 . . . .
    . . . . 3 3 6 3 3 6 3 3 . . . .
    . . . . 3 3 3 6 6 3 3 3 . . . .
    . . . . . . . 3 3 . . . . . . .
    9 . . 7 7 7 7 7 7 7 7 7 7 . . .
    9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 .
    9 7 . 7 7 7 7 7 7 7 7 7 7 . 7 .
    9 7 . 7 7 7 7 7 7 7 7 7 7 . . .
    . 6 . 7 7 7 7 7 7 7 7 7 7 . . .
    . . 6 7 7 b b b b b b 7 7 . . .
    . . . b b b b . . b b b b . . .
    . . . b b b . . . . b b b . . .
    . . . b b . . . . . . b b . . .
    . . . b . . . . . . . . b . . .
    . . . b . . . . . . . . b . . .
`, SpriteKind.Player)
let Links = sprites.create(img`
    . . . . e e e e e e e e . . . .
    . . . . 3 5 3 3 3 3 5 3 . . . .
    . . . . 3 3 6 3 3 6 3 3 . . . .
    . . . . 3 3 3 6 6 3 3 3 . . . .
    . . . . . . . 3 3 . . . . . . .
    9 . . e e e e e e e e e e . . .
    9 e e e e e e e e e e e e e e .
    9 e . e e e e e e e e e e . e .
    9 e . e e e e e e e e e e . e .
    . c . e e e e e e e e e e . . .
    . . c e e b b b b b b e e . . .
    . . . b b b b . . b b b b . . .
    . . . b b b . . . . b b b . . .
    . . . b b . . . . . . b b . . .
    . . . b . . . . . . . . b . . .
    . . . b . . . . . . . . b . . .
`, SpriteKind.Player)
let Rechts = sprites.create(img`
    . . . . e e e e e e e e . . . .
    . . . . 3 5 3 3 3 3 5 3 . . . .
    . . . . 3 3 6 3 3 6 3 3 . . . .
    . . . . 3 3 3 6 6 3 3 3 . . . .
    . . . . . . . 3 3 . . . . . . .
    9 . . e e e e e e e e e e . . .
    9 e e e e e e e e e e e e e e .
    9 e . e e e e e e e e e e . e .
    9 e . e e e e e e e e e e . e .
    . c . e e e e e e e e e e . . .
    . . c e e b b b b b b e e . . .
    . . . b b b b . . b b b b . . .
    . . . b b b . . . . b b b . . .
    . . . b b . . . . . . b b . . .
    . . . b . . . . . . . . b . . .
    . . . b . . . . . . . . b . . .
`, SpriteKind.Player)
o_rechts.y = 40
o_rechts.x = 160
o_links.y = 40
o_links.x = 0
KAKA.y = 134
Links.y = 90
Links.x = 0
Rechts.y = 90
Rechts.x = 160
controller.moveSprite(KOKO)
info.setLife(3)
let gRichtung = 0
forever(function () {
    KAKA.setVelocity(KOKO.x - KAKA.x, KOKO.y - KAKA.y)
    if (KAKA.overlapsWith(KOKO)) {
        info.changeLifeBy(-1)
        KAKA.setPosition(160, 66)
    }
    if (Links.overlapsWith(KOKO)) {
        info.changeLifeBy(-1)
    }
    if (o_links.overlapsWith(KOKO)) {
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (Links.overlapsWith(Rechts)) {
        Links.setPosition(0, 90)
    } else {
        Links.setVelocity(100, 0)
    }
})
forever(function () {
    if (o_links.overlapsWith(o_rechts)) {
        o_links.setPosition(0, 40)
    } else {
        o_links.setVelocity(100, 0)
    }
})
