const { data, embeds } = require('../bitrix24Parser.js')
const { post } = require('../bitrix24Sender.js')
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL

module.exports = async function (context) {
  let leadId, bitrixDomain
  try {
    leadId = data(context).leadId
    bitrixDomain = data(context).bitrixDomain
  } catch (error) {
    throw new Error(error)
  }

  let payload = embeds(`New lead was recently created #${leadId}`, `https://${bitrixDomain}/crm/lead/details/${leadId}/`, bitrixDomain)
  await post(DISCORD_WEBHOOK_URL, payload)
    .then(responce => console.log(responce))
    .catch(err => console.log(err))
}
