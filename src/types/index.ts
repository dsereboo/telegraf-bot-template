import { Middleware } from "telegraf";
import Context from "telegraf/typings/context";
import {
  SceneContextScene,
  WizardContextWizard,
  WizardSessionData,
} from "telegraf/typings/scenes";

export interface BotContext extends Context {
  scene: SceneContextScene<BotContext, BotWizardSession>;
  wizard: WizardContextWizard<BotContext>;
}

export interface BotWizardSession extends WizardSessionData {
  session : Middleware<BotContext>
}
