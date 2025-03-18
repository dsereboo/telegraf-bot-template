import {Telegraf, session } from "telegraf";
import * as dotenv from "dotenv"
import { BotContext} from "./types";
import { AppMenus } from "./bot/constants/appMenus";
import { start } from "./bot/commands";
import { stage } from "./bot/scenes";

dotenv.config()

const bot = new Telegraf<BotContext>(process.env.BOT_TOKEN as string);

bot.use(session());
bot.use(stage.middleware());

bot.on("contact", async()=>{

})

bot.start(start);

AppMenus.forEach((menu)=>{
    bot.hears(menu, async(ctx) => {
      ctx.scene.enter(menu.toUpperCase());
    });
})

bot.catch((err)=>{
    console.log("Caught bot error")
    console.log(err)

})

bot.launch();


