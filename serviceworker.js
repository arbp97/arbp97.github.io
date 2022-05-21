// SW arbp97 v.2.0

const CACHE_NAME = "arbp97.github.io";
const CACHE_VERSION = "2.0";

const urlsToCache = [
  "/",
  "index.html",
  "css/index.css",
  "js/util.js",
  //"js/section.js",
  "js/app.js",
  "json/projects.json",
  "json/skills.json",
  "json/social.json",
  "img/personal-nobg.png",
  "img/maskable_icon.png",
  "img/maskable_icon_x192.png",
  "img/logo512.png",
  "ablangille_cv.pdf",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(urlsToCache);

      const projectsResponse = await fetch("json/projects.json");
      const skillsResponse = await fetch("json/skills.json");
      const socialResponse = await fetch("json/social.json");

      const jsonProjects = await projectsResponse.json();
      const jsonSkills = await skillsResponse.json();
      const jsonSocial = await socialResponse.json();

      const projects = jsonProjects.map((p) => "/img/" + p.file);
      const skills = jsonSkills.map((sk) => "/img/" + sk.file);
      const social = jsonSocial.map((so) => "/img/" + so.file);

      await cache.addAll(projects);
      await cache.addAll(skills);
      await cache.addAll(social);
    })()
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Enable navigation preload if it's supported.
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );
  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

// Network First Policy
self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      try {
        const networkResponse = await fetch(event.request);
        const cache = await caches.open(CACHE_NAME);

        cache.put(event.request, networkResponse.clone());

        return networkResponse;
      } catch (error) {
        const response = await caches.match(event.request, {
          cacheName: CACHE_NAME,
          ignoreVary: true,
        });

        return response;
      }
    })()
  );
});
