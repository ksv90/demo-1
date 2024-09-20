import process from 'node:process';

import { Markup, Telegraf } from 'telegraf';

// eslint-disable-next-line no-void
void (async function main(): Promise<void> {
  const telegraf = new Telegraf(process.env.BOT_TOKEN);

  telegraf.command('start', async (ctx) => {
    await ctx.reply('welcome', Markup.keyboard([Markup.button.webApp('Open', 'https://sapphirebet.com/ru')]));
  });

  await telegraf.launch(() => {
    process.stdout.write('working\n');
  });
})();
