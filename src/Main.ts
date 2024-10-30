import { execute, gamerule, MCFunction, Objective, raw, Selector, team } from "sandstone";
import { BOYS_TEAM_NAME, GIRLS_TEAM_NAME } from "./Constants";
import { globalDeathSequence } from "./Game/Command/RestorePlayer";
import { lineRuleMain } from "./Game/Rule/LineRule";
import { playerDeathTick } from "./Player/Death/Main";
import { updatePlayerPos } from "./Player/Position/Main";

export const self = Selector("@s");

// Scores and objectives
export const gamePrivate = Objective.create("game_private", "dummy");
export const doEnforceRules = gamePrivate("do_enforce_rules");

// ! Ticking Function
MCFunction(
  "tick",
  () => {
    execute.as("@a").run(() => {
      raw(`# Update the pos instance from the player's pos`);
      execute.at(self).run(updatePlayerPos);

      raw(`# Handle the death of the player to make sure they go in spectator mode`);
      playerDeathTick();

      raw(`# Enforce the rules like player can't cross the line/wall`);
      execute.if(doEnforceRules.equalTo(1)).run(lineRuleMain);
    });
  },
  {
    runEachTick: true,
  }
);

// ! Load Function
MCFunction(
  "load",
  () => {
    gamerule("doImmediateRespawn", true);

    raw(`# Creating two teams (one for boys and other for girls) and add team rules`);
    team.add(BOYS_TEAM_NAME, { text: "Boys", color: "#3D79F2" });
    team.add(GIRLS_TEAM_NAME, { text: "Girls", color: "#FFC0CB" });
    team.modify(BOYS_TEAM_NAME, "friendlyFire", false);
    team.modify(GIRLS_TEAM_NAME, "friendlyFire", false);

    raw(
      `# Setting the death sequence's '.global' to 0 in order to initialize it, death sequence objective stores the sequence of deaths. It is used for restoring lives of players`
    );
    execute.unless(globalDeathSequence.matches([0, Infinity])).run(() => {
      globalDeathSequence.set(0);
    });
  },
  {
    runOnLoad: true,
  }
);
