import { Data, MCFunction, Objective, raw } from "sandstone";

// Scores
const playerPosX = Objective.create("player_pos_x", "dummy")("@s");

export const updatePlayerPos = MCFunction("player/position/update_player_pos", () => {
  raw(`# Get the player pos from their NBT data`);
  const playerDataPosX = Data("entity", "@s").select("Pos[0]");

  raw(`# Update the player pos score`);
  playerPosX.set(playerDataPosX);
});
