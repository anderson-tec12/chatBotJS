const env = require('../.env')
const Telegraf = require('telegraf')
const bot =  new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    const mestre =  575493054
    console.log('Iniciando ')

    // ctx.reply(`Seja bem vindo, ${from.first_name}!`)

    if(mestre === from.id){
        ctx.reply(`Seja bem vindo meu mestre`)
        return
    }else{
        ctx.reply(`Desculpa so respondo  ao meu mestre`)
    }
})



bot.startPolling()