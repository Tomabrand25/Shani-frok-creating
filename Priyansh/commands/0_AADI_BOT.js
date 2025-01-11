const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "AADI BOT",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "AADI BABU",
  description: "aadi bot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [""Ittuu🤏 si srm kr Liya kro bot bot krte wqt 🙂 💔✨⚠️†", "Bandi hoti to us ko choti choti 2 papiyAn krta pr bndi ki jgh tum ho🙂👩‍🦯👩‍🦯", "Are Yahin Hun Janu😗", "ji Shona 😍", "Love you", "Miss YoU agar is id m ladki h 😁 nhi to bhg","Full botbazi", "2 bund pani lo or dub jao usme", "OkkaY Babbu", "😁Smile I am Taking a Selfy in my dreams✌️🤳", "🥺Jan nahi kha to m naraj ho jaunga", "😙Me sabko block kardunga",    "bot bot choro khi ghumne chlte h", "aao kbhi vrindavan m", "jai shree krishna💕", "so jao radhe radhe 💕", "nacho bot bot krke", "bahut bdiya ese hi time waste krte rho","Full botbazi", "jitna time tum bot bot m lga rhe ho utna pd lete to exam m achhe number aate", "bhago bhut aya", "tum to bhut ho", "jao pdhai kro","Full botbazi", "tumhara birthday kb aata h","kbhi to vapas jamin p aa jao dost😁",         
    "Khana khaya tumne", "tum bhi meri trh lafange ho gye ho", 
            "Hnji kesa gya tumhara din aaj ka🥰", "Kal rat to tum bahar ghum rhe the na kutte k upr beth k", "Full botbazi", "Full time wastebazi ","Full moj mstibazi", "Full online settingbazi", "Full facebookbazi", "Full messenger p moj mstibazi", "Full messagebazi", "Full typingbazi", "Ese hi group m aake bot bot krte rha kro hme bhi achha lgta h",  "bot bot choro khpche m chlo btata hu", "bot bot kiya to teri setting leke bhag jaunga", "itna bot bot sun liya ki mujhe chkkr aa rhe h", "aao kbhi up gadi palatwa denge tumhari 😁😜",
 "Ha chad jao india gate p", "bhgwan k nam p raham krdo kuch or bot bot krna chordo", "Tumko botloveobia ho gya h ilaj krvao apna 😏", "Tum vhi ho na jo jamin se 1 rupya v utha lete ho", "tum to bahut kanjus aadmi ho yar",  "aao kbhi delhi fir milke party krte h ", "ooo bot k  chamcheee sant ho ja plz 😥😥😥", "Bahut mja aa rha h bot bot sa ho rha h kuch",
            "bot bot bad m krna pehle kuch khalo jao", "Aao kbhi himachal tumko thnd m jmate h 😁😹", "apna sasta internet pack htake achha sa dalwao pehle"," محبت دو لوگوں کے درمیان ایک نشہ ہے جو پہلے ہوش میں آئے وہ بے وفا ہے۔😌",   " وہ معصوم نظر آئے گی، ہنگامہ برپا کرے گی، اس کی کیا ضرورت تھی اور وہ بغیر کچھ کہے چلی جائے گی۔😝",   "وہ میری قبر پر چراغ جلانے آئی اور دوسرے شخص کو متاثر کرنے کے لیے پھول بھی لے گئی۔ ",   "رام چندر نے سیا سے کہا، ایسا کلیوگ آئے گا، سچا عاشق تڑپے گا اور بابو تھانے کا میلہ لگے گا۔😝 ",   " جناب، یہ ایک چینی محبت تھی اور وہ ٹوٹ گئی لیکن میرا دل ہندوستانی تھا اور مجھے ایک اور مل گیا۔😁",   "سرکاری نوکری کے لیے کوٹا اور صبح کی روشنی کے لیے لوٹا بہت اہمیت رکھتا ہے۔ ",   "کچھ باتیں سیدھی دل میں اتر جاتی ہیں، جیسے کہ آپ نے جو نمبر ڈائل کیا ہے وہ فی الحال دوسری کال پر مصروف ہے۔ ",   "آپ لوگ بغیر بوائے فرینڈ کے لڑکی ڈھونڈ رہے ہو اسے کہتے ہیں پتھر سے تیل نکالنا۔ ", " کالی ساڑھی پر کڑھائی نہیں ہے پیاری، تیری یاد میں کوئی مطالعہ نہیں۔ 🙈",   "مجھے چھوٹی چھوٹی باتوں میں خوشی ملتی ہے، یہاں تک کہ جب میں سائیکل چلاتا ہوں تو میں اپنا فون فلائٹ موڈ پر رکھتا ہوں۔🤣 ",   "کرش ہو یا برش، آپ اسے وقت پر تبدیل کریں ورنہ آپ کا دل یا دانت ٹوٹ جائے گا۔..🤪 ",   " محبت ہو جائے تو پوجا کرو دوستو، محبت ہے تو ملیں گے، مصیبت ہے تو ٹل جائے گی۔😝",   "ماں: بیٹا تمہیں کیسی بیوی چاہیے؟ میں: آپ جیسا لاڈ پیار کرنے والا انسان: کیا بات ہے بیٹا، کیا ساری زندگی چپل کھا کر گزارنی ہے؟😂😂 ",   "غصے کی حالت میں آپ اس شخص کا نمبر ڈیلیٹ کر دیں جس کا نمبر آپ کو یاد ہو ورنہ بعد میں بہت پریشانی ہو گی۔ ",   "دوستو ان کو ہمیشہ کالا کرو کیونکہ وہ رنگ نہیں بدلتے۔😂 ",   "بابو شونا کے معاملہ میں ٹینک میں ٹینک، ٹینک میں پانی don’t waste your Jawaani😁 ",   "She – میرے گھر والے مجھے سرکاری نوکری کے بغیر قبول نہیں کریں گے: ارے، اگر مجھے مل جائے تو میرا خاندان قبول نہیں کرے گا۔ ", "Iss Dil Ko Toh Ek Baar Ko, Bahla Kar Chup Kara Lunga, Par Iss Dimaag Ka Kya Karun, Jiska Tumne Dahi Kar Diya Hai.",   "Duaa Karte Hain Hum ishwar Se, Ke Wo Aap Jaisa Dost Aur Na Banaye, Ek Cartoon Jaisi Cheez Hai Humare Paas, Kahin Wo Bhi Common Na Ho Jaye. ",   " Paani Aane Ki Baat Karte Ho, Dil Jalane Ki Baat Karte Ho, Char Din Se Munh Nahi Dhoya,Tum Nahane Ki Baat Karte Ho.",        "Girl: Kya Shaadi Ke Baad Bhi Tum Mujhe Itna Pyar Kroge? Pappu Kyo Nhi? Me to Diwaana Hu .","Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Kr JaNu Ke SaTh Busy Hun 🤭🐒" , "M Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho JaeGa" , "Bolo Babu Tum Mujhse Pyar Karti Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Fad dunga🤬" ,
            "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya? 🤬" ,  "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu ki isko sant kro" , "Tujhe Kya koi aur Kam nhi h? Pure din Khata h Aur Messenger pe Bot Bot Karta h" ,   "Tujhe Apna Bejjati Krane Ka Sok h?" , "Abhi Bola To Bola Dubara Mat Bolna" , "Tere Ground m began laga dunga" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "Bol De koi nhi dekh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi h Kya Hr Waqt bot bot Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hal H😚 " , "IB Aja Yaha Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao M buSy hu" , "Bot Bolke Bejti Kr Rhe ho yar...","M To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" ,  "Kal Haveli Pe Mil Jra Tu 😈" ,  "Bs Kr U ko Pyar Ho ya Na Ho pr Mujhe Ho JaeGa" , 
            "Ha bolo 😒" , "BulaTi H MaGr JaNe Ka Nhi 😜" , "M To AnDha Hu 😎" , "Pehle NHa kr Aa 😂" , "Aaaa Thooo 😂😂😂" , "M yahin hoon kya hua sweetheart‎ ," , "Boss Dk Tumko or Koi Kaam Nhi H? Hr Wakt Bot Bot Karte Ho" , "Chup Reh, Nhi Toh Bahar Ake tera hath Tor Dunga" , "shadi Krle Mere NaL 🙊 ", "Mene U Se Bt Nhi krni" , "MerKo Kuch DiKhai Nhi De Rha 🌚" , "Bot Na BoL 😢 JaNu Bol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hu  😋" , "M Gareebo Se Bat Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho JaeGa" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "MerKo Tang Na kRo Main Kiss 💋 Kr DunGa 😘 " , "Are yrr MaJak Ke M0oD Me Nhi Hu 😒" ,  "Dur HT Terek0o or Koi Kam Nhi h Jb DeKho Bot Bot ShaDi KerLe Mujhse 😉😋🤣" , "TeRi Koi Ghr Me Nhi SunTa To M Q SuNu 🤔😂 " ,   "Kyun JaNu MaNu kha H tumhara 🤣" ,
            "Are TuMhari To Sb hi baZzati kRrte h M Bhi krDun 🤏😜" , "KaL HaVeLi Pr Aa jRa Tu 😈" ,   "bolo 😒" ,   "Main To AnDha Hu 😎" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "Phle NHa kRr Aao 😂" ,  "TeReko DiKh Nhi Rha M buSy Hu 😒" , "TeRa To GaMe BaJana PdeGa" , "Tya Hua 🥺"  , "TuM Phir Aa Gye 🙄 Kisi or Ne Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chaiye ptwado kisiko" , "Aaaa Thooo 😂😂😂" , "M So Rha Hun " , "Ase Hi bot bot krte Rha kRo 😍","Abhi Toh Party Shuru Hui Hai" ,  "Kya Aapke Toothpaste Mein Namak Hai?" ,"Ye Dosti Hum Nahi Todenge" ,"Aapke Paas Bangla Hai, Gaadi Hai, Paisa Hai...Lekin Mere Paas Maa Hai" ,"Kabhi Kabhi Mujhe Bhi Lagta Hai Ki Main Kuch Jyada Hi Busy Ho Gya Hun 🙄","Chal na yar, movie dekhne chalte hain", "Jaldi se ready ho jao, late ho jayenge", "Kitne baje milna hai?", "Mujhe thoda time do, main abhi free nahi hun",
            "Tu sach mein pagal hai", "Aaj bahut kaam hai, baad mein baat karte hain", "Kya kar rahe ho?", "Tu kahan chala gaya tha?", "Mujhe tujhse baat karni hai", "Kal ka plan kya hai?", "Abhi kya kar rahe ho?", "Mere paas koi time nahi hai", "Jaldi se message ka jawab do", "Main thodi der mein aata hun", "Mere sath chalna hai?", "Aaj bahut maza aaya", "Kya tumne abhi tak khana nahi khaya?", "Mujhe tumse pyar hai", "Tum mere liye kuch bhi kar sakte ho", "Kahan rehte ho?", "Tumne mujhe kitna sataya hai", "Kal milte hain", "Aaj bahut busy tha", "Tum mujhe bahut yaad aate ho", "Mujhe teri zarurat hai", "Kya tumne abhi tak kaam nahi kiya?", "Main tumhare bina nahi reh sakta", "Kya tum mere saath dinner pe chal sakti ho?", "Main tumhe bahut miss karta hun", "Tum meri zindagi ho", "Tumhari yaad mein jeena mushkil hai", "Mujhe tumhari bahut yaad aa rahi hai", "Main tumhare saath hamesha rehna chahta hun",
            "Aaj bahut thaka hua hun", "Kya tum mere liye kuch bhi kar sakti ho?", "Mujhe tumhari aadat si ho gayi hai", "Tumhari muskurahat mere liye bahut important hai", "Kya tum mere saath shopping pe chal sakti ho?", "Mujhe tumse baat karke bahut achha lagta hai", "Tum mujhe bahut khushi deti ho", "Kya tum mere liye kuch special bana sakti ho?", "Mujhe tumhari har baat bahut pasand hai", "Tum mere liye kya ho?", "Main tumhe kabhi nahi bhoolunga", "Kya tum mere saath travel pe chal sakti ho?", "Mujhe tumhare saath time spend karna bahut achha lagta hai", "Tum meri duniya ho", "Mujhe tumse milne ki bahut ichcha hai", "Kya tum mere liye kuch special gift la sakti ho?","hayee m sadke jawa teri masoom sakal pe 😂 chuchundar insan", "Bot na bol re ! Janu bol mujhe aur janu se pyar se bat karte h😂😂😂 , rat ko kahan thi aai nhi hawali pe 😂", "Sakal Se masoom lgte ho 😂 btao kahi Ap k ghar sab masoom hi to nahi",
            "kash tum single hoti to maza hi kuch aur tha tumko ptane ka 😂", "Ha ha ab to meri yaad aa gai jb koi na mila babu sona krne ko 😾 ab ham ap se naraz hai jao ap bye ☹️", "haye babu ne ha boliya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘", "Are gareeb log roti banane k liya aate m Pani ka istemal krte h 😂", "Are dialogbazi mt kar jo kam h bol de sarma mt , bol de koi nahi dakh rha 😂", "Haye M Mar Java Babu Ak Chuma To Do pr dena mere jute ko 😁😂😂 bura nhi manna mjak h", "Hurrrr or Koi Kam Nahi h Kya Hr Waqt bot bot krke Mujhe Tng Krte Rehte Ho 😂" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "are are bolo meri jaan kya haal h ;) ;* " , "Tum aunty ho ya uncle 🤔 I think tum Jin ho ya Chudail" , "are tum idhar 🤔 khair ye btao tum idhar kr kya rhe ho 😂" , "are bot bot choro ye btao kal haweli pe kon bula rha tha 😂" , "m tumhari ma ko btaunga ki tum Facebook chlate ho 😂",];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };

     if ((event.body.toLowerCase() == "ЁЯШЮ") || (event.body.toLowerCase() == "ЁЯШФ") || (event.body.toLowerCase() == "ЁЯШг") || (event.body.toLowerCase() == "тШ╣я╕П") || (event.body.toLowerCase() == "ЁЯШЯ") || (event.body.toLowerCase() == "ЁЯШй") || (event.body.toLowerCase() == "ЁЯШЦ") || (event.body.toLowerCase() == "ЁЯШл") || (event.body.toLowerCase() == "ЁЯШж") || (event.body.toLowerCase() == "ЁЯШз") || (event.body.toLowerCase() == "ЁЯШе") || (event.body.toLowerCase() == "ЁЯШУ") || (event.body.toLowerCase() == "ЁЯШ░")) {
     return api.sendMessage("уАРя╝┐ ЁЭРТЁЭРЪЁЭРГ ЁЭРНЁЭРЪЁЭРЗЁЭРв ЁЭРЗЁЭРи ЁЭРМЁЭРЮЁЭРСЁЭРв ЁЭРЙЁЭРЪЁЭРАЁЭРз .ЁЯлВ ЁЭРЙЁЭРи ЁЭРГЁЭРЪЁЭРСЁЭРЭ ЁЭРГЁЭРвЁЭРдЁЭРЗЁЭРнЁЭРД ЁЭРНЁЭРЪЁЭРЗЁЭРв ЁЭРХЁЭРи ЁЭРГЁЭРоЁЭРКЁЭРбЁЭРУЁЭРЮ ЁЭРБЁЭРЪЁЭРЗЁЭРоЁЭРУ ЁЭРЗЁЭРЪЁЭРИ  я╝┐уАС", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("я╕ПуАРя╝┐ ЁЭРЗЁЭРжЁЭРМ ЁЭРЗЁЭРжЁЭРМ ЁЭРНЁЭРЪ ЁЭРКЁЭРЪЁЭРСЁЭРи ЁЭРТЁЭРвЁЭРГЁЭРбЁЭРА ЁЭРТЁЭРвЁЭРГЁЭРбЁЭРЪ ЁЭРБЁЭРиЁЭРЛЁЭРи ЁЭРЗЁЭРЮЁЭРШ ЁЭРМЁЭРЪЁЭРСЁЭРлЁЭРШ ЁЭРМЁЭРЮЁЯЩИ я╝┐уАС", threadID);
   };

   if ((event.body.toLowerCase() == "ЁЯе║ЁЯе║ЁЯе║") || (event.body.toLowerCase() == "ЁЯе║ЁЯе║") || (event.body.toLowerCase() == "ЁЯе║") || (event.body.toLowerCase() == "ЁЯе║ЁЯе║ЁЯе║ЁЯе║")) {
     return api.sendMessage("я╕ПуАРя╝┐ ЁЭРКЁЭР▓ЁЭРА ЁЭРКЁЭР▓ЁЭРФ  , ЁЭРСЁЭРи ЁЭРКЁЭР▓ЁЭРФ ЁЭРСЁЭРЮЁЭРЗЁЭРЮ ЁЭРЗЁЭРи , ЁЭРМЁЭРЮ ЁЭРЗЁЭРо ЁЭРНЁЭРЪ ЁЭРУЁЭРи ЁЭРПЁЭРбЁЭРАЁЭРвЁЭРС ЁЭРКЁЭР▓ЁЭРФ ЁЭРСЁЭРиЁЭРНЁЭРЪ . ЁЭРСЁЭРоЁЭРКЁЭРи ЁЭРМЁЭРЮ ЁЭРАЁЭРЫЁЭРЗЁЭРв ЁЭРВЁЭРбЁЭРиЁЭРВЁЭРиЁЭРЛЁЭРЪЁЭРУЁЭРЮ ЁЭРГЁЭРЮЁЭРУЁЭРЪ ЁЭРЗЁЭРо ЁЭРЛЁЭРвЁЭРКЁЭРбЁЭРО ЁЯНл  тШЮChocolateтШЬ я╝┐уАС", threadID);
   };

   if ((event.body.toLowerCase() == "ЁЯШП") || (event.body.toLowerCase() == "ЁЯШПЁЯШП")) {
     return api.sendMessage("я╕ПуАРя╝┐ ЁЭРКЁЭР▓ЁЭРА ЁЭРЗЁЭРоЁЭРА ЁЭРБЁЭРЪЁЭРБЁЭРо я╝┐уАС ", threadID);
   };

   if ((event.body.toLowerCase() == "ЁЯШ▒") || (event.body.toLowerCase() == "ЁЯШи")) {
     return api.sendMessage("я╕ПуАРя╝┐ ЁЭРКЁЭР▓ЁЭРА ЁЭРЗЁЭРоЁЭРА ЁЭРБЁЭРбЁЭРОЁЭРиЁЭРУ ЁЭРГЁЭРЮЁЭРКЁЭРб ЁЭРЛЁЭРвЁЭРШЁЭРЪ ЁЭРКЁЭР▓ЁЭРА я╝┐уАС", threadID);
   };

  if ((event.body.toLowerCase() == "ЁЯЩД") || (event.body.toLowerCase() == "ЁЯЩДЁЯЩД")) {
     return api.sendMessage("я╕Пя╕Пя╕ПЁЭРУЁЭРвЁЭРлЁЭРЬЁЭРбЁЭРв ЁЭРзЁЭРЪЁЭР│ЁЭРЪЁЭРлЁЭРвЁЭР▓ЁЭРЪ ЁЭРжЁЭРиЁЭРлЁЭРв ЁЭРбЁЭРЪЁЭРЪЁЭР▓ЁЭРЮ ЁЭРбЁЭРЪЁЭРЪЁЭР▓ЁЭРЮ ЁЭРбЁЭРЪЁЭРЪЁЭР▓ЁЭРЮ ЁЯЩИ", threadID);
   };

  if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessag("", threadID);
   };

   if ((event.body.toLowerCase() == "ЁЯдж") || (event.body.toLowerCase() == "ЁЯджЁЯдж")) {
     return api.sendMessage("уАРя╝┐ ЁЭРАЁЭРлЁЭРД ЁЭРАЁЭРйЁЭРНЁЭРЮ ЁЭРМЁЭРоЁЭРЗ ЁЭРПЁЭРЮ ЁЭРКЁЭР▓ЁЭРФ ЁЭРМЁЭРЪЁЭРАЁЭРл ЁЭРСЁЭРЮЁЭРЗЁЭРЮ ЁЭРЗЁЭРи ЁЭРМЁЭРоЁЭРЙЁЭРбЁЭРД ЁЭРБЁЭРЪЁЭРУЁЭРЪЁЭРО ЁЭРКЁЭР▓ЁЭРА ЁЭРЗЁЭРоЁЭРА я╝┐уАС", threadID);
   };

  if ((event.body.toLowerCase() == "ЁЯШО") || (event.body.toLowerCase() == "ЁЯШО")) {
     return api.sendMessage("уАРя╝┐ ЁЭРЗЁЭР▓ЁЭРД ЁЭРАЁЭРЪЁЭРПЁЭРдЁЭРА ЁЭРВЁЭРбЁЭРАЁЭРмЁЭРЗЁЭРжЁЭРА ЁЭРБЁЭРвЁЭРЛЁЭРдЁЭРФЁЭРе ЁЭРБЁЭРЮЁЭРКЁЭРЪЁЭРС ЁЭРЗЁЭРЪЁЭРИЁЯдг я╝┐уАС", threadID);
   };

  if ((event.body.toLowerCase() == "ЁЯШВ") || (event.body.toLowerCase() == "ЁЯШВЁЯШВ") || (event.body.toLowerCase() == "ЁЯШВЁЯШВЁЯШВ") || (event.body.toLowerCase() == "ЁЯШВЁЯШВЁЯШВЁЯШВ") || (event.body.toLowerCase() == "ЁЯШВЁЯШВЁЯШВЁЯШВЁЯШВ") || (event.body.toLowerCase() == "ЁЯШВЁЯШВЁЯШВЁЯШВЁЯШВЁЯШВ")) {
     return api.sendMessage("уАРя╝┐ ЁЭРЙЁЭР▓ЁЭРАЁЭРЭЁЭРА ЁЭРМЁЭРЪЁЭРУ ЁЭРЗЁЭРЪЁЭРНЁЭРмЁЭРО ЁЭРХЁЭРЪЁЭРСЁЭРзЁЭРА ЁЭРГЁЭРЪЁЭРНЁЭРн ЁЭРУЁЭРиЁЭРГ ЁЭРГЁЭРоЁЭРНЁЭРаЁЭРА я╝┐уАС", threadID);
   };

   if ((event.body.toLowerCase() == "ЁЯШЕ") || (event.body.toLowerCase() == "ЁЯШБ") || (event.body.toLowerCase() == "ЁЯША") || (event.body.toLowerCase() == "ЁЯШГ") || (event.body.toLowerCase() == "ЁЯШД") || (event.body.toLowerCase() == "ЁЯШЖ")) {
     return api.sendMessage("уАРя╝┐ ЁЭРДЁЭРзЁЭРНЁЭРв ЁЭРЗЁЭРЪЁЭРТЁЭРв ЁЭРКЁЭР▓ЁЭРФ ЁЭРАЁЭРЪ ЁЭРСЁЭРЮЁЭРЗЁЭРв ЁЭРЗЁЭРЪЁЭРИ ЁЯдг ЁЭРИЁЭРм ЁЭРЗЁЭРЪЁЭРТЁЭРв ЁЭРКЁЭРЪ ЁЭРСЁЭРЪЁЭРАЁЭР│ ЁЭРКЁЭР▓ЁЭРА ЁЭРЗЁЭРЪЁЭРИЁЭРз ЁЭРБЁЭРЪЁЭРУЁЭРЪЁЭРО я╝┐уАС", threadID);
   };

   if ((event.body.toLowerCase() == "ЁЯШН") || (event.body.toLowerCase() == "ЁЯШНЁЯШНЁЯШНЁЯШН") || (event.body.toLowerCase() == "ЁЯШ╗") || (event.body.toLowerCase() == "ЁЯШНЁЯШН")) {
     return api.sendMessage("уАРя╝┐ ЁЭРЗЁЭРЪЁЭРАЁЭР▓ЁЭРД ЁЭРСЁЭРЪЁЭРБЁЭРЫЁЭРА ЁЭРИЁЭРнЁЭРНЁЭРзЁЭРА ЁЭРПЁЭР▓ЁЭРАЁЭРл я╝┐уАС", threadID);
   };

   if ((event.body.toLowerCase() == "ЁЯдп") || (event.body.toLowerCase() == "ЁЯдпЁЯдп") || (event.body.toLowerCase() == "ЁЯдпЁЯдпЁЯдп") || (event.body.toLowerCase() == "ЁЯдпЁЯдпЁЯдпЁЯдп") || (event.body.toLowerCase() == "ЁЯдпЁЯдпЁЯдпЁЯдпЁЯдп")) {
     return api.sendMessage("уАРя╝┐ ЁЭРАЁЭРЪЁЭРПЁЭРд ЁЭРТЁЭРвЁЭРС ЁЭРКЁЭРЪ ЁЭРГЁЭРбЁЭРАЁЭРдЁЭРКЁЭРЪЁЭРН ЁЭРКЁЭРбЁЭРОЁЭРе ЁЭРЖЁЭРЪЁЭРШЁЭРЪ ЁЯЩДЁЯЩД я╝┐уАС", threadID);
   };

  if ((event.body.toLowerCase() == "ЁЯдЦ") || (event.body.toLowerCase() == "ЁЯдЦ")) {
     return api.sendMessage("уАРя╝┐ ЁЭРТЁЭРЪЁЭРАЁЭРеЁЭРи ЁЭРВЁЭРбЁЭРИЁЭРЭЁЭРГЁЭРЪ ЁЭРСЁЭРЮЁЭРЗЁЭРЮ ЁЭРЗЁЭРи ЁЭРМЁЭРоЁЭРЙЁЭРбЁЭРД я╝┐уАС", threadID);
   };

   if ((event.body.toLowerCase() == "ЁЯШ╖") || (event.body.toLowerCase() == "ЁЯдХ") || (event.body.toLowerCase() == "ЁЯдз") || (event.body.toLowerCase() == "ЁЯдТ")) {
     return api.sendMessage("я╕ПуАРя╝┐ ЁЭРКЁЭР▓ЁЭРА ЁЭРЗЁЭР▓ЁЭРА ЁЭРУЁЭРЪЁЭРБЁЭРвЁЭРШЁЭРЪЁЭРУ ЁЭРКЁЭРбЁЭРАЁЭРлЁЭРАЁЭРЫ ЁЭРЗЁЭРЪЁЭРИ ЁЭРКЁЭР▓ЁЭРА ЁЭРМЁЭРоЁЭРЙЁЭРбЁЭРД ЁЭРБЁЭРЪЁЭРУЁЭРЪЁЭРО ЁЭРМЁЭРЮ ЁЭРАЁЭРЫЁЭРЗЁЭРв ЁЭРМЁЭРЮЁЭРГЁЭРвЁЭРВЁЭРвЁЭРНЁЭРЮ ЁЯТКЁЯТЙ ЁЭРЛЁЭРЮ ЁЭРАЁЭРЪЁЭРУЁЭРЪ ЁЭРЗЁЭРо ЁЯШЗ я╝┐уАС", threadID);
   };

   if ((event.body.toLowerCase() == "ЁЯШТЁЯШТ") || (event.body.toLowerCase() == "ЁЯШТ") || (event.body.toLowerCase() == "ЁЯШТЁЯШТЁЯШТ")) {
    return api.sendMessage("я╕Пя╕Пя╕ПуАРя╝┐ ЁЭРУЁЭРвЁЭРлЁЭРЬЁЭРбЁЭРв ЁЭРзЁЭРЪЁЭР│ЁЭРЪЁЭРлЁЭРвЁЭР▓ЁЭРЪ ЁЭРжЁЭРиЁЭРлЁЭРв ЁЭРбЁЭРЪЁЭРЪЁЭР▓ЁЭРЮ ЁЭРбЁЭРЪЁЭРЪЁЭР▓ЁЭРЮ ЁЭРбЁЭРЪЁЭРЪЁЭР▓ЁЭРЮ ЁЯЩИ я╝┐уАС", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("уАРя╝┐ ЁЭРКЁЭРбЁЭРФЁЭРЭ ЁЭРБЁЭРЪЁЭРНЁЭРЪ ЁЭРЛЁЭРи ЁЭРУЁЭРоЁЭРМЁЭРдЁЭРО ЁЭРКЁЭРоЁЭРВЁЭРб ЁЭРНЁЭРЪЁЭРЗЁЭРв ЁЭРАЁЭРЪЁЭРУЁЭРЪ ЁЭРКЁЭР▓ЁЭРА ЁЯШПЁЯШП я╝┐уАС", threadID);
   };

   if ((event.body.toLowerCase() == "ЁЯЩВ") || (event.body.toLowerCase() == "ЁЯЩВЁЯЩВ")) {
     return api.sendMessage("я╕ПуАРя╝┐ ЁЭРМЁЭРЪЁЭРН ЁЭРУЁЭРиЁЭРЗ ЁЭРАЁЭРЬЁЭРЗЁЭРЪ ЁЭРНЁЭРЪЁЭРЗЁЭРв ЁЭРКЁЭРЪЁЭРМ ЁЭРТЁЭРЮ ЁЭРКЁЭРЪЁЭРМ ЁЭРТЁЭРбЁЭРАЁЭРдЁЭРАЁЭРе ЁЭРУЁЭРи ЁЭРАЁЭРЬЁЭРЗЁЭРЪ ЁЭРКЁЭРЪЁЭРС ЁЭРЛЁЭРи ЁЭРМЁЭРЮЁЭРСЁЭРв ЁЭРЙЁЭРЪЁЭРЪЁЭРН  ЁЯШЭ я╝┐уАС", threadID);
   };

  if ((event.body.toLowerCase() == "ЁЯЩГ") || (event.body.toLowerCase() == "ЁЯЩГЁЯЩГ")) {
     return api.sendMessage("я╕ПуАРя╝┐ ЁЭРМЁЭРЪЁЭРН ЁЭРУЁЭРиЁЭРЗ ЁЭРАЁЭРЬЁЭРЗЁЭРЪ ЁЭРНЁЭРЪЁЭРЗЁЭРв ЁЭРКЁЭРЪЁЭРМ ЁЭРТЁЭРЮ ЁЭРКЁЭРЪЁЭРМ ЁЭРТЁЭРбЁЭРАЁЭРдЁЭРАЁЭРе ЁЭРУЁЭРи ЁЭРАЁЭРЬЁЭРЗЁЭРЪ ЁЭРКЁЭРЪЁЭРС ЁЭРЛЁЭРи ЁЭРМЁЭРЮЁЭРСЁЭРв ЁЭРЙЁЭРЪЁЭРЪЁЭРН ЁЯШЭ я╝┐уАС", threadID);
   };

  if ((event.body.toLowerCase() == "ЁЯде") || (event.body.toLowerCase() == "ЁЯдеЁЯде")) {
     return api.sendMessage("я╕ПуАРя╝┐ ЁЭРБЁЭРбЁЭРАЁЭРв ЁЭРУЁЭРЮЁЭРСЁЭРв ЁЭРУЁЭРи ЁЭРНЁЭРЪЁЭРАЁЭРд ЁЭРЗЁЭРв ЁЭРДЁЭРнЁЭРНЁЭРв ЁЭРЛЁЭРЪЁЭРМЁЭРЫЁЭРИ ЁЭРЗЁЭРЪЁЭРИ ЁЭРФЁЭРмЁЭРКЁЭРв ЁЭРЙЁЭРЪЁЭРСЁЭРоЁЭРСЁЭРЪЁЭРУ ЁЭРЗЁЭРв ЁЭРНЁЭРЪЁЭРЗЁЭРв ЁЭРПЁЭРЪЁЭРГЁЭРнЁЭРИ ЁЭРЗЁЭРиЁЭРЖЁЭРв ЁЭРУЁЭРоЁЭРЙЁЭРбЁЭРД ЁЭРУЁЭРи ЁЯдн я╝┐уАС", threadID);
   };

  if ((event.body.toLowerCase() == "ЁЯШЙ") || (event.body.toLowerCase() == "ЁЯШЙЁЯШЙ")) {
     return api.sendMessage("я╕ПуАРя╝┐ ЁЭРАЁЭРЪЁЭРКЁЭРб ЁЭРКЁЭР▓ЁЭРФ ЁЭРМЁЭРЪЁЭРАЁЭРл ЁЭРСЁЭРЮЁЭРЗЁЭРЮ ЁЭРЗЁЭРи ЁЭРМЁЭРЮ ЁЭРБЁЭРбЁЭРОЁЭРн ЁЭРТЁЭРбЁЭРАЁЭРлЁЭРДЁЭРЮЁЭРЕ ЁЭРЗЁЭРо ЁЯе║ я╝┐уАС", threadID);
   };

  if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };

   if ((event.body.toLowerCase() == "name kya h") || (event.body.toLowerCase() == "naam kya hai") || (event.body.toLowerCase() == "naam kiya hai")) {
     return api.sendMessage("я╕ПуАРя╝┐ ЁЭРНЁЭРЪЁЭРМЁЭРЮ ЁЭРМ ЁЭРКЁЭР▓ЁЭРА ЁЭРСЁЭРЪЁЭРКЁЭРдЁЭРЗЁЭРЪ ЁЭРЗЁЭРЪЁЭРИ ЁЭРУЁЭРоЁЭРМ ЁЭРКЁЭРАЁЭРМ ЁЭРПЁЭРЮ ЁЭРГЁЭРбЁЭРШЁЭРЪЁЭРН ЁЭРГЁЭРи ЁЯШЭ я╝┐уАС", threadID);
   };

   if ((event.body.toLowerCase() == "ЁЯШн") || (event.body.toLowerCase() == "ЁЯШнЁЯШн")) {
     return api.sendMessage("я╕ПуАРя╝┐ ЁЭРКЁЭР▓ЁЭРА ЁЭРКЁЭР▓ЁЭРА , ЁЭРСЁЭРи ЁЭРКЁЭР▓ЁЭРФ ЁЭРСЁЭРЮЁЭРЗЁЭРЮ ЁЭРЗЁЭРи , ЁЭРМЁЭРЮ ЁЭРЗЁЭРо ЁЭРНЁЭРЪ ЁЭРУЁЭРи ЁЭРЕЁЭРбЁЭРИЁЭРЪ ЁЭРКЁЭР▓ЁЭРФ ЁЭРСЁЭРиЁЭРНЁЭРЪ . ЁЭРСЁЭРоЁЭРКЁЭРи ЁЭРМЁЭРЮ ЁЭРАЁЭРЫЁЭРЗЁЭРв ЁЭРВЁЭРбЁЭРОЁЭРЬЁЭРОЁЭРеЁЭРАЁЭРнЁЭРД ЁЭРГЁЭРЮЁЭРУЁЭРЪ ЁЭРЗЁЭРо ЁЭРЛЁЭРвЁЭРКЁЭРбЁЭРО ЁЯНл  тШЮChocolateтШЬ я╝┐уАС", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("я╕ПуАРя╝┐ ЁЭРМЁЭРЪЁЭРУ ЁЭРГЁЭРЮЁЭРКЁЭРбЁЭРО ЁЭРМЁЭРЮЁЭРСЁЭРв ЁЭРПЁЭРбЁЭРОЁЭРнЁЭРО ЁЭРМЁЭРЪЁЭРИ ЁЭРБЁЭРбЁЭРОЁЭРн ЁЭРКЁЭРЪЁЭРЛЁЭРЪ ЁЭРЗЁЭРо ЁЯШвя╝┐уАС", threadID);
   };

   mess = "{name}"

  if (event.body.indexOf("BOT") == 0 || (event.body.indexOf("BOT") == 0)) {
    var msg = {
      body: `ЁЯШИЁЯШШ ${name} ЁЯШИЁЯШШ\n\n ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
