import {
  lotties,
  painIsGood,
  texasPete,
  pain100,
  madDog,
  blairs,
  davesInsanity,
  davesTemporary,
  cholula,
  elYucatero,
  burns,
  siracha,
  tapatio,
  elyucateco,
  hotOnesFieryChipotle,
  clarkAssam,
  highRiverRogue,
  dabomb,
  blairswithfury,
  tabasco,
  queenMajestyCoffee,
  bravadoBlueberry,
  zombieApocalypse,
  valentinaBlack,
  crystal,
  secretArdvark,
  smallAxeHab,
  hellfire,
  hotOnesTheClassic,
  lastDabReduxx,
  queenMajestyScotch,
  dirtyDicks,
  theLastDab,
  humbleHouse,
  louisianna,
  theBronx,
  karma,
  dawsons,
  maddog25ann,
  losCalientes,
  lastDabReaper,
  hawaii,
  howlerMonkey,
  heartbeat,
  humbleHouseRed,
  carolinaReaper,
  bunsters,
  zombie,
  piratesLantern,
  theclassic,
  smallAxe,
  heartBeatRedHabs,
  headlessHorse,
  fiyaFiya,
  akaMiso,
  burnAfter,
  sauceBae,
  shaquandas,
  luckyDog,
  hellFire,
  wiltshire,
  chocolatePlague,
  hippyDippy,
  paddyO,
  highRiverCheeba,
  koloheKid,
  torchGarlic,
  hellFireFear,
  lastDabXXX,
  culleys,
  butterfly
} from "../assets";

export enum Seasons {
  all = "All Seasons",
  s1 = "Season 1",
  s2 = "Season 2",
  s3 = "Season 3",
  s4 = "Season 4",
  s5 = "Season 5",
  s6 = "Season 6",
  s7 = "Season 7",
  s8 = "Season 8",
  s9 = "Season 9",
  s10 = "Season 10"
}

export interface Sauce {
  id: number;
  name: string;
  imageURL: any;
  amazonLink?: string;
  scovilleRating: number;
  season: Seasons;
}

