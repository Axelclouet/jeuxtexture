tiles.setCurrentTilemap(tilemap`niveau2`)
let mySprite = sprites.create(img`
    . . . . . f f 2 2 f f . . . . . 
    . . . . f 2 2 2 2 2 2 f . . . . 
    . . . f 2 2 2 2 2 2 2 2 f . 2 2 
    . . f 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . f 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f e e f 1 e b b f . 
    f f b b f e e e e e e f b b f f 
    f b b e 1 1 1 1 1 1 1 1 e b b f 
    f f f e 1 1 1 1 1 1 1 1 e e f f 
    . . . e 1 1 1 1 1 1 1 1 e e . . 
    . . . e 1 1 1 1 1 1 1 1 e e . . 
    . . . e 1 1 1 1 1 1 1 1 e . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
