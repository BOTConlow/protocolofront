import { getCssText } from '@/styles/stitches.config'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MQF5C3B');
            `,
          }}
        />
        <link
          rel="preload"
          href="https://player-vz-cb3e51cc-16c.tv.pandavideo.com.br/embed/css/styles.css"
          as="style"
        />
        <link
          rel="prerender"
          href="https://player-vz-cb3e51cc-16c.tv.pandavideo.com.br/embed/?v=54a54502-4ccb-4255-8a2a-c848c5d74ae7"
        />
        <link
          rel="preload"
          href="https://player-vz-cb3e51cc-16c.tv.pandavideo.com.br/embed/js/hls.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://player-vz-cb3e51cc-16c.tv.pandavideo.com.br/embed/js/plyr.polyfilled.min.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://config.tv.pandavideo.com.br/vz-cb3e51cc-16c/54a54502-4ccb-4255-8a2a-c848c5d74ae7.json"
          as="fetch"
        />
        <link
          rel="preload"
          href="https://config.tv.pandavideo.com.br/vz-cb3e51cc-16c/config.json"
          as="fetch"
        />
        <link
          rel="preload"
          href="https://b-vz-cb3e51cc-16c.tv.pandavideo.com.br/54a54502-4ccb-4255-8a2a-c848c5d74ae7/playlist.m3u8"
          as="fetch"
        />
        <link
          rel="dns-prefetch"
          href="https://b-vz-cb3e51cc-16c.tv.pandavideo.com.br"
        />
        <link
          rel="dns-prefetch"
          href="https://player-vz-cb3e51cc-16c.tv.pandavideo.com.br"
        />
        <link rel="dns-prefetch" href="https://vz-cb3e51cc-16c.b-cdn.net" />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQF5C3B"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
