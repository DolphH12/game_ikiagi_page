'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6a967da41b1ced5acc0673712420d12d",
"version.json": "4227bac0a9029144acfebb92b7f107ca",
"index.html": "d8085036b390ce5ff354d189e5f3ec42",
"/": "d8085036b390ce5ff354d189e5f3ec42",
"main.dart.js": "289f909419ddfc4ffb67d3f11e72ee24",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e0e55ced871da9b2081cfddd428939f1",
".git/config": "7e67b8fe0b7b3a352205401b8546c33a",
".git/objects/3e/7ad31b399b8a039eb7a91db61d43678129f813": "ad30d35920d65646da2a111d3d1f5f45",
".git/objects/04/7132e8c632f0578fe5099aa95f17c05a53db44": "fa435de08bed06d433d89d98e6293ca2",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/93/1221ca447dc68c4aba27eba31e71c72ba5118a": "7f0b2d7755c9262ff6a38efcb70daf77",
".git/objects/0e/d5dd48d880cef144009bf3c265dffc50e44628": "36ebbdbb7406e5b7c5f3cab4ccb73ffe",
".git/objects/9d/7b4da5dd77dd190615612276f62fd7ba7aceab": "7c96b18fc7d0179b147f294ad6b32e22",
".git/objects/a3/ef2b1d0fe1ca27c2cb3a5808292da05c017dc3": "b6267d384a144a9b6a57ea9c1f8445e7",
".git/objects/d7/56028336fe9a1d8f9742f57dcee05ddb800c38": "38ff25b031803121907fe99afcd5af30",
".git/objects/d7/b9c6cc0f8d185ab3c5c24de7d110d167085fa8": "fd9cae271c328067ceb9403e9e8919ac",
".git/objects/d0/eb592064c0d5c3dfc557c22150372056bcc5de": "49cba560569bb4ea0b52ad3f96dc870a",
".git/objects/b3/922a253c8073133bddbdd89083aeaf04959184": "a032816825c0fefc65d884de1cfc79a1",
".git/objects/df/381f851ee8fae8a37ecde0cfcb37a204e674c7": "10321f85733c47c479ab6892b308c43b",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/95b7b1e10dd71dc63eed52d7b4d5e8bbbab3cf": "b1fbe40b7f3498a77bc18ffdaa3adbc1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/e615b11e825a896b13f6956b579a39f3eadf99": "7d2435af08416a97d32d523585d7be1d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/11/cafa89d5a6cd0bb6c81109bba5affdb0209071": "0d1b36c7d76f4e63bd8dc90327f8502b",
".git/objects/11/0df55715572567a56543fc06c484cd7c81c9e7": "71b1da187716acf3c7eee2466c1bb003",
".git/objects/11/79d469449a2d2441c9d2086010debe17e2f39f": "c97b502fdc01371515c291c065f97439",
".git/objects/7d/e4785c85961e3e9b2653bde610308395099e1d": "ff2e38c5334755f0933d11603be89d42",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/42/982ecd1e406d15e43db58203ca5e66424ecb2d": "b299d00a92ab27fa7b01ac075989e41a",
".git/objects/1f/25192f8ff52e0f6ee77d74e30510d2833d7ff3": "5d3c220d7ee5245ed7563ea6a6be0364",
".git/objects/17/b54ecfadebfd0b0c56d59f1aa311bd793f753f": "0648b2687c19ca66b11c2f32404e57c5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/ec9ae25ef9ad91f7aadbf4e9d1388323adc992": "8fb415796ac4fcf65bcad28d64b136a2",
".git/objects/21/f4e22d374b6a8e796d7cdff297b906e03ede44": "897d26f259a5b3cfaae7b5f2e316d943",
".git/objects/86/375eb06a580872f751dae5fd8f933d2fca4569": "4af0831b46cc2c2092e17a043d3e7f4d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/032ed6e6b1be021c97ec4604363fdbb3c9e006": "e455336b2bf84569482e137e1576f7f6",
".git/objects/38/18f93bcd5d7dbefe6f503d6f62212a2c2288bd": "c46d174d07a7d1ae9a9c2262a74080f1",
".git/objects/9a/1616354edbf80d48c7d248abcb9ef0d4593770": "26ebe0f7dc3c67faacf2c221ce039269",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/3a/79389cb31fa577fd69bdaa335bd602c362689a": "b288a62e610659efb093213911d57e33",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/5e/c71a1c7157eb491df7a0248c46f102ecbf8ec6": "b92c7506f890a0f479fb52e2a44025cf",
".git/objects/37/deb9a355561f8270f9d3ffde467dc7fac3ef6b": "32a32514102249e56f7b6c29df0d074a",
".git/objects/6d/d81e54a72392b918d00c7a5b3b74dfed415344": "346e7e6751957c5d9c5c18b7bfd85dbc",
".git/objects/64/6321437587d63ddaf533cafbb0002d01efb065": "29e2f384578d75b6a2dcb1147c06eff5",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/ea0ebddaa87e5ec8fa92d1da51802ac55a3f4c": "4d2968f6ba5aeb1e418d7e117bc91c04",
".git/objects/ba/5092eca139e84702c8b780437518786fb260f5": "fea84a53887cdeb1d25779c3cdd61de9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/d1242058a37e5f594c6cdfb2f9e96d7d2d386b": "9482142fbf948b1566062bfe2787d1cf",
".git/objects/c4/da5772881d23f45cb25a406b18679c7d5a2cce": "30499c6b352a22435a0fe0b74327aea1",
".git/objects/cc/cfb96f9e7a4c84de76f96178efc7f763e0cd1b": "70a8e49475a9afcbad90c1a7c8756dc4",
".git/objects/f6/fceeb96117fc212b502e07936bb115ce9f75a7": "cafa4df32afad329c795f6345f230f10",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/46/acb83b053d40f14be9b66c15c60eea40cee4e2": "fe3ced9b21936622baca287e1bb9f1dc",
".git/objects/79/69ff343f74ce582e127127fcc0e30f1cd9a68c": "0bff1c9a59b9824798dbf98e05b0e469",
".git/objects/83/ed6237fc0cf1f6c9d1980e0f1af8b369fbaed3": "86b17485867742715357ef16addf97c7",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/6b32ee3bbabfef3dc37ec675e1be4bf8a4a1d7": "7fcf6541477d2005d097989b1ed05195",
".git/objects/8d/2b946e3e288f54f81e9bea9c8e4a1f976423ce": "042e69b3609f83f941c544436d7352ce",
".git/objects/12/6c25ed5f2f99d4008a9c11133920d2bfa6d477": "2cb6da6634ff51804e39b5ef68239424",
".git/objects/76/860e189859b3436a3ecb89d88ae9b49c9264da": "9bcd90d86e8435a838a8d7cc10d9d96c",
".git/objects/49/69b24a7843d80dc22e20b361c3f0e7e7ecb8cb": "c8e18b21396119ef7b01c7d755da8452",
".git/objects/40/d43dd0992beaded8aa448494b0284e4df25d9b": "9370f55fbf335ef10eb7a3582946fc3a",
".git/objects/47/76cb46ab71d24bf36811a6012e8875f3510bf5": "c6f440c5f11663ad3d34cabf82aec0c2",
".git/objects/78/602a81842ea6f2d10537018aa87a0261f42933": "114dbebc559c675dba1b22b90259df16",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4b45d5a57fe101a5957c68a886187c5c",
".git/logs/refs/heads/main": "4b45d5a57fe101a5957c68a886187c5c",
".git/logs/refs/remotes/origin/main": "fe56c60dc6012be5f4d0efa35c586d90",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "73c4f2ac377ce990a7b4f226400de661",
".git/refs/remotes/origin/main": "73c4f2ac377ce990a7b4f226400de661",
".git/index": "4891233198fea0e4b37f8a9432114124",
".git/COMMIT_EDITMSG": "c0a1f76dde793b0a39913bd3c5efcfa0",
"assets/AssetManifest.json": "5303df2fbbfb5164618e02510e0d7cd6",
"assets/NOTICES": "c1c591d9df8bd2b0a9e19bd0648cdb2a",
"assets/FontManifest.json": "10e3a6329f5b49029fe15b924989a159",
"assets/AssetManifest.bin.json": "1610af752cd4924f0592be431532053c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d33db6bf83685d4380524db4963ab107",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/info.png": "87c547347e9dd82d1fbbfbe7bf0e8615",
"assets/assets/images/rabbit.png": "2b32c870207433e22de6e397090837b2",
"assets/assets/images/fondoikigai.png": "f08c0b1796afc0b42e7b60aae93f77d7",
"assets/assets/images/map.png": "02953b59392f7873725e661da9717427",
"assets/assets/images/star.png": "27e7f644a34c7e56795ae34d0d471344",
"assets/assets/images/player.png": "743d85f3000ac4c4ecf490c7784cf4fc",
"assets/assets/tiles_set/Basic_Grass_Biom_things.png": "aed9324ef39151b6813e2a4532362b92",
"assets/assets/tiles_set/Hills.png": "e32e31952a4b7270e707bda621c0155c",
"assets/assets/tiles_set/Grass.png": "0d797851a7171a2014aea20d78d0d4d1",
"assets/assets/tiles_set/Water.png": "78d1ad08e28c734e437b35e58f200560",
"assets/assets/tiles/mapa_taller.tiled-session": "37b80d5786b710e230bc616154ed8e01",
"assets/assets/tiles/hills.tsx": "5036dd375686628b70d13f0a51c869cb",
"assets/assets/tiles/mapa_taller.tiled-project": "97165873765b29a5041f09e541be15d5",
"assets/assets/tiles/water.tsx": "df1c03e835a24539036dc457449a8531",
"assets/assets/tiles/grass.tsx": "ccf10d8278ab1959ebc4ca48f586d6b8",
"assets/assets/tiles/Level-Final.tmx": "91ba8208a4113a2665f782e85de86aad",
"assets/assets/tiles/Level-04.tmx": "a9facd0fc12a19fcf4757edc763656ee",
"assets/assets/tiles/Level-05.tmx": "bde58d44ecaccce0364a40c0a68d4206",
"assets/assets/tiles/Level-02.tmx": "cb72d8a02d3051fd7155ce6660de9fcc",
"assets/assets/tiles/Level-03.tmx": "ddcf9fb4f52049b1348fb2b62d64db19",
"assets/assets/tiles/Level-01.tmx": "3c5d66f527e3de6b5b971ec34195cd2f",
"assets/assets/tiles/object_grass.tsx": "f1ef9c1a7bdac12646c616c36989b676",
"assets/assets/fonts/PixelifySans-Regular.ttf": "d6b4fe0a9425d5e9b459d654109498b4",
"assets/assets/evidences/Personajes.png": "6d581039fe0dd62f0027661b61ec4bdd",
"assets/assets/evidences/sm.gif": "577839bd10e5bf0c3844302d0cf8b6ef",
"assets/assets/evidences/dkew.gif": "c2d28a553fec8e188bf2c09967c6776f",
"assets/assets/evidences/delete_user.gif": "55913a843ccfc1794fe81552e43d6fe1",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
