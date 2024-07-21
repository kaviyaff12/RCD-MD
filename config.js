//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94760393959";
global.owner = process.env.OWNER_NUMBER || "94760383959";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY05MbVdCM3hFQW0xSTFnWmdLQk1KZjU4Um5Mei9pVXB3ZVJHYUxJcXcwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazdsL2ZLd3VKZUVtS0VTWlpBQTA3ZjJSRE84WlFqckQvNW1QMUUyTksxaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVS3ZYQzRVUy9TR0U1TlZWZm1FU2htZDA3TnhTdGJwdm42QWk2L005UGtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJITU1kVnBmZjZLVWZqU243QzNMa1kxYVRsYUJmUUozYWs3eUNiSk5WNEFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdERnllMUZ1OUtUWlE4cVp6dVdKOFRpR2RmdlIxbmlmeXI2aHNwRXJUV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZaL0VNTTExdFVaNDhwZFFkMEJmZDlHQzgvWEFqcXoxUTdzZ0k5ZSthUTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJ6dnZFOHp4d1VRUHgvaVlMZktEN0NqUFhSZW5WMUdQRi82RXA3N1dIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3REV2pBSzFOVndJQmR2cmtHU3YvMFJyQ2Y1a3ZKNHpZZmhNMHF1TFNSST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndRYjJMYzJXejRGck8xK09nalNtTW1uQnZVU2svZFFWdTFiTmk5T0xaMkhxVDJlNW9QOWVMY1czZXVlc1RlQmxnMTBJUnNaeTUrNUpWSUNjZjBrT2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU3LCJhZHZTZWNyZXRLZXkiOiJNN0dRb2ZRdFJmcklTckxqcm1aRnFRMVRIc0QyTU5HNTMrODNGU1FqNjk4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1YWloWU5FSFFtaWhlTHpyTHpZdW5RIiwicGhvbmVJZCI6ImU5NGIwOTIyLTIxZTUtNGJlNC05NmViLWU3ZWUwODNjNjk3NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4SVZkMVJ0SEdUMFNLdFpKdWhRZEhqVVNyNUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmR3UHoxMHQ0UElwTWVTclJlejBUdENia1ZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1ZQUc5Rks2IiwibWUiOnsiaWQiOiI5NDc2MDM4Mzk1OTo5MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtLfhtYPhtZvigbFf4bWJy6PhtYkg76O/In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQWGN6NVFERVAvZjhyUUdHQkFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCSHdYVEdyQ0pORWRqUWxqc2lNdEhnTUVkeEUyemVuTUlxME95NVlSMVNrPSIsImFjY291bnRTaWduYXR1cmUiOiJqWThiaGE2UzFyblYvL3ovL2ZxSkdHN2pHalFmc3U3YmlJZW9BbGRPWXhsNVdYUEJtY1F3bGFJeUVmVjQyL1g2NFNHUDk4SkpTVHFpSGZvQTNaMmNnZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS2RjVjFnci92dEQ2WTVNNkFxYkN0UE40ajBtZ1Z1L2srMGpURDV5YTZteHFnZktzOEUxa2I3MWJFSnBQcHNITm91ZncvV3dyUUlrMk80Q2V3ZUM5aUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MDM4Mzk1OTo5MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRUjhGMHhxd2lUUkhZMEpZN0lqTFI0REJIY1JOczNwekNLdERzdVdFZFVwIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNTQ0NzE3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUIxRiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
