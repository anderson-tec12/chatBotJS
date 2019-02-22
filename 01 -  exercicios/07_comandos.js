const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)


bot.start( ctx => {
    const nome = ctx.update.message.from.first_name

    ctx.reply(`Seja bem vindo ${nome} ! \n Avise se precisar de /ajuda`)
})


bot.command('ajuda', ctx => {
    ctx.reply(
        '/ajuda: vou mostrar as opções'
        +'\n /ajuda2: para testar via hears'
        +'\n /op2: opção generica'
        + '\n /op3: opa outra opção generica qualquer'
    )
})

bot.hears('/ajuda2', ctx=>{
    ctx.reply(`Eutambem consigo capturar comandos 
    mas use o "ajuda" mesmo`)
})

bot.hears(/\/op(2|3)/i,ctx => ctx.reply('Resposta padrao para qualquer generico'))

bot.startPolling()