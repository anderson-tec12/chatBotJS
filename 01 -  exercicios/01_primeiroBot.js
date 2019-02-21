const env = require('../.env')
const Telegraf = require('telegraf')
const bot =  new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    ctx.reply(`Seja bem vindo, ${from.first_name}!`)
})

bot.on('text',async (ctx, next) =>{
    await ctx.reply('mid1')
    next()
})


bot.on('text', async (ctx, next) =>{
   await ctx.reply('mid2')
    
})

bot.startPolling()