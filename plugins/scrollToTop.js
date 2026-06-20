export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
        if (to.name!=="danh-muc-id"&&to.path !== from.path){
            window.scrollTo(0, 0);
        }else
        if (to.name==="danh-muc-id"&&((to.query&&to.query.page) || to.path !== from.path )&& process.client) {
            window.scrollTo(0, 0);
        }
    };
});
