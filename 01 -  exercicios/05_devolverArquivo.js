const env = require('../.env')
const Telegraf = require('telegraf')
const axios = require('axios')
const bot = new Telegraf(env.token)

bot.start(ctx =>{

    ctx.reply(`Seja bem vindo ${ctx.update.message.from.first_name}`)
})

bot.on('voice', async ctx =>{
    const id = ctx.update.message.voice.file_id
    const res = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`)
    
    console.log(res)

    ctx.replyWithVoice({
        url: `${env.apiFileUrl}/${res.data.result.file_path}`
    })
})

bot.on('photo', async ctx =>{
    const id = ctx.update.message.photo[0].file_id
    const res = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`)

    console.log(res)

    ctx.replyWithPhoto({
        url:`${env.apiFileUrl}/${res.data.result.file_path}`
    })

})

bot.startPolling()