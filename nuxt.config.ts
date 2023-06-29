// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          titleTemplate: '%s - Silvester Wali',
          title: 'Web Developer with Nuxt, Vue, and JavaScript experience',
          htmlAttrs: {
            lang: 'en'
          },
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'format-detection', content: 'telephone=no' },
            {
              name: 'robots',
              content:'index, follow'
            },
            {
              hid: 'description',
              name: 'description',
              content: 'I am a web developer with 3 years of experience, specializing in Nuxt, Vue, and JavaScript. I am skilled in working with teams and collaborating on projects.'
            },
            {
              name: 'author',
              content: 'silvester wali'
            },
    
            // Open Graph Meta
            {
              property: 'og:title',
              content: 'Web Developer with Nuxt, Vue, and JavaScript experience'
            },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:url',
              content: 'https://silvesterwali.netlify.app'
            },
            { property: 'og:image', content: '/thumbnail.png' },
            { property: 'og:description', content: 'I am a web developer with 3 years of experience, specializing in Nuxt, Vue, and JavaScript. I am skilled in working with teams and collaborating on projects.'},
            {
              property: 'og:site_name',
              content: 'Web Developer with Nuxt, Vue, and JavaScript experience'
            },
            // Twitter Meta
            { name: 'twitter:card', content: 'summary_large_image' },
            {
              name: 'twitter:title',
              content: 'Web Developer with Nuxt, Vue, and JavaScript experience'
            },
            { name: 'twitter:description', content:  'I am a web developer with 3 years of experience, specializing in Nuxt, Vue, and JavaScript. I am skilled in working with teams and collaborating on projects.' },
            { name: 'twitter:image', content: '/thumbnail.png' }
          ],
          link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
      },
    modules: ['@nuxtjs/tailwindcss','nuxt-gtag'],
    gtag:{
      id:"GTM-TP5DVRR",
     
    }
})
