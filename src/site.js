const siteList = [
    {
        category: 'fish',
        siteList: [
            {
                logo: "https://cdn.itjuzi.com/images/28f521fed39c3b7e48fecd218d5bca6e.png",
                title: "一觉醒来世界发生了什么",
                description: "一觉醒来世界发生了什么",
                url: "http://42.192.209.154:8090/",
            },
            {
                logo: "https://img.zcool.cn/community/016a8359a61d57a8012028a96b4610.jpg@1280w_1l_2o_100sh.jpg",
                title: "Bilibili",
                description:
                    "bilibili是国内知名的视频弹幕网站，这里有最及时的动漫新番，最棒的ACG氛围，最有创意的Up主。",
                url: "https://www.bilibili.com",
            },
            {
                logo: "https://pic1.zhimg.com/80/v2-3196976653b75cd4c9cee880d805d1cc_qhd.jpg",
                title: "知乎",
                description:
                    "有问题，上知乎。分享你刚编的故事。",
                url: "https://www.zhihu.com/",
            },
            {
                logo: "https://www.sj520.cn/sc/ima/weibo_sj520_11.jpg",
                title: "新浪微博",
                description:
                    "随时随地发现新鲜事！微博带你欣赏世界上每一个精彩瞬间。",
                url: "https://weibo.com/",
            },
            {
                logo: "https://th.bing.com/th/id/R1e6921e0dce9cc5a994ccd0a1d6c4657?rik=mXzZQSIrCUxwnQ&riu=http%3a%2f%2fis2.mzstatic.com%2fimage%2fthumb%2fPurple111%2fv4%2fd0%2f44%2f93%2fd04493f5-6b2f-3e88-9c37-a2d456931f24%2fsource%2f1200x630bb.jpg&ehk=Z%2fp%2bI3LpwCT56vAsMKu2h1eZPO%2f0t4RDDQaNzzpN5qA%3d&risl=&pid=ImgRaw",
                title: "百度贴吧",
                description:
                    "贴吧,百度贴吧,论坛,兴趣,社区,BBS",
                url: "https://tieba.baidu.com/",
            },
            {
                logo: "https://tu1.whhost.net/uploads/20190213/16/1550045995-tLkybDqwXA.jpg",
                title: "鱼塘",
                description:
                    "鱼塘热榜提供了国内外各大热门网站的聚合信息、热榜、榜单,包括了知乎、微博、虎扑、V2EX、贴吧、Github、抖音、今日头条等等,在这里你能够轻松了解全网最新资讯",
                url: "https://mo.fish/",
            },
            {
                logo: "https://tva3.sinaimg.cn/crop.0.0.180.180.180/61ca8acdjw1e8qgp5bmzyj2050050aa8.jpg?KID=imgbed,tva&Expires=1586465202&ssig=yatjm5JNw8",
                title: "豆瓣",
                description:
                    "提供图书、电影、音乐唱片的推荐、评论和价格比较，以及城市独特的文化生活。",
                url: "https://www.douban.com/",
            },
            {
                logo: "https://tse1-mm.cn.bing.net/th/id/OIP-C.LHKDcbS9ndEfxBXEtBXOAQAAAA?pid=ImgDet&rs=1",
                title: "V2EX",
                description:
                    "创意工作者的社区。讨论编程、设计、硬件、游戏等令人激动的话题。",
                url: "https://www.v2ex.com",
            },
            {
                logo: "https://tse3-mm.cn.bing.net/th/id/OIP-C.XzlBx_ld4MAWDOVgNTy6OAAAAA?pid=ImgDet&rs=1",
                title: "少数派",
                description:
                    "少数派致力于更好地运用数字产品或科学方法，帮助用户提升工作效率和生活品质",
                url: "https://sspai.com/",
            },
            {
                logo: "https://img.zcool.cn/community/012a79593fc2eea8012193a3603c23.png@1280w_1l_2o_100sh.png",
                title: "腾讯视频",
                description:
                    "腾讯视频 - 中国领先的在线视频媒体平台,海量高清视频在线观看",
                url: "https://v.qq.com/",
            },
            {
                logo: "https://image.91chep.com/e9189e66c0b74a79b2a4151b0fa5cc37680_680.jpg",
                title: "网易云音乐",
                description:
                    "网易云音乐是一款专注于发现与分享的音乐产品",
                url: "https://music.163.com/",
            },
            {
                logo: "https://cdn.itjuzi.com/images/28f521fed39c3b7e48fecd218d5bca6e.png",
                title: "即刻",
                description:
                    "记录我，遇见你",
                url: "https://web.okjike.com/",
            },
            {
                logo: "https://tse1-mm.cn.bing.net/th/id/OIP-C.N-2HKPBLsUeUyILCBKjBSAHaIP?pid=ImgDet&rs=1",
                title: "ZzzFun动漫视频网",
                description:
                    "z站,zzzfun,弹幕视频,动画,好看动漫,动漫网站,新番,日本最新动漫,动漫下载",
                url: "https://music.163.com/",
            },
            {
                logo: "https://th.bing.com/th/id/R4e4b46348d66086694ba3a09cbd0da40?rik=fivwOcNv9JtTiw&riu=http%3a%2f%2fpic310.nipic.com%2ffile%2f20200719%2f18065193_225637462085_2.jpg&ehk=q3NDEN2Kh7ff%2fGgbx8yKsL3zJOAC1Z%2fS4Hz9rbvJ9NM%3d&risl=&pid=ImgRaw",
                title: "真不卡影院",
                description:
                    "真不卡影院搜集最新电影、高清电影、超清蓝光电影等视频免费分享给大家在线观看，真不卡影院是一个真正我不卡的电影网站。",
                url: "https://www.zhenbuka2.com/",
            },
            {
                logo: "https://th.bing.com/th/id/Raac0b325586521ba52a6256305303c22?rik=yUYgU%2fzz%2blxJ2Q&riu=http%3a%2f%2fimg0.gao7.com%2ffiles%2fappleimage%2f9EC%2f9ECC4DD0-F74B-442C-A9A2-49433DD7E564.jpg&ehk=KcErgpUVkp8obCtMNb5bcAe1pyFTUXNIZzysbFJmmXI%3d&risl=&pid=ImgRaw",
                title: "斗鱼直播",
                description:
                    "每个人的直播平台",
                url: "https://www.douyu.com/",
            },
            {
                logo: "https://pic3.zhimg.com/50/6146d2c683244f64e7eaf4c284928200_hd.jpg",
                title: "虎牙直播",
                description:
                    "技术驱动娱乐",
                url: "https://www.huya.com/",
            },
            {
                logo: "https://th.bing.com/th/id/R45a59b1e877ec3af6fa2a41972b10a75?rik=2OgJk0%2fNcydE4Q&riu=http%3a%2f%2fupload-images.jianshu.io%2fupload_images%2f2727008-a754a60a18a32860.jpg&ehk=KUbVfqLK1q63i%2f90ccdpfPt6kISzg6OKDY5kLp02AYY%3d&risl=&pid=ImgRaw",
                title: "淘宝",
                description:
                    "淘宝网 - 亚洲较大的网上交易平台，提供各类服饰、美容、家居、数码、话费 / 点卡充值… ",
                url: "https://www.taobao.com/",
            },
            {
                logo: "https://th.bing.com/th/id/R1151b41009f51fcd9d0d3c9e1087c047?rik=Mch%2bAcKm4HUh3g&riu=http%3a%2f%2fpic291.nipic.com%2ffile%2f20200512%2f28468129_170011388437_2.jpg&ehk=LQjpXZjJ%2bAYS5OyP9PVeFYk%2bR8N%2bAhJGAZmwc8CJj%2fo%3d&risl=&pid=ImgRaw",
                title: "京东",
                description:
                    "京东(JD.COM)-正品低价、品质保障、配送及时、轻松购物！",
                url: "https://www.jd.com/",
            },
        ]
    },
    {
        category: 'tools',
        siteList: [
            {
                logo: "https://gw.alipayobjects.com/zos/rmsportal/xwaMkpycAdwCBrdgyWiT.png",
                title: "语雀",
                description:
                    "十万阿里人都在用的笔记与文档知识库，面向企业、组织或个人，提供全新的体系化知识管理，打造轻松流畅的工作协同。",
                url: "https://www.yuque.com/dashboard",
            },
            {
                logo: "https://th.bing.com/th/id/R348cf2c0f6794bcfea2b39299ea76eb1?rik=hGlq2MxZbDM4Zw&riu=http%3a%2f%2fis5.mzstatic.com%2fimage%2fthumb%2fPurple117%2fv4%2f63%2f44%2fa2%2f6344a2c0-9c7f-da6c-d345-0d1335dc91be%2fsource%2f512x512bb.jpg&ehk=FmedyOGGEjiAhkttPBqiDYnJ0aje1x8Sm4PK9fzA4n0%3d&risl=&pid=ImgRaw",
                title: "QQ邮箱",
                description:
                    "QQ邮箱，为亿万用户提供高效稳定便捷的电子邮件服务",
                url: "https://mail.qq.com/",
            }, {
                logo: "https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/4a/43/c7/4a43c76d-a72d-c0f4-f19a-192d37fe7f59/source/200x200bb.jpg",
                title: "奶牛快传",
                description:
                    "传文件,网盘,云盘,网络硬盘,发文件,收文件,文件传输,简单高效,wetransfer",
                url: "https://cowtransfer.com/",
            }, {
                logo: "https://pic2.zhimg.com/80/v2-70bd8ca1c932ecee651a9b9a0988f572_qhd.jpg",
                title: "石墨文档",
                description:
                    "石墨文档是一款轻便、简洁的在线协作文档工具，让你与他人轻松完成协作撰稿、方案讨论、会议记录和资料共享等工作。",
                url: "https://shimo.im/",
            }, {
                logo: "https://img.zcool.cn/community/019f8e5badf65ca8012099c86d7efc.jpg@1280w_1l_2o_100sh.jpg",
                title: "草料二维码",
                description:
                    "草料二维码生成器",
                url: "https://cli.im/",
            }, {
                logo: "https://th.bing.com/th/id/R1c588f2cc176d22e21b2da8eb77a2582?rik=nKRHVcV0x%2fSsng&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20120725%2f20120725224247-613509906.jpg&ehk=TKlzxdxAok6FkNZGxj9BIYb9uChb9hJ3VPdMNyA5xYA%3d&risl=&pid=ImgRaw",
                title: "超能搜",
                description:
                    "超能搜 - 网盘搜索神器",
                url: "https://www.chaonengso.com/",
            }, {
                logo: "https://p1.ssl.qhmsg.com/dr/270_500_/t01245a4df925c53d28.jpg",
                title: "快递100",
                description:
                    "快递100,在线寄件,寄快递,快递查询,快递单号查询,快递API,寄件API,快递查询API,快递接口,商家寄件,快递打印,快递面单",
                url: "https://www.kuaidi100.com/",
            }, {
                logo: "https://thumb221.jfcdns.com/n231fe31rb168n24/16f5ebc07837a59d.png",
                title: "测速网",
                description:
                    "测速网提供网速测试, 网络质量检测, 5G测速, IPv6测速, 带宽检测, Wi-Fi测速",
                url: "https://www.speedtest.cn/",
            }, {
                logo: "https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1397198778/b61dfc18bf802b7187c52302042112ed.png",
                title: "ProcessOn",
                description:
                    "免费在线流程图思维导图-专业强大的作图工具，支持多人实时在线协作，可用于原型图、UML、BPMN、网络拓扑图等多种图形绘制",
                url: "https://processon.com/",
            }, {
                logo: "https://th.bing.com/th/id/Rbdd48f7ec7a5b7af5b144e49e6ca8c2e?rik=%2b29OjClIfh5iDA&riu=http%3a%2f%2fi7.qhimg.com%2ft01444f56a46d63e58e.jpg&ehk=vBFVlVLi6%2bVRgXtvQTqvP3ronuEdphAuElBzqAW4AGY%3d&risl=&pid=ImgRaw",
                title: "百度脑图",
                description:
                    "百度脑图，便捷的脑图编辑工具 - 控制创意，如此简单。让您在线上直接创建、保存并分享你的思路。免安装 云存储 易分享 体验舒适 功能丰富",
                url: "https://naotu.baidu.com/",
            }, {
                logo: "https://th.bing.com/th/id/R4e66044540677fa858ea7c552e9db8da?rik=Ky7w5sv1o7YZMQ&riu=http%3a%2f%2fsrc.onlinedown.net%2fimages%2fpc_imges%2fpc_12%2f592f50d55c52d403401496273109.jpg&ehk=AaEBY%2bevT7oRrrmcOdoGE4wjTHKD8nLGge3vXkAhXxs%3d&risl=&pid=ImgRaw",
                title: "Google翻译",
                description:
                    "Google 的免费翻译服务可提供简体中文和另外 100 多种语言之间的互译功能，可让您即时翻译字词、短语和网页内容。",
                url: "https://translate.google.cn/",
            }, {
                logo: "https://i.52112.com/icon/jpg/256/20161011/3315/174714.jpg",
                title: "TOOL.LU",
                description:
                    "程序员的在线工具箱",
                url: "https://tool.lu/",
            },
        ]
    },
    {
        category: 'game',
        siteList: [
            {
                logo: "https://pic1.zhimg.com/v2-73f38418b63f53a0baea76302f720bec_xl.jpg",
                title: "机核GCORES",
                description:
                    "机核一直致力于分享游戏玩家的生活，以及深入探讨游戏相关的文化。它们同时也会辐射到二次元甚至电影的领域，这些内容非常值得分享给热爱游戏的您。",
                url: "https://www.gcores.com/",
            }, {
                logo: "https://pic2.zhimg.com/v2-5d688b2467f0b780e4b0333d7d7f2833_xl.jpg",
                title: "游戏时光VGTime",
                description:
                    "专业、严谨、有趣，游戏时光致力于分享游戏乐趣，为玩家们提供快速准确的新闻资讯、全面的资料和友好开放的交流平台。",
                url: "https://www.vgtime.com/",
            }, {
                logo: "https://pic1.zhimg.com/50/v2-2a9c6ed72cf475d25431350bbaf2283a_l.jpg",
                title: "游研社",
                description:
                    "游研社,游戏研究社,怀旧游戏,经典游戏,经典动画,社长聊街机,社长说,游研剧场,老四强,长鼻君,独翼神龙,单机游戏,手机游戏,网络游戏,主机游戏",
                url: "https://www.yystv.cn/",
            }, {
                logo: "https://avatars3.githubusercontent.com/u/31462231?s=280&v=4",
                title: "TapTap",
                description:
                    "发现好游戏",
                url: "https://www.taptap.com/",
            }, {
                logo: "https://tse3-mm.cn.bing.net/th/id/OIP-C.ePVugO2xr2EvxZHeMm6FgQHaHa?pid=ImgDet&rs=1",
                title: "Steam",
                description:
                    "创造游戏的终极目的地",
                url: "https://store.steampowered.com/",
            }, {
                logo: "https://th.bing.com/th/id/Re70c0eef5570dcfa7514037783f50899?rik=8j3NVKw0rnSvxA&riu=http%3a%2f%2fwww.tuquu.com%2fUploadFiles%2f2014-11%2f0%2f201411171531479619.png&ehk=SoQsdp%2fkahSSuj1UGSrtocrkR%2bED9JPYkk%2bG6Ba1DJA%3d&risl=&pid=ImgRaw",
                title: "17173",
                description:
                    "17173是网络游戏门户站,全年365天保持不间断更新,您可以在这里获得专业的游戏新闻资讯,完善的游戏攻略专区,人气游戏论坛以及游戏测试账号等,是游戏玩家首选网络游戏资讯门户网站。",
                url: "https://www.17173.com/",
            }, {
                logo: "https://tse4-mm.cn.bing.net/th/id/OIP-C.Vfxk9h7ewmqODD394E01PwAAAA?pid=ImgDet&rs=1",
                title: "游民星空",
                description:
                    "游民星空是国内单机游戏门户网站,提供特色的游戏资讯,大量游戏攻略,经验,评测文章,以及热门游戏资料专题",
                url: "https://www.gamersky.com/",
            }, {
                logo: "https://p1.ssl.qhmsg.com/dr/270_500_/t0148ad69b86f340ba4.png",
                title: "游侠网",
                description:
                    "单机游戏_单机游戏下载_单机游戏门户_游侠网",
                url: "https://www.ali213.net/",
            }, {
                logo: "https://th.bing.com/th/id/Rd27f5d2ff7885f7a45fbe3c400d0e01c?rik=m6xMPd5u2W3diQ&riu=http%3a%2f%2fp8.qhmsg.com%2fdr%2f270_500_%2ft013de9fb978190219a.jpg&ehk=75VDuHRB8XHhC8Le56eRCwu4A9%2fy2eZCWaWuf9AOECQ%3d&risl=&pid=ImgRaw",
                title: "电玩巴士",
                description:
                    "电玩巴士,tgbus,电视游戏,主机游戏,电子游戏,网络游戏,手机游戏,网页游戏,PS5,Xbox Series X,任天堂switch",
                url: "http://www.tgbus.com/",
            }
        ]
    },
    {
        category: 'develop',
        siteList: [
            {
                logo: "https://pngimg.com/uploads/github/github_PNG88.png",
                title: "Github",
                description:
                    "Build software better, together",
                url: "https://www.github.com",
            }, {
                logo: "https://pic2.zhimg.com/50/8501315f73063a1d6c7517f62282995a_qhd.jpg",
                title: "慕课网",
                description:
                    "程序员的梦工厂",
                url: "https://www.imooc.com/",
            }, {
                logo: "https://tse2-mm.cn.bing.net/th/id/OIP-C.PIWk2kCFQJEg6SnYLyxeEAHaHa?pid=ImgDet&rs=1",
                title: "网易云课堂",
                description:
                    "网易云课堂，一个专注于成人终身学习的在线教育平台。",
                url: "https://study.163.com/",
            }, {
                logo: "https://img3.doubanio.com/lpic/s28468893.jpg",
                title: "中国大学MOOC",
                description:
                    "中国大学MOOC(慕课) 国家精品课程在线学习平台",
                url: "https://www.icourse163.org/",
            }, {
                logo: "https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/36/23/97/36239736-ebb9-a563-1c03-86cadca0215a/source/512x512bb.jpg",
                title: "网易公开课",
                description:
                    "网易公开课汇集清华、北大、哈佛、耶鲁等世界名校共上千门课程，覆盖科学、经济、人文、哲学等22个领域，在这里你可以开拓视野看世界，获取有深度的好知识。",
                url: "https://open.163.com/",
            }, {
                logo: "https://th.bing.com/th/id/Rc93422cce08aad2ea42863dd8b15fb88?rik=nP3nCkqJOhzcng&riu=http%3a%2f%2fwww.lgstatic.com%2fthumbnail_300x300%2fimage2%2fM00%2f0C%2fB2%2fCgpzWlYc3AaAP0XsAAAjHAwtnd4756.jpg&ehk=r5NPmn1Ep8lj1%2f4iK1nWPCttzcng1DR%2b85SaHPG%2fI0I%3d&risl=&pid=ImgRaw",
                title: "doyoudo",
                description:
                    "do what you love and master it !",
                url: "https://www.doyoudo.com/",
            }, {
                logo: "https://xitu.gallerycdn.vsassets.io/extensions/xitu/juejin/0.1.2/1597671491568/Microsoft.VisualStudio.Services.Icons.Default",
                title: "掘金",
                description:
                    "掘金-代码不止，掘金不止",
                url: "https://juejin.cn/",
            }, {
                logo: "https://img3.doubanio.com/lpic/s29484334.jpg",
                title: "LeetCode",
                description:
                    "力扣（LeetCode）官网 - 全球极客挚爱的技术成长平台",
                url: "https://leetcode-cn.com/",
            }, {
                logo: "https://sotuw.com/file/icon/qEPydkxQpVjAprM8QuaQptr1.png",
                title: "iconfont",
                description:
                    "iconfont-阿里巴巴矢量图标库",
                url: "https://www.iconfont.cn/",
            }, {
                logo: "https://tse4-mm.cn.bing.net/th/id/OIP-C.3gDvo-tuHCX3BhqhYUikuQAAAA?pid=ImgDet&rs=1",
                title: "阮一峰的网络日志",
                description:
                    "这里记录每周值得分享的科技内容，周五发布。...",
                url: "http://www.ruanyifeng.com/blog/",
            },
        ]
    },
    {
        category: 'design',
        siteList: [
            {
                logo: "https://tse2-mm.cn.bing.net/th/id/OIP-C.c0Krvx6XL_gMvOAQ2fJ4GgHaHa?pid=ImgDet&rs=1",
                title: "Dribbble",
                description:
                    "国际知名设计分享平台",
                url: "https://dribbble.com/",
            }, {
                logo: "https://img.zcool.cn/community/09160665742642e32f875b70fc57aac.jpg",
                title: "ZCOOL站酷",
                description:
                    "设计师互动平台，发现更好的设计",
                url: "https://www.zcool.com.cn/",
            }, {
                logo: "https://th.bing.com/th/id/R51ba1486f2f06ab8f247b8ad089e0086?rik=iFFQRK8ITzmFfg&riu=http%3a%2f%2fwww.lgstatic.com%2fthumbnail_300x300%2fimage1%2fM00%2f00%2f03%2fCgo8PFTUV_yAC_nZAAFd1AQPRqc130.jpg&ehk=Mbw%2fcxMGuSxfzVzgFvQxNkdNA%2fTN3GavK6haLT2Cyrc%3d&risl=&pid=ImgRaw",
                title: "花瓣网",
                description:
                    "陪你做生活的设计师",
                url: "https://huaban.com/",
            }, {
                logo: "https://tse1-mm.cn.bing.net/th/id/OIP-C.TEg9Kit8hEvS6pIyaJYOrgHaHa?pid=ImgDet&rs=1",
                title: "Unsplash",
                description:
                    "精美的免版权图片网站",
                url: "https://unsplash.com/",
            }, {
                logo: "https://tse4-mm.cn.bing.net/th/id/OIP-C.RbJAewGakNy4IUzffUEITwHaHa?pid=ImgDet&rs=1",
                title: "Pexels",
                description:
                    "才华横溢的摄影作者在这里免费分享最精彩的素材图片和视频。",
                url: "https://www.pexels.com/zh-cn",
            }, {
                logo: "https://static.vecteezy.com/system/resources/previews/000/603/709/original/p-logo-letter-business-corporate-design-vector.jpg",
                title: "Foter",
                description:
                    "超3亿张免费图片",
                url: "https://foter.com/",
            }, {
                logo: "https://tse4-mm.cn.bing.net/th/id/OIP-C.XTobWvOq8AJRsZNdMVLPYgHaHa?pid=ImgDet&rs=1",
                title: "Ystone",
                description:
                    "1亿正版图片、字体、音乐素材",
                url: "https://www.yestone.com/",
            }, {
                logo: "https://th.bing.com/th/id/R1d1dfc850ee71929d0bfed21a1700100?rik=f%2f00pTxmflXnXQ&riu=http%3a%2f%2fwww.techspot.com%2fimages2%2fdownloads%2ftopdownload%2f2014%2f06%2fPinterest.png&ehk=J3leTVlYqrqmaxoznVnoBpBoqp3o1wiHK498%2baDTgWw%3d&risl=&pid=ImgRaw",
                title: "Pinterest",
                description:
                    "全球最大的创意灵感图片分享网站",
                url: "https://www.pinterest.com/",
            }, {
                logo: "https://avatars0.githubusercontent.com/u/1657867?s=280&v=4",
                title: "Pixivic",
                description:
                    "每日插画排行榜",
                url: "https://pixivic.com/",
            }, {
                logo: "https://th.bing.com/th/id/R52a500484fc4216e5087661381776cdc?rik=jUQdlwS3Acl9bQ&riu=http%3a%2f%2fwww.hepou.com%2fimages%2f2019%2f12%2fhellofontlogo.jpg&ehk=HCNk3LSqoyqv8CFz1%2b9SH8Yxa9C5i%2fKwGPbjgCnIG%2bY%3d&risl=&pid=ImgRaw",
                title: "字由",
                description:
                    "设计师必备字体利器",
                url: "https://www.hellofont.cn/",
            }, {
                logo: "https://th.bing.com/th/id/R78701c7c5669801856c906a8161a14f6?rik=hzFSPBfbV%2bQ9uQ&riu=http%3a%2f%2fpic35.nipic.com%2f20131113%2f3347542_144524096399_2.jpg&ehk=LYtdvL0%2bT%2bTXlab%2fgccSoQzV9hrbgtHmCWp3vuyDEFc%3d&risl=&pid=ImgRaw",
                title: "中国色",
                description:
                    "中国传统颜色",
                url: "http://zhongguose.com/",
            }, {
                logo: "https://tse4-mm.cn.bing.net/th/id/OIP-C.731c4ouE1UQxcuUMAA0f8AHaHa?pid=ImgDet&rs=1",
                title: "Color Hunt",
                description:
                    "数千种时尚的调色板",
                url: "https://colorhunt.co/",
            },
        ]
    },
    {
        category: 'news',
        siteList: [
            {
                logo: "https://tse1-mm.cn.bing.net/th/id/OIP-C.THjXUYK610UJipOCYp_gvQAAAA?pid=ImgDet&rs=1",
                title: "36Kr",
                description:
                    "让一部分人先看到未来",
                url: "https://36kr.com/",
            }, {
                logo: "https://th.bing.com/th/id/Rf42c406efc4823d99daf405bc92d6389?rik=AGqqL9vt9THoNQ&riu=http%3a%2f%2fis1.mzstatic.com%2fimage%2fthumb%2fPurple71%2fv4%2f3b%2f3e%2fca%2f3b3ecacc-f214-8814-bcfc-7f3ecfdc586a%2fsource%2f512x512bb.png&ehk=UyoSqWyQoy%2fwV9VjB893zbLNsoq%2bwYlA7HQIStuzy90%3d&risl=&pid=ImgRaw",
                title: "IT之家",
                description:
                    "数码、科技、生活",
                url: "https://www.ithome.com/",
            }, {
                logo: "https://tse4-mm.cn.bing.net/th/id/OIP-C.RWCk8fSU4-UbfizW_xRiZAHaHa?pid=ImgDet&rs=1",
                title: "果壳",
                description:
                    "科技有意思",
                url: "https://www.guokr.com/",
            }, {
                logo: "https://www.lgstatic.com/thumbnail_300x300/image1/M00/00/4B/CgYXBlTUXPWALtr0AABHn8Ou60A903.png",
                title: "好奇心日报",
                description:
                    "好奇驱动你的世界",
                url: "http://www.qdaily.com/",
            }, {
                logo: "https://tse2-mm.cn.bing.net/th/id/OIP-C.XtfQYXYdhgoc2-a026F_pAAAAA?pid=ImgDet&rs=1",
                title: "爱范儿",
                description:
                    "让未来触手可及",
                url: "https://www.ifanr.com/",
            }, {
                logo: "https://assets.imedao.com/images/aboutUs/ultra_large_logo.png?20151202",
                title: "雪球",
                description:
                    "聪明的投资者都在这里",
                url: "https://xueqiu.com/",
            }, {
                logo: "https://appcenter.yinxiang.com/images/apps/zaker/logo_175.png",
                title: "ZAKER",
                description:
                    "传递有价值的资讯",
                url: "http://www.myzaker.com/",
            }, {
                logo: "https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/aa970icu4bfqzcerrazf",
                title: "界面",
                description:
                    "只服务于独立思考的人群",
                url: "https://www.jiemian.com/",
            }, {
                logo: "https://tvax1.sinaimg.cn/crop.0.0.365.365.180/707e96d5ly8gdi6pwhg9wj20a50a5q5n.jpg?KID=imgbed,tva&Expires=1597253071&ssig=fBoqp8UUJm",
                title: "观察者网",
                description:
                    "中国关怀，全球视野",
                url: "https://www.guancha.cn/",
            }, {
                logo: "https://th.bing.com/th/id/Rfeebdf56924e893f0a805e21ec71935f?rik=VW04A%2bKODgmh4g&riu=http%3a%2f%2fpic164.nipic.com%2ffile%2f20180511%2f13041535_153707649733_2.jpg&ehk=EuwpkgIGnGOg1SLw8YQ%2fAThJgA2zP0cD8VBvakdns5A%3d&risl=&pid=ImgRaw",
                title: "网易新闻",
                description:
                    "网易提供的新闻资讯平台，各有态度",
                url: "https://news.163.com/",
            }, {
                logo: "https://th.bing.com/th/id/R28ef1ac01bbf7602ed86cf801954eda8?rik=WzSEmnNW6E2FJw&riu=http%3a%2f%2fsem.g3img.com%2fsite%2f34004484%2f20151206205127_38866.jpg&ehk=4%2b0ucRsCsix0WOLaULR769XOrP3SzSUmaO1QSzULBHQ%3d&risl=&pid=ImgRaw",
                title: "腾讯新闻",
                description:
                    "腾讯提供的免费新闻服务",
                url: "https://news.qq.com/",
            }, {
                logo: "https://p1.ssl.qhimg.com/dr/270_500_/t01e8cb0ef8d3f272db.png?size=268x262",
                title: "凤凰网",
                description:
                    "中国领先的综合门户网站",
                url: "https://www.ifeng.com/",
            },
        ]
    }
]

export {
    siteList
}
