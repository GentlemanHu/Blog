(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{554:function(t,e,a){"use strict";a.r(e);var s=a(6),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("blockquote",[a("p",[t._v("记录了一些折腾过程")])]),t._v(" "),a("details",[a("summary",[t._v("一些缘由")]),t._v(" "),a("h3",{attrs:{id:"e5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#e5"}},[t._v("#")]),t._v(" E5")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("前一段微软开发者E5订阅很火热，也顺手申请了一个，主要还是看上"),a("code",[t._v("OneDrive")]),t._v("的存储，E5可以拥有25个子账号，所以空间至少"),a("code",[t._v("25x5T")]),t._v("，当然也用不了这么多。")])]),t._v(" "),a("li",[a("p",[t._v("由于E5可能是参照开发者使用情况续订的，所以同时也部署了"),a("a",{attrs:{href:"https://github.com/GentlemanHu/OwnE5",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("自动调用API续订")]),a("OutboundLink")],1),t._v("程序来尝试维持续订。")])]),t._v(" "),a("li",[a("p",[t._v("搭建了各种索引程序作为个人网盘，总之，尝试了多款，各有优势吧。")])])]),t._v(" "),a("h3",{attrs:{id:"teamdrive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#teamdrive"}},[t._v("#")]),t._v(" TeamDrive")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("GoogleDrive订阅G Suit教育版或者商业版是无限容量的（$$$)，教育邮箱之前搞过一个，翻车了。")])]),t._v(" "),a("li",[a("p",[t._v("偶然发现还有TeamDrive也是无限容量，就也顺手搞了一个玩玩看。")])]),t._v(" "),a("li",[a("p",[t._v("又发现各种玩法，转存什么的，利用SA账号转存，TG机器人转存等，顺手也搭建了。")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/iwestlin/gd-utils",target:"_blank",rel:"noopener noreferrer"}},[t._v("gd-utils"),a("OutboundLink")],1)])])])]),t._v(" "),a("h3",{attrs:{id:"个人演示站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#个人演示站"}},[t._v("#")]),t._v(" 个人演示站")]),t._v(" "),a("ul",[a("li",[t._v("OD（暂不）")]),t._v(" "),a("li",[t._v("GD\n"),a("ul",[a("li",[t._v("https://pie.holyfuck.ml")]),t._v(" "),a("li",[t._v("https://pie.keepfuture.live")])])])]),t._v(" "),a("h3",{attrs:{id:"折腾开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#折腾开始"}},[t._v("#")]),t._v(" 折腾开始")]),t._v(" "),a("ul",[a("li",[t._v("各种离线下载，转存机器人也都玩过了，就想玩玩新鲜的。")]),t._v(" "),a("li",[t._v("于是想到了搭建个人书库，利用这些"),a("code",[t._v("强大的")]),t._v("存储作支持。")]),t._v(" "),a("li",[t._v("当然，OD和GD都是可以的，但是看到"),a("code",[t._v("calibre-web")]),t._v("这款管理面板原生支持GD，就选择了GD")])])]),t._v(" "),a("h2",{attrs:{id:"一、calibre-web搭建与配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、calibre-web搭建与配置"}},[t._v("#")]),t._v(" 一、Calibre-web搭建与配置")]),t._v(" "),a("h3",{attrs:{id:"安装部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装部署"}},[t._v("#")]),t._v(" 安装部署")]),t._v(" "),a("h4",{attrs:{id:"py依赖部署版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#py依赖部署版"}},[t._v("#")]),t._v(" py依赖部署版")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/janeczku/calibre-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("calibre-web"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone 仓库\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# python3 (python3.x) ")]),t._v("\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --target vendor -r requirements.txt \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (python2.7).")]),t._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --target vendor -r requirements.txt \n")])])]),a("p",[t._v("执行启动命令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("python cps.py\n或者 \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" python cps.py\n")])])]),a("p",[t._v("至此，calibre的面板calibre-web搭建成功，接下来跟GD存储端对接。")]),t._v(" "),a("p",[t._v("面板原生支持GD")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/gentlemanhu/public-store/raw/master//images/20200802184446.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/gentlemanhu/public-store/raw/master//images/20200802184359.png",alt:""}})]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/janeczku/calibre-web/wiki/Configuration#using-google-drive-integration",target:"_blank",rel:"noopener noreferrer"}},[t._v("doc"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("由于某些原因，采用下边rclone挂载GD方式。")]),t._v(" "),a("h4",{attrs:{id:"docker版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker版"}},[t._v("#")]),t._v(" "),a("s",[t._v("docker版")])]),t._v(" "),a("blockquote",[a("p",[t._v("docker安装可谓最简单，可惜各种折腾未成功，还是一般安装吧~")]),t._v(" "),a("p",[t._v("⚠️以下只是记录了报错等信息，尝试修复过程")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hub.docker.com/r/linuxserver/calibre-web/",target:"_blank",rel:"noopener noreferrer"}},[t._v("calibre-docker"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("calibre-web "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PUID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PGID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TZ")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Europe/London "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOCKER_MODS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("linuxserver/calibre-web:calibre "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8083")]),t._v(":8083 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v /media/config:/config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v /media/Books:/books "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --restart unless-stopped "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  linuxserver/calibre-web\n")])])]),a("ul",[a("li",[a("p",[t._v("安装好之后，尽管已经映射，docker容器内不能读取到从host外部共享到内部的目录，所以，挂载的GD也就不能用。")])]),t._v(" "),a("li",[a("p",[t._v("找了一番，有个rclone-mount的docker镜像是专门为此而生。")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/tynor88/docker-rclone-mount",target:"_blank",rel:"noopener noreferrer"}},[t._v("rclone-mount-docker"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hub.docker.com/r/mumiehub/rclone-mount/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker-rclone"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("docker build -t rclone-docker:rclone .")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("docker run -t -i rclone-docker:rclone /bin/bash")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" start rclone-mount\nError response from daemon: oci runtime error: container_linux.go:235: starting container process caused "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"process_linux.go:339: running prestart hook 2 caused '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("error running hook: exit status 1, stdout: , stderr: "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('"')]),t._v("\nError: failed to start containers: rclone-mount\n")])])])]),t._v(" "),a("li",[a("p",[t._v("报错,google后需要在linux内核启动namespace什么的，下边是教程")])]),t._v(" "),a("li",[a("p",[t._v("https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_atomic_host/7/html-single/getting_started_with_containers/index#user_namespaces_options")])])]),t._v(" "),a("blockquote",[a("p",[t._v("然而需要重启，由于部署了一堆闲玩的东西，很多没部署service自启动，重启后说不定就不知道到在哪启动了，所以放弃。")])]),t._v(" "),a("h3",{attrs:{id:"后台配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后台配置"}},[t._v("#")]),t._v(" 后台配置")]),t._v(" "),a("blockquote",[a("p",[t._v("详见下边第三步")])]),t._v(" "),a("h2",{attrs:{id:"二、rclone挂载gd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、rclone挂载gd"}},[t._v("#")]),t._v(" 二、rclone挂载GD")]),t._v(" "),a("h3",{attrs:{id:"普通版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通版"}},[t._v("#")]),t._v(" 普通版")]),t._v(" "),a("h4",{attrs:{id:"安装rclone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装rclone"}},[t._v("#")]),t._v(" 安装"),a("a",{attrs:{href:"https://rclone.org/install/#script-installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("rclone"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"配置gd并挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置gd并挂载"}},[t._v("#")]),t._v(" 配置GD并挂载")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("rclone config")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/gentlemanhu/public-store/raw/master//images/image-20200802185121351.png",alt:"image-20200802185121351"}})]),t._v(" "),a("blockquote",[a("p",[t._v("新建remote")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/gentlemanhu/public-store/raw/master//images/image-20200802185159925.png",alt:"image-20200802185159925"}})]),t._v(" "),a("blockquote",[a("p",[t._v("选13（具体看版本），google drive")]),t._v(" "),a("p",[t._v("client_id和secret_id可以不写，默认用的官方的。")]),t._v(" "),a("p",[t._v("接下来都选1")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/gentlemanhu/public-store/raw/master//images/image-20200802185330214.png",alt:"image-20200802185330214"}})])])]),t._v(" "),a("blockquote",[a("p",[t._v("根据提示，验证那里，由于是在vps没显示器，选n，点开链接验证后，复制代码到下边。")]),t._v(" "),a("p",[t._v("配置成TeamDrive")]),t._v(" "),a("p",[t._v("然后一路yes就行了")])]),t._v(" "),a("h4",{attrs:{id:"挂载磁盘点-配置自启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载磁盘点-配置自启动"}},[t._v("#")]),t._v(" 挂载磁盘点，配置自启动")]),t._v(" "),a("ul",[a("li",[t._v("新建挂载文件夹，我建在"),a("code",[t._v("/media/Books")])]),t._v(" "),a("li",[t._v("配置service自启动")])]),t._v(" "),a("p",[t._v("将下边脚本改好后，新建service")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /usr/lib/systemd/system/books.service\n")])])]),a("p",[t._v("下边复制到新建的service中")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Rclone\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("network-online.target\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("simple\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/bin/rclone "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" Books:/ /media/Books/ --copy-links --no-gzip-encoding --no-check-certificate --allow-other --allow-non-empty --umask 000 --vfs-cache-mode writes "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#针对calibre读取数据库加的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("on-abort\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default.target\n")])])]),a("blockquote",[a("p",[t._v("需要改两个地方，"),a("code",[t._v("Books:/")]),t._v(" 和 "),a("code",[t._v("/media/Books")]),t._v("，第一个为rclone配置的名称，第二个为本地挂载点。")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("systemctl daemon-reload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsystemctl restart books"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看状态")]),t._v("\nsystemctl status books -l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 开机自启")]),t._v("\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" books"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("进入挂载点，ls能看到盘内容，成功~")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/gentlemanhu/public-store/raw/master//images/image-20200804122150879.png",alt:"image-20200804122150879"}})]),t._v(" "),a("h3",{attrs:{id:"docker版-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker版-2"}},[t._v("#")]),t._v(" "),a("s",[t._v("docker版")])]),t._v(" "),a("blockquote",[a("p",[t._v("docker得折腾更多，就不用了")]),t._v(" "),a("p",[t._v("下边只贴上了启动参数")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -d --name rclone-mount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("unless-stopped "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --cap-add SYS_ADMIN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --device /dev/fuse "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --security-opt apparmor:unconfined "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RemotePath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bookgo:"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MountCommands")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--copy-links --no-gzip-encoding --no-check-certificate --allow-other --allow-non-empty --umask 000 --vfs-cache-mode writes"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v /root/.config/rclone:/config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v /media/Books:/mnt/mediaefs:shared "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    mumiehub/rclone-mount\n")])])]),a("h2",{attrs:{id:"三、calibre安装与书库配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、calibre安装与书库配置"}},[t._v("#")]),t._v(" 三、calibre安装与书库配置")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/gentlemanhu/public-store/raw/master//images/20200802184755.png",alt:""}})]),t._v(" "),a("p",[t._v("安装成功，并配置好书库后，进入web登录后就是这样的界面。")]),t._v(" "),a("blockquote",[a("p",[t._v("然而，第一步中安装好的web面板，第一次登录，会让你设置书库地址，路径内必须有"),a("code",[t._v("metadata.db")]),t._v("书库的数据库文件。")]),t._v(" "),a("p",[t._v("⚠️如果第一次用的话，没有metadata.db，必须手动搞一个，或者下载"),a("a",{attrs:{href:"https://drive.google.com/file/d/189tv5i5SNT6rivLLLvCmC2JeLtODmSS1/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个"),a("OutboundLink")],1),t._v("空白的书库放在路径内。")])]),t._v(" "),a("h3",{attrs:{id:"初始化配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化配置"}},[t._v("#")]),t._v(" 初始化配置")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/gentlemanhu/public-store/raw/master//images/image-20200804142346644.png",alt:""}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("这样，输入初始admin，admin123用户登入，其他后台自行设置就行了")])]),t._v(" "),a("li",[a("p",[t._v("初始密码及时更改")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/gentlemanhu/public-store/raw/master//images/image-20200804142454950.png",alt:"image-20200804142454950"}})]),t._v(" "),a("p",[t._v("功能还可以，有自动推送kindle功能。")])]),t._v(" "),a("li",[a("p",[a("img",{attrs:{src:"https://gitee.com/gentlemanhu/public-store/raw/master//images/image-20200804142552774.png",alt:"image-20200804142552774"}})])]),t._v(" "),a("li",[a("p",[t._v("还有格式转换等，需要自行下载插件，路径配置好。")])])]),t._v(" "),a("h3",{attrs:{id:"导入书库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入书库"}},[t._v("#")]),t._v(" 导入书库")]),t._v(" "),a("ul",[a("li",[t._v("上一步初始化后，书库只有一本Quick Start默认书")]),t._v(" "),a("li",[t._v("可以通过面板上传按钮自行上传")]),t._v(" "),a("li",[t._v("也可以通过calibre命令行导入其他一些书库")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/gentlemanhu/public-store/raw/master//images/20200802184602.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"创建calibre数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建calibre数据库"}},[t._v("#")]),t._v(" 创建calibre数据库")]),t._v(" "),a("blockquote",[a("p",[t._v("这里需要用到calibre官方程序，尽管在vps不能可视化操作，但是命令行能用，导入书籍信息，自动归类等还是很好用")])]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("下载安装calibre\n"),a("a",{attrs:{href:"https://calibre-ebook.com/download_linux",target:"_blank",rel:"noopener noreferrer"}},[t._v("download"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("仔细参照官方要求环境安装，如果环境不匹配，很折腾")]),t._v(" "),a("p",[t._v("python：2.7.9+（❤️)")]),t._v(" "),a("p",[t._v("gcc: 5.4.0+")]),t._v(" "),a("p",[t._v("具体看安装时候提示信息，不匹配会出现各种问题")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用"),a("code",[t._v("calibredb")]),t._v("命令将个人书籍导入数据库")])])])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("calibredb "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/media/Books/代码相关"')]),t._v(" --add --duplicates --ignore "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.md"')]),t._v(" --recurse --library-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/root/tmp/bookslib\n")])])]),a("p",[t._v("上述表示递归添加"),a("code",[t._v("media/Books/代码相关")]),t._v("目录下所有支持图书，不含"),a("code",[t._v("md")]),t._v("，并允许重复，最后规定了"),a("code",[t._v("metadata.db")]),t._v("的路径")]),t._v(" "),a("blockquote",[a("p",[t._v("其他指令参照官方man"),a("a",{attrs:{href:"https://manual.calibre-ebook.com/generated/en/calibredb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("手册"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"kindle推送配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kindle推送配置"}},[t._v("#")]),t._v(" kindle推送配置")]),t._v(" "),a("blockquote",[a("p",[t._v("详见后台配置")])]),t._v(" "),a("h4",{attrs:{id:"opds配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opds配置"}},[t._v("#")]),t._v(" opds配置")]),t._v(" "),a("blockquote",[a("p",[t._v("https://site/opds")]),t._v(" "),a("p",[t._v("站点后加"),a("code",[t._v("opds")]),t._v("就是opds地址，导入其他软件可用")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/gentlemanhu/public-store/raw/master//images/image-20200804105005437.png",alt:"image-20200804105005437"}})]),t._v(" "),a("h3",{attrs:{id:"愉快看书-收藏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#愉快看书-收藏"}},[t._v("#")]),t._v(" 愉快看书(收藏)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("https://taotao.521521.ml  导入了GD珍藏的几个T的书库")])]),t._v(" "),a("li",[a("p",[t._v("https://book.crushing.xyz  演示，只有一本")]),t._v(" "),a("blockquote",[a("p",[t._v("利用OD和GD大容量，个人图书馆，爽~")]),t._v(" "),a("p",[t._v("也许只是收藏吧~😑")])])])]),t._v(" "),a("hr"),t._v(" "),a("blockquote",[a("p",[t._v("更多配置细节还得看个人需求")]),t._v(" "),a("p",[t._v("记录探索，探索记录")])]),t._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://rclone.org/install/#script-installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("rclone"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://calibre-ebook.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Calibre"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/janeczku/calibre-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("Calibre-web"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/iwestlin/gd-utils",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gd-utils"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=r.exports}}]);