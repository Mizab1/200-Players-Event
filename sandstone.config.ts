import type { SandstoneConfig } from "sandstone";

export default {
  name: "200 Players Event",
  description: ["A datapack by", { text: "Mizab.", color: "gold" }],
  formatVersion: 10,
  namespace: "players_event",
  packUid: "Ql5f2Hfm",
  saveOptions: { world: "200 Player Event test world" },
  onConflict: {
    default: "warn",
  },
} as SandstoneConfig;
