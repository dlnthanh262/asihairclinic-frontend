import { Directives } from "bootstrap-vue-next";
export default defineNuxtPlugin((nuxtApp) => {
    for (const [name, directive] of Object.entries(Directives)) {
        if (!name.startsWith("v")) {
            continue;
        }
        nuxtApp.vueApp.directive(name.substring(1), directive);
    }
});
