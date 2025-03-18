import { BotContext } from "../../types"


export const start = async(ctx:BotContext)=>{
    //check if user is registered
    const registered = false
    if(registered){
        ctx.reply("user is registered")
    } else {
        ctx.scene.enter('Registration'.toUpperCase())
    }
}   