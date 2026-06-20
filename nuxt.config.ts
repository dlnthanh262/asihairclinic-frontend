import fs from "fs";

let manifest: Record<string, unknown> = {};
try {
  const mani = fs.readFileSync("manifest.json");
  manifest = JSON.parse(mani.toString("utf-8"));
} catch (e) {
  // manifest.json optional at build time
}

const modules = [
  "nuxt-simple-sitemap",
  "nuxt-simple-robots",
  "nuxt-gtag",
  "@bootstrap-vue-next/nuxt",
  "@nuxtjs/apollo",
  "@nuxtjs/device",
  "@vite-pwa/nuxt",
];

const domain = "https://asihairclinic.com";
const apiUrl = domain + "/graphql";

const useVpsHmr = process.env.NUXT_HMR_WSS === "true";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  // >>>> Ghi đè app START
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple_touch_icon.png" },
      ],
      script: [
        {
          innerHTML: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '496978503254624');
        fbq('track', 'PageView');`,
          type: "text/javascript",
          charset: "utf-8",
        },
      ],
      noscript: [
        {
          innerHTML: `<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=496978503254624&ev=PageView&noscript=1" />`,
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        "fb-pixel": ["innerHTML"],
      },
    },
  },
  // >>>> Ghi đè app END
  vite: {
    template: {
      compilerOptions: (tag: string) => tag.startsWith("b-"),
    },
    ...(useVpsHmr
      ? {
          server: {
            hmr: {
              protocol: "wss",
              clientPort: 443,
              port: 24678,
              path: "/hmr/",
            },
          },
        }
      : {}),
  },
  keepalive: true,
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://asihairclinic.com",
    },
  },
  devServerHandlers: [],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      ...manifest,
      lang: "vi",
    },
    workbox: {
      navigateFallback: "/",
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
    },
  },
  apollo: {
    clients: {
      default: {
        browserHttpEndpoint: "https://asihairclinic.com/graphql",
        httpEndpoint: "https://asihairclinic.com/graphql",
      },
    },
  },
  build: {
    babel: { compact: true },
    cache: true,
    hardsource: true,
  },
  nitro: {
    compatibilityDate: "2024-06-20",
  },
  telemetry: false,
  modules,
  gtag: {
    // id: "G-5CQL13STMZ",
    id: "GTM-T68W6Z6Q",
  },
  sitemap: {
    sources: ["/api/_sitemap-urls"],
    siteUrl: domain,
  },
  robots: {
    siteUrl: domain,
  },
  css: ["bootstrap/dist/css/bootstrap.css", "assets/css/styles.css"],
});
