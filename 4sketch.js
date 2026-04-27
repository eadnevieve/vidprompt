// =========================
// GLOBALS
// =========================
let myFont;

let sidebarWidth = 300;
let selectedCategory;
let sidebarScroll = 0;
let mainScroll = 0;

let sidebarItems = [];
let linkElements = [];

 // =========================
// RESOURCES (UNCHANGED)
// =========================
let resources = {
   "Downloaders": [
    ["(TikTok) Snaptik", "https://snaptik.app/en"],
    ["(TikTok) SSSTik", "https://ssstik.io/download-tiktok-mp3"],
    ["(YouTube) Y2Mate", "https://en.y2mate.is/18"],
    ["(YouTube) SSYouTube", "https://ssyoutube.com/en89/youtube-video-downloader"],
    ["(YouTube) YTMP4", "https://ytmp4.tube/"],
    ["(SoundCloud) KlickAud", "https://www.klickaud.co/"],
    ["(SoundCloud) SCTomp3", "https://sctomp3.net/"],
    ["(Instagram) SSSInstagram", "https://sssinstagram.com/"]
  ],

  "After Effects: The Basics 3 ": [
    ["(Shortcuts) AE Shortcuts Video", "https://youtu.be/55pJLnJ1jJM"],
    ["(Shortcuts) AE Shortcut Reference", "https://helpx.adobe.com/after-effects/using/keyboard-shortcuts-reference.html"],
    ["(Plugins) Plugin Guide 1", "https://youtu.be/93RMVIHQ-9E"],
    ["(Plugins) Plugin Guide 2", "https://youtu.be/JA9fyDgPizM"],
    ["(Plugins) Plugin Guide 3", "https://youtu.be/OrE5d_V9SVU"],
    ["(Transitions) Basic Transitions 1", "https://youtu.be/XtM2j36Yuf4"],
    ["(Transitions) Basic Transitions 2", "https://youtu.be/_QTDa4DjwhE"]
  ],

  "Carrd Inspo": [
    ["(Carrd) sukiswife", "https://suk1swife.carrd.co"],
    ["(Carrd) ririkass", "https://ririkaslovebot.carrd.co"],
    //["(Carrd) osakiuu", "https://reiahluvsalma.carrd.co"],
    ["(Carrd) akogumi", "https://akogumi.carrd.co"],
    ["(Carrd) miyukax", "https://miyukax.carrd.co"],
   // ["(Carrd) estukei", "https://lexiesnape.carrd.co"],
    ["(Carrd) mvrdks", "https://mvrdks.carrd.co"],
    ["(Carrd) kurvzin", "https://kurvzin.carrd.co"],
    ["(Carrd) anzqis", "https://anzqis.carrd.co"],
    ["(Carrd) yuzuhaalvr", "https://yuzuhaalvr.carrd.co"],
    ["(Carrd) rhianikko", "https://rhianikko.carrd.co"],
    ["(Carrd) I6etou", "https://i6etou.carrd.co"],
   // ["(Carrd) rnitsuba", "https://luvie.crd.co"],
    ["(Carrd) hugebrainrot", "https://hugebrainrot.carrd.co"]
  ],

  "Payhip/Linktree Inspo": [
    ["(Payhip) uwaevii", "https://payhip.com/uwaevii"],
   // ["(Payhip) ramyecn", "https://payhip.com/ramyecn"],
    ["(Payhip) yassence", "https://payhip.com/yassence"],
    ["(Payhip) starrygrimes", "https://payhip.com/starrygrimes"],
   // ["(Payhip) submissiverry", "https://payhip.com/submissiverry"],
    ["(DirectMe) nhantaii", "https://direct.me/nhantaii"],
    ["(Linktree) kkurosqki", "https://linktr.ee/kurosqki"],
    ["(Linktree) opsy.vfx", "https://linktr.ee/opsy.vfx"],
    ["(Payhip) aecrith", "https://payhip.com/aecrith"],
    ["(Payhip) isaqura", "https://payhip.com/b/kIjNS"]
  ],
"Live Action Scenepack Accounts": [
  //["(Live Action) zendayascps", "https://www.instagram.com/zendayascps/"],
  ["(Live Action) pe7ezscenes", "https://www.instagram.com/pe7ezscenes/"],
  ["(Live Action) marvel.scenepacks", "https://www.instagram.com/marvel.scenepacks/"],
  ["(Live Action) soverallpacks", "https://www.instagram.com/soverallpacks/"],
  ["(Live Action) logolessxscenepacks", "https://www.instagram.com/logolessxscenepacks/"],
  ["(Live Action) riptiides.ga", "https://www.instagram.com/riptiides.ga/"],
  ["(Live Action) multifandomlogoless4u", "https://www.instagram.com/multifandomlogoless4u/"],
  ["(Live Action) blkscenepacks", "https://www.instagram.com/blkscenepacks/"],
  ["(Live Action) laynaspacks", "https://www.instagram.com/laynaspacks/"],
  ["(Live Action) horrorscenepack", "https://www.instagram.com/horrorscenepack/"],
  //["(Live Action) kyotoscenes", "https://www.instagram.com/kyotoscenes/"],
  ["(Live Action) queenpackz", "https://www.instagram.com/queenpackz/"],
  ["(Live Action) linc0lnzscenes", "https://www.instagram.com/linc0lnzscenes/"],
  ["(Live Action) pughscenes", "https://www.instagram.com/pughscenes/"],
  //["(Live Action) moorsdelle.ga", "https://www.instagram.com/moorsdelle.ga/"],
  ["(Live Action) walke7scenes", "https://www.instagram.com/walke7scenes/"],
  ["(Live Action) roryslogoless", "https://www.instagram.com/roryslogoless/"],
  ["(Live Action) amethvztga", "https://www.instagram.com/amethvztga/"],
  ["(Live Action) williamsscenes", "https://www.instagram.com/williamsscenes/"],
  ["(Live Action) prongspacks", "https://www.instagram.com/prongspacks/"],
  //["(Live Action) lunascenez", "https://www.instagram.com/lunascenez/"],
  ["(Live Action) aejjmbkscenes", "https://www.instagram.com/aejjmbkscenes/"],
  ["(Live Action) scenepackmutuals", "https://www.instagram.com/scenepackmutuals/"],
  //["(Live Action) mystictvd.packs", "https://www.instagram.com/mystictvd.packs/"],
  ["(Live Action) zieglerpacks", "https://www.instagram.com/zieglerpacks/"],
  ["(Live Action) petrovaspacks", "https://www.instagram.com/petrovaspacks/"],
  ["(Live Action) escenas.series", "https://www.instagram.com/escenas.series/"],
  ["(Live Action) shizascenepacks", "https://www.instagram.com/shizascenepacks/"],
  //["(Live Action) tribrid_zay.sp", "https://www.instagram.com/tribrid_zay.sp/"],
  ["(Live Action) megascenes", "https://www.instagram.com/megascenes/"],
  ["(Live Action) megaawrld_", "https://www.instagram.com/megaawrld_/"],
  ["(Live Action) scarover9000s_scenepacks", "https://www.instagram.com/scarover9000s_scenepacks/"],
  ["(Live Action) neyas.ga", "https://www.instagram.com/neyas.ga/"],
  ["(Live Action) ahsmegapacks", "https://www.instagram.com/ahsmegapacks/"],
  ["(Live Action) sceneslogolcss", "https://www.instagram.com/sceneslogolcss/"],
  ["(Live Action) 221logoless", "https://www.instagram.com/221logoless/"]
],

"Cartoon Scenepack Accounts": [
  ["(Cartoon) sqnnynoir.ga", "https://www.instagram.com/sqnnynoir.ga/"],
  ["(Cartoon) steinvfx.ga", "https://www.instagram.com/steinvfx.ga/"],
  ["(Cartoon) winxxclubscenes", "https://www.instagram.com/winxxclubscenes/"],
  ["(Cartoon) dragonprincelogoless", "https://www.instagram.com/dragonprincelogoless/"],
  //["(Cartoon) lolirockscenepacks", "https://www.instagram.com/lolirockscenepacks/"],
  ["(Cartoon) unw.comp", "https://www.instagram.com/unw.comp/"],
  ["(Cartoon) winxspack", "https://www.instagram.com/winxspack/"],
  ["(Cartoon) wantedits.ga", "https://www.instagram.com/wantedits.ga/"],
  ["(Cartoon) caromae.ga", "https://www.instagram.com/caromae.ga/"],
  ["(Cartoon) logolesstdi", "https://www.instagram.com/logolesstdi/"],
  //["(Cartoon) br1arbelle_ga", "https://www.instagram.com/br1arbelle_ga/"],
  ["(Cartoon) barbiescenepacks", "https://www.instagram.com/barbiescenepacks/"],
  ["(Cartoon) disneyscenepacks", "https://www.instagram.com/disneyscenepacks/"],
  ["(Cartoon) r.alityga", "https://www.instagram.com/r.alityga/"],
  ["(Cartoon) m3l.odies_ga", "https://www.instagram.com/m3l.odies_ga/"],
 // ["(Cartoon) jwcc_scenepacks", "https://www.instagram.com/jwcc_scenepacks/"],
  //["(Cartoon) starlinqscenes", "https://www.instagram.com/starlinqscenes/"],
  ["(Cartoon) scenesbychiara", "https://www.instagram.com/scenesbychiara/"],
  ["(Cartoon) multicartooncomps", "https://www.instagram.com/multicartooncomps/"],
  //["(Cartoon) moorsdelle.ga", "https://www.instagram.com/moorsdelle.ga/"],
  ["(Cartoon) miyas.comps", "https://www.instagram.com/miyas.comps/"],
  ["(Cartoon) logolessmlb", "https://www.instagram.com/logolessmlb/"],
  ["(Cartoon) idiotcomps", "https://www.instagram.com/idiotcomps/"],
  ["(Cartoon) gaynime.scenepacks", "https://www.instagram.com/gaynime.scenepacks/"],
  ["(Cartoon) zeruacomps", "https://www.instagram.com/zeruacomps/"],
  ["(Cartoon) scenecomps", "https://www.instagram.com/scenecomps/"]
],

"Movie/Show Docs": [
  //["(Docs) Master Doc 1", "https://docs.google.com/document/d/1URchrhL54LjwLTiGgFik8jb55aVSjxp21PD7-F4SOoU/edit#"],
  //["(Docs) Master Doc 2", "https://docs.google.com/document/d/1URchrhL54LjwLTiGgFik8jb55aVSjxp21PD7-F4SOoU/edit#heading=h.tcwq31gknkd5"],
  ["(Docs) Master Doc 3", "https://docs.google.com/document/d/1NZ3-hNhl-L_dB9qQFHepN6J8u1lHFWrxh5rLCwEArtE/edit"]
],

//"Movie/TV Download Sites": [
 // ["(Movies) UHDMovies", "https://uhdmovies.bio/"],
  //["(Movies) MoviesMod", "https://moviesmod.co.in/"],
  //["(Movies) Pahe", "https://pahe.li/"],
  //["(Movies) DownloadHub", "https://downloadhub.tools/"],
  //["(Movies) Soap2Day", "https://soap2day.rs/"]
//],
  
  "Giveaways": [
 // ["(Giveaway) kwaerin", "https://mega.nz/folder/zyxFBYwa#VUD8ND6T9BNIy4c4EvcunA"],
   // ["(Giveaway) Joywrrld", "https://mega.nz/folder/rEp01TRC"],
  //  ["(Giveaway) mutuals", "https://mega.nz/folder/VPUjVQjY#wacp3a6ZJN5m--vs8Usdkg"],
  //  ["(Giveaway) 2nd mutuals", "https://mega.nz/folder/WcZDSBTL#JaOcWf8Xd6vVsp21MIcKJQ"],
  //  ["(Giveaway) wanda.qx", "https://mega.nz/folder/3WBC3IrT#oksl0FjMfY_oHvC0mCUBIQ"],
  ["(Giveaway) lunarsial", "https://mega.nz/folder/Fnw2xQhB#sNIwzEwXoKj_2PyRm_4fvg"],
   // ["(Giveaway) yxlxnx", "https://mega.nz/folder/ppkSwYqS#NoBtkvukf96aHbMvywxL8Q"],
   // ["(Giveaway) plugins giveaway", "https://mega.nz/folder/jqImgZKC#WrbsAcCCGuX2neEjGveXQQ"],
  ["(Giveaway) drkho1d", "https://mega.nz/folder/wPsChQwT#wllA9kWtyGQWCx3Id8_7Pw"],
   // ["(Giveaway) flcrenzce", "https://mega.nz/folder/Q9tlXS4B#_Kv_KgFqpXx7iLX9lWxw5Q"],
   // ["(Giveaway) kaediot", "https://mega.nz/folder/yEhCTLID#AyELrSTLfdL64GKCc_JaWw"],
  ["(Giveaway) rinxana", "https://mega.nz/folder/O4owXI6A#YrZ_3Cg_Od1cNEJj5xoQnQ"],
  ["(Giveaway) nysitcoms", "https://mega.nz/folder/WWx2xBSA#A8SfNqyPfYMheQLOAKxFBA"],
  ["(Giveaway) asylumful", "https://mega.nz/folder/8VskTaJA#N9Pz5XiKyEf4bPrbwxRwuQ"],
  ["(Giveaway) payynuz", "https://drive.google.com/drive/mobile/folders/1JIBeEF5ptKqdcrsWXGTHQRiSyPDLBsRY"],
  ["(Giveaway) tsuksato", "https://drive.google.com/drive/mobile/folders/1bMw24HRoCBAWL1GaTRFZa3LsaeKvI-DE"],
  ["(Giveaway) hugebrainrot giveaway", "https://mega.nz/folder/QPwl2ZDS#l7BacoXQ0EMzc_5hvJh8SA"],
  ["(Giveaway) glcwszn", "https://mega.nz/folder/flYCWZjC#nmI6AvKzbXusWwuh35yJhw"],
  ["(Giveaway) vpmpires", "https://mega.nz/folder/uJNRTA6C#nlonTCjlWs060YWEV0T2Ow"],
  ["(Giveaway) investmcnt", "https://mega.nz/folder/LbIGmLzK#Kg4g613QVAuPqFKLCtYDkw"],
  ["(Giveaway) o2amu", "https://mega.nz/folder/WPBCyTTY#uYefoWGah0ehkTGWz8vQAg"],
   // ["(Giveaway) eulmerz", "https://mega.nz/folder/QeVzgZDS#AWyiuTTHjcHGYXd4aa-z-A"],
   // ["(Giveaway) eulmerz 2nd", "https://mega.nz/folder/VTVXwKaC#wsZvGBn4Xof-98vfjEP97A"],
  ["(Giveaway) oircei", "https://mega.nz/folder/hOBwwJIQ#UEYVtP5e2sFJy5seISSQNw"],
  ["(Giveaway) yslkei", "https://mega.nz/folder/aTRwVLbR#x79BKvM7BBHabDXVmKH69Q"],
  ["(Giveaway) aethxia", "https://payhip.com/b/I6ngo"],
  ["(Giveaway) rekizzstar", "https://drive.google.com/drive/mobile/folders/18bT7-cIK5uEH4eTxd4RIktjudovfALGg"],
   // ["(Giveaway) m2ntis", "https://mega.nz/folder/Zg1RRQ4Z#qJiWdxetc4hIWHRuZdcp3Q"],
  ["(Giveaway) AKOB3LL", "https://mega.nz/folder/BMcWnQgT#r_o8ioxPci_M2KeJdZ_Afw"],
  ["(Giveaway) tsukato", "https://payhip.com/b/wDc7V"],
  ["(Giveaway) dist9ict", "https://mega.nz/folder/smUiRBaB#sTx6ROwd5JlQ_OqRtaXYCg"],

  /* GENERAL GIVEAWAYS MERGED */
   // ["(General Giveaway) Pack 1", "https://mega.nz/folder/6k1S0CKQ#0VeeoOuryZpef7EaWL8Mjg"],
  ["(General Giveaway) Pack 2", "https://mega.nz/folder/B1BlhAbJ#wEI4V24i9eI-WrrDHX0qOg"],
   // ["(General Giveaway) Pack 3", "https://mega.nz/folder/i5lBRB6A#vlCEUdfHuUDC8o-SK5o8Xg"],
   // ["(General Giveaway) Pack 4", "https://mega.nz/folder/QhhXGYxA#"]
],

"Overlays": [
  ["(Overlay) Akogumi", "https://mega.nz/folder/e1wiFRyJ#d09Tk-BW0YD2WQuJOioaHw"], 
    ["(Overlay) Rikuvitas", "https://payhip.com/b/NEf6i"],
      ["(Overlay) Navacamp", "https://mega.nz/folder/4lgiTTwa#uO8UUYD0aokeSClf5XKS1g"],
  // ["(Overlay) Overlay Pack 1", "https://mega.nz/folder/placeholder1"],
   // ["(Overlay) Overlay Pack 2", "https://mega.nz/folder/placeholder2"],
   // ["(Overlay) Overlay Pack 3", "https://mega.nz/folder/placeholder3"],

  /* OVERLAY GIVEAWAYS MERGED */
   // ["(Overlay Giveaway) Overlay Mega Pack", "https://mega.nz/folder/placeholder4"],
   // ["(Overlay Giveaway) Texture Pack", "https://mega.nz/folder/placeholder5"],
   // ["(Overlay Giveaway) Light Leak Pack", "https://mega.nz/folder/placeholder6"]
],
  
 //  "Colorings (with plugins)": [
 //  ["(Coloring + Plugins) Coloring Pack 1", "https://mega.nz/folder/placeholderA"],
  // ["(Coloring + Plugins) Coloring Pack 2", "https://mega.nz/folder/placeholderB"],
  // ["(Coloring + Plugins) Coloring Pack 3", "https://mega.nz/folder/placeholderC"],
  // ["(Coloring + Plugins) Vibrant Plugin Coloring", "https://mega.nz/folder/placeholderD"],
   //["(Coloring + Plugins) Moody Plugin Coloring", "https://mega.nz/folder/placeholderE"],
   //["(Coloring + Plugins) Soft Pastel Plugin Coloring", "https://mega.nz/folder/placeholderF"]
 //],

 //"Colorings (without plugins)": [
  // ["(Coloring) Basic Coloring Pack 1", "https://mega.nz/folder/placeholderG"],
   //["(Coloring) Basic Coloring Pack 2", "https://mega.nz/folder/placeholderH"],
   //["(Coloring) Basic Coloring Pack 3", "https://mega.nz/folder/placeholderI"],
  // ["(Coloring) Soft Coloring", "https://mega.nz/folder/placeholderJ"],
   //["(Coloring) Vibrant Coloring", "https://mega.nz/folder/placeholderK"],
   //["(Coloring) Neutral Coloring", "https://mega.nz/folder/placeholderL"]
 //],

 //"Shake Giveaways": [
  // ["(Shake) Shake Pack 1", "https://mega.nz/folder/placeholderM"],
   //["(Shake) Shake Pack 2", "https://mega.nz/folder/placeholderN"],
   //["(Shake) Shake Pack 3", "https://mega.nz/folder/placeholderO"],
   //["(Shake) Velocity Shake Pack", "https://mega.nz/folder/placeholderP"],
  // ["(Shake) Smooth Shake Pack", "https://mega.nz/folder/placeholderQ"],
  // ["(Shake) Impact Shake Pack", "https://mega.nz/folder/placeholderR"],
//"Shakes": [
   //["(Shake Tutorial) Basic Shake Tutorial", "https://youtu.be/placeholder1"],
  // ["(Shake Tutorial) Velocity Shake Tutorial", "https://youtu.be/placeholder2"],
   //["(Shake Tutorial) Impact Shake Tutorial", "https://youtu.be/placeholder3"],
   //["(Shake Tutorial) Smooth Shake Tutorial", "https://youtu.be/placeholder4"],
   //["(Shake Tutorial) Advanced Shake Tutorial", "https://youtu.be/placeholder5"]
 //],
  
 //"Coloring Giveaways": [
  // ["(Coloring Giveaway) Pack 1", "https://mega.nz/folder/placeholderS"],
   //["(Coloring Giveaway) Pack 2", "https://mega.nz/folder/placeholderT"],
   //["(Coloring Giveaway) Pack 3", "https://mega.nz/folder/placeholderU"],
   //["(Coloring Giveaway) Soft Coloring", "https://mega.nz/folder/placeholderV"],
   //["(Coloring Giveaway) Vibrant Coloring", "https://mega.nz/folder/placeholderW"],
   //["(Coloring Giveaway) Moody Coloring", "https://mega.nz/folder/placeholderX"]
 //],

"SFX Giveaways": [
  ["(SFX) SFX Pack 1", "https://mega.nz/folder/placeholderY"],
  ["(SFX) SFX Pack 2", "https://mega.nz/folder/placeholderZ"],
  ["(SFX) SFX Pack 3", "https://mega.nz/folder/placeholderAA"],
  ["(SFX) Whoosh Pack", "https://mega.nz/folder/placeholderAB"],
  ["(SFX) Impact Pack", "https://mega.nz/folder/placeholderAC"],
  ["(SFX) Glitch SFX Pack", "https://mega.nz/folder/placeholderAD"]
],
  
  

"Useful Websites": [
  ["(Website) Remove.bg", "https://www.remove.bg/"],
  ["(Website) Ezgif", "https://ezgif.com/"],
  ["(Website) TinyPNG", "https://tinypng.com/"],
  ["(Website) Photopea", "https://www.photopea.com/"],
  ["(Website) Canva", "https://www.canva.com/"],
  ["(Website) Kapwing", "https://www.kapwing.com/"],
  ["(Website) Flaticon", "https://www.flaticon.com/"],
  ["(Website) Pixabay", "https://pixabay.com/"],
  ["(Website) Unsplash", "https://unsplash.com/"]
],

"Background Removers": [
  ["(BG Remover) Remove.bg", "https://www.remove.bg/"],
  ["(BG Remover) Adobe Express Remove Background", "https://www.adobe.com/express/feature/image/remove-background"],
  ["(BG Remover) Slazzer", "https://www.slazzer.com/"],
  ["(BG Remover) FocoClipping", "https://www.fococlipping.com/"],
  ["(BG Remover) ClipDrop", "https://clipdrop.co/remove-background"]
],

"Image Upscalers": [
  ["(Upscaler) BigJPG", "https://bigjpg.com/"],
  ["(Upscaler) Waifu2x", "https://waifu2x.booru.pics/"],
  ["(Upscaler) Upscale.media", "https://www.upscale.media/"],
  ["(Upscaler) Let’s Enhance", "https://letsenhance.io/"],
  ["(Upscaler) ClipDrop Upscaler", "https://clipdrop.co/super-resolution"]
],

"Online Software": [
  ["(Online Editor) Photopea", "https://www.photopea.com/"],
  ["(Online Editor) Canva", "https://www.canva.com/"],
  ["(Online Editor) Pixlr", "https://pixlr.com/"],
  ["(Online Editor) Kapwing", "https://www.kapwing.com/"],
  ["(Online Editor) Figma", "https://www.figma.com/"]
],

"AI Tools": [
  ["(AI) ChatGPT", "https://chat.openai.com/"],
  ["(AI) Midjourney", "https://www.midjourney.com/"],
  ["(AI) RunwayML", "https://runwayml.com/"],
  ["(AI) Pika Labs", "https://pika.art/"],
  ["(AI) ElevenLabs", "https://elevenlabs.io/"],
  ["(AI) ClipDrop", "https://clipdrop.co/"]
],

"Voice Removers": [
  ["(Voice Remover) Vocal Remover", "https://vocalremover.org/"],
  ["(Voice Remover) Moises", "https://moises.ai/"],
  ["(Voice Remover) LALAL.AI", "https://www.lalal.ai/"],
  ["(Voice Remover) PhonicMind", "https://phonicmind.com/"],
  ["(Voice Remover) Splitter.ai", "https://splitter.ai/"]
],

"Text Animations": [
  ["(Text Animation) CoolText", "https://cooltext.com/"],
  ["(Text Animation) FlamingText", "https://flamingtext.com/"],
  ["(Text Animation) TextStudio", "https://textstudio.com/"],
  ["(Text Animation) Animaker Text", "https://www.animaker.com/"],
  ["(Text Animation) Canva Text Effects", "https://www.canva.com/"]
],

"Fonts": [
  ["(Font) Montserrat", "https://fonts.google.com/specimen/Montserrat"],
  ["(Font) Poppins", "https://fonts.google.com/specimen/Poppins"],
  ["(Font) Inter", "https://fonts.google.com/specimen/Inter"],
  ["(Font) Bebas Neue", "https://fonts.google.com/specimen/Bebas+Neue"],
  ["(Font) Roboto", "https://fonts.google.com/specimen/Roboto"]
],

"Font Sites": [
  ["(Font Site) DaFont", "https://www.dafont.com/"],
  ["(Font Site) Google Fonts", "https://fonts.google.com/"],
  ["(Font Site) FontSpace", "https://www.fontspace.com/"],
  ["(Font Site) 1001 Fonts", "https://www.1001fonts.com/"],
  ["(Font Site) FontGet", "https://www.fontget.com/"]
],

"Font Finder Sites": [
  ["(Font Finder) WhatFontIs", "https://www.whatfontis.com/"],
  ["(Font Finder) WhatTheFont", "https://www.myfonts.com/WhatTheFont/"],
  ["(Font Finder) FontSquirrel Matcherator", "https://www.fontsquirrel.com/matcherator"],
  ["(Font Finder) Identifont", "https://www.identifont.com/"]
],

"Font Packs": [
  ["(Font Pack) Aesthetic Fonts Pack", "https://mega.nz/folder/placeholderAF1"],
  ["(Font Pack) Minimal Fonts Pack", "https://mega.nz/folder/placeholderAF2"],
  ["(Font Pack) Bold Fonts Pack", "https://mega.nz/folder/placeholderAF3"],
  ["(Font Pack) Script Fonts Pack", "https://mega.nz/folder/placeholderAF4"],
  ["(Font Pack) Sans Serif Pack", "https://mega.nz/folder/placeholderAF5"]
],
  
   "TikTok Editing Tutorials": [
  ["(TikTok Edit) Basic TikTok Editing Tutorial", "https://youtu.be/placeholder200"],
  ["(TikTok Edit) Velocity Edit Tutorial", "https://youtu.be/placeholder201"],
  ["(TikTok Edit) Smooth Slowmo Tutorial", "https://youtu.be/placeholder202"],
  ["(TikTok Edit) 3D Zoom Tutorial", "https://youtu.be/placeholder203"],
  ["(TikTok Edit) Flash Effect Tutorial", "https://youtu.be/placeholder204"]
],

"Glitch Tutorials": [
  ["(Glitch) Basic Glitch Tutorial", "https://youtu.be/placeholder205"],
  ["(Glitch) RGB Split Tutorial", "https://youtu.be/placeholder206"],
  ["(Glitch) Datamosh Tutorial", "https://youtu.be/placeholder207"],
  ["(Glitch) VHS Glitch Tutorial", "https://youtu.be/placeholder208"],
  ["(Glitch) Advanced Glitch Tutorial", "https://youtu.be/placeholder209"]
],

"Panning Tutorials": [
  ["(Panning) Basic Panning Tutorial", "https://youtu.be/placeholder210"],
  ["(Panning) Smooth Pan Tutorial", "https://youtu.be/placeholder211"],
  ["(Panning) Impact Pan Tutorial", "https://youtu.be/placeholder212"],
  ["(Panning) Zoom Pan Tutorial", "https://youtu.be/placeholder213"],
  ["(Panning) Advanced Panning Tutorial", "https://youtu.be/placeholder214"]
],

"Voice Tags": [
  ["(Voice Tag) Free Voice Tags Pack", "https://mega.nz/folder/placeholder215"],
  ["(Voice Tag) Custom Voice Tag Generator", "https://voicegenerator.io/"],
  ["(Voice Tag) Producer Voice Tags", "https://mega.nz/folder/placeholder216"],
  ["(Voice Tag) TikTok Voice Tags", "https://mega.nz/folder/placeholder217"]
],

"Voice Cloning": [
  ["(Voice Clone) ElevenLabs", "https://elevenlabs.io/"],
  ["(Voice Clone) FakeYou", "https://fakeyou.com/"],
  ["(Voice Clone) Voice.ai", "https://voice.ai/"],
  ["(Voice Clone) Uberduck", "https://uberduck.ai/"],
  ["(Voice Clone) AI Voice Cloner", "https://voice-cloner.com/"]
],

"Tracking Tutorials": [
  ["(Tracking) Basic Motion Tracking", "https://youtu.be/placeholder218"],
  ["(Tracking) Mocha AE Tracking Tutorial", "https://youtu.be/placeholder219"],
  ["(Tracking) Mask Tracking Tutorial", "https://youtu.be/placeholder220"],
  ["(Tracking) Object Tracking Tutorial", "https://youtu.be/placeholder221"],
  ["(Tracking) Advanced Tracking Tutorial", "https://youtu.be/placeholder222"]
],

"Color Change Tutorials": [
  ["(Color Change) Basic Color Change Tutorial", "https://youtu.be/placeholder223"],
  ["(Color Change) Hue Shift Tutorial", "https://youtu.be/placeholder224"],
  ["(Color Change) Skin Tone Fix Tutorial", "https://youtu.be/placeholder225"],
  ["(Color Change) Clothing Color Change Tutorial", "https://youtu.be/placeholder226"],
  ["(Color Change) Advanced Color Change Tutorial", "https://youtu.be/placeholder227"]
],

"Fixing Audio": [
  ["(Audio Fix) Remove Background Noise", "https://youtu.be/placeholder228"],
  ["(Audio Fix) EQ Tutorial", "https://youtu.be/placeholder229"],
  ["(Audio Fix) Audio Cleanup Tutorial", "https://youtu.be/placeholder230"],
  ["(Audio Fix) Volume Balancing Tutorial", "https://youtu.be/placeholder231"],
  ["(Audio Fix) TikTok Audio Fix Tutorial", "https://youtu.be/placeholder232"]
],

"Quality Preservation": [
  ["(Quality) How to Keep Quality on TikTok", "https://youtu.be/placeholder238"],
  ["(Quality) Export Settings for Quality", "https://youtu.be/placeholder239"],
  ["(Quality) Avoiding Compression", "https://youtu.be/placeholder240"],
  ["(Quality) Sharpening Tutorial", "https://youtu.be/placeholder241"],
  ["(Quality) High Quality Upload Guide", "https://youtu.be/placeholder242"]
],

"Black Borders": [
  ["(Borders) How to Add Black Borders", "https://youtu.be/placeholder243"],
  ["(Borders) Cinematic Border Tutorial", "https://youtu.be/placeholder244"],
  ["(Borders) Anime Border Tutorial", "https://youtu.be/placeholder245"],
  ["(Borders) Border Presets Pack", "https://mega.nz/folder/placeholder246"]
],

"Render Settings": [
  ["(Render) Best Render Settings for TikTok", "https://youtu.be/placeholder247"],
  ["(Render) AE Render Settings", "https://youtu.be/placeholder248"],
  ["(Render) Media Encoder Settings", "https://youtu.be/placeholder249"],
  ["(Render) High Quality Render Tutorial", "https://youtu.be/placeholder250"],
  ["(Render) Smooth Render Tutorial", "https://youtu.be/placeholder251"]
],

"TikTok Audio Accounts": [
  ["(Audio) TikTok Sounds Account 1", "https://www.tiktok.com/@placeholder252"],
  ["(Audio) TikTok Sounds Account 2", "https://www.tiktok.com/@placeholder253"],
  ["(Audio) TikTok Sounds Account 3", "https://www.tiktok.com/@placeholder254"],
  ["(Audio) TikTok Sounds Account 4", "https://www.tiktok.com/@placeholder255"],
  ["(Audio) TikTok Sounds Account 5", "https://www.tiktok.com/@placeholder256"]
]
}; // ← close the object 


