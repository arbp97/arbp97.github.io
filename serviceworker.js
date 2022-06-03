// SW arbp97 v.2.0

const CACHE_NAME = "arbp97.github.io";
const CACHE_VERSION = "2.1";

const urlsToCache = [
  "/",
  "index.html",
  "css/index.css",
  "js/util.js",
  "js/section.js",
  "js/app.js",
  "json/projects.json",
  "json/skills.json",
  "img/personal-nobg.png",
  "img/favicon.png",
  "img/logo192.png",
  "img/logo512.png",
  "img/coding.gif",
  "img/coding_animated_3.gif",
  "ablangille_cv.pdf",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(urlsToCache);

      const projectsResponse = await fetch("json/projects.json");
      const skillsResponse = await fetch("json/skills.json");

      const jsonProjects = await projectsResponse.json();
      const jsonSkills = await skillsResponse.json();

      const projects = jsonProjects.map((p) => "/img/" + p.file);
      const skills = jsonSkills.map((sk) => "/img/" + sk.file);

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
