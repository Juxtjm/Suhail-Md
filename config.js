const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+229 59371888";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_13_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MixcbiAgICAgICAgMjI3LFxuICAgICAgICA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcwLFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU4LFxuICAgICAgICA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMixcbiAgICAgICAgODksXG4gICAgICAgIDc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDksXG4gICAgICAgIDgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk5LFxuICAgICAgICA5NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRUM2ErT2UzbzRBRzdSaFNDTE1uR21aNHFWSkFLYjF6LzlRUU1Rbm1sYzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI5NTkzNzE4ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEwMEYzOTIyMTA0OTc2NDcwOUYwNDA1ODY1MEM0ODYxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzE3OTE5NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyOTU5MzcxODg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NzI1MDMxMzY0RTIwRDUxODE4Nzc4MURCMzBDMEIxOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcxNzkxOTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaW9yQ1Nybk9Tekt0Rld5b3RGRzhqUVwiLFxuICBcInBob25lSWRcIjogXCI2MzI3Y2IwMy00YjFiLTQxNDYtYjVhZS03NzZlZGI1MGYyNmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICAyMTMsXG4gICAgICAxNTYsXG4gICAgICAyNDcsXG4gICAgICAxOTAsXG4gICAgICAyNDYsXG4gICAgICA2MSxcbiAgICAgIDE4MCxcbiAgICAgIDg0LFxuICAgICAgMTE1LFxuICAgICAgMTI3LFxuICAgICAgMjI4LFxuICAgICAgMjIsXG4gICAgICAxNDMsXG4gICAgICAyNixcbiAgICAgIDE5NSxcbiAgICAgIDI0NSxcbiAgICAgIDQ0LFxuICAgICAgMjQxLFxuICAgICAgOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAyMTYsXG4gICAgICA0NCxcbiAgICAgIDE1OSxcbiAgICAgIDQ5LFxuICAgICAgMjIyLFxuICAgICAgMTkyLFxuICAgICAgODYsXG4gICAgICAxNjQsXG4gICAgICA1OSxcbiAgICAgIDExOCxcbiAgICAgIDE5MCxcbiAgICAgIDIxMyxcbiAgICAgIDQ2LFxuICAgICAgMjMsXG4gICAgICAxMjksXG4gICAgICAxMDgsXG4gICAgICAyMzMsXG4gICAgICAyMDYsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEhCREM4N0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyOTU5MzcxODg4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NjAzMTk5MzEwMjU5MDoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkptXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUCtQbEtNR0VMT202TElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjWlhzbjhoSENxWjFDZnNvRTFTWW1mcW5xNXdFZlVqOG01bXAwMXZhVlFFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlWdndyU1BlOTMxTmhReEZlcnNGQWRyTVdTTlVOVElqWDZWeXAyYlFVbklxQlZET3ExVWdwNzRObG1ObkJVcXQ1MDBLSDZTVDhWK3FlZFlpQU9XZ0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInN0VHIyZjZmRVZjOVJueGhUbXZ2akN0bVN5OStLbHFGcmlHM2NrTTFLQmxkbXdHenVIN0hhekxtSzJOZUQ5UllUMk9nRHB0NHA2UDQwcGNjWXgyWWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyOTU5MzcxODg4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MTc5MTkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzFjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPMWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKdVlrMFNqektkQnJSTWVORmJnRVlVSmlYbnkxQk1YNzBteThhd1JQc3drPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2ODQzNDI3ODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzE3OTE5MjI3OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
