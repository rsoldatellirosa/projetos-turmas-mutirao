// Service worker do La Pizzaiole. Guarda o app para abrir sem internet depois da 1a visita.
// Cache versionado: cada nova publicacao troca o nome e limpa o antigo.
// Todos os apps do site dividem o mesmo endereco (origem) e o mesmo armazenamento:
// cada app so mexe nos caches com o seu prefixo, para nao apagar o dos outros.
const PREFIXO = "la-pizzaiole-";
const CACHE = PREFIXO + "20261115-2017";
const ARQUIVOS = ["./", "./index.html", "./manifest.webmanifest",
  "./icone-192.png", "./icone-512.png", "./icone-maskable-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) =>
    Promise.all(ks.filter((k) => k.startsWith(PREFIXO) && k !== CACHE).map((k) => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request).then((resp) => {
      const copia = resp.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copia));
      return resp;
    }).catch(() => caches.match("./index.html")))
  );
});
