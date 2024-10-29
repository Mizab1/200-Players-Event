/* 
Use this command to empty the chest
/loot replace block 29 56 -67 container.0 27 loot minecraft:empty

/setblock ~ ~ ~ chest{LootTable:"players_event:treasure/treasure_loot"} replace
/give @p chest{BlockEntityTag:{LootTable:"players_event:treasure/treasure_loot"}} 1

Use this command to fill the map, make sure to create a map in that region first
/give @p filled_map{map:0,Decorations:[{x:1220.0d,z:2935.0d,type:26b,rot:180.0d,id:"77361612"}]} 1
*/

import { abs, Coordinates, give, MCFunction, NBT, raw, rel, setblock } from "sandstone";
import { self } from "../../Main";
import { generateNumericId, i } from "../../Utils/UtilFunctions";

const chestCoords: Array<Coordinates> = [abs(1220, 28, 2935)];

const placeChestAtLocation = MCFunction("game/treasure/place_chest_at_location", () => {
  chestCoords.forEach((chestLocation) => {
    setblock(chestLocation, 'chest{LootTable:"players_event:treasure/treasure_loot"}');
  });
});

const getTreasureMap = MCFunction("game/treasure/get_treasure_map", () => {
  chestCoords.forEach((chestLocation) => {
    give(
      self,
      i("minecraft:filled_map", {
        map: 1,
        Decorations: [
          {
            x: NBT.double(chestLocation.values[0]),
            z: NBT.double(chestLocation.values[2]),
            type: NBT.byte(26),
            rot: NBT.double(180),
            id: `${generateNumericId()}`,
          },
        ],
      }),
      1
    );
  });
});

// For testing purposes
// MCFunction("game/treasure/spawn_test_loot", () => {
//   setblock(rel(0, 0, 2), 'chest{LootTable:"players_event:treasure/treasure_loot"}');
// });
// MCFunction("game/treasure/empty_test_loot", () => {
//   raw(`loot replace block ~ ~ ~2 container.0 27 loot minecraft:empty`);
//   raw(`setblock ~ ~ ~2 air`);
// });
