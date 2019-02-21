const env = require('../.env')
const Telegraf = require('telegraf')
const moment = require('moment')
const bot = new Telegraf(env.token)

bot.start(ctx =>{

    ctx.reply(`Seja bem vindo ${ctx.update.message.from.first_name}`)
})


bot.hears('pizza', ctx => ctx.reply('Eu quero'))

bot.hears(['linux','mac', 'windows'], ctx => ctx.reply('Sao sistemas operacionais'))

bot.hears('😎', ctx => ctx.reply('Traga seu oculos mano'))

bot.hears(/carro/i , ctx => ctx.reply('carro ou Carro eu naotenho'))

bot.hears([/viajar/i, /notebook/i], ctx => ctx.reply('não da, um bot nao ganha osuficiente'))

bot.hears(/(\d{2}\/\d{2}\/\d{4})/, ctx => {
    moment.locale('pt-br')
    const data = moment(ctx.match[1], 'DD/MM/YYYY')
    ctx.reply(`${ctx.match[1]} cai em ${data.format('dddd')}`)
})

bot.startPolling()