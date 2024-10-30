import { execute, gamemode, MCFunction, Objective, raw, say, tellraw } from "sandstone";
import { self } from "../../Main";
import { globalDeathSequence, selfDeathSequence } from "../../Game/Command/RestorePlayer";

// Scores
const selfDeathScore = Objective.create("death_score", "deathCount")("@s");

// ! Ticking Function
export const playerDeathTick = MCFunction("player/death/main", () => {
  execute.if(selfDeathScore.matches([1, Infinity])).run("player/death/change_gamemode", () => {
    selfDeathScore.set(0);
    // tellraw(self, [
    //   { selector: "@s", color: "gold" },
    //   { text: " has been perished", color: "red" },
    // ]);
    gamemode("spectator", self);

    raw(`# Increment death sequence number for this entity`);
    globalDeathSequence.add(1);
    selfDeathSequence.set(globalDeathSequence);
  });
});
