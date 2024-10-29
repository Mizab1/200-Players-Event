// @ts-nocheck
import { LootTable } from "sandstone";

LootTable("treasure/treasure_loot", {
  type: "minecraft:chest",
  pools: [
    {
      rolls: {
        type: "minecraft:uniform",
        min: 1,
        max: 2,
      },
      entries: [
        {
          type: "minecraft:item",
          name: "minecraft:cooked_chicken",
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                type: "minecraft:uniform",
                min: 8,
                max: 32,
              },
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:cooked_beef",
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                type: "minecraft:uniform",
                min: 8,
                max: 32,
              },
            },
          ],
        },
      ],
    },
    {
      rolls: {
        type: "minecraft:uniform",
        min: 0,
        max: 5,
      },
      entries: [
        {
          type: "minecraft:item",
          name: "minecraft:potion",
          functions: [
            {
              function: "minecraft:set_potion",
              id: "minecraft:swiftness",
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:potion",
          functions: [
            {
              function: "minecraft:set_potion",
              id: "minecraft:strength",
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:potion",
          functions: [
            {
              function: "minecraft:set_potion",
              id: "minecraft:water_breathing",
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:potion",
          functions: [
            {
              function: "minecraft:set_potion",
              id: "minecraft:regeneration",
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:potion",
          functions: [
            {
              function: "minecraft:set_potion",
              id: "minecraft:healing",
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:potion",
          functions: [
            {
              function: "minecraft:set_potion",
              id: "minecraft:leaping",
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:splash_potion",
          functions: [
            {
              function: "minecraft:set_potion",
              id: "minecraft:healing",
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:splash_potion",
          functions: [
            {
              function: "minecraft:set_potion",
              id: "minecraft:strength",
            },
          ],
        },
      ],
    },
    {
      rolls: {
        type: "minecraft:uniform",
        min: 0,
        max: 1,
      },
      entries: [
        {
          type: "minecraft:item",
          name: "minecraft:golden_apple",
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                type: "minecraft:uniform",
                min: 1,
                max: 10,
              },
            },
          ],
        },
      ],
    },
  ],
});
