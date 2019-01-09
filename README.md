# Bitrix24DiscordWebhookHandler
Bitrix24DiscordWebhookHandler simple way to catch your Bitrix24 webhook and send it to Discord

## Require 
* [Bitrix24Parser](https://github.com/BobrovAndrey/Bitrix24Parser)  
* [Bitrix24Sender](https://github.com/BobrovAndrey/Bitrix24Sender)


## How to use
1. Clone or download  
2. Install latest version of [node.js](https://nodejs.org/en/)  
3. Require [Bitrix24Parser](https://github.com/BobrovAndrey/Bitrix24Parser) and [Bitrix24Sender](https://github.com/BobrovAndrey/Bitrix24Sender)
4. Bitrix24DiscordWebhookHandler uses [stdlib.com](https://stdlib.com/) as [FaaS](https://en.wikipedia.org/wiki/Function_as_a_service) service.  
 Use ```$ npm install lib.cli -g``` to install 
5. Set "discordWebhookUrl" as [environment variable](https://en.wikipedia.org/wiki/Environment_variable)    
#### !discordWebhookUrl example ```https://discordapp.com/api/webhooks/111111111111111111/example ```   
6. ```context``` param contains all input information about webhook and will help you to form valid payload  
```
    leadId = data(context).leadId
    bitrixDomain = data(context).bitrixDomain
    let payload = embeds(`Message ${leadId}`, `https://${bitrixDomain}/crm/lead/details/${leadId}/`, bitrixDomain)
```  
7. Pass ```DISCORD_WEBHOOK_URL``` and ```payload``` to ```post``` method and treat it like a promise  
```
await post(DISCORD_WEBHOOK_URL, payload)
     .then(responce => console.log(responce))
     .catch(err => console.log(err)) 
```   
8. Thats all. 
#### for "dev" run
```
$ lib up dev
$ lib your_username.yourService[@dev]
```
#### for "relese" run
```
$ lib release
$ lib your_username.yourService
```
#### view the logs
```
$ lib logs your_username.yourService
```
 #### If you have additional questions, read more about [Bitrix24Parser](https://github.com/BobrovAndrey/Bitrix24Parser) and [Bitrix24Sender](https://github.com/BobrovAndrey/Bitrix24Sender) or [stdlib](https://docs.stdlib.com/main/#/introduction) 