// =========================
// PRELOAD
// =========================
function preload() {
  myFont = loadFont('Dareo.otf');
}


// =========================
// SETUP
// =========================
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);

  // Allow clicks to pass through canvas
  canvas.style("pointer-events", "none");

  textFont(myFont);

  sidebarItems = Object.keys(resources);
  selectedCategory = sidebarItems[0];

  createLinksForCategory();
}


// =========================
// DRAW
// =========================
function draw() {
  background("#FFEFD6");

  drawSidebar();
  drawMainPanel();
  updateLinkPositions();
  drawMenu();
  
textAlign(CENTER, CENTER);
textSize(16);
fill("#4D3447");

text('Right click if blocked', width / 2, height - 30);
}


// =========================
// SIDEBAR
// =========================
function drawSidebar() {
  push();

  fill("#CC448A");
  noStroke();
  rect(0, 0, sidebarWidth, height);

  translate(0, -sidebarScroll);

  textAlign(LEFT, CENTER);
  textSize(18);

  for (let i = 0; i < sidebarItems.length; i++) {
    let y = i * 50;

    if (sidebarItems[i] === selectedCategory) {
      fill("#B24155");
      rect(0, y, sidebarWidth, 50);
    }

    fill("#FFEFD6");
    text(sidebarItems[i], 20, y + 25);
    
  }

  pop();
}


