import { layouthomeContent as layouthomeContentEn } from '~/content/layouthome';
import { layouthomeContent as layouthomeContentEs } from '~/content/layouthome-es';

function normalizePath(path: string) {
  if (!path || path === '/') {
    return '/';
  }
  return path.replace(/\/+$/, '');
}

function buildRoute(path: string, query: Record<string, string>) {
  const normalizedPath = normalizePath(path);
  const entries = Object.entries(query).filter(([, value]) => value != null && value !== '');

  if (entries.length === 0) {
    return normalizedPath;
  }

  return {
    path: normalizedPath,
    query: Object.fromEntries(entries),
  };
}

export function useLangNav() {
  const route = useRoute();

  const isSpanishLang = computed(() => route.query.lang === 'es');

  const layoutContent = computed(() => (isSpanishLang.value ? layouthomeContentEs : layouthomeContentEn));

  const navContent = computed(() => layoutContent.value.nav);

  const footerContent = computed(() => layoutContent.value.footer);

  const englishLangLink = computed(() => {
    const query = { ...route.query } as Record<string, string>;
    delete query.lang;
    return buildRoute(route.path, query);
  });

  const spanishLangLink = computed(() =>
    buildRoute(route.path, { ...route.query, lang: 'es' } as Record<string, string>),
  );

  function localizedTo(path: string) {
    if (isSpanishLang.value) {
      return buildRoute(path, { lang: 'es' });
    }
    return normalizePath(path);
  }

  return {
    layoutContent,
    navContent,
    footerContent,
    isSpanishLang,
    englishLangLink,
    spanishLangLink,
    localizedTo,
  };
}
