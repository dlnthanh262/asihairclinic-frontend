import { navContent as navContentEn } from '~/content/nav';
import { navContent as navContentEs } from '~/content/nav-es';

export function useLangNav() {
  const route = useRoute();

  const isSpanishLang = computed(() => route.query.lang === 'es');

  const navContent = computed(() => (isSpanishLang.value ? navContentEs : navContentEn));

  const englishLangLink = computed(() => {
    const query = { ...route.query };
    delete query.lang;
    return { path: route.path, query };
  });

  const spanishLangLink = computed(() => ({
    path: route.path,
    query: { ...route.query, lang: 'es' },
  }));

  function localizedTo(path: string) {
    if (isSpanishLang.value) {
      return { path, query: { lang: 'es' } };
    }
    return path;
  }

  return {
    navContent,
    isSpanishLang,
    englishLangLink,
    spanishLangLink,
    localizedTo,
  };
}