// =========================
// MAIN PANEL (TEXT ONLY)
// =========================
function drawMainPanel() {
  push();
  translate(sidebarWidth, 0);

  fill("#F3C9E2");
  noStroke();
  rect(0, 0, width - sidebarWidth, height);

  translate(0, -mainScroll);

  fill("#B24155");
  textSize(28);
  textAlign(LEFT, TOP);
  text(selectedCategory, 20, 20);

  let links = resources[selectedCategory];
  let y = 80;

  for (let i = 0; i < links.length; i++) {
    fill("#6D6B45");
    textSize(20);
    text(links[i][0], 20, y);

    y += 60;
  }

  pop();
}


// =========================
// CREATE LINKS (ONLY ON CHANGE)
// =========================
function createLinksForCategory() {
  // remove old links
  linkElements.forEach(el => el.remove());
  linkElements = [];

  let links = resources[selectedCategory];

  for (let i = 0; i < links.length; i++) {
    let label = links[i][0];
    let url = links[i][1];

    let link = createA(url, url, "_blank");

    link.style("color", "#CC448A");
    link.style("font-size", "16px");
    link.style("text-decoration", "underline");
    link.style("font-family", "Dareo");

    linkElements.push(link);
  }
}


// =========================
// UPDATE LINK POSITIONS
// =========================
function updateLinkPositions() {
  let y = 80;

  for (let i = 0; i < linkElements.length; i++) {
    linkElements[i].position(
      sidebarWidth + 20,
      y + 24 - mainScroll
    );
    y += 60;
  }
}


