const WEB_CONFIG_QUERY = gql`
  query {
    webConfig {
      _id
      createdAt
      updatedAt
      logoHeader
      address
      phoneNumber
      email
      linkFb
      description
      ceoTitle
      ceoDescription
      copyright
      linkGoogleMap
      nameStore
      linkYoutube
      linkTwitter
      linkInstagram
      linkCopyright
      backroundFooter
      srcVideo1
      srcVideo2
      seoKeywords
      favicon
      mediaSeo
      domain
    }
  }
`;

export async function useWebConfig() {
  const webConfig = useState<Record<string, string>>("webConfig", () => ({}));

  if (!webConfig.value.phoneNumber) {
    const { data } = await useAsyncQuery(WEB_CONFIG_QUERY);
    if (data.value?.webConfig) {
      webConfig.value = { ...data.value.webConfig };
    }
  }

  return webConfig;
}

export function useLinkCopyright(webConfig: Ref<Record<string, string>>) {
  return computed(() => {
    const link = webConfig.value.linkCopyright;
    return typeof link === "string" && link.startsWith("http") ? link : null;
  });
}
