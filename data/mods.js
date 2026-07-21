/**
 * Catálogo de mods.
 * El orden coincide con mods.json: el primer elemento se muestra arriba.
 * Las imágenes se numeran de forma inversa: el último mod usa IMG-00001.
 * Usa "#" cuando aún no exista un enlace: el botón quedará desactivado.
 */
const MODS_DATA = [
  {
    id: "mod-001",
    title: "Dragon Ball Z Budokai 3 | Poses Port",
    image: "img/IMG-00072",
    downloadUrl: "https://shrinkme.click/Budokai_3_Poses",
    videoUrl: "https://www.youtube.com/playlist?list=PLhaIy6K-IovqmGJo-d8qb6tS8a6yscwFW"
  },
  {
    id: "mod-002",
    title: "Vegeta Scouter | Genocide Breaker | X | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00071",
    downloadUrl: "https://shrinkme.click/VSGBRB2",
    videoUrl: "https://youtu.be/7MQy_Lzwvx8"
  },
  {
    id: "mod-003",
    title: "Broly SSJ3 | Gigantic Buster | X | RB2 To Tenkaichi 3 | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00070",
    downloadUrl: "https://shrinkme.click/BSSJ3GBRB2",
    videoUrl: "https://youtu.be/qIJcS5qEY34"
  },
  {
    id: "mod-004",
    title: "Port Animation | Raging Blast 2  Poses Pack | X | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00069",
    downloadUrl: "https://shrinkme.click/RB2PP",
    videoUrl: "https://www.youtube.com/watch?v=k9P63vb_wSA"
  },
  {
    id: "mod-005",
    title: "Trunks Super Saiyajin Rage | GenkiEspada | Sword Of Hope | X | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00068",
    downloadUrl: "https://shrinkme.click/Trunks_GenkiEspada",
    videoUrl: "https://www.youtube.com/watch?v=eGXJrCjfHuA"
  },
  {
    id: "mod-006",
    title: "Port Animation | Sparking Zero Poses Pack + Extra | X | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00067",
    downloadUrl: "https://shrinkme.click/Sparking_Zero_Port",
    videoUrl: "https://youtu.be/Qgg91bClvig"
  },
  {
    id: "mod-007",
    title: "Goku SSJ4 & Vegeta SSJ3 | X | Legends & XV2 To Tenkaichi 3 | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00066",
    downloadUrl: "https://shrinkme.ink/PLXVSSJ43",
    videoUrl: "https://www.youtube.com/watch?v=Ba3bjOag36I"
  },
  {
    id: "mod-008",
    title: "Miku Miku Beam",
    image: "img/IMG-00065",
    downloadUrl: "https://shrinkme.ink/Miku_Miku_Beam",
    videoUrl: "https://streamable.com/u7wn1v"
  },
  {
    id: "mod-009",
    title: "Shufle Dance",
    image: "img/IMG-00064",
    downloadUrl: "https://shrinkme.ink/Shufle_dance",
    videoUrl: "https://www.tiktok.com/@.hunterx/video/7465865372948892934"
  },
  {
    id: "mod-010",
    title: "Bingo - Vegeta",
    image: "img/IMG-00063",
    downloadUrl: "https://shrinkme.ink/Bingo_Vegeta_Dance",
    videoUrl: "https://www.youtube.com/watch?v=ZHgyQGoeaB0"
  },
  {
    id: "mod-011",
    title: "Port Animations | Sparking Zero To Tenkaichi 3 | X | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00062",
    downloadUrl: "https://shrinkme.ink/Vegetto_Blue_SZ_Port",
    videoUrl: "https://www.youtube.com/watch?v=wEOuHcW0S6s"
  },
  {
    id: "mod-012",
    title: "Goku SSJ4 | LightSpeed x10 Kamehameha | X | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00061",
    downloadUrl: "https://shrinkme.ink/Goku_SSJ4_x10_Kamehameha",
    videoUrl: "https://www.youtube.com/watch?v=O7mkLzhz2Ic"
  },
  {
    id: "mod-013",
    title: "Port Animations | Legends To Tenkaichi 3 + Extra | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00060",
    downloadUrl: "https://shrinkme.ink/Port_Legends",
    videoUrl: "https://www.youtube.com/watch?v=WJmTUyppG5Q"
  },
  {
    id: "mod-014",
    title: "Port Animations | XV2 To Tenkaichi 3 | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00059",
    downloadUrl: "https://www.mediafire.com/file/k6t4vxzr1kzzzku/Xenoverse_2_Port.rar/file",
    videoUrl: "https://youtu.be/xmiiyQcnHDM"
  },
  {
    id: "mod-015",
    title: "Port Animations | Mixamo To Tenkaichi 3 + Extra | Download | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00058",
    downloadUrl: "https://www.mediafire.com/file/ilkhq7k70dp9kdr/Port_%252B_Extra.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=WSI1vzdDlZU"
  },
  {
    id: "mod-016",
    title: "Pack De Mods | Gohan  - Super Kamehameha | Download |  Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00057",
    downloadUrl: "https://www.mediafire.com/file/7pd0nwzx8lt08xb/Pack_De_Mods_-_04_-_Gohan_Kamehameha_Budokai_3.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=4e0R85bVswM"
  },
  {
    id: "mod-017",
    title: "Pack De Mods | Gohan Beast - Aura | Download | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00056",
    downloadUrl: "https://www.mediafire.com/file/d95si3agmgou06c/Pack_de_Mods_-_03_-_Aura_Gohan_Beast.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=p4DMcsKPb3s"
  },
  {
    id: "mod-018",
    title: "Pack De Mods | Poses Custom + Bonus | Download | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00055",
    downloadUrl: "https://www.mediafire.com/file/jybhmupcjsdde1d/Pack_de_Mods_-_02_-_Poses.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=bH8iy5yMTWw"
  },
  {
    id: "mod-019",
    title: "Pack De Mods | Goku - Puñetazo De Una Pulgada | Download | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00054",
    downloadUrl: "https://www.mediafire.com/file/el1idf15a2r6r0r/Goku_-_Pu%25C3%25B1etazo_1_Pulgada.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=uO7aJb1t4KQ"
  },
  {
    id: "mod-020",
    title: "Super Kamehameha | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00053",
    downloadUrl: "https://www.mediafire.com/file/8bqabg6nphjovvh/Super_Kamehameha_Fix.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=05G79Ybo7oI"
  },
  {
    id: "mod-021",
    title: "Custom Attack - A21 | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00052",
    downloadUrl: "https://bit.ly/3UblNFi",
    videoUrl: "https://www.youtube.com/watch?v=EMkVbXG8qYI"
  },
  {
    id: "mod-022",
    title: "Goku SSJ3 - Destroying Impact | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00051",
    downloadUrl: "https://bit.ly/3nWjiIj",
    videoUrl: "https://www.youtube.com/watch?v=vvopu653SAs"
  },
  {
    id: "mod-023",
    title: "Custom Attack + Neo CMAn Fusion | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00050",
    downloadUrl: "https://bit.ly/2UtVL5R",
    videoUrl: "https://www.youtube.com/watch?v=IcIaqPXbcEo"
  },
  {
    id: "mod-024",
    title: "Mastered Ultra Instinct Goku - Silver Dragon Flash | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00049",
    downloadUrl: "https://bit.ly/2SjUQEp",
    videoUrl: "https://www.youtube.com/watch?v=HUg5sUSg5qg"
  },
  {
    id: "mod-025",
    title: "Custom Attack 06 | Vegetto - Combo Spirit Sword | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00048",
    downloadUrl: "https://www.mediafire.com/file/wgycz5cm2wzi9dl/Vegetto_-_Combo_Spirit_Sword.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=D8CxBlVQfQ8"
  },
  {
    id: "mod-026",
    title: "Custom Attack 05 | Vegetto - Super Spirit Sword | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00047",
    downloadUrl: "https://www.mediafire.com/file/pfjokmls7hb4wpr/Vegetto_Super_Spirit_Sword.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=JUrBsAW7sS4"
  },
  {
    id: "mod-027",
    title: "Custom Attack 04 | Heat Stinger | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00046",
    downloadUrl: "https://www.mediafire.com/file/djtmop36sypu9nk/Custom_Attack_04_-_Heat_Stinger.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=4UXwOD5ghuQ"
  },
  {
    id: "mod-028",
    title: "Custom Attack 03 | Ultra Instinct Goku - Accelerating Spirit | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00045",
    downloadUrl: "https://www.mediafire.com/file/ly127d7biurgk74/Custom_Attack_03_-_Ultra_Instinct_Goku.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=VEdEF7VgOVU"
  },
  {
    id: "mod-029",
    title: "Ultra Instinct Aura Remake | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00044",
    downloadUrl: "https://www.mediafire.com/file/q4fjhqc9t4ds7a6/Aura_Ultra_Instinct_Remake.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=S9OIVZI2j50"
  },
  {
    id: "mod-030",
    title: "Custom Attack 02 | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00043",
    downloadUrl: "https://www.mediafire.com/file/nz48c0rxyhzbu6j/Custom_Attack_02.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=mDfyKoictYs"
  },
  {
    id: "mod-031",
    title: "Gogeta SSJ4 Big Bang Kamehameha x100 Remake | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00042",
    downloadUrl: "https://www.mediafire.com/file/4smdombre7mzxtb/Gogeta_SSJ4_BBKx100_Remake.rar/file",
    videoUrl: "https://youtu.be/asDD7IWWXTk"
  },
  {
    id: "mod-032",
    title: "Goku Super Saiyajin Kaioken Attack | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00041",
    downloadUrl: "https://www.mediafire.com/file/tku1z1w8ojij5r6/Goku_Super_Kaioken_Attack.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=hyHjQlmhIPk"
  },
  {
    id: "mod-033",
    title: "Custom Attack 01 | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00040",
    downloadUrl: "https://www.mediafire.com/file/mwaxvmqvwinduh2/Custom_Attack_01.rar/file",
    videoUrl: "https://youtu.be/ttzM0uBZwkg"
  },
  {
    id: "mod-034",
    title: "Pack de Mods | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00039",
    downloadUrl: "https://www.mediafire.com/file/163ykg20vnnhp1w/Custom_Attacks.rar/file",
    videoUrl: "https://youtu.be/juxDBq3coYg"
  },
  {
    id: "mod-035",
    title: "Final Kamehameha - Remake | Attack Evolution V.1 - V. Final | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00038",
    downloadUrl: "https://www.mediafire.com/file/9xtmuul5fn3w7y5/Vegetto_SSJ_Blue_-_Final_Kamehameha_Remake.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=wnQoUsaWWfc"
  },
  {
    id: "mod-036",
    title: "Goku Super Saiyajin Blue Kaioken | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00037",
    downloadUrl: "https://www.mediafire.com/file/pypphktackgrn9x/Goku_SSJ_Blue_Kaioken_-_BT3.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=yUGEFvJPCgs"
  },
  {
    id: "mod-037",
    title: "Gogeta SSJ4 Kaioken - Aura | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00036",
    downloadUrl: "https://www.mediafire.com/file/b2egig5y4vbwhfe/Aura+SSJ4+Kaioken.rar",
    videoUrl: "https://www.youtube.com/watch?v=XTbcFP0f8a8"
  },
  {
    id: "mod-038",
    title: "Goku Mastered Ultra Instinct | Moveset - XV2 Attack | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00035",
    downloadUrl: "https://www.mediafire.com/file/6k8rv5thy147npc/Goku+Mastered+Ultra+Instinct.rar",
    videoUrl: "https://www.youtube.com/watch?v=tB15OaP7q8M"
  },
  {
    id: "mod-039",
    title: "Neo Batt.unk - Life Bar Based on Xenoverse 2 | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00034",
    downloadUrl: "https://www.mediafire.com/file/6jj1ev3z7ga81rb/Batt.unk_%252B_Base_HUD.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=QrJ8luNpjKw"
  },
  {
    id: "mod-040",
    title: "The Warrior Fusion - Gogeta SSJ Blue | BT3/TTT - FP | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00033",
    downloadUrl: "https://www.mediafire.com/file/xpnlhyx7l5j07a7/Gogeta_SSJ_Blue_-_BT3.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=takZ4PuCoCY"
  },
  {
    id: "mod-041",
    title: "Gohan SSJ2 | Father-Son Kamehameha Based On Legends | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00032",
    downloadUrl: "https://www.mediafire.com/file/bf4s98gh8inlpnw/Gohan_SSJ2_Legends.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=ufTAI1zLaSA"
  },
  {
    id: "mod-042",
    title: "Teen Gohan SSJ2 | Father - Son Kamehameha Port BT2 | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00031",
    downloadUrl: "https://www.mediafire.com/file/ew1vdz4v4z6ym6b/Gohan_SSJ2_Father_-_Son_Kamehameha_Port_BT2.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=VjWh6hTjlkg"
  },
  {
    id: "mod-043",
    title: "Goku SSJ - High Power Rush | ¿Port Tenkaichi 1? | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00030",
    downloadUrl: "https://www.mediafire.com/file/145dx40q2ha556n/Goku_SSJ.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=wPNMovX_wFE"
  },
  {
    id: "mod-044",
    title: "Broly SSJL | Rage Breath - Energy Release | Moveset | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00029",
    downloadUrl: "https://www.mediafire.com/file/f92fyc0rd9rfd1m/Broly_Super_Saiyajin_Legendario.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=HIefg6qhjgk"
  },
  {
    id: "mod-045",
    title: "Gogeta SSJ Blue - Explosive Attack - Anime Bursts Attack | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00028",
    downloadUrl: "https://www.mediafire.com/file/7e0p7gf7yg7430r/Gogeta_Explosive_Attack.zip/file",
    videoUrl: "https://www.youtube.com/watch?v=o3q_4ksud40"
  },
  {
    id: "mod-046",
    title: "Nueva Animación de Vuelo Xenoverse | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00027",
    downloadUrl: "https://www.mediafire.com/file/l5ap086g74o579f/Animacion+de+Vuelo+XV+BT3+-+TTT.rar",
    videoUrl: "https://www.youtube.com/watch?v=HWqnD4Hieuo"
  },
  {
    id: "mod-047",
    title: "Pack De Mods - Animaciones | Dragon Ball Z Budokai Tenkaichi 3/Tag Team Mod",
    image: "img/IMG-00026",
    downloadUrl: "https://www.mediafire.com/file/6cpbo6x6c7nbili/Pack+de+Mods+-+Animaciones+Tenkaichi+3+-+Tag+Team.rar",
    videoUrl: "https://www.youtube.com/watch?v=mik0rpWH768"
  },
  {
    id: "mod-048",
    title: "Neo Gogeta SSJ4 - Test Final - Parte 4/4 | Download | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00025",
    downloadUrl: "https://www.youtube.com/watch?v=DS5YT_5oamQ",
    videoUrl: "https://www.youtube.com/watch?v=DS5YT_5oamQ"
  },
  {
    id: "mod-049",
    title: "Final Remake - Vegetto SSJ Blue | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00024",
    downloadUrl: "https://www.mediafire.com/file/5oo7pd0f603ao94/Vegetto_Super_Saiyajin_Blue_Remake_Final.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=5lnb86gRMak"
  },
  {
    id: "mod-050",
    title: "Especial Navidad - Pack De Mods | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00023",
    downloadUrl: "https://www.mediafire.com/file/gqjo5206sbt5kli/Pack+Navidad.rar",
    videoUrl: "https://www.youtube.com/watch?v=1wdY_rVLiEg"
  },
  {
    id: "mod-051",
    title: "Mapa Infierno AF - Download - Dragon Ball AF | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00022",
    downloadUrl: "https://www.mediafire.com/file/ad99rhanwkv4tyy/Mapa_Infierno_AF.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=H686gKszHoQ"
  },
  {
    id: "mod-052",
    title: "Download - Import Techniques Budokai Tenkaichi 2 To Budokai Tenkaichi 3",
    image: "img/IMG-00021",
    downloadUrl: "https://www.mediafire.com/file/sc8bd78xwawxo78/Techniques+Budokai+Tenkaichi+2+To+Budokai+Tenkaichi+3.rar",
    videoUrl: "https://youtu.be/MhuWu5ssdHg"
  },
  {
    id: "mod-053",
    title: "New Load Displays - Download | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00020",
    downloadUrl: "https://www.mediafire.com/file/wud9ttfgcvftfm4/Pantallas+De+Carga.rar",
    videoUrl: "https://youtu.be/6geRQuenRCM"
  },
  {
    id: "mod-054",
    title: "Mapa Zamasu | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00019",
    downloadUrl: "https://www.mediafire.com/file/dbix6r3olhk177i/Mapa_Zamasu.rar/file",
    videoUrl: "https://www.youtube.com/watch?v=ShXyoxYS8T4"
  },
  {
    id: "mod-055",
    title: "Dragon Ball Super Menú Inicio | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00018",
    downloadUrl: "https://www.mediafire.com/file/b5y981k132bcbz3/Menu_Principal_Dragon_Ball_Super.rar/file",
    videoUrl: "https://youtu.be/ws6fei9ILy8"
  },
  {
    id: "mod-056",
    title: "Nuevo Menú Inicio - Dragon Ball AF  | Download | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00017",
    downloadUrl: "https://www.mediafire.com/file/qp1k5altib4a5a5/Menu_Principal_Dragon_Ball_AF.rar/file",
    videoUrl: "https://youtu.be/GLMaEmJfp7s"
  },
  {
    id: "mod-057",
    title: "Test Menu Principal | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00016",
    downloadUrl: "https://www.mediafire.com/file/28kcjbp3kjy808i/pro.rar",
    videoUrl: "https://youtu.be/a_L8zJK3MhE"
  },
  {
    id: "mod-058",
    title: "New Letters For Bt3 :^] | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00015",
    downloadUrl: "https://www.mediafire.com/file/m3i4nmf42j4cdbi/Nuevas+Letras.rar",
    videoUrl: "https://youtu.be/EA96Jd4dXDg"
  },
  {
    id: "mod-059",
    title: "Tam Anegi Vs Bills | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00014",
    downloadUrl: "https://www.mediafire.com/file/7m43al1i2i773cs/Tam+Anegi.rar",
    videoUrl: "https://youtu.be/646rOLoqprU"
  },
  {
    id: "mod-060",
    title: "Vegito SSJ Blue Ultra Dañado | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00013",
    downloadUrl: "https://www.mediafire.com/file/5oo7pd0f603ao94/Vegetto+Super+Saiyajin+Blue+Remake+Final.rar",
    videoUrl: "https://youtu.be/fI6fjwIKw5k"
  },
  {
    id: "mod-061",
    title: "Vegeta SSJ GOD All Forms | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00012",
    downloadUrl: "https://mega.nz/file/YRsARSrA#gA3jVaBpY676Woeuj3oQe42Q3w3u5Sh9ZNN8OMlfVKg",
    videoUrl: "https://youtu.be/dRUR9TsedLo"
  },
  {
    id: "mod-062",
    title: "Vegito SSJ Blue | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00011",
    downloadUrl: "https://mega.nz/file/QFE3TRoJ#C2k8px7GaTDQIO4PvhRpiKhXtstwXJsEqhiFrIk3ThA",
    videoUrl: "https://www.youtube.com/watch?v=1RqZQeFgfog"
  },
  {
    id: "mod-063",
    title: "Vegeta SSJ White | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00010",
    downloadUrl: "https://www.mediafire.com/file/dhmrbaqzkeuom05/Vegeta+SSJ+White.rar",
    videoUrl: "https://www.youtube.com/watch?v=X0fszZJw3LA"
  },
  {
    id: "mod-064",
    title: "Goku SSJ3 White VS Bills + Download | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00009",
    downloadUrl: "https://www.mediafire.com/file/g9si719j2ififgy/Goku+White.dkz",
    videoUrl: "https://www.youtube.com/watch?v=fSF8zS3Iq24"
  },
  {
    id: "mod-065",
    title: "Goku Blue New Tecs | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00008",
    downloadUrl: "https://www.mediafire.com/file/619ffb4mjox1md6/Goku+SSJ+Blue.rar",
    videoUrl: "https://www.youtube.com/watch?v=76SSNE0Z5GA"
  },
  {
    id: "mod-066",
    title: "Vegito SSJ White + Download | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00007",
    downloadUrl: "https://www.mediafire.com/file/sir3ln8kurw3bjl/Vegetto+SSJ+White.rar",
    videoUrl: "https://www.youtube.com/watch?v=mlwy5A0aQCo"
  },
  {
    id: "mod-067",
    title: "Gogeta SSJ White + Download | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00006",
    downloadUrl: "https://www.mediafire.com/file/bg8a3m7c74m8nwi/Gogeta+SSJ+White.rar",
    videoUrl: "https://www.youtube.com/watch?v=JJ8K5TA_778"
  },
  {
    id: "mod-068",
    title: "Gotenks SSJ4 | Dragon ball AF | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00005",
    downloadUrl: "https://www.mediafire.com/file/r5x9dbd6lr7alw7/Gotenks+SSJ4.rar",
    videoUrl: "https://www.youtube.com/watch?v=jToH95ZOmdE"
  },
  {
    id: "mod-069",
    title: "Programas Para Hacer Intros | Dragon Ball Z Budokai Tenkaichi 3",
    image: "img/IMG-00004",
    downloadUrl: "https://mega.nz/file/0ZVAiSSC#GtD7VcQJtd1A47kmhqquG4UDj9aE_Hts3koJAFE5C6M",
    videoUrl: "https://www.youtube.com/watch?v=2WLszJ-v8zU"
  },
  {
    id: "mod-070",
    title: "Dragon Ball Z Budokai Tenkaichi 3 | New Intro | + 100 Suscriptores ツ",
    image: "img/IMG-00003",
    downloadUrl: "https://mega.nz/folder/hUcnwTaa#EUhBHbgvEHCI7Tp8N_6Ivw",
    videoUrl: "https://www.youtube.com/watch?v=gORCuOB6DMs"
  },
  {
    id: "mod-071",
    title: "Goku Transformation Goku Zombie - Download ( ¯\\_(ツ)_/¯ ) | Dragon Ball Z Budokai Tenkaichi 3 Mod",
    image: "img/IMG-00002",
    downloadUrl: "https://www.mediafire.com/download/a0239dnhdbhavi9/ZombiebyTheHunterX.rar",
    videoUrl: "https://youtu.be/ecHKGZ4fbyw"
  },
  {
    id: "mod-072",
    title: "Dragon Ball Z Budokai Tenkaichi 3 - Mod Imagenes Chicas",
    image: "img/IMG-00001",
    downloadUrl: "https://www.mediafire.com/download/titgdk8eu1q6561/Imagenes+Modo+Duelo.rar",
    videoUrl: "https://www.youtube.com/watch?v=3WXKOeC_FAU"
  }
];
