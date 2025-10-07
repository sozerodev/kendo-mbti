// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  nitro: {
    preset: 'cloudflare-pages',
  },
  pages: true,
  srcDir: 'src/',
  app: {
    head: {
      title: '검도 MBTI - 나에게 맞는 검도 스타일 찾기',
      titleTemplate: '%s | 검도 MBTI',
      meta: [
        { name: 'description', content: '검도와 MBTI를 결합한 재미있는 성격 테스트로 나만의 검도 스타일을 발견해보세요. 16가지 MBTI 유형별 검도 특성과 수련 방법을 제시합니다.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: '검도, MBTI, 성격테스트, 검도스타일, 무도, 심리테스트, 검도수련, MBTI테스트' },
        { name: 'author', content: '검도 MBTI 팀' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'ko-KR' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: '검도 MBTI - 나에게 맞는 검도 스타일 찾기' },
        { property: 'og:description', content: '검도와 MBTI를 결합한 재미있는 성격 테스트로 나만의 검도 스타일을 발견해보세요.' },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:url', content: 'https://kendo-mbti.com' },
        { property: 'og:site_name', content: '검도 MBTI' },
        { property: 'og:locale', content: 'ko_KR' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '검도 MBTI - 나에게 맞는 검도 스타일 찾기' },
        { name: 'twitter:description', content: '검도와 MBTI를 결합한 재미있는 성격 테스트로 나만의 검도 스타일을 발견해보세요.' },
        { name: 'twitter:image', content: '/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://kendo-mbti.com' }
      ]
    }
  }
})
