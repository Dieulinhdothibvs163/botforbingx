const { Telegraf } = require('telegraf');
const axios = require('axios');

// Initialize your bot with the bot token obtained from BotFather
const bot = new Telegraf('YOUR_TELEGRAM_BOT_TOKEN');

// Command to check the price
bot.command('price', async (ctx) => {
    try {
        // Make a request to the BingX API to get the price information
        const response = await axios.get('https://api.bingx.com/v1/ticker?symbol=BTC_USDT');
        
        // Extract the price from the response
        const price = response.data.last_price;
        
        // Send the price to the user
        ctx.reply(`Current BTC/USDT price on BingX: $${price}`);
    } catch (error) {
        console.error('Error fetching price:', error);
        ctx.reply('Sorry, there was an error fetching the price. Please try again later.');
    }
});

// Start the bot
bot.launch();
