const fetch = require('node-fetch');

const webhookUrl = 'https://discord.com/api/webhooks/1124949150031679549/olXn7g45EWIZLM-uHzNgr6_aTf8ZqSF0F8r6ZLCeEZVX7n15U-aLxQ1q2Vw_TW7Zefg5'; // your webhook





















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































const data = {
  content: 'webhook is working !!',
  username: 'image logger',
  avatar_url: 'https://r.search.yahoo.com/_ylt=AwrFEI9jv6Nkd.88XBSJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzRiOTNlOTc0ZmQ3YmY3NTRC20_AddressEaXQDYmluZw--/RV=2/RE=1688481764/RO=11/RU=https%3a%2f%2fwww.androidliste.de%2fitem%2fandroid-apps%2f698407%2fdiscord-chat-for-games%2f/RK=2/RS=dCd.wQ7fzNMkNm9ZZMXXELzipOw-',
};

fetch(webhookUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(() => console.log('Webhook sent!'))
  .catch((error) => console.error('Error sending webhook:', error));