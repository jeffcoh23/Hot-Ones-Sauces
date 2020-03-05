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

export interface YoutubeVideos {
  season: Seasons;
  youtubeUrl: string;
  youtubeTitle: string;
  id: number;
}

export interface Sauce {
  id: number;
  name: string;
  imageURL: any;
  amazonLink?: string;
  scovilleRating: number;
  season: Seasons;
}

export const episodes: YoutubeVideos[] = [
  {
    id: 1,
    season: Seasons.s1,
    youtubeTitle:
      "Tony Yayo Talks Shmoney Dance & Eminem's Taco Habit While Eating Spicy Chicken Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=aGhqumcE6_w&list=PLAzrgbu8gEMIfV-k5JA89NP3j2JGsFapZ"
  },
  {
    id: 2,
    season: Seasons.s1,
    youtubeUrl: "https://www.youtube.com/watch?v=eEKHOXiuJeM",
    youtubeTitle:
      "Anthony Rizzo On Chicago Cubs Rivalries & Baseball Superstitions While Eating Spicy Wings"
  },
  {
    id: 3,
    season: Seasons.s1,
    youtubeUrl:
      "https://www.youtube.com/watch?v=H7pSH4YL-T4&list=PLAzrgbu8gEMIfV-k5JA89NP3j2JGsFapZ&index=3",
    youtubeTitle:
      "Machine Gun Kelly Talks Diddy, Hangovers, & Amber Rose While Eating Spicy Wings"
  },
  {
    id: 4,
    season: Seasons.s1,
    youtubeUrl:
      "https://www.youtube.com/watch?v=e5Ipfn6YN7s&list=PLAzrgbu8gEMIfV-k5JA89NP3j2JGsFapZ&index=4",
    youtubeTitle:
      "Gunplay Talks Rick Ross, Wingstop, and X-Box Live Fights While Eating Spicy Wings"
  },
  {
    id: 5,
    season: Seasons.s1,
    youtubeUrl:
      "https://www.youtube.com/watch?v=UlZASyA0KQI&list=PLAzrgbu8gEMIfV-k5JA89NP3j2JGsFapZ&index=5",
    youtubeTitle:
      "Ja Rules Talks 50 Cent Beef, Jail Recipes, and Media Stereotypes While Eating Spicy Wings"
  },
  {
    id: 6,
    season: Seasons.s1,
    youtubeTitle:
      "B.o.B Talks Eggplant Fridays, Kid Rock, and Snapchat While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=VQzTfz7fPyo&list=PLAzrgbu8gEMIfV-k5JA89NP3j2JGsFapZ&index=6"
  },
  {
    id: 7,
    season: Seasons.s1,
    youtubeTitle:
      "Prince Amukamara Talks NFL Salaries & Pre-Game Sex While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=kmBlwAFRFJU&list=PLAzrgbu8gEMIfV-k5JA89NP3j2JGsFapZ&index=7"
  },
  {
    id: 8,
    season: Seasons.s1,
    youtubeTitle:
      "DJ Khaled Talks Fuccbois, Finga Licking, and Media Dinosaurs While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=1HYEC_FlgAg&list=PLAzrgbu8gEMIfV-k5JA89NP3j2JGsFapZ&index=8"
  },
  {
    id: 9,
    season: Seasons.s1,
    youtubeTitle:
      "Sean Evans and Chili Klaus Eat the Carolina Reaper, the World's Hottest Chili Pepper",
    youtubeUrl:
      "https://www.youtube.com/watch?v=1HYEC_FlgAg&list=PLAzrgbu8gEMIfV-k5JA89NP3j2JGsFapZ&index=8"
  },

  {
    id: 10,
    season: Seasons.s2,
    youtubeTitle:
      "Curren$y Talks Munchies, Industry Games, and Rap Dogs While Eating Spicy Wings",
    youtubeUrl: "https://www.youtube.com/watch?v=508U54dZdPg"
  },
  {
    id: 11,
    season: Seasons.s2,
    youtubeTitle:
      "Tinashe Talks NFL Dances and 2015's Sexiest Songs While Eating Spicy Wings",
    youtubeUrl: "https://www.youtube.com/watch?v=u2r9Lo9-7rY"
  },
  // {
  //   id: 12,
  //   season: Seasons.s2,
  //   youtubeTitle:
  //     "Curren$y Talks Munchies, Industry Games, and Rap Dogs While Eating Spicy Wings",
  //   youtubeUrl:
  //     "https://www.youtube.com/watch?v=508U54dZdPg&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC"
  // },
  // {
  //   id: 13,
  //   season: Seasons.s2,
  //   youtubeTitle:
  //     "Tinashe Talks NFL Dances and 2015's Sexiest Songs While Eating Spicy Wings",
  //   youtubeUrl:
  //     "https://www.youtube.com/watch?v=u2r9Lo9-7rY&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=2"
  // },
  {
    id: 14,
    season: Seasons.s2,
    youtubeTitle:
      "Tommy Chong Talks Weed, Bernie Sanders, and Smoking with Snoop While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=6tmSC1BpAFc&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=3"
  },
  {
    id: 15,
    season: Seasons.s2,
    youtubeTitle:
      "T.J. Miller Talks Deadpool, Hecklers, and Relationship Advice While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=I3RUflwPlH8&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=4"
  },
  {
    id: 16,
    season: Seasons.s2,
    youtubeTitle:
      "Coolio Talks Hip-Hop Cooking and 'Gangsta's Paradise' Folklore While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=C79nHzODu0o&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=5"
  },
  {
    id: 17,
    season: Seasons.s2,
    youtubeTitle:
      "Joey Fatone Talks *NSYNC, DJ Khaled, and Guy Fieri While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=0_57CGBe1to&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=6"
  },
  {
    id: 18,
    season: Seasons.s2,
    youtubeTitle:
      "Michael Rapaport Talks LeBron James, Phife Dawg, & Reality TV While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=f4lxK6EU04k&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=7"
  },
  {
    id: 19,
    season: Seasons.s2,
    youtubeTitle: "Key & Peele Lose Their Minds Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=3_9v-7rtVDk&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=8"
  },
  {
    id: 20,
    season: Seasons.s2,
    youtubeTitle: "Riff Raff Goes Full Burly Boy on Some Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=iphqdyydiUs&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=9"
  },
  {
    id: 21,
    season: Seasons.s2,
    youtubeTitle: "Eddie Huang Gets Destroyed by Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=SFdR240qaXA&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=10"
  },
  {
    id: 22,
    season: Seasons.s2,
    youtubeTitle: "Chris D'Elia Turns Into DJ Khaled While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=tFRjzukT7Es&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=11"
  },
  {
    id: 23,
    season: Seasons.s2,
    youtubeTitle: "Mike Epps Gets Crushed by Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=pyw73zcYrl0&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=12"
  },
  {
    id: 24,
    season: Seasons.s2,
    youtubeTitle: "Jim Gaffigan Rediscovers His Flop Sweat Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=2j9N2eS_pzI&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=13"
  },
  {
    id: 25,
    season: Seasons.s2,
    youtubeTitle: "Carly Aquilino Takes on the Spicy Wings Challenge",
    youtubeUrl:
      "https://www.youtube.com/watch?v=ISjBsmI76KA&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=14"
  },
  {
    id: 26,
    season: Seasons.s2,
    youtubeTitle: "Redman Wilds Out Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=5nyobyZ6gdE&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=15"
  },
  {
    id: 27,
    season: Seasons.s2,
    youtubeTitle: "Rob Gronkowski Gets Blindsided by Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=vHqz5GHaPQw&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=16"
  },
  {
    id: 28,
    season: Seasons.s2,
    youtubeTitle: "Rob Corddry Cries Real Tears Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=YmNt0kpaZGE&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=17"
  },
  {
    id: 29,
    season: Seasons.s2,
    youtubeTitle: "Jeff Ross Gets Roasted by Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=iYBCT7f7Kng&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=18"
  },
  {
    id: 30,
    season: Seasons.s2,
    youtubeTitle: "David Cross Embraces the Extremes of Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=Df28IhTwG-w&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=19"
  },
  {
    id: 31,
    season: Seasons.s2,
    youtubeTitle: "Eric Andre Turns Into Tay Zonday While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=GVLAAMZeraQ&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=20"
  },
  {
    id: 32,
    season: Seasons.s2,
    youtubeTitle: "Joe Budden Keeps It Real While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=7LxMd8yV1cE&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=21"
  },
  {
    id: 33,
    season: Seasons.s2,
    youtubeTitle:
      "Matty Matheson Turns Into a Motivational Speaker Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=S8XQHKg0Fjo&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=22"
  },
  {
    id: 34,
    season: Seasons.s2,
    youtubeTitle: "RZA and Paul Banks Tag Team Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=W7nGMd9SNiY&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=23"
  },
  {
    id: 35,
    season: Seasons.s2,
    youtubeTitle: "Bert Kreischer Sweats Profusely Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=1B9cdcjI2_U&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=24"
  },
  {
    id: 36,
    season: Seasons.s2,
    youtubeTitle: "YG Keeps His Bool Eating Spicy Nuggets",
    youtubeUrl:
      "https://www.youtube.com/watch?v=bMPw4MgkFfU&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=25"
  },
  {
    id: 37,
    season: Seasons.s2,
    youtubeTitle: "Jay Pharoah Has a Staring Contest While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=idvYvMPpTYc&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=26"
  },
  {
    id: 38,
    season: Seasons.s2,
    youtubeTitle:
      "Harley Morenstein Has His Worst Day of 2016 Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=GLe0YBtpvWI&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=28"
  },
  {
    id: 39,
    season: Seasons.s2,
    youtubeTitle: "Travis Kelce Gets Woozy Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=8EZfZ--5mAQ&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=29"
  },
  {
    id: 40,
    season: Seasons.s2,
    youtubeTitle:
      "Hasan Minhaj Has an Out-of-Body Experience Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=C4TcwIJCyBU&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=30"
  },
  {
    id: 41,
    season: Seasons.s2,
    youtubeTitle: "Kevin Hart Catches a High Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=GTW8IplsKmM&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=31"
  },
  {
    id: 42,
    season: Seasons.s2,
    youtubeTitle: "Martin Garrix Tests His Limits Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=ztUKJ414jtk&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=33"
  },
  {
    id: 43,
    season: Seasons.s2,
    youtubeTitle: "Bobby Lee Has an Accident Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=rqyE-7Y55kU&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=34"
  },
  {
    id: 44,
    season: Seasons.s2,
    youtubeTitle: "Tony Hawk Eats Spicy Wings LIVE at ComplexCon",
    youtubeUrl:
      "https://www.youtube.com/watch?v=wUISWzxttrI&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=36"
  },
  {
    id: 45,
    season: Seasons.s2,
    youtubeTitle: "Action Bronson Blows His High Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=7p_mzgO0d0k&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=38"
  },
  {
    id: 46,
    season: Seasons.s2,
    youtubeTitle: "T-Pain Has a Tongue Seizure Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=O0g2EtKFAcA&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=39"
  },
  {
    id: 47,
    season: Seasons.s2,
    youtubeTitle: "Rachael Ray Mainlines Hot Sauce for Thanksgiving",
    youtubeUrl:
      "https://www.youtube.com/watch?v=t69oHRPb4E8&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=40"
  },
  {
    id: 48,
    season: Seasons.s2,
    youtubeTitle: "Tom Colicchio Goes Full Top Chef on Some Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=NpqUIwwQ_vU&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=41"
  },
  {
    id: 49,
    season: Seasons.s2,
    youtubeTitle: "Post Malone Sauces on Everyone While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=eCEG4QyQbF4&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=42"
  },
  {
    id: 50,
    season: Seasons.s2,
    youtubeTitle: "N.O.R.E. Gets Wasted While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=poi9dSiT5D4&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=43"
  },
  {
    id: 51,
    season: Seasons.s2,
    youtubeTitle: "James Franco and Bryan Cranston Bond Over Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=BB1B-VrPij0&list=PLAzrgbu8gEMILwwuaCqGetHcYs9NjDkLC&index=44"
  },
  {
    id: 52,
    season: Seasons.s3,
    youtubeTitle: "Padma Lakshmi Gracefully Destroys Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=p-P5-7eV9GE&list=PLAzrgbu8gEMJBCt-lRk6risydJRkmm-iO"
  },
  {
    id: 53,
    season: Seasons.s3,
    youtubeTitle:
      "Joey 'CoCo' Diaz Breaks Out the Blue Cheese While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=e226MZIXJ5E&list=PLAzrgbu8gEMJBCt-lRk6risydJRkmm-iO&index=2"
  },
  {
    id: 54,
    season: Seasons.s3,
    youtubeTitle: "Danny Brown Has An Orgasm Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=ZgqZBbBCJL0&list=PLAzrgbu8gEMJBCt-lRk6risydJRkmm-iO&index=3"
  },
  {
    id: 55,
    season: Seasons.s3,
    youtubeTitle:
      "Ricky Gervais Pits His Mild British Palate Against Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=3qrNRzkwlbU&list=PLAzrgbu8gEMJBCt-lRk6risydJRkmm-iO&index=4"
  },
  {
    id: 56,
    season: Seasons.s3,
    youtubeTitle: "Charlie Day Learns to Love Ridiculously Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=Lc4hUSLN_-M&list=PLAzrgbu8gEMJBCt-lRk6risydJRkmm-iO&index=5"
  },
  {
    id: 57,
    season: Seasons.s3,
    youtubeTitle: "Mac DeMarco Tries to Stay Chill While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=0-BQ_yTNyTs&list=PLAzrgbu8gEMJBCt-lRk6risydJRkmm-iO&index=6"
  },
  {
    id: 58,
    season: Seasons.s3,
    youtubeTitle:
      "Russell Brand Achieves Enlightenment While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=mHTR-XF6MXU&list=PLAzrgbu8gEMJBCt-lRk6risydJRkmm-iO&index=7"
  },
  {
    id: 59,
    season: Seasons.s3,
    youtubeTitle: "Charlie Sloth Makes His Mum Proud Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=KzG1jM1XFsw&list=PLAzrgbu8gEMJBCt-lRk6risydJRkmm-iO&index=8"
  },
  {
    id: 60,
    season: Seasons.s3,
    youtubeTitle: "Kyle Kinane Gets Angry Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=whokj22FTA8&list=PLAzrgbu8gEMJBCt-lRk6risydJRkmm-iO&index=9"
  },
  {
    id: 61,
    season: Seasons.s3,
    youtubeTitle: "Dax Shepard Does Mental Math While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=QFU8E0hSqKU&list=PLAzrgbu8gEMJBCt-lRk6risydJRkmm-iO&index=10"
  },
  {
    id: 62,
    season: Seasons.s3,
    youtubeTitle:
      "H3H3 Productions Does Couples Therapy While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=Tgw2Kkmupg8&list=PLAzrgbu8gEMJBCt-lRk6risydJRkmm-iO&index=11"
  },
  {
    id: 63,
    season: Seasons.s3,
    youtubeTitle: "Keke Palmer Laughs Uncontrollably While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=42IE7mPaYNk&list=PLAzrgbu8gEMJBCt-lRk6risydJRkmm-iO&index=12"
  },
  {
    id: 64,
    season: Seasons.s3,
    youtubeTitle: "Charlamagne Tha God Gets Heated Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=io-1mYQUIe4&list=PLAzrgbu8gEMJBCt-lRk6risydJRkmm-iO&index=13"
  },
  {
    id: 65,
    season: Seasons.s3,
    youtubeTitle: "DJ Snake Reveals His Human Side While Eating Spicy Wings",
    youtubeUrl:
      "https://www.youtube.com/watch?v=XNqXca22g28&list=PLAzrgbu8gEMJBCt-lRk6risydJRkmm-iO&index=14"
  }
];

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
