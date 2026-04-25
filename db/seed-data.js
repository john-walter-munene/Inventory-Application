const genres = [
    {
        "id": 1,
        "name": "Action",
        "color": "#E67E22"
    },
    {
        "id": 2,
        "name": "RPG",
        "color": "#33FF57"
    },
    {
        "id": 3,
        "name": "Shooter",
        "color": "#3357FF"
    },
    {
        "id": 4,
        "name": "Adventure",
        "color": "#F1C40F"
    },
    {
        "id": 5,
        "name": "Sports",
        "color": "#1ABC9C"
    },
    {
        "id": 6,
        "name": "Strategy",
        "color": "#9B59B6"
    },
    {
        "id": 7,
        "name": "Platformer",
        "color": "#F1C40F"
    }
];

const games = [
    {
        "title": "Grand Theft Auto V",
        "description": "grand-theft-auto-v",
        "price": 45,
        "quantity": 18,
        "image_url": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        "genre_id": 1
    },
    {
        "title": "The Witcher 3: Wild Hunt",
        "description": "the-witcher-3-wild-hunt",
        "price": 60,
        "quantity": 6,
        "image_url": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "genre_id": 2
    },
    {
        "title": "Portal 2",
        "description": "portal-2",
        "price": 60,
        "quantity": 18,
        "image_url": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        "genre_id": 3
    },
    {
        "title": "Counter-Strike: Global Offensive",
        "description": "counter-strike-global-offensive",
        "price": 30,
        "quantity": 10,
        "image_url": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        "genre_id": 3
    },
    {
        "title": "Tomb Raider (2013)",
        "description": "tomb-raider",
        "price": 45,
        "quantity": 14,
        "image_url": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        "genre_id": 1
    },
    {
        "title": "Portal",
        "description": "portal",
        "price": 45,
        "quantity": 16,
        "image_url": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        "genre_id": 1
    },
    {
        "title": "Left 4 Dead 2",
        "description": "left-4-dead-2",
        "price": 45,
        "quantity": 7,
        "image_url": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        "genre_id": 3
    },
    {
        "title": "Red Dead Redemption 2",
        "description": "red-dead-redemption-2",
        "price": 60,
        "quantity": 6,
        "image_url": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        "genre_id": 1
    },
    {
        "title": "The Elder Scrolls V: Skyrim",
        "description": "the-elder-scrolls-v-skyrim",
        "price": 45,
        "quantity": 8,
        "image_url": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        "genre_id": 2
    },
    {
        "title": "BioShock Infinite",
        "description": "bioshock-infinite",
        "price": 45,
        "quantity": 8,
        "image_url": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        "genre_id": 3
    },
    {
        "title": "Half-Life 2",
        "description": "half-life-2",
        "price": 45,
        "quantity": 12,
        "image_url": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        "genre_id": 3
    },
    {
        "title": "Borderlands 2",
        "description": "borderlands-2",
        "price": 45,
        "quantity": 5,
        "image_url": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        "genre_id": 3
    },
    {
        "title": "Life is Strange",
        "description": "life-is-strange-episode-1-2",
        "price": 45,
        "quantity": 8,
        "image_url": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        "genre_id": 4
    },
    {
        "title": "BioShock",
        "description": "bioshock",
        "price": 45,
        "quantity": 20,
        "image_url": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        "genre_id": 3
    },
    {
        "title": "Destiny 2",
        "description": "destiny-2",
        "price": 30,
        "quantity": 18,
        "image_url": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
        "genre_id": 3
    },
    {
        "title": "God of War (2018)",
        "description": "god-of-war-2",
        "price": 60,
        "quantity": 10,
        "image_url": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        "genre_id": 1
    },
    {
        "title": "Fallout 4",
        "description": "fallout-4",
        "price": 30,
        "quantity": 18,
        "image_url": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        "genre_id": 2
    },
    {
        "title": "Limbo",
        "description": "limbo",
        "price": 45,
        "quantity": 10,
        "image_url": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
        "genre_id": 1
    },
    {
        "title": "PAYDAY 2",
        "description": "payday-2",
        "price": 30,
        "quantity": 10,
        "image_url": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        "genre_id": 3
    },
    {
        "title": "Team Fortress 2",
        "description": "team-fortress-2",
        "price": 30,
        "quantity": 3,
        "image_url": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        "genre_id": 3
    },
    {
        "title": "DOOM (2016)",
        "description": "doom",
        "price": 45,
        "quantity": 12,
        "image_url": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg",
        "genre_id": 3
    },
    {
        "title": "Cyberpunk 2077",
        "description": "cyberpunk-2077",
        "price": 45,
        "quantity": 3,
        "image_url": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
        "genre_id": 3
    },
    {
        "title": "Terraria",
        "description": "terraria",
        "price": 45,
        "quantity": 20,
        "image_url": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        "genre_id": 1
    },
    {
        "title": "Grand Theft Auto IV",
        "description": "grand-theft-auto-iv",
        "price": 45,
        "quantity": 5,
        "image_url": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        "genre_id": 1
    },
    {
        "title": "Dota 2",
        "description": "dota-2",
        "price": 30,
        "quantity": 17,
        "image_url": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        "genre_id": 1
    },
    {
        "title": "Warframe",
        "description": "warframe",
        "price": 30,
        "quantity": 16,
        "image_url": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        "genre_id": 3
    },
    {
        "title": "Rocket League",
        "description": "rocket-league",
        "price": 30,
        "quantity": 9,
        "image_url": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
        "genre_id": 5
    },
    {
        "title": "Horizon Zero Dawn",
        "description": "horizon-zero-dawn",
        "price": 45,
        "quantity": 16,
        "image_url": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
        "genre_id": 2
    },
    {
        "title": "Metro 2033",
        "description": "metro-2033",
        "price": 30,
        "quantity": 1,
        "image_url": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        "genre_id": 3
    },
    {
        "title": "Rise of the Tomb Raider",
        "description": "rise-of-the-tomb-raider",
        "price": 45,
        "quantity": 16,
        "image_url": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        "genre_id": 1
    },
    {
        "title": "Batman: Arkham Knight",
        "description": "batman-arkham-knight",
        "price": 45,
        "quantity": 1,
        "image_url": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
        "genre_id": 1
    },
    {
        "title": "Metal Gear Solid V: The Phantom Pain",
        "description": "metal-gear-solid-v-the-phantom-pain",
        "price": 45,
        "quantity": 8,
        "image_url": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        "genre_id": 3
    },
    {
        "title": "Grand Theft Auto: San Andreas",
        "description": "grand-theft-auto-san-andreas",
        "price": 60,
        "quantity": 19,
        "image_url": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
        "genre_id": 1
    },
    {
        "title": "The Witcher 2: Assassins of Kings Enhanced Edition",
        "description": "the-witcher-2-assassins-of-kings-enhanced-edition",
        "price": 45,
        "quantity": 17,
        "image_url": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
        "genre_id": 2
    },
    {
        "title": "Apex Legends",
        "description": "apex-legends",
        "price": 30,
        "quantity": 12,
        "image_url": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
        "genre_id": 3
    },
    {
        "title": "The Witcher: Enhanced Edition Director's Cut",
        "description": "the-witcher-enhanced-edition-directors-cut",
        "price": 45,
        "quantity": 1,
        "image_url": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
        "genre_id": 2
    },
    {
        "title": "Hollow Knight",
        "description": "hollow-knight",
        "price": 45,
        "quantity": 16,
        "image_url": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        "genre_id": 1
    },
    {
        "title": "Middle-earth: Shadow of Mordor",
        "description": "shadow-of-mordor",
        "price": 30,
        "quantity": 7,
        "image_url": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
        "genre_id": 2
    },
    {
        "title": "Half-Life 2: Lost Coast",
        "description": "half-life-2-lost-coast",
        "price": 30,
        "quantity": 9,
        "image_url": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
        "genre_id": 1
    },
    {
        "title": "The Walking Dead: Season 1",
        "description": "the-walking-dead",
        "price": 45,
        "quantity": 12,
        "image_url": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        "genre_id": 1
    },
    {
        "title": "Little Nightmares",
        "description": "little-nightmares",
        "price": 45,
        "quantity": 7,
        "image_url": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
        "genre_id": 1
    },
    {
        "title": "BioShock 2",
        "description": "bioshock-2",
        "price": 45,
        "quantity": 7,
        "image_url": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        "genre_id": 3
    },
    {
        "title": "Half-Life",
        "description": "half-life",
        "price": 45,
        "quantity": 6,
        "image_url": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
        "genre_id": 3
    },
    {
        "title": "Half-Life 2: Episode One",
        "description": "half-life-2-episode-one",
        "price": 45,
        "quantity": 11,
        "image_url": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
        "genre_id": 3
    },
    {
        "title": "Half-Life 2: Episode Two",
        "description": "half-life-2-episode-two",
        "price": 45,
        "quantity": 4,
        "image_url": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        "genre_id": 3
    },
    {
        "title": "Half-Life 2: Deathmatch",
        "description": "half-life-2-deathmatch",
        "price": 30,
        "quantity": 8,
        "image_url": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        "genre_id": 1
    },
    {
        "title": "Dark Souls III",
        "description": "dark-souls-iii",
        "price": 45,
        "quantity": 9,
        "image_url": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        "genre_id": 2
    },
    {
        "title": "Stardew Valley",
        "description": "stardew-valley",
        "price": 45,
        "quantity": 3,
        "image_url": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        "genre_id": 2
    },
    {
        "title": "BioShock Remastered",
        "description": "bioshock-remastered",
        "price": 45,
        "quantity": 8,
        "image_url": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
        "genre_id": 3
    },
    {
        "title": "Mirror's Edge",
        "description": "mirrors-edge",
        "price": 45,
        "quantity": 4,
        "image_url": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        "genre_id": 1
    },
    {
        "title": "Hotline Miami",
        "description": "hotline-miami",
        "price": 45,
        "quantity": 8,
        "image_url": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
        "genre_id": 3
    },
    {
        "title": "Hitman",
        "description": "hitman",
        "price": 30,
        "quantity": 11,
        "image_url": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        "genre_id": 3
    },
    {
        "title": "Outlast",
        "description": "outlast",
        "price": 30,
        "quantity": 4,
        "image_url": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
        "genre_id": 1
    },
    {
        "title": "Far Cry 3",
        "description": "far-cry-3",
        "price": 45,
        "quantity": 14,
        "image_url": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        "genre_id": 3
    },
    {
        "title": "Deus Ex: Mankind Divided",
        "description": "deus-ex-mankind-divided",
        "price": 30,
        "quantity": 20,
        "image_url": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg",
        "genre_id": 2
    },
    {
        "title": "PlayerUnknown’s Battlegrounds",
        "description": "playerunknowns-battlegrounds",
        "price": 30,
        "quantity": 14,
        "image_url": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg",
        "genre_id": 3
    },
    {
        "title": "Path of Exile",
        "description": "path-of-exile",
        "price": 30,
        "quantity": 5,
        "image_url": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
        "genre_id": 2
    },
    {
        "title": "Alan Wake",
        "description": "alan-wake",
        "price": 45,
        "quantity": 8,
        "image_url": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        "genre_id": 3
    },
    {
        "title": "Marvel's Spider-Man",
        "description": "marvels-spider-man",
        "price": 45,
        "quantity": 19,
        "image_url": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
        "genre_id": 1
    },
    {
        "title": "Wolfenstein: The New Order",
        "description": "wolfenstein-the-new-order",
        "price": 45,
        "quantity": 4,
        "image_url": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
        "genre_id": 3
    },
    {
        "title": "Detroit: Become Human",
        "description": "detroit-become-human",
        "price": 45,
        "quantity": 17,
        "image_url": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
        "genre_id": 1
    },
    {
        "title": "Garry's Mod",
        "description": "garrys-mod",
        "price": 30,
        "quantity": 10,
        "image_url": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
        "genre_id": 1
    },
    {
        "title": "Amnesia: The Dark Descent",
        "description": "amnesia-the-dark-descent",
        "price": 30,
        "quantity": 8,
        "image_url": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
        "genre_id": 1
    },
    {
        "title": "Spec Ops: The Line",
        "description": "spec-ops-the-line",
        "price": 45,
        "quantity": 9,
        "image_url": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
        "genre_id": 3
    },
    {
        "title": "Half-Life Deathmatch: Source",
        "description": "half-life-deathmatch-source",
        "price": 30,
        "quantity": 2,
        "image_url": "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg",
        "genre_id": 1
    },
    {
        "title": "Saints Row: The Third",
        "description": "saints-row-the-third",
        "price": 30,
        "quantity": 19,
        "image_url": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        "genre_id": 1
    },
    {
        "title": "Prey",
        "description": "prey",
        "price": 45,
        "quantity": 19,
        "image_url": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
        "genre_id": 3
    },
    {
        "title": "Fallout: New Vegas",
        "description": "fallout-new-vegas",
        "price": 45,
        "quantity": 20,
        "image_url": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
        "genre_id": 3
    },
    {
        "title": "Borderlands",
        "description": "borderlands",
        "price": 30,
        "quantity": 18,
        "image_url": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
        "genre_id": 3
    },
    {
        "title": "The Elder Scrolls V: Skyrim Special Edition",
        "description": "the-elder-scrolls-v-skyrim-special-edition",
        "price": 45,
        "quantity": 2,
        "image_url": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
        "genre_id": 2
    },
    {
        "title": "Dishonored 2",
        "description": "dishonored-2",
        "price": 45,
        "quantity": 6,
        "image_url": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
        "genre_id": 2
    },
    {
        "title": "Dishonored",
        "description": "dishonored",
        "price": 45,
        "quantity": 10,
        "image_url": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg",
        "genre_id": 2
    },
    {
        "title": "Don't Starve Together",
        "description": "dont-starve-together",
        "price": 30,
        "quantity": 19,
        "image_url": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg",
        "genre_id": 1
    },
    {
        "title": "Hellblade: Senua's Sacrifice",
        "description": "hellblade-senuas-sacrifice",
        "price": 45,
        "quantity": 16,
        "image_url": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
        "genre_id": 1
    },
    {
        "title": "Grand Theft Auto: Vice City",
        "description": "grand-theft-auto-vice-city",
        "price": 45,
        "quantity": 10,
        "image_url": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg",
        "genre_id": 1
    },
    {
        "title": "Company of Heroes 2",
        "description": "company-of-heroes-2",
        "price": 30,
        "quantity": 11,
        "image_url": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg",
        "genre_id": 6
    },
    {
        "title": "Injustice: Gods Among Us Ultimate Edition",
        "description": "injustice-gods-among-us-ultimate-edition",
        "price": 30,
        "quantity": 16,
        "image_url": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg",
        "genre_id": 1
    },
    {
        "title": "Assassin’s Creed IV: Black Flag",
        "description": "assassins-creed-iv-black-flag",
        "price": 45,
        "quantity": 20,
        "image_url": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
        "genre_id": 1
    },
    {
        "title": "Hitman: Absolution",
        "description": "hitman-absolution",
        "price": 30,
        "quantity": 12,
        "image_url": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg",
        "genre_id": 3
    },
    {
        "title": "Sid Meier's Civilization V",
        "description": "civilization-v",
        "price": 45,
        "quantity": 6,
        "image_url": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg",
        "genre_id": 6
    },
    {
        "title": "Control",
        "description": "control",
        "price": 45,
        "quantity": 9,
        "image_url": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg",
        "genre_id": 3
    },
    {
        "title": "L.A. Noire",
        "description": "la-noire",
        "price": 45,
        "quantity": 13,
        "image_url": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg",
        "genre_id": 1
    },
    {
        "title": "Super Meat Boy",
        "description": "super-meat-boy",
        "price": 30,
        "quantity": 10,
        "image_url": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
        "genre_id": 7
    },
    {
        "title": "For Honor",
        "description": "for-honor",
        "price": 30,
        "quantity": 3,
        "image_url": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
        "genre_id": 1
    },
    {
        "title": "Star Wars Jedi: Fallen Order",
        "description": "jedi-the-fallen-order",
        "price": 45,
        "quantity": 7,
        "image_url": "https://media.rawg.io/media/games/559/559bc0768f656ad0c63c54b80a82d680.jpg",
        "genre_id": 1
    },
    {
        "title": "Uncharted 4: A Thief’s End",
        "description": "uncharted-4-a-thiefs-end",
        "price": 45,
        "quantity": 6,
        "image_url": "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg",
        "genre_id": 3
    },
    {
        "title": "Counter-Strike: Source",
        "description": "counter-strike-source",
        "price": 30,
        "quantity": 15,
        "image_url": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
        "genre_id": 3
    },
    {
        "title": "Dead Space (2008)",
        "description": "dead-space",
        "price": 45,
        "quantity": 13,
        "image_url": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        "genre_id": 3
    },
    {
        "title": "Mass Effect 2",
        "description": "mass-effect-2",
        "price": 45,
        "quantity": 3,
        "image_url": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
        "genre_id": 2
    },
    {
        "title": "Death Stranding",
        "description": "death-stranding",
        "price": 45,
        "quantity": 18,
        "image_url": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        "genre_id": 1
    },
    {
        "title": "Just Cause 3",
        "description": "just-cause-3",
        "price": 30,
        "quantity": 17,
        "image_url": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg",
        "genre_id": 3
    },
    {
        "title": "Metro: Last Light Redux",
        "description": "metro-last-light-redux",
        "price": 45,
        "quantity": 18,
        "image_url": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg",
        "genre_id": 3
    },
    {
        "title": "Counter-Strike",
        "description": "counter-strike",
        "price": 45,
        "quantity": 4,
        "image_url": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg",
        "genre_id": 3
    },
    {
        "title": "Metro 2033 Redux",
        "description": "metro-redux",
        "price": 45,
        "quantity": 3,
        "image_url": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg",
        "genre_id": 3
    },
    {
        "title": "Borderlands: The Pre-Sequel",
        "description": "borderlands-the-pre-sequel",
        "price": 30,
        "quantity": 12,
        "image_url": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg",
        "genre_id": 3
    },
    {
        "title": "Left 4 Dead",
        "description": "left-4-dead",
        "price": 45,
        "quantity": 8,
        "image_url": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg",
        "genre_id": 3
    },
    {
        "title": "BioShock 2 Remastered",
        "description": "bioshock-2-remastered",
        "price": 45,
        "quantity": 4,
        "image_url": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg",
        "genre_id": 2
    },
    {
        "title": "Metal Gear Solid V: Ground Zeroes",
        "description": "metal-gear-solid-v-ground-zeroes",
        "price": 30,
        "quantity": 14,
        "image_url": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
        "genre_id": 3
    },
    {
        "title": "Hades",
        "description": "hades-2018",
        "price": 45,
        "quantity": 18,
        "image_url": "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg",
        "genre_id": 2
    },
    {
        "title": "NieR:Automata",
        "description": "nierautomata",
        "price": 45,
        "quantity": 11,
        "image_url": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg",
        "genre_id": 2
    }
];

module.exports = { genres, games };