tiles.setCurrentTilemap(tilemap`niveau2`)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
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
mySprite = sprites.create(img`
    111111111122222222222222222222
    111111111122f22222222222222222
    1111111111228f2222222222222ff2
    111111f11122282222222222fff222
    111118111122f8222222222ff22222
    1ff118f11122f822222222ff22ff22
    111f8f8f1122f8f228222288222f22
    11111ff8f2222ff228822f822228f2
    1111111f88222fff2f8f28f2222ff2
    1111111fffff22ff22ff28f22228ff
    111111111ff8f2fff2ff88f22f8ff2
    11111111122ffffff22f8f22fff222
    111188888f22ffffffffff2f822221
    11111111f8ff88fffff8f7fff22221
    11111111128fff887ffff88f777721
    17771177122222f8777ff7f2722221
    11171711727777787f7ff7f2777721
    117117117272727f777ff722722211
    1711171172727272787ff722722211
    1777117712222222777ff722777711
    111111111222722288ff2222222211
    111111111227272287777722222111
    171111171272227287fff722222111
    171111171277777287777722221111
    1771717722722272877ff222111111
    117777711711117f87f7f111111111
    111111117111111787ff7111111111
    111111111111118887fff711111111
    111111111111118fffffff11111111
    111111111f88f88f1fffffff111111
    `, SpriteKind.Player)
