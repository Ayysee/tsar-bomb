player.onChat("run", function () {
	
})
player.onItemInteracted(STONE_SHOVEL, function () {
    blocks.fill(
    TNT,
    pos(15, 80, 15),
    pos(-15, 50, -15),
    FillOperation.Hollow
    )
    blocks.fill(
    REDSTONE_BLOCK,
    pos(14, 79, 14),
    pos(-14, 51, -14),
    FillOperation.Hollow
    )
    blocks.fill(
    TNT,
    pos(15, 111, 15),
    pos(-15, 81, -15),
    FillOperation.Hollow
    )
    blocks.fill(
    REDSTONE_BLOCK,
    pos(14, 110, 14),
    pos(-14, 82, -14),
    FillOperation.Hollow
    )
    loops.pause(100)
    mobs.teleportToPosition(
    mobs.target(ALL_ENTITIES),
    pos(100, 0, 0)
    )
})
player.onItemInteracted(WOODEN_SHOVEL, function () {
    mobs.teleportToPlayer(
    mobs.target(ALL_ENTITIES),
    mobs.target(LOCAL_PLAYER)
    )
})
