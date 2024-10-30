import { execute, kill, MCFunction, raw, Selector, tellraw, title } from "sandstone";
import {
  BOYS_TEAM_NAME,
  GIRLS_TEAM_NAME,
  LINE_COORD,
  SPECTATOR_PUSH_BACK_DISTANCE_BOYS,
  SPECTATOR_PUSH_BACK_DISTANCE_GIRLS,
  WARNING_DISTANCE,
} from "../../Constants";
import { self } from "../../Main";
import { playerPosX } from "../../Player/Position/Main";

const directory = "game/rule/line_rule/";

export const lineRuleMain = MCFunction(directory + "main", () => {
  execute.if.entity(Selector("@s", { team: BOYS_TEAM_NAME })).run(runForBoys);
  execute.if.entity(Selector("@s", { team: GIRLS_TEAM_NAME })).run(runForGirls);
});

// ! Function for boys
const runForBoys = MCFunction(directory + "run_for_boys", () => {
  execute.if(playerPosX.matches([LINE_COORD, Infinity])).run(directory + "check_gamemode_for_boys", () => {
    execute.if.entity(Selector("@s", { gamemode: "!spectator" })).run(killPlayer);
    execute
      .at(self)
      .if.entity(Selector("@s", { gamemode: "spectator" }))
      .run.teleport(self, SPECTATOR_PUSH_BACK_DISTANCE_BOYS);
  });

  raw(`# Give warning to the player when they reach near the line`);
  execute.if(playerPosX.matches([LINE_COORD - WARNING_DISTANCE, Infinity])).run(giveWarning);
});

// ! Function for girls
const runForGirls = MCFunction(directory + "run_for_girls", () => {
  execute.if(playerPosX.matches([Infinity, LINE_COORD])).run(directory + "check_gamemode_for_girls", () => {
    execute.if.entity(Selector("@s", { gamemode: "!spectator" })).run(killPlayer);
    execute
      .at(self)
      .if.entity(Selector("@s", { gamemode: "spectator" }))
      .run.teleport(self, SPECTATOR_PUSH_BACK_DISTANCE_GIRLS);
  });

  raw(`# Give warning to the player when they reach near the line`);
  execute.if(playerPosX.matches([Infinity, LINE_COORD + WARNING_DISTANCE])).run(giveWarning);
});

// Common function
const killPlayer = MCFunction(directory + "kill_player", () => {
  tellraw("@a", [{ selector: "@s", color: "gold" }, { text: " is killed for crossing the line" }]);
  kill(self);
});
const giveWarning = MCFunction(directory + "give_warning", () => {
  title(self).actionbar({ text: "You are approaching the line, turn back now!", color: "red" });
});
