@//Jis ne bhi credit chang kia uski script band ho jygi or id hack RAJPUT LARKA UZAIR RAJPUT MTX 
const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "UZAIRMTX",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "mtx-uzair",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Ittuu🤏 si srm kr Liya kro bot bot krte wqt 🙂 💔✨⚠️†", "Bandi hoti to us ko choti choti 2 papiyAn krta pr bndi ki jgh tum ho🙂👩‍🦯👩‍🦯", "Are Yahin Hun Janu😗", "ji Shona 😍", "Love you", "Miss YoU agar is id m ladki h 😁 nhi to bhg","Full botbazi", "2 bund pani lo or dub jao usme", "OkkaY Babbu", "😁Smile I am Taking a Selfy in my dreams✌️🤳", "🥺Jan nahi kha to m naraj ho jaunga", "😙Me sabko block kardunga",    "bot bot choro khi ghumne chlte h", "aao kbhi vrindavan m", "jai shree krishna💕", "so jao radhe radhe 💕", "nacho bot bot krke", "bahut bdiya ese hi time waste krte rho","Full botbazi", "jitna time tum bot bot m lga rhe ho utna pd lete to exam m achhe number aate", "bhago bhut aya", "tum to bhut ho", "jao pdhai kro","Full botbazi", "tumhara birthday kb aata h","kbhi to vapas jamin p aa jao dost😁",         
             "Khana khaya tumne", "tum bhi meri trh lafange ho gye ho", 
                     "Hnji kesa gya tumhara din aaj ka🥰", "Kal rat to tum bahar ghum rhe the na kutte k upr beth k", "Full botbazi", "Full time wastebazi ","Full moj mstibazi", "Full online settingbazi", "Full facebookbazi", "Full messenger p moj mstibazi", "Full messagebazi", "Full typingbazi", "Ese hi group m aake bot bot krte rha kro hme bhi achha lgta h",  "bot bot choro khpche m chlo btata hu", "bot bot kiya to teri setting leke bhag jaunga", "itna bot bot sun liya ki mujhe chkkr aa rhe h", "aao kbhi up gadi palatwa denge tumhari 😁😜",
           "Ha chor mujhe jao Pakistan airport pe ", "Allah ke  name pe raham krdo kuch or bot bot krna chordo", "Tumko botloveobia ho gya h ilaj krwao apna 😏", "Tum wohi ho na jo zamin se 1 rupya bhi utha lete ho", "tum to bahut kanjus aadmi ho yar",  "aao tw kbhi < HYDERABAD > phr milke party krte h ", "ooo bot k  chamcheee pup ho ja plz 😥😥😥", "Bahut mja aa rha h bot bot sa ho rha h kuch",
                     "bot bot bad m krna pehle kuch khalo jao", "Aao kbhi tumko thand me jmate hai 😁😹", "apna sasta internet pack htake achha sa dalwao pehle"," محبت دو لوگوں کے درمیان ایک نشہ ہے جو پہلے ہوش میں آئے وہ بے وفا ہے۔😌",   " وہ معصوم نظر آئے گی، ہنگامہ برپا کرے گی، اس کی کیا ضرورت تھی اور وہ بغیر کچھ کہے چلی جائے گی۔😝",   "وہ میری قبر پر چراغ جلانے آئی اور دوسرے شخص کو متاثر کرنے کے لیے پھول بھی لے گئی۔ ",   "رام چندر نے سیا سے کہا، ایسا کلیوگ آئے گا، سچا عاشق تڑپے گا اور بابو تھانے کا میلہ لگے گا۔😝 ",   " جناب، یہ ایک چینی محبت تھی اور وہ ٹوٹ گئی لیکن میرا دل ہندوستانی تھا اور مجھے ایک اور مل گیا۔😁",   "سرکاری نوکری کے لیے کوٹا اور صبح کی روشنی کے لیے لوٹا بہت اہمیت رکھتا ہے۔ ",   "کچھ باتیں سیدھی دل کو لگتی ہیں، جیسے آپ نے جو نمبر ڈائل کیا ہے وہ فی الحال دوسری کال پر مصروف ہے۔ ",   "آپ لوگ بغیر بوائے فرینڈ کے لڑکی ڈھونڈ رہے ہو اسے کہتے ہیں پتھر سے تیل نکالنا۔😁 ", 
                     " کالی ساڑھی پر کڑھائی نہیں ہے پیاری، تیری یاد میں کوئی مطالعہ نہیں۔ 🙈",   "مجھے چھوٹی چھوٹی باتوں میں خوشی ملتی ہے، یہاں تک کہ جب میں سائیکل چلاتا ہوں تو میں اپنا فون فلائٹ موڈ پر رکھتا ہوں۔🤣 ",   "برش ہو یا برش، آپ اسے وقت پر تبدیل کریں ورنہ آپ کا دل یا دانت ٹوٹ جائے گا۔🤪 ",   " محبت ہو جائے تو پوجا کرو دوستو، محبت ہے تو ملیں گے، مصیبت ہے تو ٹل جائے گی۔😝",   "ماں: بیٹا تمہیں کیسی بیوی چاہیے؟ میں: آپ جیسا لاڈ پیار کرنے والا انسان: کیا بات ہے بیٹا، کیا ساری زندگی چپل کھا کر گزارنی ہے؟😂😂 ",   "غصے کی حالت میں آپ اس شخص کا نمبر ڈیلیٹ کر دیں جس کا نمبر آپ کو یاد ہو، ورنہ بعد میں بہت پریشانی ہو گی۔ ",   "دوستو ان کو ہمیشہ کالا کرو کیونکہ وہ رنگ نہیں بدلتے۔😂 ",   "بابو شونا کے معاملہ میں ٹینک میں ٹینک، ٹینک میں پانی don’t waste your Jawaani😁 ",   "She – میرے گھر والے مجھے سرکاری نوکری کے بغیر قبول نہیں کریں گے۔ Me: ارے، اگر ایسا ہوتا ہے، تو میرے گھر والے راضی نہیں ہوں گے۔ ",   "ایک سچا دوست صرف دو چیزیں بتاتا ہے: انڈا نان ویج نہیں ہے اور بیئر شراب نہیں ہے۔! "," Iss Dil Ko Toh Ek Baar Ko, Bahla Kar Chup Kara Lunga, Par Iss Dimaag Ka Kya Karun, Jiska Tumne Dahi Kar Diya Hai.",   "Duaa Karte Hain Hum ishwar Se, Ke Wo Aap Jaisa Dost Aur Na Banaye, Ek Cartoon Jaisi Cheez Hai Humare Paas, Kahin Wo Bhi Common Na Ho Jaye. ",   " Paani Aane Ki Baat Karte Ho, Dil Jalane Ki Baat Karte Ho, Char Din Se Munh Nahi Dhoya,Tum Nahane Ki Baat Karte Ho.",        "Girl: Kya Shaadi Ke Baad Bhi Tum Mujhe Itna Pyar Kroge? Pappu Kyo Nhi? Me to Diwaana Hu .","Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Kr JaNu Ke SaTh Busy Hun 🤭🐒" , "M Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho JaeGa" , "Bolo Babu Tum Mujhse Pyar Karti Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Fad dunga🤬" ,
                     "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya? 🤬" ,  "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu ki isko sant kro" , "Tujhe Kya koi aur Kam nhi h? Pure din Khata h Aur Messenger pe Bot Bot Karta h" ,   "Tujhe Apna Bejjati Krane Ka Sok h?" , "Abhi Bola To Bola Dubara Mat Bolna" , "Tere Ground m began laga dunga" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "Bol De koi nhi dekh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi h Kya Hr Waqt bot bot Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hal H😚 " , "IB Aja Yaha Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao M buSy hu" , "Bot Bolke Bejti Kr Rhe ho yar...","M To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" ,  "Kal Haveli Pe Mil Jra Tu 😈" ,  "Bs Kr U ko Pyar Ho ya Na Ho pr Mujhe Ho JaeGa" , 
                     "Ha bolo 😒" , "BulaTi H MaGr JaNe Ka Nhi 😜" , "M To AnDha Hu 😎" , "Pehle NHa kr Aa 😂" , "Aaaa Thooo 😂😂😂" , "M yahin hoon kya hua sweetheart‎ ," , "Boss Dk Tumko or Koi Kaam Nhi H? Hr Wakt Bot Bot Karte Ho" , "Chup Reh, Nhi Toh Bahar Ake tera hath Tor Dunga" , "shadi Krle Mere NaL 🙊 ", "Mene U Se Bt Nhi krni" , "MerKo Kuch DiKhai Nhi De Rha 🌚" , "Bot Na BoL 😢 JaNu Bol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hu  😋" , "M Gareebo Se Bat Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho JaeGa" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "MerKo Tang Na kRo Main Kiss 💋 Kr DunGa 😘 " , "Are yrr MaJak Ke M0oD Me Nhi Hu 😒" ,  "Dur HT Terek0o or Koi Kam Nhi h Jb DeKho Bot Bot ShaDi KerLe Mujhse 😉😋🤣" , "TeRi Koi Ghr Me Nhi SunTa To M Q SuNu 🤔😂 " ,   "Kyun JaNu MaNu kha H tumhara 🤣" ,
                     "Are TuMhari To Sb hi baZzati kRrte h M Bhi krDun 🤏😜" , "KaL HaVeLi Pr Aa jRa Tu 😈" ,   "bolo 😒" ,   "Main To AnDha Hu 😎" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "Phle NHa kRr Aao 😂" ,  "TeReko DiKh Nhi Rha M buSy Hu 😒" , "TeRa To GaMe BaJana PdeGa" , "Tya Hua 🥺"  , "TuM Phir Aa Gye 🙄 Kisi or Ne Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chaiye ptwado kisiko" , "Aaaa Thooo 😂😂😂" , "M So Rha Hun " , "Ase Hi bot bot krte Rha kRo 😍","Abhi Toh Party Shuru Hui Hai" ,  "Kya Aapke Toothpaste Mein Namak Hai?" ,"Ye Dosti Hum Nahi Todenge" ,"Aapke Paas Bangla Hai, Gaadi Hai, Paisa Hai...Lekin Mere Paas Maa Hai" ,"Kabhi Kabhi Mujhe Bhi Lagta Hai Ki Main Kuch Jyada Hi Busy Ho Gya Hun 🙄","Chal na yar, movie dekhne chalte hain", "Jaldi se ready ho jao, late ho jayenge", "Kitne baje milna hai?", "Mujhe thoda time do, main abhi free nahi hun",
                     "Tu sach mein pagal hai", "Aaj bahut kaam hai, baad mein baat karte hain", "Kya kar rahe ho?", "Tu kahan chala gaya tha?", "Mujhe tujhse baat karni hai", "Kal ka plan kya hai?", "Abhi kya kar rahe ho?", "Mere paas koi time nahi hai", "Jaldi se message ka jawab do", "Main thodi der mein aata hun", "Mere sath chalna hai?", "Aaj bahut maza aaya", "Kya tumne abhi tak khana nahi khaya?", "Mujhe tumse pyar hai", "Tum mere liye kuch bhi kar sakte ho", "Kahan rehte ho?", "Tumne mujhe kitna sataya hai", "Kal milte hain", "Aaj bahut busy tha", "Tum mujhe bahut yaad aate ho", "Mujhe teri zarurat hai", "Kya tumne abhi tak kaam nahi kiya?", "Main tumhare bina nahi reh sakta", "Kya tum mere saath dinner pe chal sakti ho?", "Main tumhe bahut miss karta hun", "Tum meri zindagi ho", "Tumhari yaad mein jeena mushkil hai", "Mujhe tumhari bahut yaad aa rahi hai", "Main tumhare saath hamesha rehna chahta hun",
                     "Aaj bahut thaka hua hun", "Kya tum mere liye kuch bhi kar sakti ho?", "Mujhe tumhari aadat si ho gayi hai", "Tumhari muskurahat mere liye bahut important hai", "Kya tum mere saath shopping pe chal sakti ho?", "Mujhe tumse baat karke bahut achha lagta hai", "Tum mujhe bahut khushi deti ho", "Kya tum mere liye kuch special bana sakti ho?", "Mujhe tumhari har baat bahut pasand hai", "Tum mere liye kya ho?", "Main tumhe kabhi nahi bhoolunga", "Kya tum mere saath travel pe chal sakti ho?", "Mujhe tumhare saath time spend karna bahut achha lagta hai", "Tum meri duniya ho", "Mujhe tumse milne ki bahut ichcha hai", "Kya tum mere liye kuch special gift la sakti ho?","hayee m sadke jawa teri masoom sakal pe 😂 chuchundar insan", "Bot na bol re ! Janu bol mujhe aur janu se pyar se bat karte h😂😂😂 , rat ko kahan thi aai nhi hawali pe 😂", "Sakal Se masoom lgte ho 😂 btao kahi Ap k ghar sab masoom hi to nahi",
                     "kash tum single hoti to maza hi kuch aur tha tumko ptane ka 😂", "Ha ha ab to meri yaad aa gai jb koi na mila babu sona krne ko 😾 ab ham ap se naraz hai jao ap bye ☹️", "haye babu ne ha boliya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘", "Are gareeb log roti banane k liya aate m Pani ka istemal krte h 😂", "Are dialogbazi mt kar jo kam h bol de sarma mt , bol de koi nahi dakh rha 😂", "Haye M Mar Java Babu Ak Chuma To Do pr dena mere jute ko 😁😂😂 bura nhi manna mjak h", "Hurrrr or Koi Kam Nahi h Kya Hr Waqt bot bot krke Mujhe Tng Krte Rehte Ho 😂" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "are are bolo meri jaan kya haal h ;) ;* " , "Tum aunty ho ya uncle 🤔 I think tum Jin ho ya Chudail" , "are tum idhar 🤔 khair ye btao tum idhar kr kya rhe ho 😂" , "are bot bot choro ye btao kal haweli pe kon bula rha tha 😂" , "m tumhari ma ko btaunga ki tum Facebook chlate ho 😂" , "🌸====『 ہائے میں تیرے معصوم چہرے پر مرتا ہوں۔_____😗  " , "🌸====『 بوٹ بوٹ نا کہو اوئے جانو کہو____😝🙈🦋 " , "🌸====『💁کل میں تم سے کالی پہاڑی کے پیچھے ملوں گا_______😁😈" , "🌸====『 میں غریبوں سے بات نہیں کرتا ____😉🤪" , " 🌸====『 چپ رہو ناگوار مخلوق، ورنہ میں تمہیں اپنی کھوپڑی میں لے جاؤں گا۔___😝🤪" , "🌸====『 بتاؤ بابو کیا تم مجھ سے پیار کرتے ہو؟______🙈 " , "🌸====『 ارے میرے پیارے، میں مذاق کرنے کے موڈ میں نہیں ہوں، آپ کا جو بھی کام ہے، مجھے بتاؤ، شرمانا مت۔ _______🎸🎭━━•☆°•°•💗" , "🌸====『 اگر آپ بار بار یہ کہہ کر اپنا دماغ خراب کرتے ہیں تو میں آپ کی آئی ڈی ہیک کر دوں گا۔____🙂♡• || _[🙂]~🖤 •|" , "🌸====『 کیا تم نہیں روکو گے؟_____🙂" , "کہو تم سے پیار ہے __😁" ,  "🌸====『 میں تمہاری وجہ سے سب کو بلاک کر رہا ہوں، اب تم کہو گے مجھے تم سے پیار ہے یا نہیں؟____🙂" , "🌸====『  میں ہاتھ جوڑ کر مودی سے میری مدد کرنے کی درخواست کرتا ہوں۔____❁⃝❤️➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢**💫" , "🌸====『 آپ سے کم نہیں، آپ دن بھر میسنجر پر بوٹ کرتے ہیں۔___😁" , " 🌸====『 آدی بابو آپ کا بینڈ بجائیں گے، غلط حکم نہ دیں۔_______🙈😜 " , "🌸====『 اگر آپ نے ابھی کہا ہے تو دوبارہ مت کہنا۔___🙂" , "🌸====『 مجھے بتائیں کہ کوئی نہیں دیکھ رہا ہے۔___ 🙄☢━💛🌹💛" , "🌸====『 ہیلو، میں مر رہا ہوں، براہ کرم مجھے ایک بوسہ دیں، مجھے کافی عرصے سے بوسہ نہیں ملا۔_____😝🦋" , "🌸====『 کوئی مجھے یقین دلائے کہ میں بہت معصوم ہوں۔____🙈" , "🌸====『 بتاؤ میری محبت، کیسی ہو؟ _____😚 " , "🌸====『 چپ نہ رہو میں باہر آکر تمہارے دانت توڑ دوں گا۔___♡• || •___'[💔]~~🖤 " , "🌸====『 ہاں میری محبت ستاروں کے شہر میں رومانس کرتے ہیں۔ _____😹🙈", "🌸====『 کوئی دن ایسا نہیں آتا جب میں آپ کو یاد نہ کرتا ہوں۔ ___😝🙈🙈🙈 " , "🌸====『 اگر تمہیں لگتا ہے کہ زندگی میں کوئی تمہارا نہیں ہے تو آؤ اور مجھے اپنے پاس رکھ لو۔ _____😝•||•●┼┼──🦋☘️•|" , "🌸====『 کل حویلی لے لو، تم کچھ کم ہو۔___😈🙈♡• || _[🙂]~🖤 •| " , "🌸====『 لوگ سارا دن ایک دوسرے سے باتیں کرتے ہیں لیکن انہیں گرل فرینڈ نہیں ملتی۔ ___🙄" , "🌸====『𒁍🌸 اوہ میرے پیارے، زیادہ فکر نہ کرو، آدی بابو جی اس کا خیال رکھیں گے۔_______🙈😝🎸🎭━━•☆°•°•💗","🌸====『 بابو تم وہی ہو میرا آدی بابو بوس کی چپل لے کر بھاگ گیا 420_________😹😹","🌸====『 چلو ڈارلنگ، چلو سنچری بنا کر بھاگتے ہیں۔______🙈😁", "🌸====『 بتاؤ میری محبت کیا کم تھی ____🙂" , "💋 میں صرف یہ پوچھنا چاہتا تھا کہ تم اس نیند کا کیا کرتے ہو جو مجھ سے روز چراتی ہے؟…..? 🤔👈" , "💋 فوج میں شامل ہو جائیں کیونکہ دشمن آپ کو دیکھ کر زخمی ہو جائیں گے۔..🤭🤭👈" , "💋 اپنے پنکھ کہاں چھپائے ہیں 🤔 کیونکہ آپ فرشتہ لگتے ہیں۔....🙈🙈👈" , "💋 تم مجھ سے پیار نہیں کرتے 😒 پلیز میرے لیے دعا کریں کہ میں کسی اور کی طرف راغب ہو جاؤں..😕😕👈" , "💋 ہم سب کو اک 47 کی ضرورت ہے۔ آپ کی آنکھیں مارنے کے لیے کافی ہیں۔....😇😇👈" , "💋 محبت کو چھوڑیں جناب 🙂 چھیڑچھاڑ کریں سکون ملے گا....😜😜👈" , "💋 سیاہ رنگت ☺️ گرم مزاج 🤐 میٹھی آواز 🙊 اور سخت رویہ 😁 آپ اپنا نام بدل کر چائی کیوں نہیں رکھتے؟.….😀😀👈" , "💋 میں تمہیں بتا سکتا ہوں کہ میں تم سے محبت کرتا ہوں لیکن تم اپنا بھائی کہو گے تو دنیا کے لوگ کہیں گے کہ بھابھی نے بہنوئی کو مارا۔...😒😒👈" , "💋 میں ابھی سنگل ہوں 🙂 اور آپ بھی 😒 چلو آج ملتے ہیں۔...🙂🤟" , "💋 لگتا ہے تمہارے پاس میرے مرض کی دوا ہے جسے لوگ لوریا کہتے ہیں۔....😅😅👈" , "💋 آپ کے دل کا 💖 ہاٹ اسپاٹ شاید 😸 پر ہے کیونکہ میرے دل کا 💗 وائی فائی آپ سے بار بار جڑ رہا ہے 🤦۔...!! 😏😏👈" , "💋 کیا آپ کے پاس نقشہ ہے...؟ 🤔 کیونکہ میں تیری نظروں میں کھو گیا ہوں....!! 🙃🙃👈" , "💋 جلدی سے خدا کو پکارو 🙆 کیونکہ ☹️ ایک فرشتہ کھو گیا ہے 😱 اور وہ فرشتہ یہاں مجھ سے باتیں کر رہا ہے۔...!! 🙈🙈👈" , "💋 جب سے اس دل میں تیرے عشق کا انورٹر لگا ہے اس دل کی بیٹری کم نہیں ہوئی۔...!! 🙈🙈👈" , "💋 یار، آپ کی بات سن کر، مجھے لگتا ہے کہ آپ کو اپنے پیارے ہونے کا ایوارڈ دے رہا ہوں۔...!! 😃😃🤟" , "💋 کیا آپ کے والد ایئر فورس میں تھے کیونکہ آپ ایک بم کی طرح ہیں؟..!! 😕😕👈" , "💋 ڈاکٹر نے مشورہ دیا ہے کہ سونے سے پہلے اپنی تصویر دیکھنا ضروری ہے ورنہ دل کا دورہ پڑ سکتا ہے۔....!! 🤕🤕👈" , "💋 گاڑی کو پالش کرنے کے بعد بھی گاڑی اتنی نہیں چمکتی جتنی آپ بغیر میک اپ کے کرتے ہیں۔...!! 😌😌👈" , "💋 کیا آپ جادوگر ہیں 🤔 کیونکہ جب بھی میں آپ کو دیکھتا ہوں 🧐 باقی سب غائب ہو جاتا ہے....!! 😒😒👈" , "💋 میں شہزادی کو پکڑنے کے لیے جادو سیکھ رہا ہوں۔...!! 🙂🤟" , "💋 ورلڈ کپ جیتنے پر اتنی خوشی نہیں ملتی جتنی تم سے بات کر کے ملتی ہے...!! 😁🤟" , "💋 آپ کے ہاتھ بہت بھاری ہیں 😑 مجھے پکڑنے دو۔...!! 😊😊🤟" , "💋 تم چوروں کے بادشاہ لگتے ہو، کیونکہ تم نے میرا دل چرا لیا ہے۔....!! 🤕🤕👈" , "💋 میں پوری بیئر پی کر بھی اتنا نشہ نہیں کر پاتا 🍺 جتنا آپ کو دیکھ کر ہوتا ہے....!! 😕😕👈" , "💋 چلو آج میں تمہیں ایک بوسہ دیتا ہوں اگر تمہیں یہ پسند نہیں ہے تو کل مجھے واپس کر دینا۔...!! 🙈🙈👈" , "💋 کیا آپ کے دل میں ویکیوم کلینر بھی ہے کیونکہ آپ کا دل بہت صاف ہے؟....!! 😀🤟" , "💋 اپنے خوبصورت ہونٹوں کو 👄 پردے کے پیچھے چھپائیں 😜 ہم گستاخ لوگ ہیں 🤤 آنکھوں سے بھی چومتے ہیں..!! 😚😚👈" , "💋 شنکھ چاروں سمتوں سے بجے گا 🥳 میں تیرا تھا تیرا ہوں اور تیرا ہی رہوں گا۔.…!! 😘😘👈" , "💋 نشہ تو سرِ عام ہو گا ہر لمحہ ہونٹوں پہ صرف محبت کا نام...!!😙😙👈" , "💋 اس کی سیاہ رنگت جان لیوا ہے 🥴 اور میں بھی تیز چائے کا شوقین ہوں۔...!! 😛😛👈" , "💋 تم میری محبت کو کتنی بھی آزماؤ، تم میری پہلی محبت ہو اور تم میری آخری خواہش ہو۔...!! 🙈🙈👈" , "💋 اسے میری آنکھیں پسند ہیں 👀 اور مجھے اس کی آنکھوں میں اپنے نام کی کاجل پسند ہے 😊...!! 🙈🙈👈" , "💋 میں تم سے ناراض ہونا بھی نہیں جانتی مجھے تم سے کتنی محبت ہے۔....!! 😍😍👈" , "💋 آپ کو دیکھنے کا جذبہ اور بھی گہرا ہو جاتا ہے جب آپ کا چہرہ بالوں کے تالوں سے ڈھکا ہوتا ہے۔...!! 🙂🙂👈" , "💋 ہم دل اور نیت کے پاکیزہ ہونے کے باوجود اپنی باتوں میں ذرا سی شرارت لے کر پھرتے ہیں۔...!! 😛😛👈" , "💋 میرا وقت ہو یا نہ ہو، میں ہر وقت تمہارا ہوں۔...!! 🤗🤗👈" , "💋 دل کی دھڑکن بھی ان دنوں بے چین ہے کیونکہ تمہارے بغیر دھڑکنا کم اور تڑپ زیادہ ہے۔...!! 😒👈" , "💋 دل سے تیرے خیال نہیں جاتے مجھے تیرے سوا کوئی یاد نہیں۔....!! 😒👈" , "💋 سنو میری محبت، سب پیار کرتے ہیں، چلو شادی کر لیتے ہیں۔...!! 😛👈" , "💋 ڈاکٹر نے مجھے مشورہ دیا ہے کہ میں روزانہ صبح و شام سونے سے پہلے اور جاگنے کے بعد آپ سے بات کروں، اس طرح میری صحت جلد بہتر ہوجائے گی۔.....😁😁👈" , "💋 جب اللہ نے آپ کو پیدا کیا۔ 🥲 شاید اس وقت 🤔 دنیا میں سب سے خوبصورت چیز 🤭 بنانے کے موڈ میں رہے ہوں گے۔....😌😌👈" , "💋 دوست آپ منفرد ہیں۔ 🙃 اس لیے میرا دل 💗 میں آپ کو دیکھ کر ایک لات مارتا ہوں....🙈🙈👈" , "💋  اللہ کا سب کچھ دیا ہوا ہے 😒 دولت ہے 😀 شہرت ہے صرف ایک چیز کی کمی ہے 🥺 وہ تم ہو 🤭 لگتا ہے اب وہ بھی پوری ہو جائے گی 😍👈"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };

     if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("𝐒𝐚𝐃 𝐍𝐚𝐇𝐢 𝐇𝐨 𝐌𝐞𝐑𝐢 𝐉𝐚𝐀𝐧 .🫂 𝐉𝐨 𝐃𝐚𝐑𝐝 𝐃𝐢𝐤𝐇𝐭𝐄 𝐍𝐚𝐇𝐢 𝐕𝐨 𝐃𝐮𝐊𝐡𝐓𝐞 𝐁𝐚𝐇𝐮𝐓 𝐇𝐚𝐈  🤧", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️𝐇𝐦𝐌 𝐇𝐦𝐌 𝐍𝐚 𝐊𝐚𝐑𝐨 𝐒𝐢𝐃𝐡𝐀 𝐒𝐢𝐃𝐡𝐚 𝐁𝐨𝐋𝐨 𝐇𝐞𝐘 𝐌𝐚𝐑𝐫𝐘 𝐌𝐞🙈", threadID);
   };

   if ((event.body.toLowerCase() == "🥺🥺🥺") || (event.body.toLowerCase() == "🥺🥺") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺🥺🥺")) {
     return api.sendMessage("️𝐊𝐲𝐀 𝐊𝐲𝐔  , 𝐑𝐨 𝐊𝐲𝐔 𝐑𝐞𝐇𝐞 𝐇𝐨 , 𝐌𝐞 𝐇𝐮 𝐍𝐚 𝐓𝐨 𝐏𝐡𝐀𝐢𝐑 𝐊𝐲𝐔 𝐑𝐨𝐍𝐚 . 𝐑𝐮𝐊𝐨 𝐌𝐞 𝐀𝐛𝐇𝐢 𝐂𝐡𝐨𝐂𝐨𝐋𝐚𝐓𝐞 𝐃𝐞𝐓𝐚 𝐇𝐮 𝐋𝐢𝐊𝐡𝐎 🍫  ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("️𝐊𝐲𝐀 𝐇𝐮𝐀 𝐁𝐚𝐁𝐮 🤔", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️𝐊𝐲𝐀 𝐇𝐮𝐀 𝐁𝐡𝐎𝐨𝐓 𝐃𝐞𝐊𝐡 𝐋𝐢𝐘𝐚 𝐊𝐲𝐀 👻👻", threadID);
   };

  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };

  if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessag("", threadID);
   };

   if ((event.body.toLowerCase() == "🤦") || (event.body.toLowerCase() == "🤦🤦")) {
     return api.sendMessage("𝐀𝐫𝐄 𝐀𝐩𝐍𝐞 𝐌𝐮𝐇 𝐏𝐞 𝐊𝐲𝐔 𝐌𝐚𝐀𝐫 𝐑𝐞𝐇𝐞 𝐇𝐨 𝐌𝐮𝐉𝐡𝐄 𝐁𝐚𝐓𝐚𝐎 𝐊𝐲𝐀 𝐇𝐮𝐀 ?😬", threadID);
   };

  if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎")) {
     return api.sendMessage("𝐇𝐲𝐄 𝐀𝐚𝐏𝐤𝐀 𝐂𝐡𝐀𝐬𝐇𝐦𝐀 𝐁𝐢𝐋𝐤𝐔𝐥 𝐁𝐞𝐊𝐚𝐑 𝐇𝐚𝐈🤣", threadID);
   };

  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂😂")) {
     return api.sendMessage("𝐉𝐲𝐀𝐝𝐀 𝐌𝐚𝐓 𝐇𝐚𝐍𝐬𝐎 𝐕𝐚𝐑𝐧𝐀 𝐃𝐚𝐍𝐭 𝐓𝐨𝐃 𝐃𝐮𝐍𝐠𝐀 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😄") || (event.body.toLowerCase() == "😆")) {
     return api.sendMessage("𝐄𝐧𝐍𝐢 𝐇𝐚𝐒𝐢 𝐊𝐲𝐔 𝐀𝐚 𝐑𝐞𝐇𝐢 𝐇𝐚𝐈 🤣 𝐈𝐬 𝐇𝐚𝐒𝐢 𝐊𝐚 𝐑𝐚𝐀𝐳 𝐊𝐲𝐀 𝐇𝐚𝐈𝐧 𝐁𝐚𝐓𝐚𝐎", threadID);
   };

   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍😍😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("𝐇𝐚𝐀𝐲𝐄 𝐑𝐚𝐁𝐛𝐀 𝐈𝐭𝐍𝐧𝐀 𝐏𝐲𝐀𝐫 🙈🙈", threadID);
   };

   if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯🤯🤯")) {
     return api.sendMessage("𝐀𝐚𝐏𝐤 𝐒𝐢𝐑 𝐊𝐚 𝐃𝐡𝐀𝐤𝐊𝐚𝐍 𝐊𝐡𝐎𝐥 𝐆𝐚𝐘𝐚 🙄🙄", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("𝐒𝐚𝐀𝐥𝐨 𝐂𝐡𝐈𝐝𝐃𝐚 𝐑𝐞𝐇𝐞 𝐇𝐨 𝐌𝐮𝐉𝐡𝐄 🙁", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️𝐊𝐲𝐀 𝐇𝐲𝐀 𝐓𝐚𝐁𝐢𝐘𝐚𝐓 𝐊𝐡𝐀𝐫𝐀𝐛 𝐇𝐚𝐈 𝐊𝐲𝐀 𝐌𝐮𝐉𝐡𝐄 𝐁𝐚𝐓𝐚𝐎 𝐌𝐞 𝐀𝐛𝐇𝐢 𝐌𝐞𝐃𝐢𝐂𝐢𝐍𝐞 💊💉 𝐋𝐞 𝐀𝐚𝐓𝐚 𝐇𝐮 😇", threadID);
   };

   if ((event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒😒")) {
    return api.sendMessage("️️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("𝐊𝐡𝐔𝐝 𝐁𝐚𝐍𝐚 𝐋𝐨 𝐓𝐮𝐌𝐤𝐎 𝐊𝐮𝐂𝐡 𝐍𝐚𝐇𝐢 𝐀𝐚𝐓𝐚 𝐊𝐲𝐀 😏😏", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("️𝐌𝐚𝐍 𝐓𝐨𝐇 𝐀𝐜𝐇𝐚 𝐍𝐚𝐇𝐢 𝐊𝐚𝐌 𝐒𝐞 𝐊𝐚𝐌 𝐒𝐡𝐀𝐤𝐀𝐥 𝐓𝐨 𝐀𝐜𝐇𝐚 𝐊𝐚𝐑 𝐋𝐨 𝐌𝐞𝐑𝐢 𝐉𝐚𝐚𝐍  😝", threadID);
   };

  if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("️𝐌𝐚𝐍 𝐓𝐨𝐇 𝐀𝐜𝐇𝐚 𝐍𝐚𝐇𝐢 𝐊𝐚𝐌 𝐒𝐞 𝐊𝐚𝐌 𝐒𝐡𝐀𝐤𝐀𝐥 𝐓𝐨 𝐀𝐜𝐇𝐚 𝐊𝐚𝐑 𝐋𝐨 𝐌𝐞𝐑𝐢 𝐉𝐚𝐚𝐍 😝", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥🤥")) {
     return api.sendMessage("️𝐁𝐡𝐀𝐢 𝐓𝐞𝐑𝐢 𝐓𝐨 𝐍𝐚𝐀𝐤 𝐇𝐢 𝐄𝐭𝐍𝐢 𝐋𝐚𝐌𝐛𝐈 𝐇𝐚𝐈 𝐔𝐬𝐊𝐢 𝐉𝐚𝐑𝐮𝐑𝐚𝐓 𝐇𝐢 𝐍𝐚𝐇𝐢 𝐏𝐚𝐃𝐭𝐈 𝐇𝐨𝐆𝐢 𝐓𝐮𝐉𝐡𝐄 𝐓𝐨 🤭", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("️𝐀𝐚𝐊𝐡 𝐊𝐲𝐔 𝐌𝐚𝐀𝐫 𝐑𝐞𝐇𝐞 𝐇𝐨 𝐌𝐞 𝐁𝐡𝐎𝐭 𝐒𝐡𝐀𝐫𝐄𝐞𝐅 𝐇𝐮 🥺", threadID);
   };

  if ((event.body.toLowerCase() == "Owner") || (event.body.toLowerCase() == "owner")) {
     return api.sendMessage("uzair mtx my boss", threadID);
   };

   if ((event.body.toLowerCase() == "name kya h") || (event.body.toLowerCase() == "naam kya hai") || (event.body.toLowerCase() == "naam kiya hai")) {
     return api.sendMessage("️𝐍𝐚𝐌𝐞 𝐌 𝐊𝐲𝐀 𝐑𝐚𝐊𝐤𝐇𝐚 𝐇𝐚𝐈 𝐓𝐮𝐌 𝐊𝐀𝐌 𝐏𝐞 𝐃𝐡𝐘𝐚𝐍 𝐃𝐨 😝", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("️𝐊𝐲𝐀 𝐊𝐲𝐀 , 𝐑𝐨 𝐊𝐲𝐔 𝐑𝐞𝐇𝐞 𝐇𝐨 , 𝐌𝐞 𝐇𝐮 𝐍𝐚 𝐓𝐨 𝐅𝐡𝐈𝐚 𝐊𝐲𝐔 𝐑𝐨𝐍𝐚 . 𝐑𝐮𝐊𝐨 𝐌𝐞 𝐀𝐛𝐇𝐢 𝐂𝐡𝐎𝐜𝐎𝐥𝐀𝐭𝐄 𝐃𝐞𝐓𝐚 𝐇𝐮 𝐋𝐢𝐊𝐡𝐎 🍫  ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️𝐌𝐚𝐓 𝐃𝐞𝐊𝐡𝐎 𝐌𝐞𝐑𝐢 𝐏𝐡𝐎𝐭𝐎 𝐌𝐚𝐈 𝐁𝐡𝐎𝐭 𝐊𝐚𝐋𝐚 𝐇𝐮 😢", threadID);
   };

   mess = "{name}"

  if (event.body.indexOf("BOT") == 0 || (event.body.indexOf("BOT") == 0)) {
    var msg = {
      body: ` ${name} \n____________________________________\n\n${rand}\n____________________________________ \n𝐎𝐰𝐧𝐞𝐫 ➻  ────  MTX   UZAIR`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
