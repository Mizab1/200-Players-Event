import { rel } from "sandstone";

export const BOYS_TEAM_NAME = "boys";
export const GIRLS_TEAM_NAME = "girls";

// pos < LINE_COORD = boys
// pos > LINE_COORD = girls
export const LINE_COORD = 2660;
export const WARNING_DISTANCE = 5;

export const SPECTATOR_PUSH_BACK_DISTANCE_BOYS = rel(-5, 0, 0);
export const SPECTATOR_PUSH_BACK_DISTANCE_GIRLS = rel(+5, 0, 0);

export const SPAWN_COORDS_BOYS = null;
export const SPAWN_COORDS_GIRLS = null;
