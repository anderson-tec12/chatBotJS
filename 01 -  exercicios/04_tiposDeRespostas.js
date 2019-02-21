const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx =>{
    await ctx.reply(`Seja bem vindo ${ctx.update.message.from.first_name}`)

    await ctx.replyWithHTML(`
        Destacando mensagem <b>html</b>
        <i> de varias </i> <code>formas</code> <pre>possiveis</pre>
        <a href="http://asolucion.com.br"> asolucion</a>
    `) 

    await ctx.replyWithMarkdown('Destacando mensagem *Markdown* '
        + '_de_varias `formas` ``` possiveis```'
        + '[asolucion](http://asolucion.com.br)'
    )

    await ctx.replyWithPhoto({source: `${__dirname}/cat.jpeg`})

    await ctx.replyWithPhoto(`https://www.edivaldobrito.com.br/wp-content/uploads/2018/05/suporte-a-docker-no-linux-via-snap.jpg`,{caption: 'Linux é foda'})

    await ctx.replyWithPhoto({url:'https://cdn-images-1.medium.com/max/992/1*UThVmUiEzjI_8GXdkqkPhQ.png'})

    await ctx.replyWithLocation(-23.69999, -46.605864)

    await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
})

bot.startPolling()