import { Scenes } from "telegraf";
import { BotContext } from "../../../types";

export const Welcomewizard = new Scenes.WizardScene<BotContext>(
    '',
    async(ctx:BotContext)=>{
        ctx.reply("Hello")
        return ctx.scene.leave()
    }
)