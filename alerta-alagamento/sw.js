/* Service worker do app Alerta de Alagamento.
   Guarda as telas do app no celular para ele abrir mesmo sem internet.
   Os dados (previsão e planilha) sempre vêm da internet; quando não dá,
   o próprio app mostra os últimos dados que ele salvou.
   Todos os apps do site dividem o mesmo endereço (origem): este service worker
   só mexe nos caches com o seu prefixo, para não apagar o dos outros apps.
   Ao publicar uma versão nova do app, troque a data/hora do CACHE. */
const PREFIXO = "alerta-alagamento-";
const CACHE = PREFIXO + "20261115-2035";
const ARQUIVOS = ["./", "./index.html", "./manifest.webmanifest",
  "./icone-192.png", "./icone-512.png", "./icone-maskable-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) =>
    Promise.all(ks.filter((k) => k.startsWith(PREFIXO) && k !== CACHE).map((k) => caches.delete(k)))
  ).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const pedido = e.request;
  if (pedido.method !== "GET") return;
  if (new URL(pedido.url).origin !== self.location.origin) return;   // previsão e planilha: direto da internet

  // Página do app: tenta a internet primeiro (para pegar a versão nova) e cai na cópia guardada.
  if (pedido.mode === "navigate") {
    e.respondWith(
      fetch(pedido).then((resp) => {
        const copia = resp.clone();
        caches.open(CACHE).then((c) => c.put("./index.html", copia));
        return resp;
      }).catch(() => caches.match("./index.html", { cacheName: CACHE }))
    );
    return;
  }
  // Ícones e manifesto: usa a cópia guardada.
  e.respondWith(caches.match(pedido, { cacheName: CACHE }).then((r) => r || fetch(pedido)));
});
