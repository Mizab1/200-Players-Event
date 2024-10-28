import { execute, gamerule, MCFunction, raw, Selector, team } from "sandstone";
import { playerDeathTick } from "./Player/Death/Main";
import { globalDeathSequence, selfDeathSequence } from "./Game/Command/RestorePlayer";

export const self = Selector("@s");

// ! Ticking Function
MCFunction(
  "tick",
  () => {
    playerDeathTick();
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
    team.add("boys", { text: "Boys", color: "#3D79F2" });
    team.add("girls", { text: "Girls", color: "#FFC0CB" });
    team.modify("boys", "friendlyFire", false);
    team.modify("girls", "friendlyFire", false);

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
