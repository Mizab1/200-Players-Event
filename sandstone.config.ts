import type { SandstoneConfig } from "sandstone";
import { addDependencies } from "./AddDependencies";

export default {
  name: "200 Players Event",
  description: ["A datapack by", { text: "Mizab.", color: "gold" }],
  formatVersion: 10,
  namespace: "players_event",
  packUid: "Ql5f2Hfm",
  // saveOptions: { world: "200 Player Event test world" },
  saveOptions: { world: "5k" },
  onConflict: {
    default: "warn",
  },
  // scripts: {
  //   afterAll: () => {
  //     // @ts-ignore
  //     let worldName = this.default.saveOptions.world;
  //     addDependencies(worldName);
  //   },
  // },
} as SandstoneConfig;
