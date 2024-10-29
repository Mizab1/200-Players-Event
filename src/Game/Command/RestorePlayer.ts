import { execute, gamemode, MCFunction, Objective, raw } from "sandstone";
import { self } from "../../Main";

// Scores
const deathSequence = Objective.create("death_sequence", "dummy");
export const selfDeathSequence = deathSequence("@s");
export const globalDeathSequence = deathSequence(".global");

// ! Ticking Function
export const restorePlayer = MCFunction("game/command/restore_last_5_players", () => {
  for (let i = 0; i < 5; i++) {
    execute.if(globalDeathSequence.greaterOrEqualThan(1)).run(
      MCFunction(
        "game/command/restore_command/private/match_player_score",
        () => {
          raw(`# Compare and match the global death sequence number and self death sequence number`);
          execute.as("@a").if(selfDeathSequence.equalTo(globalDeathSequence)).run(changeSelfGamemode);
          raw(`# Decrement global death sequence number`);
          globalDeathSequence.remove(1);
        },
        {
          onConflict: "ignore",
        }
      )
    );
  }
});

const changeSelfGamemode = MCFunction("game/command/restore_command/private/change_self_gamemode", () => {
  gamemode("survival", self);
  raw(`# Reset death sequence number for this entity`);
  selfDeathSequence.set(-1);
});
