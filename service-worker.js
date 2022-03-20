/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a3f65ae375525b286471ada77d546fa8"
  },
  {
    "url": "assets/css/0.styles.989b2dde.css",
    "revision": "05d8a41713657c5e2f45e422d190a4fa"
  },
  {
    "url": "assets/img/iconfont.b2366082.svg",
    "revision": "b23660822683dedace9fbe7b0119233a"
  },
  {
    "url": "assets/img/search.72b0ff46.svg",
    "revision": "72b0ff466169d7f6d483e301dcfe4c00"
  },
  {
    "url": "assets/js/10.80fbe661.js",
    "revision": "80ec36054adfd267d0cf8bab9252adb3"
  },
  {
    "url": "assets/js/11.567842b4.js",
    "revision": "7a82d77356f2fb22fdae293f50142591"
  },
  {
    "url": "assets/js/12.ea2ec061.js",
    "revision": "c343129eb53964a0415495ecbafd53fc"
  },
  {
    "url": "assets/js/13.5262fa7e.js",
    "revision": "552094f96b6d630c83409c3d3c88d616"
  },
  {
    "url": "assets/js/14.bf7bba6c.js",
    "revision": "bbad2bf5005f3974ccf9dd3e58690627"
  },
  {
    "url": "assets/js/15.21ad4831.js",
    "revision": "d89a8cbf20bb46ee583cb5dfe4e1af57"
  },
  {
    "url": "assets/js/16.1a61b0eb.js",
    "revision": "0154958c7b4d7a6cf78a5cc458f5b91d"
  },
  {
    "url": "assets/js/17.203200e8.js",
    "revision": "8ad5e587cd6b6f25564703ba08b93ecf"
  },
  {
    "url": "assets/js/18.fa7fbd6a.js",
    "revision": "bc7786b6536ca168d3185898c4a6ea1f"
  },
  {
    "url": "assets/js/19.6010e3f8.js",
    "revision": "bea29877a44e0df53d50f56115c2025b"
  },
  {
    "url": "assets/js/20.eef73132.js",
    "revision": "3ad89e4d37fec51c79cd14e76343b48d"
  },
  {
    "url": "assets/js/21.00db98f0.js",
    "revision": "16983fa79cb2d7a0a483f10d837c4a2c"
  },
  {
    "url": "assets/js/22.6ab9a44f.js",
    "revision": "2f55bd1847416c0cef3a6f1857d2e500"
  },
  {
    "url": "assets/js/23.7f16f062.js",
    "revision": "1e773ff39500a56b8c50f3744f6fd5b4"
  },
  {
    "url": "assets/js/24.c839839f.js",
    "revision": "6fce8acfa280e4c5ec99a0956b045c28"
  },
  {
    "url": "assets/js/25.03bb49e3.js",
    "revision": "7152dd1514f09abe6a5ca5842eca2af1"
  },
  {
    "url": "assets/js/26.1c5951c7.js",
    "revision": "fefb668e00709f9e7d1c6ee35bd3ed7f"
  },
  {
    "url": "assets/js/27.b5e79c1f.js",
    "revision": "7bf44a7477ecf931534e2440e6ad0d5d"
  },
  {
    "url": "assets/js/28.517f064f.js",
    "revision": "5fdc5862804a7f09ad6493267ab5b6f5"
  },
  {
    "url": "assets/js/29.df62bee7.js",
    "revision": "80a566d5b4aef749ac8d2b86d34d45e6"
  },
  {
    "url": "assets/js/3.3d97394a.js",
    "revision": "b0f54eb7c1675eb60b4cf57ba22491f1"
  },
  {
    "url": "assets/js/30.e6d0bfb0.js",
    "revision": "2e45682bb4c8dcfb5fdf1619ff5ee8ea"
  },
  {
    "url": "assets/js/31.17aafeae.js",
    "revision": "0a920817cf7261c625eaee3096664a32"
  },
  {
    "url": "assets/js/32.0e44958b.js",
    "revision": "6881343beca06ee4e0e2d52923782f1c"
  },
  {
    "url": "assets/js/33.c4bbc604.js",
    "revision": "4d35b1a56ea90307652cc5d91ede5878"
  },
  {
    "url": "assets/js/34.5e14246b.js",
    "revision": "9a2caa5043d8ef6a82ac3788a52576c1"
  },
  {
    "url": "assets/js/35.929c9863.js",
    "revision": "1f3c3bcb58e7b682338b6b5a529e1ca3"
  },
  {
    "url": "assets/js/36.d615b965.js",
    "revision": "ec55ad90d5024debdc4f1e41ea389b27"
  },
  {
    "url": "assets/js/37.41d9aa02.js",
    "revision": "86b9291acc375bfbf15ee171d4174a68"
  },
  {
    "url": "assets/js/38.8468bf9c.js",
    "revision": "062ecc59522812314869a999799756a4"
  },
  {
    "url": "assets/js/39.e443d737.js",
    "revision": "c5b6b40b4d147bc16ccdd6b7b8e606d7"
  },
  {
    "url": "assets/js/4.f4ebb56a.js",
    "revision": "5831a7a1eb424a64ed99c97f6d5a32bd"
  },
  {
    "url": "assets/js/40.fc7e0a41.js",
    "revision": "0ab5a581db8e1cf91be0c6df402f657d"
  },
  {
    "url": "assets/js/41.c4eb69c7.js",
    "revision": "bdb2dea1aa35841d21b5a7f03995e580"
  },
  {
    "url": "assets/js/5.e4033033.js",
    "revision": "21971c269e219ef10c0fbc2bfe5a013f"
  },
  {
    "url": "assets/js/6.24ad733c.js",
    "revision": "abd65f2ad4c63ddd1a34f0f471bd9bba"
  },
  {
    "url": "assets/js/7.ea0008c0.js",
    "revision": "48c2394be790bd33ac1db7d53c0d7ccf"
  },
  {
    "url": "assets/js/8.eae8d36a.js",
    "revision": "4a2c14a02d25945ee208e54d5ad8a8b9"
  },
  {
    "url": "assets/js/9.064f8086.js",
    "revision": "e9ff19b174e5d780e948e10ca817f7af"
  },
  {
    "url": "assets/js/app.11c9bfda.js",
    "revision": "f0e2baf3070594ac4e22754b6dfe9aee"
  },
  {
    "url": "assets/js/load.js",
    "revision": "c7a0d4b252504a929378a20f2da140fd"
  },
  {
    "url": "assets/js/vendors~flowchart.8d269fb4.js",
    "revision": "54d67e20eb2101dca843672b3312358a"
  },
  {
    "url": "files.html",
    "revision": "090e6d4046d7494bc433fc5fe05db2ff"
  },
  {
    "url": "images/icons/logo.png",
    "revision": "9fa93775c2d2bd5679b65f1233737c78"
  },
  {
    "url": "images/路/Android构建流程.jpg",
    "revision": "caee8c8c13a47f1b0a3396b6903016dc"
  },
  {
    "url": "images/路/Docker.png",
    "revision": "7d7a8d03909c15083635442658173e88"
  },
  {
    "url": "index.html",
    "revision": "efb19d7dced0e6563e378694acd917a9"
  },
  {
    "url": "Old/dev/JDBC.html",
    "revision": "97ecf531ecbfca6ede6b5dac969241dd"
  },
  {
    "url": "Old/dev/JDBC课堂笔记.html",
    "revision": "597eb3c790cd9305885705d0e7a2e823"
  },
  {
    "url": "Old/dev/MongoDB-Universal.html",
    "revision": "e18334a3978c22755aeb00daad6eed9a"
  },
  {
    "url": "Old/dev/ShortCutsIntelliJ.html",
    "revision": "34c8dd6fbe288b836751921863d3728a"
  },
  {
    "url": "Old/dev/threadsCyclicBarrier.html",
    "revision": "4ede1d46925e88c01de62d7ab2ec9287"
  },
  {
    "url": "Old/dev/基础加强笔记.html",
    "revision": "808e3a064c93a61a5039299c0f8ef67c"
  },
  {
    "url": "Old/others/hotpatch-Note.html",
    "revision": "c3f2b03e312edf5aa94e6a02dfc82005"
  },
  {
    "url": "Old/others/youtube离线下载.html",
    "revision": "fb92680487b5b639cee5c153c8ea1f5b"
  },
  {
    "url": "主站所有(待整理)/Azure中WindowsServer没GUI.html",
    "revision": "3dd245af3101e0c2512ab13d5c99c3a1"
  },
  {
    "url": "主站所有(待整理)/backdrop-filter毛玻璃效果.html",
    "revision": "33b4ab39729cc0442976a162a4fae50b"
  },
  {
    "url": "主站所有(待整理)/Calibre-rclone-google-drive搭建书库把玩.html",
    "revision": "44cdd00f6c47f6013607ce1ae49f8e2d"
  },
  {
    "url": "主站所有(待整理)/Clover配置引导Linux内核.html",
    "revision": "4c1847b2f7be480871be5e6a0291e097"
  },
  {
    "url": "主站所有(待整理)/Docker运行macOS-Docker-OSX.html",
    "revision": "d7733bc0bb55d2c1b6f2b94d45705b18"
  },
  {
    "url": "主站所有(待整理)/git-submodule-git子模块闲搞.html",
    "revision": "fbb52b642b1a79aed99765a708a26fc2"
  },
  {
    "url": "主站所有(待整理)/GitHub-Archive-Program-我的祖传代码.html",
    "revision": "816b5f6b12c90a582083465ace92dce4"
  },
  {
    "url": "主站所有(待整理)/Github官方云端IDE——CodeSpaces.html",
    "revision": "2bae861181b66a875c008bce7ab2a8f3"
  },
  {
    "url": "主站所有(待整理)/Google在线深度学习神器colab把玩.html",
    "revision": "f387a314c5b61ee0a6389a14038fc55f"
  },
  {
    "url": "主站所有(待整理)/ide般的vim-SpaceVim.html",
    "revision": "d415b1ea6ed6a1a6246a79d216c05698"
  },
  {
    "url": "主站所有(待整理)/Java基操之Stream.html",
    "revision": "164eaf0b42c371e50c08f43cd2eeafb6"
  },
  {
    "url": "主站所有(待整理)/Java工具之jenkins.html",
    "revision": "4e48c302e11836ebcaadad9dd59c31f9"
  },
  {
    "url": "主站所有(待整理)/Java并发之java-util-concurrent包Overview.html",
    "revision": "cb0414be12c8d47de7681310c1e826e8"
  },
  {
    "url": "主站所有(待整理)/Java开发工具之Maven.html",
    "revision": "aa6643635c9abc5a7520ebfae7dba801"
  },
  {
    "url": "主站所有(待整理)/Java集合相关问题.html",
    "revision": "1d934a019b19c125e82919d62463962e"
  },
  {
    "url": "主站所有(待整理)/Kotlin开发总结.html",
    "revision": "bc5ad18be10e8f1f7998c261da93ed24"
  },
  {
    "url": "主站所有(待整理)/Linux剑客之sed.html",
    "revision": "c0650a977f7ff2fd28da3bbeeea3ae0f"
  },
  {
    "url": "主站所有(待整理)/Linux命令之cut.html",
    "revision": "28b502b69328e67383e96963275ea3f4"
  },
  {
    "url": "主站所有(待整理)/Linux命令之xargs.html",
    "revision": "8c8c9bb2af8f25fed314a792ad7bd40d"
  },
  {
    "url": "主站所有(待整理)/Linux神器之asciinema.html",
    "revision": "63bf1d062ea6a34c993030133d86a52a"
  },
  {
    "url": "主站所有(待整理)/Linux神器之tldr.html",
    "revision": "15a60a1f3d380833df123adbe45004a5"
  },
  {
    "url": "主站所有(待整理)/Theia-可高度定制的IDE-兼容VSCode插件.html",
    "revision": "d2553cd5544f7e33b23e26c92f85fab1"
  },
  {
    "url": "主站所有(待整理)/关于invoke和call的区别.html",
    "revision": "b2c725883cb184ba98aaf0e67f1d53bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
