# Step 4: Creating Standalone Event Handler

Now we are about to start working on the bot code itself. The last 3 steps should be completed by the time you reach this. The event handler process will be listening for events from any number of gateway instances and be ready to handle them.

## Why Use Standalone Event Handler Process?

The standalone event handler is the portion of your bot code that you will be changing the most. The three previous steps created processes that are intended to never be turned off. This process is designed to let you restart whenever you wish and be incredibly quick to restart. Since we don't have the delay to start up shards anymore, your code becomes reloaded instantly.

## Creating Event Handlers

Create a file path like `src/bot/mod.ts`.

```ts
import { DISCORD_TOKEN } from '../../configs.ts'
import { createBot, createUtils, createTransformers, createHelpers, transformRole, DiscordenoRole } from '../../deps.ts'
import { psql } from "./cache/mod.ts";

const bot = createBot({
  token: DISCORD_TOKEN,
  botId: 270010330782892032n,
  // applicationId: 270010330782892032,
  events: {
    messageCreate: function (bot, message) {
        console.log('message arrived');
    }
  },
  intents: ['Guilds', 'GuildMessages'],
  cache: {
    isAsync: true,
    customTableCreator: function(table) {
      switch (table) {
        case "guilds":
          return {
            get: async function(key) {
              // what now
              return await psql`SELECT * FROM "guilds" WHERE "id" = ${key}`;
            }
          }
          break;
      }
    }
  },
})

// CUSTOMIZE INTERNALS
bot = customizeBotInternals(bot);
bot.transformers.role = function(bot, role) {
    const internalRole = transformRole(bot, role);
    const { name, ...rest } = internalRole;
    
    return rest as DiscordenoRole;
}
```

