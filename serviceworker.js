// SW arbp97 v.1.1

const CACHE_NAME = "arbp97.github.io";
const CACHE_VERSION = "1.1";

const urlsToCache = ["/", "css/index.css", "js/app.js", "js/util.js", "js/section.js", 
    "json/projects.json", "json/skills.json", "json/social.json", "img/personal.jpg", "img/logo3.png", "img/code.png"];

self.addEventListener("install", event => {
    // Pre-cache archivos para offline y performance;
    event.waitUntil(
        caches.open(CACHE_NAME).then(async cache => {
            await cache.addAll(urlsToCache);

            const projectsResponse = await fetch("json/projects.json");
            const skillsResponse = await fetch("json/skills.json");
            const socialResponse = await fetch("json/social.json");

            const jsonProjects = await projectsResponse.json();
            const jsonSkills = await skillsResponse.json();
            const jsonSocial = await socialResponse.json();

            const projects = jsonProjects.map(p => "/img/" + p.file);
            const skills = jsonSkills.map(sk => "/img/" + sk.file);
            const social = jsonSocial.map(so => "/img/" + so.file);

            await cache.addAll(projects);
            await cache.addAll(skills);
            await cache.addAll(social);
        })
    );
});

// Cache First Policy
self.addEventListener("fetch", event => {
  event.respondWith(
      caches.match(event.request)  
          .then(function(response) {
              if (response) {  // CACHE HIT
                  return response;
              } else {    // CACHE MISS
                  return fetch(event.request);
              }
          })
  );
});
