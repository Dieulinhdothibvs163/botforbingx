# Telegram Bot for bingx Exchange Price Checker

This Telegram bot allows users to check the price of cryptocurrencies on the bingx exchange directly from their Telegram chat. It is built using Telegraf, a modern Telegram bot framework for Node.js, and integrates with the bingx API to fetch real-time price data.

## Features

- Check the current price of cryptocurrencies on the bingx exchange.
- Easy-to-use commands directly in your Telegram chat.
- Fast and reliable price updates.

## Setup Instructions

To set up and run this Telegram bot, follow these steps:

1. **Clone the Repository:**
```git clone https://github.com/Dieulinhdothibvs163/botforbingx

csharp
Copy code
```
2. **Install Dependencies:**
Navigate into the project directory and install the required dependencies using npm:
```cd bingx-telegram-bot
npm install

markdown
Copy code
```
3. **Configure the Bot Token:**
Obtain a bot token from BotFather on Telegram and replace `'YOUR_TELEGRAM_BOT_TOKEN'` in `bot.js` with your actual bot token.

4. **Run the Bot:**
```Start the bot using Node.js:
node bot.js

csharp
Copy code
```
5. **Interact with the Bot:**
Open your Telegram client and start interacting with your bot. Use the `/price` command to fetch the current price of cryptocurrencies on the bingx exchange.

## Usage

Once the bot is running and set up correctly, users can interact with it by sending commands directly in their Telegram chat. Here are the available commands:

- `/price`: Check the current price of cryptocurrencies on the bingx exchange.

## Dependencies

- [Telegraf](https://telegraf.js.org/): Modern Telegram bot framework for Node.js.
- [Axios](https://axios-http.com/): Promise-based HTTP client for Node.js.