// =========================
// MENU
// =========================
function drawMenu() {
  fill("#4D3447");
  textSize(40);
  textAlign(RIGHT, CENTER);

  text("home", width - 40, 60);
  text("generator", width - 40, 110);
  text("submit", width - 40, 160);
  text("resources", width - 40, 210);
}


// =========================
// SCROLL
// =========================
function mouseWheel(event) {
  if (mouseX < sidebarWidth) {
    sidebarScroll += event.delta;
    sidebarScroll = constrain(
      sidebarScroll,
      0,
      max(0, sidebarItems.length * 50 - height)
    );
  } else {
    let contentHeight = resources[selectedCategory].length * 60 + 120;

    mainScroll += event.delta;
    mainScroll = constrain(
      mainScroll,
      0,
      max(0, contentHeight - height)
    );
  }
}


// =========================
// CLICK HANDLING
// =========================
function mousePressed() {

  // MENU
  if (mouseX > width - 200 && mouseY < 260) {
    if (mouseY < 80) window.location.href = "index.html";
    else if (mouseY < 130) window.location.href = "2index.html";
    else if (mouseY < 180) window.location.href = "3index.html";
    else if (mouseY < 230) window.location.href = "4index.html";
    return;
  }

  // SIDEBAR
  if (mouseX < sidebarWidth) {
    let index = floor((mouseY + sidebarScroll) / 50);

    if (index >= 0 && index < sidebarItems.length) {
      selectedCategory = sidebarItems[index];
      mainScroll = 0;

      createLinksForCategory(); // IMPORTANT
    }
  }
}