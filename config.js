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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ALPHA" 


global.devs = "94775831830" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94775831830";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_27_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI4LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDg3LFxuICAgICAgICA3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg0LFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY1LFxuICAgICAgICA1NCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjExLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMSxcbiAgICAgICAgNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYzLFxuICAgICAgICA1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODEsXG4gICAgICAgIDczLFxuICAgICAgICAzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDczLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0YXM2Ujh2WWRNQ1U5KzNGWklYajhObEZWakQ3Y05XQVVNdEdhNlpoU0ZnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc1ODMxODMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MjIxMDAxRDA4QjM0M0Y3M0U3MTlBRENDMEU4ODNERFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg5NTQ4NTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiB0cnVlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHZkZST3NLQlJJLW1CbWdva3loQ0FBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcwN2VhYjJjLTVkZTMtNDBmNi1iOTEyLTYwZmRmMzljZDMyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAxNDYsXG4gICAgICAxNDAsXG4gICAgICAxNjQsXG4gICAgICAyMTIsXG4gICAgICAxNTEsXG4gICAgICA3NixcbiAgICAgIDE4OCxcbiAgICAgIDEwOCxcbiAgICAgIDEwMSxcbiAgICAgIDUsXG4gICAgICA3OSxcbiAgICAgIDEwMyxcbiAgICAgIDIzNCxcbiAgICAgIDE2NixcbiAgICAgIDExOSxcbiAgICAgIDEwOCxcbiAgICAgIDE1NCxcbiAgICAgIDIyNCxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICAyMzksXG4gICAgICAxOTQsXG4gICAgICA4OSxcbiAgICAgIDIwNCxcbiAgICAgIDk0LFxuICAgICAgMTk3LFxuICAgICAgMjYsXG4gICAgICAxOTIsXG4gICAgICAyMjIsXG4gICAgICAxMDQsXG4gICAgICA2NixcbiAgICAgIDEyMCxcbiAgICAgIDIyOSxcbiAgICAgIDEyMyxcbiAgICAgIDEzMSxcbiAgICAgIDE5MyxcbiAgICAgIDE5OCxcbiAgICAgIDI1LFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTdBMURDTUxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc1ODMxODMwOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTg3Mjk0MjUxMjk1MDE6MjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwic2F0aGlyYSBsYXNhbmphbmFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMU3Z4S2dDRU5mVzFMTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxyTktscWIxQUZnRWw2L29ZSWFkdEJZTEgwVW9ZaEhyL2ZmREVhVWZwQkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL3hYcWJ4S3h3RXBycTltU1Rsd1Q0RnQ0RmR1bnROcGVTOUx4MUdnYS9aeVF4akgwSmlFOTVETkpRUUtRTnhxWnE3eUVUS3lmKzdyUFdXS2dPQUUwQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicGxLcUVzeDdQZkt5azI2SjFLSjh3QUQ0ZktYejRacFZzZVlKNktSSGdmSWJqQUZDb1dDTHFMekhFRHI2dFUzb3ZGcjNIczV1K0R0MERXblA0ZzFGamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzU4MzE4MzA6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4OTU0ODQzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTHVvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMdW8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwQTFGSzY1RHNkeHVvS1dXUkVLbnlCdUdDNFJPWkU4S09kMWswbit0UjljPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYyMTg3NzE3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4OTUzMTk4NjgwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ALPHA",
  packname: process.env.PACK_NAME || "ALPHA",
  botname : process.env.BOT_NAME  || "ALPHA-SL",
  ownername:process.env.OWNER_NAME|| "SATHIRA LASANJANA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "all",
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
