'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/AssetManifest.bin": "273b2054d9249222a80ba41e37079ea0",
"assets/AssetManifest.bin.json": "63d8e09577092a3070c33b5619ec2280",
"assets/AssetManifest.json": "948d26d434d4688745fccba72c28fad7",
"assets/FontManifest.json": "1cdae8e4dbbf262c5f8fd4f46fbe18fb",
"assets/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/fonts/MaterialIcons-Regular.otf": "f48e38106186bfa774c72b58bf1688ea",
"assets/images/Acers_Being_Monitored.png": "bd30656c94c154262d7c434bc1917880",
"assets/images/AMP%2520live.png": "4951dffc8b6e5dc9057ca1380dbb15ba",
"assets/images/Aquabot.png": "1f1d7669fa05a3e5e21641f1706f9f1f",
"assets/images/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/images/aqua_exchange_cover.jpeg": "3643759872860d2f102e124c7b679220",
"assets/images/Areators%2520Live.svg": "e38c66a193c35b74f91eaf0022c55b14",
"assets/images/dropicon.png": "a7a0e78bb2692b378ec310284d9b591f",
"assets/images/dropmarker.png": "b2d6071bbbeb5c3575e9a293393a7a14",
"assets/images/Farm.png": "81c281284e7611496f3eb9e3e42f1c9b",
"assets/images/farmer.png": "96a510ca8cdc92db51201c2d1ae91563",
"assets/images/liveAmp.png": "4951dffc8b6e5dc9057ca1380dbb15ba",
"assets/images/mob_shrimp.png": "60f5a0a5efbc706b91f0fab9b725b872",
"assets/images/mob_shrimp_icon.png": "711f843e3395eb201dd97443158c898c",
"assets/images/new-moon.png": "51e988350cde0e37c8e27c794c9a9678",
"assets/images/pickupmarker.png": "7cc8318a18ea7a7d2741078003c93a71",
"assets/images/Powermon.png": "8e7f0b069c7e7685a98920f754267aaf",
"assets/images/Powermon.svg": "bcd8a94b52ad1ea7168b6b821fa500ba",
"assets/images/save-money.png": "de058c07ffba6b492b32aae27878b908",
"assets/images/starterPNG_icon.png": "949c437f48efc36de2d91c7fb5f2a7d4",
"assets/images/starter_icon.svg": "1aebf6df94dfe6de4ab98db8d7f18b97",
"assets/images/switch.png": "a22fbe85d2890a976a0d307ba05ef6d1",
"assets/images/weight_scale.png": "e3dd540a5e903a1f26cae34c0cc07223",
"assets/NOTICES": "4fe0be1b5380666be848c8610ef5810a",
"assets/packages/bde_trips/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/bde_trips/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/bde_trips/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/bde_trips/images/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/packages/bde_trips/images/backgroud.jpg": "ba8a10919b57f3d620d75e1f392e7ed7",
"assets/packages/bde_trips/images/dropicon.png": "a7a0e78bb2692b378ec310284d9b591f",
"assets/packages/bde_trips/images/dropmarker.png": "b2d6071bbbeb5c3575e9a293393a7a14",
"assets/packages/bde_trips/images/new-moon.png": "51e988350cde0e37c8e27c794c9a9678",
"assets/packages/bde_trips/images/pickupmarker.png": "7cc8318a18ea7a7d2741078003c93a71",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/devices_online_offline/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/devices_online_offline/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/devices_online_offline/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/device_dashboard/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/device_dashboard/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/device_dashboard/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/device_dashboard/images/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/packages/device_management/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/device_management/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/device_management/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/device_management/images/Aquabot.png": "1f1d7669fa05a3e5e21641f1706f9f1f",
"assets/packages/device_management/images/Areators%2520Live.svg": "e38c66a193c35b74f91eaf0022c55b14",
"assets/packages/device_management/images/Powermon.png": "8e7f0b069c7e7685a98920f754267aaf",
"assets/packages/device_management/images/starterPNG_icon.png": "949c437f48efc36de2d91c7fb5f2a7d4",
"assets/packages/device_management/images/starter_icon.svg": "1aebf6df94dfe6de4ab98db8d7f18b97",
"assets/packages/device_management/images/switch.png": "a22fbe85d2890a976a0d307ba05ef6d1",
"assets/packages/device_management/images/weight_scale.png": "e3dd540a5e903a1f26cae34c0cc07223",
"assets/packages/farm_management_dashboard/images/Acers%2520Being%2520Monitored.svg": "f12bdd5af3189ac19486734c565de6a6",
"assets/packages/farm_management_dashboard/images/Acers%2520Stocked.png": "ff32763cbd9ee7a923ea274aac9e2aa8",
"assets/packages/farm_management_dashboard/images/Acers%2520Stocked.svg": "f5651ede7d86763589de3afc809a409c",
"assets/packages/farm_management_dashboard/images/Acers_Being_Monitored.png": "bd30656c94c154262d7c434bc1917880",
"assets/packages/farm_management_dashboard/images/aeroplane.png": "96b3212d7b4e9655226fbea7ed093e0e",
"assets/packages/farm_management_dashboard/images/AMP%2520Live.png": "4951dffc8b6e5dc9057ca1380dbb15ba",
"assets/packages/farm_management_dashboard/images/Amp%2520Live.svg": "8d1a243531fae24135a28e5ea06ef3ee",
"assets/packages/farm_management_dashboard/images/apfcEnableIcon.png": "556787d8a85ce68f670f26b1d9399c26",
"assets/packages/farm_management_dashboard/images/apfcOffline.png": "010baa0e0ffc787a8e01f06db8a1ccf3",
"assets/packages/farm_management_dashboard/images/app_icon-trns.png": "4b4dc94222fbdb5cfdbee3aaff282f54",
"assets/packages/farm_management_dashboard/images/Aquabot.png": "1f1d7669fa05a3e5e21641f1706f9f1f",
"assets/packages/farm_management_dashboard/images/AquaBot.svg": "6188877631149d6d533571a9713d3626",
"assets/packages/farm_management_dashboard/images/aquabot_green.png": "38aca68772a14f7fa49a494c5e8c671c",
"assets/packages/farm_management_dashboard/images/aquabot_marker.png": "27f0d3d7441a90692a6b14522c1c3536",
"assets/packages/farm_management_dashboard/images/aqualogo.jpeg": "df5eab49597e09236c13ecf59412ebb2",
"assets/packages/farm_management_dashboard/images/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/packages/farm_management_dashboard/images/Aqua_Exchange_Logo_50pxl.png": "5acf151b14e81ffe248ca3655fe2b963",
"assets/packages/farm_management_dashboard/images/Areator.png": "176f83dd131492b2c15f0876faae1bf2",
"assets/packages/farm_management_dashboard/images/Areators%2520Live.svg": "e38c66a193c35b74f91eaf0022c55b14",
"assets/packages/farm_management_dashboard/images/arrowLeftGry.png": "c15851232cc7e70dc5e4ad1b66089d70",
"assets/packages/farm_management_dashboard/images/arrowRightGrey.png": "edfe3bb509fe6cd91756a0fbb34d240d",
"assets/packages/farm_management_dashboard/images/backgroud.jpg": "ba8a10919b57f3d620d75e1f392e7ed7",
"assets/packages/farm_management_dashboard/images/device_manage.png": "18175929f7adbba13a96aca8a719ec8e",
"assets/packages/farm_management_dashboard/images/dropmarker.png": "b2d6071bbbeb5c3575e9a293393a7a14",
"assets/packages/farm_management_dashboard/images/expandIco.png": "e21d113fa0e36abe68995c26be4498de",
"assets/packages/farm_management_dashboard/images/Farm.png": "81c281284e7611496f3eb9e3e42f1c9b",
"assets/packages/farm_management_dashboard/images/Farm.svg": "25817fff340af19005da13752143b734",
"assets/packages/farm_management_dashboard/images/farmer.png": "96a510ca8cdc92db51201c2d1ae91563",
"assets/packages/farm_management_dashboard/images/farm_marker.png": "80d1f0fa10c11952828e3202fffdef3e",
"assets/packages/farm_management_dashboard/images/feeding_icon.png": "550e592ed52518286275408726fd0131",
"assets/packages/farm_management_dashboard/images/grey_home.png": "f4cee913d3a7d912cd7caa41a3c4782a",
"assets/packages/farm_management_dashboard/images/harvested_mapicon.png": "c51a38e24d6b98c7b69e10b0ea9c1613",
"assets/packages/farm_management_dashboard/images/harvested_marker.png": "3292a17b4bdab77477c642207bb615ba",
"assets/packages/farm_management_dashboard/images/Harvest_Icon.svg": "62201c7b1ab488c50d8382892f202c7b",
"assets/packages/farm_management_dashboard/images/icon_checktray.png": "c25f99760a657db16490758b465a80f3",
"assets/packages/farm_management_dashboard/images/liveAmp.png": "4951dffc8b6e5dc9057ca1380dbb15ba",
"assets/packages/farm_management_dashboard/images/live_mapicon.png": "4c5acc55c36d081b9715a4d7087ab459",
"assets/packages/farm_management_dashboard/images/live_marker.png": "c80b71143773eeb173fd96f24f67f26f",
"assets/packages/farm_management_dashboard/images/mapIcon.png": "96ef917cd2d0e86c905a1f1d6d8f5b28",
"assets/packages/farm_management_dashboard/images/mob_shrimp.png": "60f5a0a5efbc706b91f0fab9b725b872",
"assets/packages/farm_management_dashboard/images/mob_shrimp_icon.png": "711f843e3395eb201dd97443158c898c",
"assets/packages/farm_management_dashboard/images/nextfarmicon.png": "083ded793019569642b1e33a0d292a02",
"assets/packages/farm_management_dashboard/images/offline_mapicon.png": "684b101e8a6c4c68351dc9d2416716e1",
"assets/packages/farm_management_dashboard/images/offline_marker.png": "1a6419fa8f49346b7e890ba5ea822575",
"assets/packages/farm_management_dashboard/images/pf_report.png": "3cd3fcd4a8c707d92cc7e58ff40cc22d",
"assets/packages/farm_management_dashboard/images/pickupmarker.png": "7cc8318a18ea7a7d2741078003c93a71",
"assets/packages/farm_management_dashboard/images/play_store_512.png": "d1dc7479d37bd5259660ffba163fb2f1",
"assets/packages/farm_management_dashboard/images/Powermon.png": "8e7f0b069c7e7685a98920f754267aaf",
"assets/packages/farm_management_dashboard/images/Powermon.svg": "bcd8a94b52ad1ea7168b6b821fa500ba",
"assets/packages/farm_management_dashboard/images/prayaan_logo.png": "910ef03d57bf175798ecec907460d8fd",
"assets/packages/farm_management_dashboard/images/save-money.png": "de058c07ffba6b492b32aae27878b908",
"assets/packages/farm_management_dashboard/images/shrimp.png": "a730b2f0f61eaa9a4b043861fd7f67b3",
"assets/packages/farm_management_dashboard/images/shrimp_icon.png": "056e24ae88a2f7fbdf05877b5128cd66",
"assets/packages/farm_management_dashboard/images/starterPNG_icon.png": "949c437f48efc36de2d91c7fb5f2a7d4",
"assets/packages/farm_management_dashboard/images/starter_icon.svg": "1aebf6df94dfe6de4ab98db8d7f18b97",
"assets/packages/farm_management_dashboard/images/starter_marker.png": "f40f7744af2aa8b31aa5d02a74bfefdd",
"assets/packages/farm_management_dashboard/images/subscription.png": "4a9c5e13bfee20e52a3cd12d80217ba2",
"assets/packages/farm_management_dashboard/images/switch.png": "a22fbe85d2890a976a0d307ba05ef6d1",
"assets/packages/farm_management_dashboard/images/weight_scale.png": "e3dd540a5e903a1f26cae34c0cc07223",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/installation/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/installation/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/installation/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/metrics_dashboardtv/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/metrics_dashboardtv/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/metrics_dashboardtv/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/metrics_dashboardtv/images/Acers_Being_Monitored.png": "bd30656c94c154262d7c434bc1917880",
"assets/packages/metrics_dashboardtv/images/AMP%2520live.png": "4951dffc8b6e5dc9057ca1380dbb15ba",
"assets/packages/metrics_dashboardtv/images/Aquabot.png": "1f1d7669fa05a3e5e21641f1706f9f1f",
"assets/packages/metrics_dashboardtv/images/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/packages/metrics_dashboardtv/images/Areators%2520Live.svg": "e38c66a193c35b74f91eaf0022c55b14",
"assets/packages/metrics_dashboardtv/images/Farm.png": "81c281284e7611496f3eb9e3e42f1c9b",
"assets/packages/metrics_dashboardtv/images/farmer.png": "96a510ca8cdc92db51201c2d1ae91563",
"assets/packages/metrics_dashboardtv/images/liveAmp.png": "4951dffc8b6e5dc9057ca1380dbb15ba",
"assets/packages/metrics_dashboardtv/images/Powermon.png": "8e7f0b069c7e7685a98920f754267aaf",
"assets/packages/metrics_dashboardtv/images/save-money.png": "de058c07ffba6b492b32aae27878b908",
"assets/packages/metrics_dashboardtv/images/starterPNG_icon.png": "949c437f48efc36de2d91c7fb5f2a7d4",
"assets/packages/metrics_dashboardtv/images/starter_icon.svg": "1aebf6df94dfe6de4ab98db8d7f18b97",
"assets/packages/metrics_dashboardtv/images/switch.png": "a22fbe85d2890a976a0d307ba05ef6d1",
"assets/packages/metrics_dashboardtv/images/weight_scale.png": "e3dd540a5e903a1f26cae34c0cc07223",
"assets/packages/office/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/office/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/office/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/pf_reports/assets/images/resetImage.png": "7d3b4e80011980fae1cefa20799ce79d",
"assets/packages/pf_reports/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/pf_reports/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/pf_reports/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/renewals/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/renewals/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/renewals/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/renewals/images/Acers_Being_Monitored.png": "bd30656c94c154262d7c434bc1917880",
"assets/packages/renewals/images/AMP%2520live.png": "4951dffc8b6e5dc9057ca1380dbb15ba",
"assets/packages/renewals/images/Aquabot.png": "1f1d7669fa05a3e5e21641f1706f9f1f",
"assets/packages/renewals/images/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/packages/renewals/images/Areators%2520Live.svg": "e38c66a193c35b74f91eaf0022c55b14",
"assets/packages/renewals/images/Farm.png": "81c281284e7611496f3eb9e3e42f1c9b",
"assets/packages/renewals/images/farmer.png": "96a510ca8cdc92db51201c2d1ae91563",
"assets/packages/renewals/images/Powermon.png": "8e7f0b069c7e7685a98920f754267aaf",
"assets/packages/renewals/images/save-money.png": "de058c07ffba6b492b32aae27878b908",
"assets/packages/renewals/images/starter_icon.svg": "1aebf6df94dfe6de4ab98db8d7f18b97",
"assets/packages/renewals/images/switch.png": "a22fbe85d2890a976a0d307ba05ef6d1",
"assets/packages/renewals/images/weight_scale.png": "e3dd540a5e903a1f26cae34c0cc07223",
"assets/packages/terms_conditions/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/terms_conditions/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/terms_conditions/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2626d48931f33223535b31d9715ec4b3",
"/": "2626d48931f33223535b31d9715ec4b3",
"main.dart.js": "e95c52a60b709593f3ed61e90a67b198",
"manifest.json": "c66ddd6babd9904a19c912199b646ea8",
"version.json": "e1497f5dd48401ba4ee8bcdd23ebb8c2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