export const sauces: Sauce[] = [
  {
    id: 1,
    name: "Texas Pete Hot Sauce",
    imageURL: texasPete,
    amazonLink: "https://amzn.to/37ljUfY",
    season: Seasons.s1,
    scovilleRating: 747
  },
  {
    id: 2,
    name: "Cholula Original Hot Sauce",
    imageURL: cholula,
    amazonLink: "https://amzn.to/37qh8G6",
    season: Seasons.s1,
    scovilleRating: 3600
  },
  {
    id: 3,
    name: "El Yucateco Chile Habanero Caribbean",
    imageURL: elYucatero,
    amazonLink: "https://amzn.to/2F5S5fz",
    season: Seasons.s1,
    scovilleRating: 5790
  },
  {
    id: 4,
    name: "Lottie's Hot Pepper Sauce",
    amazonLink: "https://amzn.to/2QLuTZF",
    imageURL: lotties,
    season: Seasons.s1,
    scovilleRating: 12000
  },
  {
    id: 5,
    name: "Pain Is Good Louisiana Style",
    imageURL: painIsGood,
    amazonLink: "https://amzn.to/2u6c3og",
    season: Seasons.s1,
    scovilleRating: 13000
  },

  {
    id: 9,
    name: "Pain 100%",
    imageURL: pain100,
    amazonLink: "https://amzn.to/2F7Eswr",
    season: Seasons.s1,
    scovilleRating: 40600
  },

  {
    id: 6,
    name: "Blair's Original Death Sauce with Chipotle",
    imageURL: blairs,
    amazonLink: "https://amzn.to/37pip0s/",
    season: Seasons.s1,
    scovilleRating: 30000
  },
  {
    id: 7,
    name: "Dave's Temporary Insanity Sauce",
    imageURL: davesTemporary,
    amazonLink: "https://amzn.to/367Wo5U",
    season: Seasons.s1,
    scovilleRating: 57000
  },
  {
    id: 8,
    name: "Dave's Insanity Sauce",
    imageURL: davesInsanity,
    amazonLink: "https://amzn.to/2MGmPb8",
    season: Seasons.s1,
    scovilleRating: 180000
  },
  {
    id: 10,
    name: "Mad Dog 357 Hot Sauce",
    imageURL: madDog,
    amazonLink: "https://amzn.to/37mw600",
    season: Seasons.s1,
    scovilleRating: 357000
  },
  {
    id: 11,
    name: "Sriracha",
    amazonLink: "https://amzn.to/2MIkMnc",
    imageURL: siracha,
    season: Seasons.s2,
    scovilleRating: 2200
  },
  {
    id: 12,
    name: "Tapatío",
    imageURL: tapatio,
    amazonLink: "https://amzn.to/2SEOs8n",
    season: Seasons.s2,
    scovilleRating: 3000
  },
  {
    id: 13,
    name: "El Yucateco Chile Habanero",
    imageURL: elyucateco,
    amazonLink: "https://amzn.to/2rHonul",
    season: Seasons.s2,
    scovilleRating: 5790
  },
  {
    id: 14,
    name: "Pain Is Good Louisiana Style",
    imageURL: painIsGood,
    amazonLink: "https://amzn.to/2u6c3og",
    season: Seasons.s2,
    scovilleRating: 13000
  },
  {
    id: 15,
    name: "Hot Ones Fiery Chipotle",
    imageURL: hotOnesFieryChipotle,
    season: Seasons.s2,
    scovilleRating: 15600
  },
  {
    id: 16,
    name: "High River - Rogue",
    imageURL: highRiverRogue,
    amazonLink: "https://amzn.to/2MMjCa9",
    season: Seasons.s2,
    scovilleRating: 34000
  },
  {
    id: 17,
    name: "Pain 100%",
    amazonLink: "https://amzn.to/2F7Eswr",
    imageURL: pain100,
    season: Seasons.s2,
    scovilleRating: 40600
  },
  {
    id: 18,
    name: "Da' Bomb Beyond Insanity",
    imageURL: dabomb,
    amazonLink: "https://amzn.to/39yj419",
    season: Seasons.s2,
    scovilleRating: 135600
  },
  {
    id: 19,
    name: "Mad Dog 357 Hot Sauce",
    imageURL: madDog,
    amazonLink: "https://amzn.to/39uavEJ",
    season: Seasons.s2,
    scovilleRating: 357000
  },
  {
    id: 20,
    name: "Blair's Mega Death Sauce With Liquid Fury",
    imageURL: blairswithfury,
    amazonLink: "https://amzn.to/2u5DMFu",
    season: Seasons.s2,
    scovilleRating: 550000
  },
  {
    id: 21,
    name: "Sriracha",
    amazonLink: "https://amzn.to/2MIkMnc",
    imageURL: siracha,
    season: Seasons.s3,
    scovilleRating: 2200
  },
  {
    id: 22,
    name: "Tabasco",
    imageURL: tabasco,
    amazonLink: "https://amzn.to/2suIH2B",
    season: Seasons.s3,
    scovilleRating: 4000
  },
  {
    id: 23,
    name: "El Yucateco Chile Habanero",
    amazonLink: "https://amzn.to/2rHonul",
    imageURL: elyucateco,
    season: Seasons.s3,
    scovilleRating: 5790
  },
  {
    id: 24,
    name: "Queen Majesty - Red Habanero and Black Coffee",
    imageURL: queenMajestyCoffee,
    amazonLink: "https://amzn.to/2QdGQrR",
    season: Seasons.s3,
    scovilleRating: 14000
  },
  {
    id: 25,
    name: "Hot Ones Fiery Chipotle",
    imageURL: hotOnesFieryChipotle,
    season: Seasons.s3,
    scovilleRating: 15600
  },
  {
    id: 26,
    name: "Bravado Spice Company - Ghost Pepper and Blueberry",
    imageURL: bravadoBlueberry,
    amazonLink: "https://amzn.to/2ZHX3se",
    season: Seasons.s3,
    scovilleRating: 28000
  },
  {
    id: 27,
    name: "Zombie Apocalypse Ghost Chili Sauce",
    imageURL: zombieApocalypse,
    amazonLink: "https://amzn.to/37s7zXv",
    season: Seasons.s3,
    scovilleRating: 100000
  },
  {
    id: 28,
    name: "Da' Bomb Beyond Insanity",
    imageURL: dabomb,
    amazonLink: "https://amzn.to/39yj419",
    season: Seasons.s3,
    scovilleRating: 135600
  },
  {
    id: 29,
    name: "Mad Dog 357 Hot Sauce",
    imageURL: madDog,
    season: Seasons.s3,
    amazonLink: "https://amzn.to/39uavEJ",

    scovilleRating: 357000
  },
  {
    id: 30,
    name: "Blair's Mega Death Sauce With Liquid Fury",
    amazonLink: "https://amzn.to/2u5DMFu",
    imageURL: blairswithfury,
    season: Seasons.s3,
    scovilleRating: 550000
  },
  {
    id: 31,
    name: "Valentina Black Label",
    imageURL: valentinaBlack,
    amazonLink: "https://amzn.to/2QfxImn",
    season: Seasons.s4,
    scovilleRating: 2100
  },
  {
    id: 32,
    name: "Crystal",
    amazonLink: "https://amzn.to/2tjUQas",
    imageURL: crystal,
    season: Seasons.s4,
    scovilleRating: 3000
  },
  {
    id: 33,
    name: "Secret Aardvark",
    imageURL: secretArdvark,
    amazonLink: "https://amzn.to/2tkMgZa",
    season: Seasons.s4,
    scovilleRating: 5000
  },
  {
    id: 34,
    name: "Queen Majesty - Scotch Bonnet and Ginger",
    imageURL: queenMajestyScotch,
    amazonLink: "https://amzn.to/35lMdcY",
    season: Seasons.s4,
    scovilleRating: 9000
  },
  {
    id: 35,
    name: "Hot Ones Fiery Chipotle",
    imageURL: hotOnesFieryChipotle,
    season: Seasons.s4,
    scovilleRating: 15600
  },
  {
    id: 36,
    name: "Dirty Dicks",
    imageURL: dirtyDicks,
    amazonLink: "https://amzn.to/2tkTHzp",
    season: Seasons.s4,
    scovilleRating: 21000
  },
  {
    id: 37,
    name: "Zombie Apocalypse Ghost Chili Sauce",
    imageURL: zombieApocalypse,
    amazonLink: "https://amzn.to/37s7zXv",
    season: Seasons.s4,
    scovilleRating: 100000
  },
  {
    id: 38,
    name: "Da' Bomb Beyond Insanity",
    imageURL: dabomb,
    amazonLink: "https://amzn.to/39yj419",
    season: Seasons.s4,
    scovilleRating: 135600
  },
  {
    id: 39,
    name: "Blair's Mega Death Sauce With Liquid Fury",
    amazonLink: "https://amzn.to/2u5DMFu",
    imageURL: blairswithfury,
    season: Seasons.s4,
    scovilleRating: 550000
  },
  {
    id: 40,
    name: "The Last Dab",
    imageURL: theLastDab,
    amazonLink: "https://amzn.to/2QDWATV",
    season: Seasons.s4,
    scovilleRating: 357000
  },
  {
    id: 41,
    name: "Humble House Ancho & Morita",
    imageURL: humbleHouse,
    amazonLink: "https://amzn.to/37pXHgO",
    season: Seasons.s5,
    scovilleRating: 450
  },
  {
    id: 42,
    name: "Original Louisiana Hot Sauce",
    imageURL: louisianna,
    amazonLink: "https://amzn.to/39w9rQN",
    season: Seasons.s5,
    scovilleRating: 550
  },
  {
    id: 43,
    name: "Small Axe Peppers - The Bronx Greenmarket Hot Sauce",
    imageURL: theBronx,
    amazonLink: "https://amzn.to/39w46ZS",
    season: Seasons.s5,
    scovilleRating: 5500
  },
  {
    id: 44,
    name: "Hot Ones Fiery Chipotle",
    imageURL: hotOnesFieryChipotle,
    season: Seasons.s5,
    scovilleRating: 15600
  },
  {
    id: 45,
    name: "Adoboloco Hawaiian Hot Sauce Hamajang Kiawe Smoked Ghost Pepper",
    imageURL: hawaii,
    amazonLink: "https://amzn.to/2SJhBPR",
    season: Seasons.s5,
    scovilleRating: 32000
  },

  {
    id: 46,
    name: "Karma Sauce Extreme Karma",
    imageURL: karma,
    amazonLink: "https://amzn.to/2sGo2IF",
    season: Seasons.s5,
    scovilleRating: 56000
  },
  {
    id: 47,
    name: "Dawson's Original Hot Sauce",
    amazonLink: "https://amzn.to/2uaPxdW",
    imageURL: dawsons,
    season: Seasons.s5,
    scovilleRating: 82000
  },
  {
    id: 48,
    name: "Da' Bomb Beyond Insanity",
    imageURL: dabomb,
    amazonLink: "https://amzn.to/39yj419",
    season: Seasons.s5,
    scovilleRating: 135600
  },
  {
    id: 49,
    name: "Mad Dog 357 - 25th Anniversary Edition",
    imageURL: maddog25ann,
    amazonLink: "https://amzn.to/2MNLNp9",
    season: Seasons.s5,
    scovilleRating: 1000000
  },
  {
    id: 50,
    name: "Hot Ones The Last Dab (Reaper Edition)",
    imageURL: lastDabReaper,
    amazonLink: "https://amzn.to/37pWUMT",
    season: Seasons.s5,
    scovilleRating: 2000000
  },
  {
    id: 51,
    name: "Howler Monkey - Original",
    imageURL: howlerMonkey,
    amazonLink: "https://amzn.to/2suMOf1",
    season: Seasons.s6,
    scovilleRating: 600
  },
  {
    id: 52,
    name: "Heartbeat Hot Sauce - Red Habanero",
    imageURL: heartbeat,
    amazonLink: "https://amzn.to/2QjJv3n",
    season: Seasons.s6,
    scovilleRating: 4000
  },
  {
    id: 53,
    name: "Pirate's Lantern - Pepper Sauce",
    imageURL: piratesLantern,
    amazonLink: "https://amzn.to/39ADLtJ",
    season: Seasons.s6,
    scovilleRating: 7500
  },
  {
    id: 54,
    name: "Son of Zombie - Torchbearer",
    imageURL: zombie,
    amazonLink: "https://amzn.to/2FeyzNS",
    season: Seasons.s6,
    scovilleRating: 24000
  },
  {
    id: 55,
    name: "Hot Ones Los Calientes",
    imageURL: losCalientes,
    amazonLink: "https://amzn.to/2SK4b6c",
    season: Seasons.s6,
    scovilleRating: 36000
  },

  {
    id: 56,
    name: "Bravado Spice Company - Black Garlic Carolina Reaper Sauce",
    imageURL: carolinaReaper,
    amazonLink: "https://amzn.to/36c1sWZ",
    season: Seasons.s6,
    scovilleRating: 71000
  },
  {
    id: 57,
    name: "Bunsters - Black Label",
    amazonLink: "https://amzn.to/2ZHNIRi",
    imageURL: bunsters,
    season: Seasons.s6,
    scovilleRating: 99000
  },
  {
    id: 58,
    name: "Da' Bomb Beyond Insanity",
    imageURL: dabomb,
    amazonLink: "https://amzn.to/39yj419",
    season: Seasons.s6,
    scovilleRating: 135600
  },
  {
    id: 59,
    name: "Hell Fire Hot Sauce - Fiery Fool",
    imageURL: hellfire,
    amazonLink: "https://amzn.to/35iVjH8",
    season: Seasons.s6,
    scovilleRating: 550000
  },
  {
    id: 60,
    name: "Hot Ones The Last Dab Reduxx",
    imageURL: lastDabReduxx,
    amazonLink: "https://amzn.to/2ZBZvAJ",
    season: Seasons.s6,
    scovilleRating: 2000000
  },
  {
    id: 61,
    name: "Hot Ones The Classic",
    imageURL: theclassic,
    amazonLink: "https://amzn.to/2ZFudJe",
    season: Seasons.s7,
    scovilleRating: 1800
  },
  {
    id: 62,
    name: "Humble House Guajillo & Red Jalapeño",
    imageURL: humbleHouseRed,
    amazonLink: "https://amzn.to/39zgnwn",
    season: Seasons.s7,
    scovilleRating: 2100
  },
  {
    id: 63,
    name: "Butterfly Bakery of Vermont - Maple Wood Smoked Onion",
    imageURL: butterfly,
    amazonLink: "https://amzn.to/2ZIIWmx",
    season: Seasons.s7,
    scovilleRating: 7900
  },
  {
    id: 64,
    name: "Small Axe Peppers - Habanero Mango",
    imageURL: smallAxeHab,
    amazonLink: "https://amzn.to/2FcPEIk",
    season: Seasons.s7,
    scovilleRating: 22500
  },
  {
    id: 65,
    name: "Hot Ones Los Calientes",
    imageURL: losCalientes,
    amazonLink: "https://amzn.to/2SK4b6c",
    season: Seasons.s7,
    scovilleRating: 36000
  },

  {
    id: 66,
    name: "Clark and Hopkins - Assam",
    imageURL: clarkAssam,
    amazonLink: "https://amzn.to/36guO6p",
    season: Seasons.s7,
    scovilleRating: 55000
  },
  {
    id: 67,
    name: "Culley's - Fire Water",
    amazonLink: "https://amzn.to/2tpLb1W",
    imageURL: culleys,
    season: Seasons.s7,
    scovilleRating: 112000
  },
  {
    id: 68,
    name: "Da' Bomb Beyond Insanity",
    imageURL: dabomb,
    amazonLink: "https://amzn.to/39yj419",
    season: Seasons.s7,
    scovilleRating: 135600
  },
  {
    id: 69,
    name: "Burns & McCoy - Exhorresco",
    imageURL: burns,
    amazonLink: "https://amzn.to/2suNReX",
    season: Seasons.s7,
    scovilleRating: 625000
  },
  {
    id: 70,
    name: "Hot Ones The Last Dab Reduxx",
    imageURL: lastDabReduxx,
    amazonLink: "https://amzn.to/2ZBZvAJ",
    season: Seasons.s7,
    scovilleRating: 2000000
  },
  {
    id: 71,
    name: "Hot Ones The Classic",
    season: Seasons.s8,
    imageURL: hotOnesTheClassic,
    amazonLink: "https://amzn.to/2ZFudJe",
    scovilleRating: 1800
  },
  {
    id: 72,
    name: "Angry Goat Hippy Dippy Green",
    season: Seasons.s8,
    imageURL: hippyDippy,
    amazonLink: "https://amzn.to/2rL9vLo",
    scovilleRating: 2300
  },
  {
    id: 73,
    name: "Paddy O's Potion",
    season: Seasons.s8,
    imageURL: paddyO,
    amazonLink: "https://amzn.to/36hDFFc",
    scovilleRating: 8800
  },
  {
    id: 74,
    name: "High River Sauces Cheeba Gold",
    season: Seasons.s8,
    imageURL: highRiverCheeba,
    amazonLink: "https://amzn.to/37t3NNm/",
    scovilleRating: 25300
  },
  {
    id: 75,
    name: "Hot Ones Los Calientes",
    imageURL: losCalientes,
    amazonLink: "https://amzn.to/2SK4b6c",
    season: Seasons.s8,
    scovilleRating: 36000
  },

  {
    id: 76,
    name: "Adoboloco Kolohe Kid",
    season: Seasons.s8,
    amazonLink:
      "https://www.amazon.com/Adoboloco-KoloheKid-Hawaiian-Ghost-Pepper/dp/B07LC5487Z/",
    imageURL: koloheKid,
    scovilleRating: 61000
  },
  {
    id: 77,
    name: "Torchbearer Garlic Reaper",
    season: Seasons.s8,
    amazonLink:
      "https://www.amazon.com/Torchbearer-Sauces-Garlic-Reaper-ounces/dp/B07NVSW3HG/",
    imageURL: torchGarlic,
    scovilleRating: 116000
  },

  {
    id: 78,
    name: "Da' Bomb Beyond Insanity",
    imageURL: dabomb,
    amazonLink: "https://amzn.to/39yj419",
    season: Seasons.s8,
    scovilleRating: 135600
  },

  {
    id: 79,
    name: "Hellfire Fear This",
    season: Seasons.s8,
    amazonLink:
      "https://www.amazon.com/Hellfires-Fear-This-Hot-Sauce/dp/B00YG5ARB2/",
    imageURL: hellFireFear,
    scovilleRating: 679000
  },

  {
    id: 80,
    name: "Hot Ones The Last Dab XXX",
    season: Seasons.s8,
    imageURL: lastDabXXX,
    amazonLink: "https://amzn.to/2QDWATV",
    scovilleRating: 2000000
  },
  {
    id: 81,
    name: "Hot Ones The Classic",
    season: Seasons.s9,
    imageURL: hotOnesTheClassic,
    amazonLink: "https://amzn.to/2ZFudJe",
    scovilleRating: 1800
  },
  {
    id: 82,
    name: "Sauce Bae Skinny Habanero",
    season: Seasons.s9,
    imageURL: sauceBae,
    amazonLink:
      "https://www.amazon.com/Sauce-Bae-Skinny-Habanero-Hot/dp/B07G7CGST5/",
    scovilleRating: 2500
  },
  {
    id: 83,
    name: "Shaquanda's Hot Pepper",
    season: Seasons.s9,
    imageURL: shaquandas,
    amazonLink:
      "https://www.amazon.com/Shaquandas-Hot-Pepper-Sauce-oz/dp/B07ZDMSBPQ/",
    scovilleRating: 10100
  },
  {
    id: 84,
    name: "Lucky Dog Year of The Dog Thai Chile Pineapple",
    season: Seasons.s9,
    imageURL: luckyDog,
    amazonLink:
      "https://www.amazon.com/Lucky-Dog-Chile-Pineapple-Sauce/dp/B01M4KF1BA/",
    scovilleRating: 29800
  },

  {
    id: 85,
    name: "Hot Ones Los Calientes",
    imageURL: losCalientes,
    amazonLink: "https://amzn.to/2SK4b6c",
    season: Seasons.s9,
    scovilleRating: 36000
  },
  {
    id: 86,
    name: "Hell Fire Detroit Habanero",
    season: Seasons.s9,
    amazonLink: "https://amzn.to/2ZF7Ljs",
    imageURL: hellFire,
    scovilleRating: 100000
  },
  {
    id: 87,
    name: "Wiltshire Chilli Farm Trinidad Scorpion",
    season: Seasons.s9,
    amazonLink: "https://amzn.to/2F8FnwG",
    imageURL: wiltshire,
    scovilleRating: 104000
  },

  {
    id: 88,
    name: "Da' Bomb Beyond Insanity",
    imageURL: dabomb,
    amazonLink: "https://amzn.to/39yj419",
    season: Seasons.s9,
    scovilleRating: 135600
  },

  {
    id: 89,
    name: "Puckerbutt Chocolate Plague",
    season: Seasons.s9,
    imageURL: chocolatePlague,
    scovilleRating: 690000
  },

  {
    id: 90,
    name: "Hot Ones The Last Dab XXX",
    season: Seasons.s9,
    imageURL: lastDabXXX,
    amazonLink: "https://amzn.to/2QDWATV",
    scovilleRating: 2000000
  },
  {
    id: 91,
    name: "Hot Ones The Classic",
    season: Seasons.s10,
    imageURL: hotOnesTheClassic,
    amazonLink: "https://amzn.to/2ZFudJe",
    scovilleRating: 1800
  },
  {
    id: 92,
    name: "Small Axe Peppers - The Chicago Red Hot Jalapeño Hot Sauce",
    season: Seasons.s10,
    imageURL: smallAxe,
    amazonLink: "https://amzn.to/2MPWisa",
    scovilleRating: 2800
  },
  {
    id: 93,
    name: "Heartbeat Hot Sauce - Pineapple Habanero",
    season: Seasons.s10,
    imageURL: heartBeatRedHabs,
    amazonLink: "https://amzn.to/37qL1Gl",
    scovilleRating: 12200
  },
  {
    id: 94,
    name: "Hot Ones Los Calientes",
    imageURL: losCalientes,
    amazonLink: "https://amzn.to/2SK4b6c",
    season: Seasons.s10,
    scovilleRating: 36000
  },

  {
    id: 95,
    name: "Torchbearer Headless Horseradish",
    season: Seasons.s10,
    imageURL: headlessHorse,
    amazonLink: "https://amzn.to/37tTFnO",
    scovilleRating: 52000
  },
  {
    id: 96,
    name: "Adoboloco Fiya!Fiya!",
    season: Seasons.s10,
    imageURL: fiyaFiya,
    scovilleRating: 77000
  },
  {
    id: 97,
    name: "Bravado Spice Company - Aka Miso Ghost Reaper",
    season: Seasons.s10,
    imageURL: akaMiso,
    scovilleRating: 116000
  },

  {
    id: 98,
    name: "Da' Bomb Beyond Insanity",
    imageURL: dabomb,
    amazonLink: "https://amzn.to/39yj419",
    season: Seasons.s10,
    scovilleRating: 135600
  },

  {
    id: 99,
    name: "Karma Sauce - Burn After Eating",
    season: Seasons.s10,
    imageURL: burnAfter,
    amazonLink: "https://amzn.to/2SKka3X",
    scovilleRating: 669000
  },
  {
    id: 100,
    name: "Hot Ones The Last Dab XXX",
    season: Seasons.s10,
    imageURL: lastDabXXX,
    amazonLink: "https://amzn.to/2QDWATV",
    scovilleRating: 2000000
  }
];
