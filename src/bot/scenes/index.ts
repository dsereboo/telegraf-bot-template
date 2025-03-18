import { Scenes } from "telegraf";
import { Welcomewizard } from "./welcome";

export const scenes = [
    Welcomewizard
]

export const stage = new Scenes.Stage(scenes);

