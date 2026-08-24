var cards = [
  // ============================================================
  // 🐾 动物认知 (50条)
  // ============================================================
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐘💦🌿',
    title: '大象的长鼻子',
    question: '❓ 大象的鼻子能做什么？',
    answer: '大象的鼻子就像我们的小手一样万能✋！渴了的时候，它把鼻子伸进水里“咕噜咕噜”吸满水💦，再卷起来送进嘴里，像用吸管喝水一样方便！饿了的时候，它用鼻子轻轻一卷🌿，就能把高高树枝上的嫩叶摘下来，像我们用手摘苹果一样灵活！想表达喜欢的时候，大象会和好朋友把鼻子缠在一起摇一摇🐘🤝🐘，就像小朋友手拉手说“你好”一样温暖！最厉害的是——大象的鼻子里有<span class="highlight">4万多块小肌肉</span>💪，比我们全身的肌肉加起来还多！所以它能用鼻子捡起一颗小花生米🥜，也能拔起一棵大树🌳，力气超级大！<span class="fun-fact">大象的鼻子还是“潜水管”呢！过河时把鼻子举出水面，就能在水下走路啦🏊！</span>',
    number: 1
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐧❄️🔥',
    title: '企鹅为什么不怕冷',
    question: '❓ 南极那么冷，企鹅怎么不怕？',
    answer: '企鹅身上穿了<span class="highlight">三件“保暖神器”</span>🧥！第一件是“羽毛外套”——又密又短的羽毛像防水冲锋衣，风🌬️和冰冷的海水都钻不进去，雨水也淋不透！第二件是“脂肪毛衣”——皮肤下面厚厚的脂肪层，像穿了一件加厚羽绒服🔥，又保暖还能储存能量！第三件是“抱团战术”——成千上万只企鹅挤在一起，大家轮流站在外面挡风，谁也不用一直挨冻❄️，就像小朋友冬天挤在一起取暖一样温暖又团结！<span class="fun-fact">企鹅的脚和嘴也会冷，但它们有“热交换系统”，能把脚里的冷血和身体里的热血交换，保护脚不被冻伤🦶！</span>',
    number: 2
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦒🌳🍃',
    title: '长颈鹿的长脖子',
    question: '❓ 长颈鹿的脖子为什么那么长？',
    answer: '长颈鹿的脖子有<span class="highlight">2米多</span>📏，比一个大人站起来还高！有了这根“高个子吸管”，它就能吃到大树最顶上最嫩最好吃的叶子🌳🍃，那些矮处的叶子留给别的动物吃，它一点也不着急！而且站得高看得远🦒，远远就能发现狮子🦁有没有靠近，比哨兵还厉害！最神奇的是——虽然脖子那么长，但里面的骨头和我们人类一样，都只有<span class="highlight">7块</span>🦴！只不过每一块骨头都特别长，像积木一样叠起来，就变成了大长脖！<span class="fun-fact">长颈鹿喝水的时候可难了，要把前腿岔开、脖子弯下去，像做瑜伽一样，而且每次喝水都很警惕，因为这时候最容易遇到危险🧘！</span>',
    number: 3
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐰❤️✨',
    title: '兔子的红眼睛',
    question: '❓ 小白兔的眼睛为什么是红色的？',
    answer: '其实小白兔的眼睛<span class="highlight">并没有颜色</span>！白兔的身体里缺少一种叫“色素”的东西🎨，所以它的毛是白色的，眼睛也是透明的✨！透明的眼睛就像一扇玻璃窗🪟，透过它，我们能看到眼睛里面红红的血管🩸——就像透过玻璃看到墙后面的红水管一样！因为这些血管布满了眼睛，所以看起来整个眼睛就是红色的❤️，像两颗漂亮的红宝石！但不是所有兔子眼睛都是红的哦——灰兔子的眼睛是黑色的👀，因为它们的身体里有色素！<span class="fun-fact">兔子眼睛长在脑袋两侧，能看到后面和侧面👁️，几乎360度无死角，但是正前方有一小块盲区，所以有时候会撞到东西！</span>',
    number: 4
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐱📏🌙',
    title: '猫咪的胡须',
    question: '❓ 猫咪的胡须有什么用？',
    answer: '猫咪的胡须是它随身携带的<span class="highlight">“智能小尺子”</span>📏！胡须的长度大约和它的身体一样宽，当猫咪想钻洞🕳️的时候，先用胡须探一探：如果胡须能轻松过去，身体就能过去；如果胡须碰到了两边，就说明太窄了，强行钻会被卡住😸！而且猫咪的胡须特别灵敏，能感觉到空气的微小流动🌙，在黑漆漆的夜里走路时，胡须碰到气流的变化，就能知道前面有什么东西——像盲人的拐杖一样！胡须还反映了猫咪的心情😺：向前伸表示好奇，向后贴表示害怕，像表情一样会“说话”！<span class="fun-fact">猫咪的胡须不止长在嘴巴旁边，眉毛上、下巴上、甚至脚腕上也有短短的胡须哦！</span>',
    number: 5
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐶🌡️👅',
    title: '狗狗吐舌头',
    question: '❓ 狗狗为什么总伸舌头喘气？',
    answer: '狗狗不会像我们一样出汗💦，它全身几乎没有汗腺，没法通过流汗来降温。那它怎么散热呢？答案就是<span class="highlight">伸舌头喘气</span>👅！当狗狗伸出舌头“哈哈”喘气时，舌头上的水分会蒸发💨——就像风把湿毛巾吹干一样——蒸发带走了热量，狗狗就凉快了！所以狗狗伸舌头相当于它的<span class="highlight">“小风扇”</span>🌬️，越热的时候伸得越长、喘得越快！运动完后狗狗也会伸舌头喘气，就像我们跑完步大口呼吸一样🌡️！<span class="fun-fact">狗狗的舌头上有超多血管，所以舌头又大又红，散热面积大，降温速度更快！有些狗狗的舌头是蓝色的，比如松狮犬，超特别🦴！</span>',
    number: 6
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐬🏊🎵',
    title: '海豚会唱歌',
    question: '❓ 海豚为什么喜欢“唱歌”？',
    answer: '海豚不是真的在“唱歌”🎤，而是在用声音<span class="highlight">“看”世界</span>🌍！海豚会从头顶的“呼吸孔”发出“咔嗒咔嗒”的声波🎵，声波碰到鱼🐟、礁石、船只，就会像回声一样弹回来。海豚用耳朵接收这些回声，在脑子里形成一幅“声音地图”🗺️——前方有什么、多远、多大，全部一清二楚！这个本领叫<span class="highlight">“回声定位”</span>📡，比雷达还要准！海豚还能用声音和伙伴“聊天”🐬💬🐬，不同的叫声代表不同的意思：有“我找到吃的了”“快跟上”“有危险快跑”！<span class="fun-fact">每只海豚都有自己的“名字叫声”📛，就像我们的名字一样，妈妈用这个叫声喊自己的孩子，小海豚一下就认出来了！</span>',
    number: 7
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐿️🍂🧺',
    title: '松鼠藏坚果',
    question: '❓ 松鼠为什么到处埋坚果？',
    answer: '松鼠是在为冬天<span class="highlight">“存零食”</span>呢🌰！秋天的时候，松鼠特别勤劳，到处捡橡子🌰、核桃🥜、松果，然后一颗一颗埋到树根下、草丛里、石头缝里——就像一个藏宝游戏！到了冬天❄️，外面天寒地冻、食物很少，松鼠就靠这些“存粮”过日子。最厉害的是——松鼠有<span class="highlight">超级记忆力</span>🧠，能记住几百个藏宝地点！它用鼻子闻、用眼睛看树上的标记，就能从雪地里挖出自己埋的坚果，像我们玩“找宝藏”游戏一样🐿️！不过松鼠有时候也会忘记一些埋藏点，这些被忘记的坚果第二年就长成了小树苗🌱！<span class="fun-fact">一只松鼠一个秋天能埋上<span class="highlight">3000到10000颗</span>坚果，像一个小小的“自然银行家”💰！</span>',
    number: 8
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦉🌙👀',
    title: '猫头鹰的夜视眼',
    question: '❓ 猫头鹰为什么晚上看得见？',
    answer: '猫头鹰的眼睛就像<span class="highlight">“超级夜视仪”</span>🔭！它的瞳孔特别大，像两个大圆盘子，能收很多很多光✨——哪怕只有一点点月光🌟，它的眼睛也能把这些光聚拢起来，让它在夜里看东西像白天一样清楚！而且猫头鹰的眼睛里有一种特殊的“感光细胞”👀，对微弱的光线特别敏感，比人类的眼睛敏感<span class="highlight">100倍</span>！更厉害的是——猫头鹰的脖子可以转<span class="highlight">270度</span>🦉，几乎转一整圈！因为它眼睛不能转，所以靠灵活的大脖子来左右看，不回头就能看背后！<span class="fun-fact">猫头鹰的耳朵也不对称🫎——一只高一只低，这样能精确听出小老鼠🪤在草丛里往哪个方向跑，一抓一个准！</span>',
    number: 9
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦋🌺🌿',
    title: '蝴蝶的舌头',
    question: '❓ 蝴蝶怎么吃东西？',
    answer: '蝴蝶的嘴巴是一根<span class="highlight">像吸管一样的长舌头</span>🥤，名字叫“虹吸式口器”，平时像弹簧一样卷起来藏在脑袋下面，不占地方！当它找到美味的花蜜🌸时，就把这根“吸管”伸直，像我们用吸管喝奶茶一样🍹，轻轻扎进花蕊深处，“滋溜滋溜”把花蜜吸出来，甜甜的超级好吃！这根舌头特别长🦋——有的蝴蝶舌头比它的身体还要长，能伸到很深很深的花里！而且蝴蝶吃东西只吃<span class="highlight">“液体食物”</span>💧，除了花蜜，还会吸树汁、果汁、甚至泥水里的矿物质！<span class="fun-fact">蝴蝶的舌头其实是由两根“小管子”拼起来的🫧，像把两根吸管并在一起用，平时不用的时候卷起来，又方便又干净！</span>',
    number: 10
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐌🏠☔',
    title: '蜗牛背房子',
    question: '❓ 蜗牛为什么背着壳？',
    answer: '蜗牛背上的壳是它的<span class="highlight">“移动小房子”</span>🏠，走到哪儿背到哪儿，特别方便！天气太干燥的时候🌞，蜗牛就缩回壳里，把壳口用一层薄薄的“黏液门”封住，防止水分蒸发——就像我们关门关窗一样！下雨天☔也不怕，壳就是它的雨衣，雨水淋不到软软的身体！遇到危险的时候🐦，蜗牛“嗖”一下缩回壳里，又硬又滑的壳让敌人咬不动吞不下，超级安全！最神奇的是——蜗牛的壳和它的身体是<span class="highlight">长在一起的</span>🔄，壳是它骨骼的一部分，会随着蜗牛长大而长大，像我们的骨骼一样不断生长！<span class="fun-fact">蜗牛的壳是按顺时针或逆时针方向旋转的🌀，而且旋转方向一生不变，像指纹一样是每只蜗牛的“身份证”！</span>',
    number: 11
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐊💧💤',
    title: '鳄鱼的眼泪',
    question: '❓ 鳄鱼真的会哭吗？',
    answer: '鳄鱼并不是真的在“哭”😢！它流眼泪是在帮眼睛<span class="highlight">“洗澡”</span>💧！鳄鱼生活在咸水或泥水里，眼睛里容易进沙子和盐粒🏖️，所以它的眼睛里有一对“泪腺”——就像我们的眼睛会分泌泪水一样——不停地分泌液体来冲走脏东西，保持眼睛湿润干净👀！而且鳄鱼在吃东西的时候🐟，嘴巴张得大大的，下颌肌肉会挤压泪腺，眼泪就会被挤出来，看起来就像“边吃边哭”一样！所以“鳄鱼的眼泪”不是伤心，而是<span class="highlight">“生理盐水”</span>🧂，就像我们的眼睛进了沙子会流泪一样！<span class="fun-fact">鳄鱼在水里其实有三层眼皮🛡️——外面一层上下合，里面还有一层透明的“护目镜”，潜入水里也能看清东西！</span>',
    number: 12
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦎☀️💨',
    title: '壁虎断尾巴',
    question: '❓ 壁虎为什么自己断尾巴？',
    answer: '壁虎断尾巴是一个<span class="highlight">“金蝉脱壳”</span>的逃生大绝招🦎！当壁虎被敌人🐦抓住的时候，它尾巴里的肌肉会猛地收缩，在“断裂点”——一个特殊的薄弱关节——“啪”地一下断开💥！断掉的尾巴还在地上<span class="highlight">不停地跳和扭动</span>，像活的一样，把敌人的注意力全吸引过去👀！敌人一看：哇，这坨肉还在动！赶紧追过去！壁虎就趁着这个时间<span class="highlight">“嗖”地逃跑</span>💨，躲进石头缝里——这叫“丢车保帅”，用一条小尾巴换一条命！最神奇的是——壁虎的尾巴断了之后还会<span class="highlight">重新长出来</span>🔄，虽然新尾巴没有原来那么好看，颜色和花纹不一样，但功能都一样！<span class="fun-fact">蜥蜴、蝾螈等很多动物都会“断肢再生”，这是大自然给它们的“复活能力”✨！</span>',
    number: 13
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐻🍯🐝',
    title: '熊爱吃蜂蜜',
    question: '❓ 熊为什么不怕蜜蜂蜇？',
    answer: '熊可是个<span class="highlight">“皮糙肉厚”</span>的大块头🛡️！它的皮肤特别厚，最厚的地方有4厘米——就像穿了一件天然“铠甲”🧥，蜜蜂那小小的刺根本扎不进去！而且熊身上有密密麻麻又长又密的毛发🐻，像穿了厚厚的毛外套，蜜蜂就算落在身上也够不到皮肤！所以熊敢大摇大摆地走到蜂窝前🐝，用大爪子一巴掌把蜂窝拍下来，抓起来大口大口地吃蜂蜜🍯，像我们吃冰淇淋一样开心！不过熊也不是完全不怕——它最怕蜜蜂蜇<span class="highlight">鼻子和嘴巴</span>👃，因为这两个地方皮肤薄、没毛，被蜇到也会疼得嗷嗷叫，所以会先用爪子扒拉几下再下嘴！<span class="fun-fact">熊其实不止爱吃蜂蜜，它还爱吃蚂蚁🐜、浆果🫐、鱼🐟——只要好吃，熊什么都会尝一尝！</span>',
    number: 14
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐦🧭🗺️',
    title: '候鸟飞南方',
    question: '❓ 鸟儿怎么认得回家的路？',
    answer: '候鸟身上有一个<span class="highlight">“天然导航仪”</span>🧭，比手机导航还厉害！第一，它们会<span class="highlight">看星星</span>⭐——夜晚飞行的时候，鸟儿通过北斗七星和北极星来确定方向，像古代水手航海一样！第二，它们会<span class="highlight">看太阳</span>☀️——白天通过太阳的位置和运行轨迹来辨认东南西北！第三，它们能<span class="highlight">感受地球磁场</span>🧲——鸟类的眼睛里和喙里有“磁感应蛋白”，像一个内置的指南针，能“看见”磁力线，永远知道哪个方向是北！而且老鸟会带小鸟飞🕊️，把路线一代一代传下去，像“祖传地图”🗺️一样！<span class="fun-fact">北极燕鸥是飞行冠军🏆，每年从北极飞到南极，再飞回来，一年飞<span class="highlight">7万多公里</span>，比绕地球一圈还多！</span>',
    number: 15
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐪🏜️💧',
    title: '骆驼的驼峰',
    question: '❓ 驼峰里装的是水吗？',
    answer: '很多人以为驼峰里装的是水💧，其实不对！驼峰里装的是<span class="highlight">“能量包”——脂肪</span>⛽！骆驼要穿越一望无际的大沙漠🏜️，路上很难找到吃的，它就把多余的能量以脂肪的形式存在驼峰里——就像我们存零花钱一样💰！走沙漠的时候，身体没食物了，就把驼峰里的脂肪慢慢分解，变成水和营养<span class="highlight">“应急补给”</span>，能支撑好几天！而且骆驼特别能省水💧——它的身体可以把脂肪分解产生水，还能让尿液浓缩、减少出汗，像超级节水高手！驼峰里的脂肪用完了，驼峰就会<span class="highlight">塌下来</span>👇，像泄了气的气球！等吃饱喝足后，驼峰又会重新鼓起来！<span class="fun-fact">骆驼的睫毛特别长👁️，像小刷子一样挡住沙漠里的风沙，鼻子还能随时关闭，超级抗风沙🌬️！</span>',
    number: 16
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦔🌿🍎',
    title: '刺猬的尖刺',
    question: '❓ 刺猬为什么全身是刺？',
    answer: '刺猬的尖刺就是它的<span class="highlight">“防护铠甲”</span>🛡️！遇到敌人比如狐狸🦊、黄鼠狼时，刺猬会立刻把头一低、四条腿一缩，把自己卷成一个<span class="highlight">“刺球”</span>⚽——全身6000多根尖刺全都朝外竖起来！敌人看着这个扎手的“仙人掌球”，想咬又咬不下去，只能灰溜溜地走开🚫！平时没有危险的时候，刺猬的刺是<span class="highlight">平贴在身体上</span>的，像顺毛的衣服，摸起来不会扎手。只有害怕或激动的时候刺才会竖起来——就像我们生气时会“炸毛”一样！而且每根刺尖上还有小小的倒钩，扎到敌人嘴里就很难拔出来！<span class="fun-fact">刚生下来的小刺猬刺是软软的、白色的🫧，像头发一样柔软，要过几天才会变硬变成棕色！</span>',
    number: 17
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐠🌊⚡',
    title: '鱼会发电',
    question: '❓ 鱼也能放电吗？',
    answer: '有一种鱼叫<span class="highlight">“电鳗”</span>⚡，虽然名字里有“鳗”，但它其实是一种和鲤鱼关系更近的鱼🐟！电鳗身体两侧有专门的“发电器官”🔋，里面塞满了像电池一样的“发电板”，一块一块叠在一起，数量高达<span class="highlight">5000到10000块</span>！这些“电池”同时放电，能产生<span class="highlight">600到800伏特</span>的电压💥——相当于把100个手机充电器串在一起的威力！电鳗用这个超强电流来<span class="highlight">电晕小鱼小虾</span>🦐，然后再慢慢吃掉，或者用来击退鳄鱼🐊！它还能控制电量和用途：探测用弱电，捕食用强电，像遥控器一样随意切换！<span class="fun-fact">电鳗放电的时候<span class="highlight">不会电到自己</span>🛡️，因为它的心脏和大脑被一层厚厚的脂肪保护着，脂肪不导电！</span>',
    number: 18
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦊👂🌾',
    title: '狐狸的大耳朵',
    question: '❓ 狐狸耳朵为什么那么大？',
    answer: '狐狸的大耳朵就是它的<span class="highlight">“超灵敏雷达”</span>📡！狐狸的耳朵能<span class="highlight">独立转动</span>👂——左耳朝左转、右耳朝右转，像两个独立工作的“收音机”📻，能同时听不同方向的声音！在厚厚的草丛或雪地里🐭，小老鼠只要发出一点点“窸窸窣窣”的声音，狐狸耳朵就能精准判断出声音从哪里来、离自己有多远，然后“嗖”地扑上去🔽——一抓一个准！而且耳朵越大，收集声音的面积越大，就像大碗比小碗能装更多东西一样！狐狸的耳朵还能帮它散热🌡️——耳朵上有很多血管，天热时血流通畅，把热量散出去，像小扇子一样扇凉风！<span class="fun-fact">沙漠狐狸的耳朵更大更薄☀️，像两片大叶子，专门用来散热！而北极狐狸的耳朵又小又圆❄️，为了保温保暖！</span>',
    number: 19
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐙💨🕵️',
    title: '章鱼喷墨汁',
    question: '❓ 章鱼为什么会喷墨？',
    answer: '章鱼喷墨汁是它最经典的<span class="highlight">“烟雾逃生术”</span>💨！当遇到鲨鱼🦈或海豚🐬这样的天敌时，章鱼会从身体里喷出一大团黑乎乎的墨汁🌊，就像扔出一个“烟雾弹”！墨汁在水中迅速散开，把海水染得黑漆漆的👀，敌人眼前一片漆黑，什么都看不清，章鱼趁机<span class="highlight">“嗖”地溜走</span>🕵️，躲进岩石缝里！而且章鱼的墨汁里含有一种特殊成分——它能<span class="highlight">麻痹敌人的嗅觉</span>👃，让捕食者的鼻子暂时“失灵”，闻不到章鱼的味道！更聪明的是——有些章鱼喷出来的墨汁形状还像<span class="highlight">自己的“假身”</span>🎭，敌人以为那是章鱼本尊，扑上去咬一口——结果只是一团墨水！<span class="fun-fact">章鱼喷出的墨汁其实是<span class="highlight">“隐形药水”</span>🧪，墨汁里的黑色素和章鱼身体的颜色一样，能完美配合变色伪装！</span>',
    number: 20
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐄🫘🌾',
    title: '牛有四个胃',
    question: '❓ 牛为什么一直在嚼东西？',
    answer: '牛不是在一直吃东西，而是在<span class="highlight">“反刍”</span>——就是把吃进去的草再吐回嘴里重新嚼一遍！牛有<span class="highlight">4个胃</span>🫘（瘤胃、网胃、瓣胃、皱胃），是动物界的“超级消化工厂”🏭！牛吃草的时候🌾，狼吞虎咽地先把草吞进第一个胃（瘤胃）里存着——像“临时仓库”📦！等闲下来的时候，它把草再吐回嘴里，<span class="highlight">“细嚼慢咽”</span>嚼得碎碎的，然后再吞进后面的胃里慢慢消化！这样草里的营养才能被充分吸收！<span class="fun-fact">牛一天要花<span class="highlight">8个小时</span>反刍🕐，嚼4万多次！而且牛的胃里有很多“小微生物”🦠帮它分解草，是牛的好帮手！</span>',
    number: 21
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐒🪰🧐',
    title: '猴子互相抓虱子',
    question: '❓ 猴子为什么互相抓毛？',
    answer: '猴子互相抓毛不是在“吃虱子”，而是在<span class="highlight">“社交”和“清洁”</span>🧐！猴子身上的毛里经常会藏一些盐粒🧂、小皮屑和死皮，它们用手翻来翻去翻出来，放到嘴里吃掉——其实是在吃<span class="highlight">“盐”</span>！因为猴子的食物里盐分不够，它们需要额外补充盐分！但更重要的是——互相抓毛是猴子的<span class="highlight">“社交方式”</span>🤝！就像我们和朋友聊天、拥抱一样！互相帮忙清理皮毛的过程中，猴子们会建立感情、化解矛盾、确定朋友关系，是“猴子的友情时刻”💕！<span class="fun-fact">猴子抓毛还有“等级制度”👑——地位高的猴子会让地位低的猴子帮它抓毛，地位低的猴子要“伺候”老大！</span>',
    number: 22
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦩🦐🌸',
    title: '火烈鸟为什么粉红',
    question: '❓ 火烈鸟为什么是粉色的？',
    answer: '火烈鸟不是生下来就是粉色的——刚出壳的小火烈鸟是<span class="highlight">灰白色的</span>🩶！它们变粉是因为吃的东西<span class="highlight">“染”</span>了它们的羽毛！火烈鸟最爱吃一种小小的<span class="highlight">“粉红色虾”</span>🦐和<span class="highlight">“蓝绿藻”</span>🌿，这些食物里含有一种叫“类胡萝卜素”的天然色素🎨——就像胡萝卜里的胡萝卜素让胡萝卜变橙色一样！这些色素在火烈鸟的身体里“存”下来，慢慢就把羽毛<span class="highlight">染成了粉色</span>🌸！如果火烈鸟不吃这些粉色的食物，羽毛就会慢慢褪色变白！<span class="fun-fact">火烈鸟的“粉色越深”说明它越健康💪、吃得越好！在火烈鸟的世界里，粉红色是“美”的标志，越粉越受欢迎！</span>',
    number: 23
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦍💕🐒',
    title: '大猩猩拍胸口',
    question: '❓ 大猩猩为什么拍胸口？',
    answer: '大猩猩拍胸口不是“生气”，而是在<span class="highlight">“发信息”</span>📢！大猩猩是“绅士”🦍，不喜欢打架，但需要告诉别人“我很强壮”！它站起来用双手“咚咚咚”地拍胸口💥，发出很响的声音——像敲鼓一样！这个声音能传到<span class="highlight">1公里远</span>📡，告诉其他大猩猩：“这块地盘是我的”“我在这里”“别靠近”！其实大猩猩拍胸口更像是<span class="highlight">“发朋友圈”</span>📱——告诉大家“我在这、我很好”！而且不同的拍法代表不同的情绪：快速拍代表紧张，慢速拍代表宣示主权！<span class="fun-fact">银背大猩猩拍胸口的声音每秒钟能响<span class="highlight">20多次</span>🥁——像打鼓一样节奏感超强！</span>',
    number: 24
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦔🌰🐍',
    title: '豪猪的箭刺',
    question: '❓ 豪猪的刺会射出去吗？',
    answer: '很多人以为豪猪会“射”刺🎯，其实它不会主动射击！豪猪的刺长在背上和尾巴上，是<span class="highlight">“被动武器”</span>🛡️——不会飞出去打人！当遇到危险时🐍，豪猪会：第一，竖起全身的刺，让自己看起来大一倍！第二，转过身来，用<span class="highlight">“带刺的尾巴”</span>对着敌人！第三，如果敌人还靠近，豪猪会<span class="highlight">“突然冲过去”</span>💨，把刺扎进敌人的皮肤里——不是射出去，而是“扎”进去！而且豪猪的刺尖上有<span class="highlight">“倒钩”</span>🔱，像鱼钩一样，扎进去就很难拔出来，特别疼！<span class="fun-fact">豪猪的刺其实是<span class="highlight">“特化的毛”</span>🧬——和我们的头发、猫咪的胡须是同一种东西，只是特别硬、特别尖！</span>',
    number: 25
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦨💨😷',
    title: '臭鼬放臭气',
    question: '❓ 臭鼬为什么特别臭？',
    answer: '臭鼬是动物界的“生化武器专家”🦨！它屁股下面有两个“臭腺”💨，能喷出一股<span class="highlight">“液体臭气”</span>——主要成分是<span class="highlight">“硫醇”</span>（就是大蒜🧄和臭鸡蛋🥚那种臭味）！臭鼬喷臭气之前会发出“警告信号”⚠️：先跺脚、翘尾巴、弯腰——像在说“我要喷了！”如果对方还不走，臭鼬就“滋”一下喷出臭液💦！这股臭味能飘到<span class="highlight">1公里</span>外，沾到皮肤上要<span class="highlight">好几天</span>才能洗掉！如果喷到眼睛里👀，会让眼睛又辣又疼、暂时看不见！臭鼬用这个“化学武器”来吓退狮子🦁、熊🐻、狼🐺——而且真的很管用！<span class="fun-fact">臭鼬的臭液喷完一次要<span class="highlight">“库存10天”</span>才能重新装满🔄，所以臭鼬不会乱喷，只在最危险的时候才用！</span>',
    number: 26
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦎🌿❄️',
    title: '变色龙变颜色',
    question: '❓ 变色龙为什么会变色？',
    answer: '变色龙变色不是“隐身”🕵️，而是为了<span class="highlight">“表达情绪”</span>和<span class="highlight">“调节体温”</span>🌡️！变色龙的皮肤里有三层“色素细胞”🎨——像三层颜料叠加在一起！当变色龙害怕😱的时候，它会变成暗色（棕色或灰色）——像在说“我认输、别打我”！当它生气😡的时候，会变成鲜艳的颜色（红色或橙色）——像在说“我很凶、快走开”！当它太热🔥的时候，会变浅色来反射阳光、降温；当它太冷❄️的时候，会变深色来吸收阳光、升温！变色龙变色更像是一种<span class="highlight">“语言”</span>💬，用来和同伴、敌人“说话”！<span class="fun-fact">变色龙的舌头<span class="highlight">“比身体还长”</span>👅——能弹射出自己体长的<span class="highlight">1.5到2倍</span>，0.07秒就能抓住虫子🐛，是人类眨眼睛速度的10倍！</span>',
    number: 27
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦜📣🎤',
    title: '鹦鹉学说话',
    question: '❓ 鹦鹉为什么会学人说话？',
    answer: '鹦鹉学人说话🗣️不是因为“懂”意思，而是因为它天生就是<span class="highlight">“模仿大师”</span>🎤！鹦鹉的大脑里有一种特殊的“声音学习回路”🧠——能精确捕捉和模仿它听到的声音！在自然界中，鹦鹉用这个本领模仿<span class="highlight">“同伴的叫声”</span>🐦——来聊天、打招呼、确认身份！在人类家里🏠，它听到最多的声音就是人类说话，所以就模仿人的声音来“融入家庭”——就像我们学外语一样📚！但鹦鹉“说话”其实不是用嘴唇和舌头👄——而是用“鸣管”和“舌头”配合振动发出声音！<span class="fun-fact">有些聪明的鹦鹉能学会<span class="highlight">“几百个词”</span>📚，甚至能把词组合成短语！最厉害的是非洲灰鹦鹉🦜，智力相当于<span class="highlight">3-5岁的小朋友</span>🧒！</span>',
    number: 28
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦴🐕⚾',
    title: '狗狗叼东西',
    question: '❓ 狗狗为什么叼东西回来？',
    answer: '狗狗喜欢叼东西回来给你，是因为它的“狩猎本能”🐕！在远古时代，狗祖先（狼）会成群捕猎🐺，把猎物叼回巢穴给“首领”和“宝宝”吃——这是<span class="highlight">“分工合作”</span>！现在的狗狗把主人🏠当成了“首领”和“家人”，所以它把飞盘🥏、球⚾叼回来给你——就像在说“我抓到了猎物带给你”！狗狗叼东西回来时摇尾巴🐕，是希望得到“首领”的表扬：“看，我多棒！”所以当狗狗叼东西给你时，一定要夸夸它👍，它会特别开心！<span class="fun-fact">有些狗狗叼东西回来的时候会“哼唧”叫😊——不是不开心，是在催你“快扔呀！我准备好了再跑一次！”</span>',
    number: 29
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐄🐓🥚',
    title: '鸡下蛋不需要公鸡',
    question: '❓ 母鸡自己也能下蛋吗？',
    answer: '母鸡<span class="highlight">不需要公鸡</span>🐓也能下蛋！母鸡的肚子里每一天都会生成一个“蛋黄”🥚，就像每个月女性会排卵一样！蛋黄慢慢长大🔄，然后被“蛋壳膜”包裹，再在蛋壳腺里“穿上钙质外套”——最后成了一个完整的鸡蛋🥚，“噗”一下生出来！这个蛋里面只有“蛋黄和蛋白”——<span class="highlight">没有受精</span>，是孵不出小鸡的🐣！只有母鸡和公鸡“交配”之后生的蛋才是“受精蛋”，才能孵出小鸡宝宝！所以我们平时吃的鸡蛋🥚都是“没爸爸的蛋”——可以放心吃！<span class="fun-fact">母鸡一年能下<span class="highlight">250到300个</span>蛋🥚！蛋壳颜色和母鸡的“耳垂颜色”有关——白耳垂的鸡下白蛋，红耳垂的鸡下褐蛋！</span>',
    number: 30
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐭🧀🔍',
    title: '老鼠啃东西',
    question: '❓ 老鼠为什么爱咬东西？',
    answer: '老鼠咬东西不是因为“饿”🍽️，而是因为它的牙齿<span class="highlight">“一直在长”</span>🦷！老鼠是“啮齿类动物”——门牙一年到头不停地长，每个月能长<span class="highlight">3-5厘米</span>！如果不磨短🪚，牙齿会越长越长，最后刺穿自己的嘴巴👄，老鼠就活不了了！所以老鼠必须不停地<span class="highlight">“啃咬”</span>硬东西——木头🪵、电线🔌、水管🚿、纸盒📦——把牙齿磨短磨利！老鼠啃咬也是在<span class="highlight">“修牙”</span>，就像我们剪指甲一样✂️！而且老鼠的前牙特别硬——比钢铁还硬💪——所以连金属都能咬出印子！<span class="fun-fact">老鼠的门牙一生中能长到<span class="highlight">1米多</span>长📏——如果完全不磨的话！但老鼠的牙齿长得很聪明——后面软前面硬，自己会磨成“凿子”形状，特别锋利！</span>',
    number: 31
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐌💤🌧️',
    title: '蜗牛冬眠夏眠',
    question: '❓ 蜗牛为什么会睡觉很久？',
    answer: '蜗牛是“慢生活大师”🐌——天气太冷❄️或者太热☀️时，它会“睡大觉”！冬天太冷的时候❄️，蜗牛钻进壳里，用一层<span class="highlight">“黏液膜”</span>封住壳口，像“关门关窗”一样——这叫<span class="highlight">“冬眠”</span>💤！夏天太干太热的时候🌞，蜗牛同样“关门睡觉”，防止水分蒸发——这叫<span class="highlight">“夏眠”</span>！蜗牛睡着的时候，心跳变慢、呼吸变慢，几乎“停止活动”🛌！它靠壳里的“存粮”（脂肪和营养）活着，一觉能睡<span class="highlight">几个月</span>！等天气变凉快🌧️、变湿润了，蜗牛才伸伸懒腰、打开“黏液门”，继续出门散步找吃的！<span class="fun-fact">有记录显示，一只蜗牛最长“睡”了<span class="highlight">“3年”</span>🕰️！科学家把它粘在卡片上，3年后放水里泡了泡，它居然“复活”了！</span>',
    number: 32
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐦🥚🐣',
    title: '鸟为什么会飞',
    question: '❓ 鸟儿为什么能在天上飞？',
    answer: '鸟儿会飞是因为它有<span class="highlight">“四大飞行装备”</span>✈️！第一：<span class="highlight">“羽毛翅膀”</span>🪶——翅膀像小飞机的机翼，能产生升力！扇动时产生向下的气流，把身体“托”起来🆙！第二：<span class="highlight">“空心骨头”</span>🦴——鸟的骨头是中空的（像吸管一样空），特别轻，占体重的<span class="highlight">5%</span>，而人类骨头占<span class="highlight">15%</span>！第三：<span class="highlight">“大胸肌”</span>💪——胸肌特别发达，占了体重的<span class="highlight">20%</span>，像“发动机”一样有力！第四：<span class="highlight">“气囊系统”</span>💨——鸟身体里有气囊，帮助双重呼吸——吸一口气能吸两次氧气，飞行时不缺氧！<span class="fun-fact">最快的鸟是“游隼”🦅——俯冲时能达到每小时<span class="highlight">390公里</span>💨，比动车还快！</span>',
    number: 33
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐺🌕🐑',
    title: '狼为什么嚎叫',
    question: '❓ 狼为什么对着月亮嚎叫？',
    answer: '狼“嚎叫”🌕不是在“唱歌”，而是在<span class="highlight">“打电话”</span>📞！狼是群居动物🐺，和同伴走散后，会嚎叫来“联络”——就像我们打电话问“你在哪儿？”一样！狼嚎叫有三大功能：<span class="highlight">“联络”</span>📡——告诉同伴“我在这里”！“警告”⚠️——告诉其他狼“这是我们的地盘，别靠近”！“组队”🤝——召唤同伴一起捕猎！狼嚎叫的声音特别远——能传到<span class="highlight">10公里</span>外！而且每一头狼的嚎叫声都不同，同伴们能听出“是谁在叫”👂！<span class="fun-fact">狼其实不是“对着月亮”叫🌕，只是它们常在夜间活动——抬头看天时正好月亮在天上，就产生了“狼对月长嚎”的画面！</span>',
    number: 34
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐕🐾👣',
    title: '狗的鼻子湿',
    question: '❓ 狗狗的鼻子为什么总是湿的？',
    answer: '狗狗的鼻子湿湿的👃不是“生病”，而是<span class="highlight">“超级嗅觉武器”</span>的一部分！狗狗的鼻子有一层<span class="highlight">“黏液膜”</span>——像薄薄的水膜💧，能“捕捉”空气中的气味分子！气味分子先“溶解”在鼻子的黏液里，然后被嗅觉神经“感知”🧠——就像“味道沾在湿纸上更容易闻出来”一样！所以湿鼻子比干鼻子敏感<span class="highlight">10万倍</span>！狗狗为什么舔鼻子👅？就是为了保持鼻子“湿润和干净”——像我们洗脸一样！另外，狗狗的鼻子还能<span class="highlight">“感受风向”</span>🌬️——判断气味从哪里飘来！<span class="fun-fact">狗狗的嗅觉是人类的<span class="highlight">1万到10万倍</span>🐕——人类有500万个嗅觉细胞，狗狗有<span class="highlight">3亿个</span>！所以警犬🦮能闻出毒品、炸弹，搜救犬能找到被埋的人！</span>',
    number: 35
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦃👑🦚',
    title: '孔雀开屏',
    question: '❓ 孔雀为什么开屏？',
    answer: '孔雀开屏是<span class="highlight">“求偶秀”</span>💃——只有<span class="highlight">“雄孔雀”</span>才会开屏！春天的时候，雄孔雀为了吸引雌孔雀🦃，会把尾巴上又长又漂亮的“尾羽”展开成一个巨大的<span class="highlight">“彩色扇子”</span>🎐，上面有100多个“眼睛状”的花纹👁️，闪闪发光、五彩斑斓！雄孔雀还会一边开屏一边<span class="highlight">“抖动”</span>羽毛，“沙沙沙”地响，像在说“快看我多美、快选我”❤️！雌孔雀会观察雄孔雀的“尾巴”————羽毛越多、颜色越亮、抖动越有力，说明身体越健康、越适合做“爸爸”👨‍👦！<span class="fun-fact">孔雀开屏还有一个作用：<span class="highlight">“吓唬敌人”</span>🛡️——当孔雀遇到敌人（比如蛇🐍），也会开屏，让尾巴上的“眼睛”图案一起晃动，看起来像“有很多眼睛的大怪物”👾，把敌人吓跑！</span>',
    number: 36
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐊🌊🏊',
    title: '鳄鱼的水下伏击',
    question: '❓ 鳄鱼怎么在水中抓猎物？',
    answer: '鳄鱼是<span class="highlight">“水下隐形猎手”</span>🕵️——它是地球上最厉害的“伏击捕食者”之一！鳄鱼潜伏在水里🌊，只把<span class="highlight">眼睛和鼻孔</span>👀露在水面上，身体完全沉在水下像一根“木头”🪵——几乎看不出它是活的！当动物🦌靠近水边喝水时，鳄鱼<span class="highlight">“嗖”地一下</span>冲出来💥，速度特别快（冲刺速度每小时30公里），用大嘴“咔嚓”咬住猎物——拉进水里“死亡翻滚”🌀，把猎物闷死🐟！鳄鱼的咬合力超强💪——达<span class="highlight">2000公斤</span>，比狮子的咬合力还大3倍！被咬住的猎物几乎没有逃脱的可能！<span class="fun-fact">鳄鱼的“第三眼睑”👁️（透明眼皮）能像“护目镜”一样在水下保护眼睛，所以鳄鱼在水里也能看得很清楚！</span>',
    number: 37
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐪🛡️☀️',
    title: '骆驼的防沙装备',
    question: '❓ 骆驼在沙漠里怎么防风沙？',
    answer: '骆驼是大自然的“沙漠越野车”🚙——全身都是“防沙装备”！第一：<span class="highlight">“长睫毛”</span>👁️——骆驼的睫毛像两把小刷子，又长又密，像“防风镜”一样挡住沙粒钻进眼睛！第二：<span class="highlight">“可闭鼻孔”</span>👃——骆驼的鼻孔能随时关闭，像“防沙塞”一样，风沙再大也吹不进去！第三：<span class="highlight">“厚脚垫”</span>🦶——骆驼的脚掌又大又软又厚，像“沙漠雪地靴”，走在滚烫的沙子上不会烫脚🔥，也不会陷进沙里！第四：<span class="highlight">“驼峰”</span>🐫——储存能量，走沙漠时慢慢补充！骆驼在沙漠里走好几天不喝水💧，还能坚持走——是人类穿越大沙漠的“最佳伙伴”！<span class="fun-fact">骆驼可以一次喝下<span class="highlight">100升</span>水💧——相当于200瓶500毫升的矿泉水！然后储存在身体里慢慢用！</span>',
    number: 38
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐬🎭💡',
    title: '海豚的笑容',
    question: '❓ 海豚为什么总在笑？',
    answer: '海豚“总是在笑”😊——其实是“天生的”表情！海豚的嘴巴是<span class="highlight">“向上弯曲”</span>的，像一张“微笑的嘴”，所以看起来总是在笑——哪怕它没有特别的情绪！但海豚确实是<span class="highlight">“快乐的小天使”</span>💕——它们非常聪明、爱玩、喜欢社交，经常跳出海面翻跟头🤸、追逐船只🚢、和人类互动！海豚的“笑容”也帮助它们<span class="highlight">“释放善意”</span>——在遇到同类或人类时，这个“微笑表情”让对方更容易信任它！海豚的大脑很大🧠，智商很高，能学习复杂动作、能认出镜子里的自己、能听懂人类的指令！<span class="fun-fact">海豚会“互相取名字”📛——每只海豚有自己独特的“口哨签名”，妈妈给海豚宝宝取名字，宝宝一辈子记得自己的名字！</span>',
    number: 39
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐒🌳🍌',
    title: '猴子摘果子',
    question: '❓ 猴子怎么找到好吃的果子？',
    answer: '猴子是森林里的“水果专家”🍌——它们用<span class="highlight">“颜色视觉”</span>来找到熟果子！大多数哺乳动物（比如狗🐕、牛🐄）是“色盲”——只能看到黑色、白色和灰色。但猴子和人类一样👀，能清楚地看到<span class="highlight">“红色、橙色、黄色”</span>这些颜色！而熟透的果子正好是这些鲜艳的颜色🍎🍊🍋——在一片绿色的树叶🌿中特别显眼！猴子远远就能看到：“那边有红色，肯定是熟果子！”于是赶紧跑过去摘下来吃掉！<span class="fun-fact">猴子是“杂食动物”🍽️——除了水果，还吃树叶、花朵、昆虫🐜、鸟蛋🥚、甚至小蜥蜴🦎！不过水果永远是它们的最爱！</span>',
    number: 40
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦦🌊🦐',
    title: '水獭的石头',
    question: '❓ 水獭为什么用石头？',
    answer: '水獭是动物界的“工具使用者”🔧——它是少数会用工具的动物之一！水獭最爱吃<span class="highlight">“蚌”</span>🦪——蚌壳又硬又紧，水獭的牙齿咬不开！所以水獭会从水底捡一块<span class="highlight">“平坦的石头”</span>，放在自己的肚子上🦦，然后把蚌放在石头上面，用两只前爪举起另一块石头“咚咚咚”地敲🪄——像“开核桃”一样把蚌壳敲碎！水獭“敲”得特别准💪——从不敲到自己的肚子上！而且每只水獭都有自己“最喜欢的石头”，会一直保留着用！<span class="fun-fact">水獭用石头“开蚌”的时候还喜欢<span class="highlight">“仰泳”</span>🏊——仰面朝天地漂在水面上，肚子当砧板，特别可爱！</span>',
    number: 41
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐦🪤💡',
    title: '乌鸦会做工具',
    question: '❓ 乌鸦怎么吃到虫子的？',
    answer: '乌鸦是动物界的<span class="highlight">“发明家”</span>🧠——它是世界上最聪明的鸟之一！乌鸦会<span class="highlight">“制造工具”</span>🔧：当它看到树洞里🕳️或石头缝里有虫子🐛但够不着时，它会找一根<span class="highlight">“小树枝”</span>🌿，把树枝的“分叉”咬掉，做成一根“直棍”，然后伸进洞里把虫子“挑”出来！更厉害的是——乌鸦还会<span class="highlight">“改造工具”</span>！如果树枝太软、挑不动，它会换一根更硬的；如果一根不够长，它会用两根接起来！这种“思考”能力在动物界特别罕见！<span class="fun-fact">乌鸦还会“合作捕猎”🤝——一群乌鸦分工，有“侦察兵”专门“放哨”，有“进攻手”专门叼走食物——像一支“乌鸦特工队”🕵️！</span>',
    number: 42
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐝🌺💛',
    title: '蜜蜂采花粉',
    question: '❓ 蜜蜂采花蜜时花粉粘到哪了？',
    answer: '蜜蜂采花蜜🌸的时候，身上会粘满“花粉”🌼——像“撒了金粉”一样！蜜蜂有专门的<span class="highlight">“花粉篮”</span>🧺——就在后腿上！后腿上有一块凹进去的地方，周围长着一圈硬硬的毛，像一个“小篮子”🪣！蜜蜂把粘在身上的花粉<span class="highlight">“刷”</span>下来🔄，用前腿和中腿把花粉“搓”成一小团，塞进“花粉篮”里！一趟下来，两只后腿上各挂一个大大的“花粉团”🟡——像穿了“金色小靴子”！蜜蜂带回蜂巢的花粉，是蜜蜂宝宝🐝的“蛋白质主食”——就像人类宝宝喝牛奶一样🥛！<span class="fun-fact">蜜蜂身上的“静电”⚡也会帮忙吸住花粉——蜜蜂飞的时候翅膀摩擦产生静电，花粉就被“吸”在身上了！</span>',
    number: 43
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦘🏃👶',
    title: '袋鼠的育儿袋',
    question: '❓ 袋鼠宝宝怎么在袋子里长大？',
    answer: '袋鼠宝宝刚生下来的时候特别小🫘——只有<span class="highlight">“一颗花生米”</span>那么大！体重只有<span class="highlight">1克</span>左右，全身粉红色、没有毛、眼睛也睁不开👀！但它有强壮的“前臂”💪，能<span class="highlight">“爬”</span>进妈妈的育儿袋里🦘——沿着妈妈舔出的“毛路”往上爬，爬进袋子里，找到“奶头”🍼，紧紧叼住，然后就开始在袋子里<span class="highlight">“安全长大”</span>！袋鼠宝宝在育儿袋里一住就是<span class="highlight">8个月</span>！在这期间，它会不断地喝奶🍼，慢慢长出毛、睁开眼睛、变大变强壮！等长到差不多够大了，才会从袋子里“探出头来”👀，然后跳出来，开始独立生活！<span class="fun-fact">袋鼠妈妈的育儿袋里有<span class="highlight">“4个奶头”</span>🍼，分别分泌不同“配方”的奶——适合不同年龄的袋鼠宝宝！</span>',
    number: 44
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦜💤🌙',
    title: '鹦鹉单脚睡觉',
    question: '❓ 鹦鹉为什么一只脚站着睡？',
    answer: '鹦鹉单脚站着睡觉🦜——是在<span class="highlight">“保温”</span>和<span class="highlight">“休息”</span>！鸟类的脚上没有羽毛，只有一层薄薄的皮肤🦶——脚上的血管离冰冷的表面很近，热量容易散失！把一只脚缩进肚子下面蓬松的羽毛里🔥，就像我们把冰凉的手揣进“暖手宝”里一样——可以保持脚的温暖！而且单脚站着还能让另一只脚<span class="highlight">“休息”</span>💤——像我们“换脚”站立一样，轮流休息！鹦鹉的脚趾天生“抓握力”超强👣——脚趾的肌腱会自动“锁定”，即使睡着了也不会掉下来！<span class="fun-fact">有些鸟（比如鸭子和天鹅🦢）会站在冰上❄️——它们用“逆流热交换”技术，把从身体流到脚的“热血”热量转移给从脚流回身体的“冷血”，保护脚不被冻伤！</span>',
    number: 45
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐋🌊🎶',
    title: '鲸鱼的歌声',
    question: '❓ 鲸鱼为什么唱歌？',
    answer: '鲸鱼是海洋里的“音乐家”🎵——尤其是<span class="highlight">“座头鲸”</span>，会唱出世界上最长的“歌曲”！鲸鱼的“歌声”不是用嘴巴唱的🎤——而是用鼻子（呼吸孔）里面特殊的“气囊”和“声带”振动发出的声音💨！在海水里，声音传播得特别快、特别远🌊——能传到<span class="highlight">“几百公里”</span>外！雄座头鲸会唱出一首<span class="highlight">“10到20分钟</span>的长歌”，而且所有的雄鲸都唱<span class="highlight">“同一首歌”</span>——像在开“海洋演唱会”🎶！鲸鱼唱歌主要有三个目的：<span class="highlight">“求偶”</span>❤️（吸引雌鲸）、“联络”📡（和同伴打招呼）、“导航”🗺️（用声波“看”海底地形）！<span class="fun-fact">座头鲸的“歌”每年都在“进化”🔄——所有鲸鱼会“同步”更新，一年换一首新歌，像“音乐排行榜”一样！</span>',
    number: 46
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦍🍃🧠',
    title: '猩猩的记忆力',
    question: '❓ 猩猩能记住多少东西？',
    answer: '猩猩是动物界的<span class="highlight">“记忆冠军”</span>🧠——它们的记忆力惊人！科学家做过实验📊：让猩猩看一遍电脑屏幕🖥️上闪现的数字——1到9一闪而过！猩猩竟然能<span class="highlight">“记住”</span>每个数字的位置，并按顺序点出来✅——比人类还准还快！猩猩还能记住<span class="highlight">“几百种食物”</span>的位置🍌——哪棵果树熟了、哪片林子里有坚果，全部记在脑子里！猩猩甚至能记住“过去的经历”📅——比如“昨天在这里找到好吃的”“上次在这个区域遇到敌人”，像我们记日记一样！<span class="fun-fact">猩猩还会“记仇”😡——如果一个人欺负过它，它能<span class="highlight">“记好几年”</span>，再见到这个人时会发出警告叫声表示“我认出你了”！</span>',
    number: 47
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🐢🕰️🌊',
    title: '海龟的长寿',
    question: '❓ 海龟为什么能活那么久？',
    answer: '海龟是动物界的<span class="highlight">“寿星”</span>👴——能活到<span class="highlight">“100岁以上”</span>，最长纪录是<span class="highlight">188岁</span>！海龟长寿有三大秘诀🔑：第一，<span class="highlight">“慢生活”</span>🐢——海龟心跳特别慢，每分钟只有<span class="highlight">20-30次</span>（人类是60-100次），新陈代谢也慢——像“慢速播放”一样，身体零件磨损少！第二，<span class="highlight">“细胞修复能力强”</span>🧬——海龟的细胞能不断自我修复，不容易老化——像“永远不会生锈的机器”⚙️！第三，<span class="highlight">“免疫力超强”</span>🛡️——海龟几乎不长癌症、肿瘤，一生很少生病！海龟活得久、经历的多🌊——见证了好几代人的出生和离去，是真正的“海洋老爷爷”！<span class="fun-fact">海龟的壳由<span class="highlight">“50多块骨头”</span>🦴拼成——和它的肋骨🦴连在一起，所以海龟“脱不了壳”——壳就是它骨架的一部分！</span>',
    number: 48
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦡🏠🌍',
    title: '獾的地下城堡',
    question: '❓ 獾为什么挖那么深的洞？',
    answer: '獾是动物界的<span class="highlight">“地下建筑师”</span>🏗️——它挖的地下洞穴叫“獾城”🏰！一个獾城有<span class="highlight">“几十个房间”</span>和“多条通道”🔄，深度可达<span class="highlight">“3米”</span>，有<span class="highlight">“多个出口”</span>🚪！房间功能齐全：有“卧室”🛏️（铺满干草睡觉）、“仓库”📦（存食物）、“育儿房”👶（生宝宝）、“厕所”🚽（专门排泄）！獾挖洞是真正的“全能工程师”👷——用前爪像“铲子”一样挖土，用后腿把土“蹬”出洞外，用嘴巴把土“叼”走！挖一个“獾城”要<span class="highlight">“好几年”</span>时间，而且“世世代代”相传——像“祖传老宅”🏡！<span class="fun-fact">獾的鼻子特别灵👃——能嗅出地面下<span class="highlight">“1米深”</span>的虫子🐛和根茎🌱，然后用爪子刨出来吃！</span>',
    number: 49
  },
  {
    category: 'animal',
    categoryName: '🐾 动物认知',
    emoji: '🦔🔄🌰',
    title: '刺猬的冬眠',
    question: '❓ 刺猬冬天去哪里了？',
    answer: '刺猬冬天会“消失”💤——它去<span class="highlight">“冬眠”</span>了！冬天❄️外面太冷、食物太少，刺猬就钻进地下巢穴🏠或者树叶堆🍂里，把自己卷成一个小<span class="highlight">“刺球”</span>⚽，然后“睡大觉”💤！刺猬冬眠的时候，心跳从每分钟<span class="highlight">“190次”</span>降到<span class="highlight">“20次”</span>⬇️，体温从<span class="highlight">“35°C”</span>降到<span class="highlight">“5°C”</span>🌡️，呼吸变得特别慢、特别弱——几乎“停止生命活动”🛌！冬眠期间刺猬完全不吃不喝🍽️——靠秋天存下的脂肪“熬”过整个冬天！直到春天🌱到来、气温回升，刺猬才“醒”过来，伸个懒腰、开始出门找吃的！<span class="fun-fact">刺猬冬眠前会“拼命吃”🍎——把自己吃得肥肥的，体重增加<span class="highlight">“1倍”</span>，这样才能有足够的能量熬过漫长的冬天❄️！</span>',
    number: 50
  },

  // ============================================================
  // 🌍 地球与天气 (50条)
  // ============================================================
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '☀️💧🌈',
    title: '彩虹怎么来的',
    question: '❓ 下完雨为什么有彩虹？',
    answer: '我们看到的白色阳光☀️，其实是<span class="highlight">七种颜色混合</span>在一起组成的——红🔴、橙🟠、黄🟡、绿🟢、青🔵、蓝🟦、紫🟣！下完雨以后🌧️，空气里飘着无数颗小水滴💧，像成千上万颗“小水晶球”悬浮在空中。阳光穿过这些小水滴时，就像穿过了<span class="highlight">“魔法三棱镜”</span>🔮，被折射和反射，七种颜色被“拆开”了——赤橙黄绿青蓝紫，像小朋友排队一样排得整整齐齐，就变成了我们看到的彩虹🌈！想看彩虹的话，记住一个秘诀：<span class="highlight">雨后背对太阳</span>☀️，抬头看天空，彩虹一定就在那儿等你！<span class="fun-fact">彩虹其实是一个<span class="highlight">完整的圆</span>⭕，但因为我们站在地面上，只能看到半圆形的拱桥！如果你坐飞机✈️从天上往下看，能看到一整圈圆形彩虹！</span>',
    number: 51
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '☀️☁️🌧️',
    title: '为什么会下雨',
    question: '❓ 雨从哪里来？',
    answer: '雨是一场<span class="highlight">“水的环球旅行”</span>🌍！第一步：太阳公公☀️把大海、河流、湖泊里的水晒得热热的，水变成<span class="highlight">“隐身的水蒸气”</span>💨——像锅里的水烧开冒白气一样——悄悄地飘上了天！第二步：在高高的天上🧊，气温特别冷，水蒸气又变回小水滴，成千上万颗小水滴聚在一起，就变成了白白胖胖的云朵☁️！第三步：云朵越聚越大、越聚越重，像海绵吸满了水🧽，最后抱不住了——小水滴纷纷掉下来，这就是下雨🌧️！落下来的雨水又流到河里、海里，太阳再晒、再蒸发、再下雨，循环不停🔄，水永远在旅行！<span class="fun-fact">一朵云可能重达<span class="highlight">500吨</span>⚖️，相当于100头大象的重量！但云却能飘在天上，因为水滴太小太轻，被上升气流托住了！</span>',
    number: 52
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '⚡💥🌩️',
    title: '为什么会打雷',
    question: '❓ 为什么“轰隆隆”响？',
    answer: '下雨的时候，天空中的云朵像两块巨大的<span class="highlight">“静电摩擦布”</span>⚡！云朵里的冰晶和水滴互相碰撞摩擦，产生了<span class="highlight">正电和负电</span>🔋——就像我们用气球摩擦头发后能吸起小纸片一样！正电聚在云的上面，负电聚在云的下面，正负电荷越来越多、吸力越来越大，最后<span class="highlight">“咔嚓”</span>一下——正负电荷猛地碰到一起，释放出巨大的电火花💥，这就是<span class="highlight">“闪电”</span>⚡！闪电的温度高达<span class="highlight">3万度</span>🔥，比太阳表面还热5倍！高温把周围的空气瞬间烤得膨胀开来，像爆炸一样，发出“轰隆隆”的巨响——这就是雷声🌩️！先看到闪电再听到雷声，因为光跑得比声音快多了！<span class="fun-fact">打雷的时候待在屋里🏠、车里🚗是最安全的，因为金属车身像一个“保护笼”，电流会从车身流到地上，伤害不到你！</span>',
    number: 53
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🔥🧊🍃',
    title: '风从哪里来',
    question: '❓ 是谁在吹风？',
    answer: '风不是有人在吹，而是太阳“导演”的一出<span class="highlight">“空气搬家”</span>大戏☀️！太阳把地面晒得热热的🔥——有的地方晒得久（比如沙漠🏜️），有的地方晒得少（比如森林🌳）。热的地方，空气也被烤热了，变轻了，就开始<span class="highlight">“往上飘”</span>，就像热水冒热气一样♨️！热空气飘走后，地面就空出来一个大位置，旁边凉爽的“冷空气”🧊赶紧跑过来填上这个空位——就像走廊里有人走了，旁边的人会挤过来一样！这个空气流动的过程🍃，就是风！风就是空气在“跑来跑去”填位置！太阳晒得越热，空气跑得越快，风就越大💨！<span class="fun-fact">地球上有<span class="highlight">“信风带”</span>🌐，像一条条“风的高速公路”环绕地球，帆船⛵在古代就是靠着这些风带环球航行的！</span>',
    number: 54
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '❄️🔍✨',
    title: '雪花的秘密',
    question: '❓ 雪花为什么是六角形？',
    answer: '用放大镜🔍看一片小雪花❄️，你会发现它超级漂亮——是一个<span class="highlight">完美的六角形</span>！这是因为水结冰的时候，水分子们会按照一种固定的“手拉手”方式🧊排列：每个水分子和周围4个水分子连起来，形成一个<span class="highlight">六边形骨架</span>。就像小朋友排队做操一样，大家都按六角形的队形站好！而且每片雪花从天上飘下来的路上🌨️，遇到的温度和湿度都不一样，水分子凝结的速度和方向也不同，所以<span class="highlight">每一片雪花的花纹都独一无二</span>🌟——就像每个小朋友的指纹都不相同一样！有的像羽毛、有的像星星、有的像小扇子，花样多得数不清！<span class="fun-fact">世界上<span class="highlight">找不到两片完全相同的雪花</span>❄️，就像找不到两个完全一样的小朋友！每一片雪花都是天空送给大地的一件“微型艺术品”🎨！</span>',
    number: 55
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🌙🔄',
    title: '涨潮退潮',
    question: '❓ 海水为什么会涨起来？',
    answer: '海水涨潮退潮，是月亮🌙在“施展魔法”！月亮像一个<span class="highlight">“大磁铁”</span>🧲——虽然它不是真的磁铁，但它的引力特别强大，能把海水<span class="highlight">“吸”</span>起来！月亮转到哪边，哪边的海水就被“吸”得鼓起来🌊，就像把一块布往上提一样！这样，靠近月亮的海面就涨高了——这就是<span class="highlight">“涨潮”</span>⬆️！而地球另一边的海水，因为地球被“推开”了一点，也会鼓起来，所以一天内会有两次涨潮和两次退潮🌊🌊！潮水每天会比前一天<span class="highlight">晚来约50分钟</span>🕐，因为月亮绕地球转，每天晚一点点升起！<span class="fun-fact">太阳也对潮汐有影响☀️——当太阳、地球、月亮排成一条直线时（新月和满月），大潮最高！这时候的潮水叫<span class="highlight">“大潮”</span>🌊，涨得最高、退得最低！</span>',
    number: 56
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌋🔥💨',
    title: '火山爆发',
    question: '❓ 火山为什么会喷火？',
    answer: '地球像一个大“夹心球”🌍——最里面是热腾腾的<span class="highlight">“地核”</span>，温度高达<span class="highlight">6000度</span>🔥，比钢铁厂的熔炉还热！地核的热量把周围的岩石烤化了，变成像粥一样滚烫的<span class="highlight">“岩浆”</span>🫕，不断冒着热气！这些岩浆在地底下越积越多，压力越来越大，就像用力摇晃过的可乐瓶🥤——瓶盖一拧开，“噗”地喷出来！当压力大到地壳撑不住的时候💥，岩浆就顺着地壳的裂缝——也就是火山口🌋——猛地喷涌而出，喷出几千米高！这就是火山爆发！喷出来的不只是火，还有<span class="highlight">火山灰、火山弹</span>🌪️，像一场“地球的大喷嚏”！<span class="fun-fact">地球上有<span class="highlight">1500多座活火山</span>🌋，大部分都在海底和板块交界处！冰岛🇮🇸、日本🇯🇵、意大利🇮🇹都是火山比较多的国家！</span>',
    number: 57
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌏🧲🧭',
    title: '地球有磁场',
    question: '❓ 指南针为什么总指北？',
    answer: '地球像一块巨大的<span class="highlight">“球形磁铁”</span>🧲，南边是磁铁的<span class="highlight">“南极”</span>（磁力线进入的地方），北边是磁铁的<span class="highlight">“北极”</span>（磁力线出来的地方）——就像一个超级大磁铁裹住了整个地球！指南针里有一根小小的磁针🧭，它本身就带有磁性，当它自由转动时，磁针的北极会被地球的磁北极吸引，所以它<span class="highlight">永远指向北方</span>⬆️！就像两磁铁会相互吸引一样！而且地球的磁场像一个<span class="highlight">“保护罩”</span>🛡️，能把太阳吹来的“太阳风”——带电粒子流🌬️——挡在外面，不让它们伤害地球上的生命！<span class="fun-fact">地球的磁极不是固定不动的🔄，它每年都在慢慢漂移——地球的“北磁极”现在已经从加拿大🇨🇦漂移到了西伯利亚🇷🇺方向！</span>',
    number: 58
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌙🌞🔄',
    title: '月亮变形状',
    question: '❓ 月亮为什么有圆缺？',
    answer: '月亮本身<span class="highlight">不会发光</span>，它就像一个“镜子球”🪞，靠反射太阳光☀️才能让我们看见！当月亮绕着地球转的时候🌍，太阳照到月亮上的角度不断变化——就像我们用台灯🌞照一个球⚽，从不同角度看，被照亮的部分都不一样！月亮转到太阳和地球之间时，被照亮的一面对着太阳，我们看的是<span class="highlight">“背光面”</span>，就看不清月亮，这叫“新月”🌑！月亮转到地球的另一边时，被照亮的正面全对着我们，就看到了<span class="highlight">“圆圆的满月”</span>🌕！从细细的“月牙”🌙变成圆圆的“满月”🌕，再慢慢变回月牙，这个过程叫<span class="highlight">“月相变化”</span>，一个月循环一次🔄！<span class="fun-fact">月亮也在“自转”🌀，而且自转和绕地球公转的速度完全一样——所以它总是用<span class="highlight">同一面对着我们</span>，我们永远看不到月球的背面！</span>',
    number: 59
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌍🌞🔄',
    title: '为什么有四季',
    question: '❓ 为什么冬天冷夏天热？',
    answer: '地球绕太阳转的时候，身子是<span class="highlight">“斜着”</span>的——像一个人歪着脑袋走路🌍！这个“倾斜角度”大约是<span class="highlight">23.5度</span>，就像地球的“小歪帽”🧢！因为这个倾斜，地球在绕太阳公转的一年里🌞，太阳光直射的位置会不断变化！夏天的时候☀️，太阳光直射北半球，像手电筒🔦垂直照在纸上一样——光聚在最亮的点上，又热又晒！冬天的时候❄️，太阳光斜射北半球，像手电筒斜着照——光分散了，又弱又冷！所以地球转到太阳光直射北半球的时候就是夏天，转到斜射的时候就是冬天🌨️！<span class="fun-fact">地球离太阳最近的时候（1月初）是<span class="highlight">冬天</span>❄️，离太阳最远的时候（7月初）反而是<span class="highlight">夏天</span>☀️——季节变化不是因为距离，而是因为倾斜角度！</span>',
    number: 60
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '💨🌀🏠',
    title: '龙卷风',
    question: '❓ 龙卷风是什么？',
    answer: '龙卷风是地球上最暴力的风💨——像一个<span class="highlight">“超级大吸尘器”</span>🌀！夏天的时候，地面被晒得特别热🔥，热空气快速上升，冷空气同时从四面八方钻进来填补，两股空气一热一冷一上一下互相绕圈，越转越快，最后形成一个巨大的<span class="highlight">“空气漏斗”</span>——上面连接乌云☁️，下面垂到地面🌍！这个漏斗旋转的速度超级快，能达到每小时<span class="highlight">500公里</span>💨，比高铁🚄还要快好几倍！经过的地方，房屋🏠被掀飞、大树🌳连根拔起、汽车🚗被卷到天上，破坏力巨大！龙卷风通常只持续几分钟到几十分钟，但留下的“脚印”特别吓人！<span class="fun-fact">美国🇺🇸是龙卷风最多的国家，每年有超过<span class="highlight">1000次</span>龙卷风，被叫做“龙卷风走廊”🌪️！</span>',
    number: 61
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌫️👻👀',
    title: '雾是什么',
    question: '❓ 雾从哪里来？',
    answer: '雾其实就是<span class="highlight">“地面上空的云”</span>☁️！白天太阳把地面晒热，地上的水分💧变成水蒸气飘到空中；到了晚上🌙，地面和空气变冷，水蒸气遇到冷空气就凝结成无数颗<span class="highlight">超级微小的水滴</span>💦——小到一颗颗飘在空中不落下来，像给大地披上了一层<span class="highlight">“白纱巾”</span>👻！这些密密麻麻的小水滴聚在一起，挡住了视线👀，远处的东西就看不清了，这就是雾！雾和云的区别就是<span class="highlight">“高度”</span>——云在头顶的高空，雾贴在地面上！如果雾特别浓🌫️，能见度不到50米，就叫做“大雾天”或“浓雾”，开车要开雾灯🚗、放慢速度！<span class="fun-fact">城市里的雾有时会掺着<span class="highlight">“霾”</span>😷——霾是空气中的灰尘和污染颗粒，有害健康，戴好口罩才能出门哦！</span>',
    number: 62
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🧊❄️🏔️',
    title: '冰川是什么',
    question: '❓ 山上的冰为什么那么厚？',
    answer: '冰川是<span class="highlight">“千年的积雪”</span>堆积而成的❄️！在高高的山上🏔️或南极北极，气温终年都在零度以下，每年下的雪都<span class="highlight">不会融化</span>。新雪一层一层覆盖旧雪，越压越实、越堆越厚——就像叠被子一样🛏️，一年一年叠上去！底层的雪被上面的雪压得特别紧实，里面的空气被挤出去，雪就变成了<span class="highlight">“冰川冰”</span>🧊——像一块巨大的、透明的“固体河”！冰川会像河流一样<span class="highlight">“流动”</span>🌊——虽然速度非常慢，每天只移动几厘米到几米，但它确实在“走”！冰川融化的水💧是很多大江大河的源头，养育了无数生命！<span class="fun-fact">地球上大约<span class="highlight">70%的淡水</span>💧都被冻在冰川里！格陵兰岛和南极洲的冰川如果全部融化，海平面会上升<span class="highlight">60多米</span>🌊，很多沿海城市会消失！</span>',
    number: 63
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊💨🌪️',
    title: '台风',
    question: '❓ 台风是什么？',
    answer: '台风是大海上形成的<span class="highlight">“超级大风暴”</span>🌪️——像一个旋转在海洋上的“巨型陀螺”🪀！夏天的时候🌞，海水被晒得特别热（超过26.5°C🌡️），大量海水蒸发上升，形成巨大的云团☁️。地球自转让上升的气流开始旋转🔄，就像洗澡时拔掉塞子🚿，水会打着旋涡流下去一样！台风中心有一个<span class="highlight">“风眼”</span>👁️——风眼里风平浪静、甚至能看到蓝天☀️，但风眼周围是旋转速度超过<span class="highlight">每小时120公里</span>💨的狂风暴雨！台风经过的地方🌊，巨浪滔天、大树🌳被连根拔起、房屋🏠被吹倒，破坏力特别大！台风的能量来自温暖的海洋——离开海水到了陆地上🌍，没有能量来源，就会慢慢减弱消失！<span class="fun-fact">在亚洲叫“台风”🌀，在美洲叫“飓风”🌪️，在印度洋叫“气旋”🌊——其实都是同一种东西，只是名字不同！</span>',
    number: 64
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '☀️🌡️🔥',
    title: '热浪',
    question: '❓ 夏天为什么特别热？',
    answer: '夏天特别热是因为太阳光<span class="highlight">“直射”</span>我们所在的地方☀️——就像用手电筒🔦垂直照墙一样，光斑又小又亮又热！夏天的时候，地球的北半球正好“歪向”太阳🌍，太阳光直直地照在头顶上，能量最集中，晒得地面和空气都特别烫🔥！而且夏天白天特别长🌞——太阳早上5点就出来了🌅，晚上7点多才下山🌇，晒太阳的时间比冬天长好几个小时，地面吸收的热量特别多！再加上地面的热气散不出去🌡️，温度就蹭蹭往上涨，形成“热浪”一波接一波！<span class="fun-fact">地球上最热的地方不是赤道而是<span class="highlight">伊朗的卢特沙漠</span>🏜️，地表温度曾达到<span class="highlight">70.7°C</span>🌡️——鸡蛋🥚打在地上都能煎熟！</span>',
    number: 65
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '💧🌿🌱',
    title: '露水',
    question: '❓ 早上草上为什么有水珠？',
    answer: '草叶上的水珠是<span class="highlight">“夜里的汗珠”</span>💧！白天，太阳晒热了地面和空气🌞，水分变成水蒸气飘在空中。到了晚上🌙，地面和草叶🌿的温度降得特别快，变得凉凉的——而空气中还保留着不少水蒸气。当这些水蒸气遇到冷冰冰的草叶时，就像<span class="highlight">“哈气碰到冷玻璃”</span>一样，水蒸气凝结成一颗颗小水珠💦，挂在草叶尖上、花瓣上🌸，晶莹剔透的，像一颗颗小珍珠！这就是<span class="highlight">“露水”</span>！露水一般在<span class="highlight">日出前</span>🌅最多，太阳一出来一晒，露水就蒸发掉了，又变成水蒸气回到空气里，开始下一轮循环🔄！<span class="fun-fact">有些沙漠里的植物🌵靠收集露水来喝水！它们的叶子有特殊的形状，能让露水顺着叶子流到根部，像“天然集水器”一样💧！</span>',
    number: 66
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🌊🌊',
    title: '海浪',
    question: '❓ 海上的波浪怎么来的？',
    answer: '海浪是风<span class="highlight">“推”</span>出来的🌬️！风从海面上吹过去的时候，像一只大手轻轻抚摸海水🌊——一开始只是小小的“水皱皱”，像风吹过草地🍃一样。风继续吹、一直吹🌬️，这些小水皱皱就慢慢变大、变高，变成<span class="highlight">“波浪”</span>，一个推着另一个向前走，像小朋友玩“开火车”一样🚂——一浪推一浪、一浪叠一浪！风越大🌪️，吹的时间越长⏳，吹的海面越宽🌊，波浪就越高越大！最厉害的“巨浪”🌊能比一栋楼还高，超过<span class="highlight">30米</span>！波浪到了海边🏖️，海底越来越浅，浪的底部被“刹车”了，顶部继续向前扑——就翻起了<span class="highlight">“白花花的浪花”</span>🌊，拍在沙滩上“哗哗”响！<span class="fun-fact">地球上有一种<span class="highlight">“涌浪”</span>🌊，是远处风暴生成的，能<span class="highlight">跨越整个大洋</span>🌍，从一边海岸传到另一边海岸，像“海洋的信使”📨！</span>',
    number: 67
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌌✨🌠',
    title: '流星',
    question: '❓ 流星是什么？',
    answer: '流星是太空里的<span class="highlight">“迷路的小石头”</span>☄️！在太阳系里🪐，有很多大小不一的“太空碎片”——有像房子一样大的🚀，也有像沙子一样小的🌌。当地球🌍在绕太阳转的时候经过这些碎片所在的位置，碎片就会被地球引力拽过来，以超快的速度<span class="highlight">“冲进”</span>地球大气层💨——速度高达每秒<span class="highlight">几十公里</span>⏱️，比子弹还快几百倍！碎片和大气摩擦产生超高的热量🔥，碎片被烧得发光发亮✨，留下一道长长的<span class="highlight">“光尾巴”</span>🌠，这就是我们看到的流星！大多数流星在大气层中就被<span class="highlight">烧光了</span>🔥，落不到地面上。如果有碎片特别大，没烧完掉到了地面上，就叫<span class="highlight">“陨石”</span>🪨！<span class="fun-fact">每年8月有<span class="highlight">“英仙座流星雨”</span>🌠🌠🌠，一晚上能看到几十甚至上百颗流星！记得许愿哦⭐——虽然这只是个美丽传说，但确实很浪漫！</span>',
    number: 68
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌏🔍🪨',
    title: '化石',
    question: '❓ 石头里为什么有骨头？',
    answer: '石头里的骨头是<span class="highlight">“远古生命的脚印”</span>🦕！几千万年前甚至几亿年前🕰️，恐龙🦖、古鱼🐟、古树🌳死后，它们的身体被泥沙💧一层层掩埋起来，与空气隔绝了——细菌没法分解它们，就不会腐烂！经过漫长的岁月，地下水和矿物质💎慢慢渗入这些骨头和木头里，把里面的有机物<span class="highlight">“替换”</span>成了石头——就像把一块海绵🧽泡在水泥里，最后变成一块“石头海绵”！这个过程叫<span class="highlight">“石化”</span>🪨！原来的骨头形状和纹理被保存了下来，变成了“石头骨头”——就是我们现在看到的<span class="highlight">“化石”</span>！通过化石🔍，科学家能知道恐龙长什么样、吃什么、甚至怎么走路！<span class="fun-fact">最古老的化石有<span class="highlight">35亿年</span>历史🕰️——那是地球上最早的生命——像蓝藻这样的单细胞生物留下的“签名”📝！</span>',
    number: 69
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🏝️🏖️',
    title: '岛屿',
    question: '❓ 海上的岛怎么来的？',
    answer: '海上的小岛🏝️很多是<span class="highlight">“海底火山的帽子”</span>🌋！在大海的深处，海底也有火山——不断喷发岩浆🌋，岩浆遇到冰冷的海水❄️，迅速冷却凝固成岩石🪨。一次一次喷发、一层一层堆积🌋🌋🌋，岩浆越堆越高、越堆越大，就像在海底下“盖高楼”🏗️！当这座“高楼”的楼顶高出海面🌊——就变成了一个小岛🏝️！像夏威夷🇺🇸、冰岛🇮🇸、复活节岛🗿，都是海底火山“盖出来”的！还有另外一种岛屿叫<span class="highlight">“大陆岛”</span>🏔️——本来是大陆的一部分，因为海平面上升🌊或者地壳运动🌍，和大陆分开了，变成了独立的岛，比如台湾岛🇹🇼、海南岛🇨🇳、英国🇬🇧！<span class="fun-fact">世界上最大的岛是<span class="highlight">格陵兰岛</span>🇬🇱，面积216万平方公里——比英国、法国、德国加起来还要大！但它人口只有5万多，大部分地方都被厚厚的冰盖着❄️！</span>',
    number: 70
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌍🌏🌎',
    title: '地球的形状',
    question: '❓ 地球为什么是圆的？',
    answer: '地球是<span class="highlight">“圆球”</span>⭕——但不是一个“完美的圆球”，而是<span class="highlight">“扁球”</span>（像一个被压扁了一点的篮球🏀）！地球为什么是圆的呢？答案和<span class="highlight">“引力”</span>有关！地球刚形成的时候🌍，是一团巨大的气体和尘埃☁️，所有物质在自身重力的牵引下，都“往中心聚”⬇️——四面八方都往中间挤，最后就挤成了“圆球形”！就像揉面团🍞，所有方向都往中间压，最后就变成了一个圆球！地球是圆的——我们早就知道了！500多年前，麦哲伦的船队⛵从西班牙出发，一直往西开，最后回到了西班牙——证明地球是圆的！<span class="fun-fact">地球的“赤道”比“两极”要宽一点点📏——赤道直径比南北极直径长<span class="highlight">43公里</span>！这是因为地球自转的离心力把赤道“甩”鼓了一点！</span>',
    number: 71
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌅🌇🌃',
    title: '日出和日落',
    question: '❓ 太阳为什么会落山？',
    answer: '太阳“落山”不是太阳在下山🌄，而是地球在<span class="highlight">“自转”</span>🔄——地球像一个陀螺一样，自己不停地转圈！地球自转一圈需要<span class="highlight">24小时</span>⏱️——这就是“一天”！地球对着太阳的那一面是“白天”☀️，背着太阳的那一面是“夜晚”🌙。当地球转呀转的时候🌍，我们所在的位置慢慢从“对着太阳”转到“背着太阳”——就像我们站在旋转木马🎠上，一开始能看到站在右边的人，转过去就看不到了！太阳在我们眼中就是“越走越低”，最后“落到地平线下面”🌇——就天黑了！第二天地球继续转🔄，我们又转到了“对着太阳”的位置——太阳“升起来了”🌅！<span class="fun-fact">太阳其实<span class="highlight">“没有动”</span>——是地球在动！就像你坐在火车上看窗外——树往后跑，其实是火车在往前跑🚂！</span>',
    number: 72
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🌏🔊',
    title: '地震是什么',
    question: '❓ 大地为什么会震动？',
    answer: '地震是地球<span class="highlight">“打了个哆嗦”</span>🌍！地球最外面是一层“地壳”——像硬硬的“鸡蛋壳”🥚，分成很多块（叫“板块”🧩）。这些“地壳板块”一直在<span class="highlight">“慢慢移动”</span>——一年移动几厘米！板块移动时，有的地方会“挤”在一起、有的会“拉”开、有的会“错开”——就像几块大冰块在水面上互相碰撞🫧！当板块“挤”得太厉害、压力太大的时候💥，“地壳”会在某个薄弱点“突然断裂”💔——积累的能量一下子释放出来，像“蹦”开一样！这个“能量释放”传到地面🌊，大地就会<span class="highlight">“抖动”</span>——这就是地震！震动的程度用“震级”📊来衡量——数字越大、地震越强！<span class="fun-fact">地球上每年有<span class="highlight">50万次</span>地震🌍——但绝大多数都太小了，人类感觉不到！只有“地震仪”📟才能记录到！</span>',
    number: 73
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🌍💎',
    title: '地球内部是什么',
    question: '❓ 地球里面有什么？',
    answer: '地球像一颗巨大的“夹心糖果”🍬——由<span class="highlight">“三层”</span>组成！<span class="highlight">“外壳”</span>（地壳）：我们站着的地面🏠、高山🏔️、海底🌊——就是地球的最外层，像“糖果的巧克力壳”🍫，厚度只有<span class="highlight">5到70公里</span>！<span class="highlight">“中间层”</span>（地幔）：在地壳下面，厚度约<span class="highlight">2900公里</span>——是“糖果的夹心”🧁，由“半熔化的岩石”组成，温度高达<span class="highlight">1000到3700°C</span>🔥，像“热巧克力浆”慢慢流动！<span class="highlight">“中心层”</span>（地核）：地球的最核心，半径约<span class="highlight">3500公里</span>——是“糖果的最内层”🍬，主要由<span class="highlight">铁和镍</span>组成！内核是固态⚙️（像实心铁球），温度高达<span class="highlight">6000°C</span>🔥——比太阳表面还热！<span class="fun-fact">地核的“铁”产生地球磁场🧲——像一块巨大磁铁保护着我们，把太阳风🌬️挡在外面！</span>',
    number: 74
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🫧💨',
    title: '大气层是什么',
    question: '❓ 为什么有空气？',
    answer: '地球外面包裹着一层<span class="highlight">“空气外套”</span>🧥——叫“大气层”！大气层像“透明的大被子”🫧，厚度超过<span class="highlight">1000公里</span>！大气层是由“气体分子”组成的：大部分是<span class="highlight">氮气</span>（78%）、氧气（21%）、少量二氧化碳、氩气等！大气层<span class="highlight">“越往上越稀薄”</span>📉——在海平面空气最浓🌊，到高山顶空气变稀🏔️，到太空边缘几乎“没有空气”🚀！大气层有三个超重要的功能：<span class="highlight">“供我们呼吸”</span>🌬️——我们吸的氧气就在大气层里；<span class="highlight">“保护我们”</span>🛡️——挡住太阳的紫外线☀️和太空来的流星☄️，让它们烧毁在大气层里；<span class="highlight">“保温”</span>🌡️——让地球保持温暖，晚上不会冷到零下！<span class="fun-fact">如果没有大气层🌍，白天太阳直射的地面温度会高达<span class="highlight">120°C</span>🔥，晚上会降到<span class="highlight">-100°C</span>❄️——生命根本没法活！</span>',
    number: 75
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊❄️🪨',
    title: '冰期是什么',
    question: '❓ 地球也有“冰河时期”？',
    answer: '地球确实有过<span class="highlight">“冰河时期”</span>❄️——也叫“大冰期”！在那段漫长的岁月里🌍，地球大部分地方被厚厚的冰层覆盖🧊，像一个大“雪球”⚪！冰河时期来的时候❄️，全球气温下降<span class="highlight">5°C到10°C</span>🌡️——听起来不多，但足够让大片陆地被冰覆盖！北美洲、欧洲、亚洲的大片地方🌍，都被冰层压着，厚度超过<span class="highlight">几千米</span>🧊！上一次“大冰期”在<span class="highlight">大约2万年前</span>结束🕰️——那时候北京猿人、猛犸象🦣、剑齿虎🐯都经历过！冰河时期和<span class="highlight">“地球轨道变化”</span>有关——地球的“倾斜角度”和“绕太阳的轨道形状”会周期性地变化，导致太阳光照射地球的角度和强度改变，温度就变低了！<span class="fun-fact">我们目前生活在地球的<span class="highlight">“间冰期”</span>🌤️——两次冰期之间的“温暖期”！但地球可能还会再进入冰河时期❄️，不过那是<span class="highlight">几万年以后</span>的事了！</span>',
    number: 76
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🌡️🔥',
    title: '全球变暖',
    question: '❓ 为什么地球在变暖？',
    answer: '地球正在“发烧”🔥——叫<span class="highlight">“全球变暖”</span>！原因和人类活动有关🧑‍🤝‍🧑：我们烧煤炭、石油、汽油⛽️，放出很多<span class="highlight">“二氧化碳”</span>和<span class="highlight">“温室气体”</span>💨！这些气体像<span class="highlight">“大棉被”</span>🛏️一样裹住地球——太阳的热量☀️照进大气层后，被“棉被”挡着出不去了，所以地球越来越热🌡️！100多年来🌍，地球平均温度上升了<span class="highlight">1.2°C</span>——听起来不多，但已经让冰川融化🧊、海平面上升🌊、很多地方干旱🌵、很多动物失去家园🐻‍❄️！全球变暖需要大家一起努力💪：少开车🚲、多种树🌳、少用一次性塑料🛍️、多使用太阳能☀️——每个人做一点点，地球就会舒服一点！<span class="fun-fact">2023年是<span class="highlight">“有记录以来最热的一年”</span>🌡️——而且未来可能还会更热！保护地球🌍，是我们每个人的责任！</span>',
    number: 77
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🧪💧',
    title: '酸雨是什么',
    question: '❓ 雨怎么会变酸？',
    answer: '雨本来是中性的💧——但人类工厂🏭和汽车🚗排出的“有害气体”（二氧化硫和氮氧化物）飘到空中，和水蒸气结合，就像往水里“加了醋”🧪，雨就变酸了！这就是<span class="highlight">“酸雨”</span>☔！酸雨的“酸”比普通雨水强<span class="highlight">几十倍</span>——它落到森林🌳里，让土壤变酸、树木枯死；落到湖泊🌊里，让鱼🐟和青蛙🐸活不了；落到城市🏙️里，还会腐蚀建筑物🏛️和雕像🗽！酸雨是<span class="highlight">“空气污染的产物”</span>——是工厂和汽车排放的“有害烟”💨造成的！现在很多国家已经开始“净化”废气🛠️、用清洁能源（太阳能☀️、风能🌬️）来减少污染！<span class="fun-fact">酸雨的“酸”和我们喝的“汽水”🥤里的酸是类似的——汽水也是“碳酸”饮料，也是“酸性”的！但汽水喝进肚子没问题，酸雨落在地上可有大问题！</span>',
    number: 78
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🔄🛡️',
    title: '水循环是什么',
    question: '❓ 水怎么循环的？',
    answer: '水循环是地球的<span class="highlight">“生命传送带”</span>🔄——把水从海洋🌊送到天空☁️，再送回大地🌍，再流回海洋——永远不停！第一步：<span class="highlight">“蒸发”</span>💨——太阳☀️晒热海水、河水、湖水，水变成“水蒸气”飘上天空，像锅里的水烧开冒气一样♨️！第二步：<span class="highlight">“凝结”</span>☁️——水蒸气在高空遇冷，变回小水滴，成千上万小水滴聚在一起变成“云朵”！第三步：<span class="highlight">“降水”</span>🌧️——云朵变重了、变大了，水就落下来——下雨🌧️、下雪❄️！第四步：<span class="highlight">“径流”</span>🌊——落下的水一部分流进河里、溪里，一部分渗进地下变成“地下水”，最后都流回大海🌊！然后又开始蒸发💨——循环不停！水是地球上<span class="highlight">“最勤劳的旅行家”</span>🧳，永远在“环球旅行”！<span class="fun-fact">一滴水💧完成一次“完整的水循环”需要大约<span class="highlight">“9天”</span>⏱️！但地下水要回到大海可能需要<span class="highlight">“几百年”</span>🕰️！</span>',
    number: 79
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌌🌟🪐',
    title: '银河是什么',
    question: '❓ 夜空中那条“白河”是什么？',
    answer: '夜空中那条白茫茫的“光河”🌌——是<span class="highlight">“银河”</span>！银河是<span class="highlight">“数不清的星星”</span>聚集在一起形成的“光带”——其实是一个巨大的“星系”🪐！银河里有<span class="highlight">“1000亿到4000亿颗”</span>恒星⭐——比地球上的人口还多几百倍！我们所在的<span class="highlight">“太阳系”</span>☀️（包括地球🌍、太阳、八大行星）就是银河系的一部分——像“城市”里的一栋“小房子”🏠！为什么我们看到的是“一条光带”🌌？因为我们从“银河系内部”往外看——就像你站在一个“巨大的旋转盘子”🍽️的边缘，往中心看，看到的是“盘子”的侧面——所有星星叠在一起，看起来就是一条“光河”！<span class="fun-fact">银河的中心是<span class="highlight">“最亮的部分”</span>💡——那里聚集了最密集的星星！如果天气特别好🌙，在没有灯光的地方看天空，银河像一条“银色的纱巾”飘在天上，特别美！</span>',
    number: 80
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌙🚀🪐',
    title: '太空探索',
    question: '❓ 人类去过太空吗？',
    answer: '当然去过！人类早就<span class="highlight">“飞上太空”</span>🚀了！1961年4月12日，前苏联宇航员<span class="highlight">“加加林”</span>👨‍🚀——乘坐“东方1号”飞船，第一次飞上了太空，绕地球飞行了一圈🔄，成为“太空第一人”！1969年7月20日，美国宇航员<span class="highlight">“阿姆斯特朗”</span>👨‍🚀——乘坐“阿波罗11号”登上了<span class="highlight">“月球”</span>🌙，成为“月球第一人”！他说了一句名言：“这是个人的一小步，却是人类的一大步”👣！现在人类已经建设了“国际空间站”🛰️——一个在太空中长期漂浮的“太空实验室”🏗️，宇航员们在里面生活、做实验🧪！中国也有自己的“天宫空间站”🇨🇳——中国航天员已经常驻太空了！<span class="fun-fact">宇航员在太空里会“变高”⬆️——因为没有重力，脊椎的椎间盘会“伸展开”，能长高<span class="highlight">“3到5厘米”</span>！但回到地球🌍几个月后会恢复原状！</span>',
    number: 81
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🔥🌋',
    title: '海啸',
    question: '❓ 巨大海浪怎么来的？',
    answer: '海啸是海洋里的<span class="highlight">“超级波浪”</span>🌊——能高达<span class="highlight">“30米”</span>，比一栋10层楼还高！海啸不是“风”吹出来的🌬️，而是由<span class="highlight">“海底地震”</span>🌍、“海底火山爆发”🌋、“海底滑坡”引发的！当地震发生时💥，海底板块突然“错动”，大面积的海水被“推”起来，像一只巨大的“手”把海水抬高了🙌！这个被“抬高”的海水变成一圈圈“波纹”向四面八方扩散🔄——像池塘里扔进一块大石头🪨！波纹在深海里速度特别快💨——达到每小时<span class="highlight">“800公里”</span>，比飞机还快✈️！但当它靠近海岸🏖️，海底变浅，波浪被“推高”了📈——变成超级大浪🌊猛拍海岸！“海啸”来的时候，第一时间要往高处跑🏔️！<span class="fun-fact">2004年印度洋海啸🌊——由9.1级海底地震引发，波及14个国家，造成<span class="highlight">“23万人”</span>死亡！是人类历史上最严重的海啸之一！</span>',
    number: 82
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🧊📈',
    title: '海平面上升',
    question: '❓ 海平面为什么会上升？',
    answer: '海平面上升的原因<span class="highlight">“全球变暖”</span>🔥——有两个原因！第一：<span class="highlight">“冰川融化”</span>🧊——全球变暖让陆地上的冰川（比如南极洲❄️、格陵兰岛🇬🇱、高山冰川🏔️）慢慢融化，融化的水流进大海🌊，就像往浴缸🛁里加多了水——海面就涨高了！第二：<span class="highlight">“海水变热膨胀”</span>🌡️——水“热胀冷缩”——海水变暖后体积会“膨胀”一点点，海面也“鼓起来”了！过去100年🌍，海平面上升了<span class="highlight">“20厘米”</span>📏——听起来不多，但影响很大！很多沿海城市🏙️（比如上海、纽约、东京）和岛国🏝️（比如马尔代夫、图瓦卢）都面临着被海水淹没的风险！<span class="fun-fact">如果南极和格陵兰的冰全部融化🧊——海平面会上升<span class="highlight">“60米”</span>🌊，很多大城市和沿海地区会被淹没！所以要保护地球🌍、减少碳排放！</span>',
    number: 83
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🌡️🐟',
    title: '海洋酸化',
    question: '❓ 海洋也在变酸？',
    answer: '是的，海洋正在“变酸”🧪——叫<span class="highlight">“海洋酸化”</span>！原因和“全球变暖”一样🔥——都是人类燃烧化石燃料放出的“二氧化碳”💨造成的！二氧化碳跑到空气里☁️，一部分被海水“吸收”了🌊——海水和二氧化碳反应，产生<span class="highlight">“碳酸”</span>（像汽水里的酸）——海水就变酸了！海洋变酸对海洋生物伤害很大🦐——尤其是<span class="highlight">“带壳”</span>的生物：牡蛎🦪、蛤蜊🐚、珊瑚🪸、甚至小浮游生物！它们的“钙质壳”在酸水里会“溶解”掉🧂——就像牙齿泡在醋里会变软一样！海洋生物没有壳就活不了🐠，没有它们，整个海洋食物链都会崩溃😱！<span class="fun-fact">海洋已经吸收了人类排放的<span class="highlight">“1/3”</span>二氧化碳💨——如果没有海洋吸收，全球变暖会更严重！但海洋的“容量”有限，不能再“吃”更多二氧化碳了！</span>',
    number: 84
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🌿🦈',
    title: '海洋生态',
    question: '❓ 海洋里有多少种生物？',
    answer: '海洋是地球<span class="highlight">“最大的生命家园”</span>🌊——充满千奇百怪的生物！目前科学家“发现”的海洋生物大约有<span class="highlight">“25万种”</span>🐟🦐🐙🪸🦈——但“还没发现”的可能有<span class="highlight">“几百万种”</span>！海洋生物从大到小都有：最小的“浮游植物”🌱，比头发丝还细，用显微镜才能看到🔬——但它们“制造”了地球上一半的氧气💨！最大的“蓝鲸”🐋——比恐龙还大，身长<span class="highlight">“30米”</span>，体重<span class="highlight">“200吨”</span>，心脏像一辆小汽车那么大🚗！海洋生物“五花八门”：有透明的（水母🪼）、会发光的（萤火鱿💡）、有盔甲的（海龟🐢）、有触手的（海星⭐）、有电的（电鳗⚡）——像<span class="highlight">“外星世界”</span>👾一样神奇！<span class="fun-fact">人类只探索了海洋的<span class="highlight">“5%”</span>🌊——剩下的“95%”都还是“未知领域”！海洋深处🧜‍♀️可能还有无数种“神秘生物”没被发现呢！</span>',
    number: 85
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🧊🏔️',
    title: '冰山',
    question: '❓ 冰山是哪里来的？',
    answer: '冰山是<span class="highlight">“冰川断裂”</span>掉下来的🧊！在高纬度的地方（比如格陵兰岛🇬🇱、南极🇦🇶），巨大的冰川从陆地“流”向大海🌊——像一条“冰河”慢慢滑行！当冰川的“前端”伸入海水中❄️，海水不断“侵蚀”底部、加上波浪🌊撞击、加上冰川自身的重量——前端“撑不住”了，“咔嚓”一声断掉了💥！断掉的巨大冰块掉进海里，就是<span class="highlight">“冰山”</span>🧊！冰山“浮”在海面上，但只有<span class="highlight">“10%”</span>露在水面上👀——剩下的<span class="highlight">“90%”</span>都藏在海水下面🌊！所以有句话说“冰山一角”——看到的只是一小部分，真正的大块在底下！<span class="fun-fact">冰山是<span class="highlight">“淡水冰”</span>💧——不是海水结的冰！冰山掉进海里后，慢慢融化变成淡水，为海洋生物提供新鲜水！</span>',
    number: 86
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🏝️🏗️',
    title: '人工岛',
    question: '❓ 人类能“造”岛吗？',
    answer: '能！人类真的在<span class="highlight">“造岛”</span>🏗️——造“人工岛”！不是用火山喷发🌋——而是用“工程机械”🚜！建造过程：先在海里<span class="highlight">“围堰”</span>——用大石头🪨和沙袋围出一个“大圆圈”，把海水“隔离”出去💧！然后把圈里的水“抽干”💨，露出海底的泥土地面！再往里面填入“沙石、泥土、岩石”🧱——像“填土造地”一样，一层层填高，直到高出海面🌊！最后在“新陆地”上铺平、种树🌳、造房子🏠——就变成了一个“人工岛”！“人工岛”用来建机场✈️、旅游度假区🏖️、甚至建城市🏙️！最有名的人工岛是<span class="highlight">“迪拜棕榈岛”</span>🌴——像一棵巨大的“棕榈树”形状，是用沙子🏖️和岩石从海底填出来的！<span class="fun-fact">建造棕榈岛用了<span class="highlight">“1亿多吨”</span>的沙子和岩石🪨——如果用卡车🚛来运，排起来的长度能绕地球<span class="highlight">“3圈”</span>！</span>',
    number: 87
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🧪💊',
    title: '海洋药物',
    question: '❓ 海洋里有“药”吗？',
    answer: '有！海洋里藏着<span class="highlight">“天然药房”</span>💊——很多海洋生物能“治病”！科学家在海洋里发现了许多<span class="highlight">“抗癌物质”</span>🧬：从海鞘🪸、海绵🧽、珊瑚🪸里提取出的化学物质，对治疗癌症、炎症、疼痛有奇效！<span class="highlight">“鲨鱼”</span>🦈几乎不得癌症——科学家在研究鲨鱼的“软骨”和“免疫系统”，希望找到“抗癌密码”！<span class="highlight">“马蹄蟹”</span>🦀的血是蓝色的💙——它的血提取物能检测出“细菌污染”🧫，被用来制造“测试药物安全”的试剂！<span class="highlight">“海藻”</span>🌿含有丰富的“抗氧化剂”和“维生素”——被用来做保健品💊和“护肤品”🧴！海洋是<span class="highlight">“生命之源”</span>🌊——保护好海洋，人类就有“用不完的药方”！<span class="fun-fact">海洋中药物的<span class="highlight">“提取率”</span>特别低💊——要提取1克有效成分，可能需要<span class="highlight">“几十吨”</span>的海洋生物！所以不能“过度捕捞”🐟！</span>',
    number: 88
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🎣🐠',
    title: '过度捕捞',
    question: '❓ 为什么不能“抓光”鱼？',
    answer: '过度捕捞🌊——就是“抓太多鱼”🐟——会让海洋“空掉”🌊，让鱼🐠来不及繁殖、数量越来越少！就像“杀鸡取卵”🐔——今天把鸡都杀了，以后就没有鸡蛋吃了！海洋是一个“大社区”🏘️——鱼、虾、海藻、珊瑚、浮游生物互相依赖、环环相扣🔄！如果某种鱼“被捕光”了，吃它的鱼就没有食物了、天敌也会饿死——整个“海洋食物链”就断了💔！而且捕鱼用的“大网”🕸️有时候会把“不该抓”的生物也抓走（海豚🐬、海龟🐢、鲸鱼🐋）——这叫“混捕”，对海洋伤害很大！保护海洋🐠——就是要“有节制地捕鱼”：“抓多少、留多少”，让鱼有时间生孩子🐟🐟🐟！<span class="fun-fact">世界<span class="highlight">“90%”</span>的大鱼（金枪鱼、鲨鱼、鳕鱼）已经被抓光了😢！如果再不保护，子孙后代可能只能在“水族馆”🐠里看到大鱼了！</span>',
    number: 89
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🛑🛍️',
    title: '海洋垃圾',
    question: '❓ 海里为什么有垃圾？',
    answer: '海洋里的垃圾🌊——主要是<span class="highlight">“塑料垃圾”</span>🛍️——是人类“扔”进海里的！垃圾怎么进海的？原因很多：有人在海边🏖️乱扔垃圾🗑️，风吹进海里🌬️；有的垃圾从河流🌊流进大海；有的垃圾从船上🚢直接扔进海里！海里的塑料垃圾不会“消失”❌——塑料要<span class="highlight">“几百年”</span>才能分解🧪！这些垃圾对海洋生物伤害很大：海龟🐢以为塑料袋是“水母”🪼，吃了会堵住胃、活不了；海豚🐬和鱼🐟被塑料圈🔄套住，没法游泳、没法吃东西；小鱼吃了“微塑料”（极小塑料颗粒），再被人吃🐟——塑料就“进入”了我们的身体！保护海洋从每一件小事做起✅：少用塑料袋🛍️、少用一次性塑料瓶🥤、不乱扔垃圾🗑️！<span class="fun-fact">太平洋上有一个<span class="highlight">“垃圾岛”</span>🗑️——面积比法国🇫🇷还大！由<span class="highlight">“800万吨”</span>塑料垃圾组成，像一片“塑料大陆”漂在大海上！</span>',
    number: 90
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🪸💔',
    title: '珊瑚礁白化',
    question: '❓ 珊瑚礁为什么变白了？',
    answer: '珊瑚礁“变白”了🪸——叫<span class="highlight">“珊瑚白化”</span>！珊瑚不是“石头”，而是“活的动物”🐚——由成千上万只“珊瑚虫”组成！珊瑚虫的身体里住着一种叫<span class="highlight">“虫黄藻”</span>的“小室友”🌿——虫黄藻是“微型海藻”，能进行光合作用☀️，把能量“分”给珊瑚虫，让珊瑚虫“生宝宝”🥚、长身体、建房子（珊瑚骨骼🏠）！虫黄藻是珊瑚的“绿色厨房”🍽️——让珊瑚有吃的、有颜色（虫黄藻有颜色🎨，所以珊瑚五颜六色）！当海水温度“太高”🌡️（超过30°C）——珊瑚虫“热得受不了”，就会把“虫黄藻”赶走🚫！没有了虫黄藻，珊瑚就“变白”了（露出自己的白色骨骼🦴）——而且没有吃的，珊瑚就会“饿死”😢！<span class="fun-fact">如果海水“凉快”下来🌊——虫黄藻还能“回来”，珊瑚就能“复活”🔄！但全球变暖🌍一直在让海水变热，很多珊瑚礁已经“永久白化”了！</span>',
    number: 91
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🔬🧬',
    title: '海洋科技',
    question: '❓ 人类怎么探索深海？',
    answer: '人类探索深海用<span class="highlight">“高科技装备”</span>🤖——因为深海太深了🌊、太暗了🌑、压力太大了💨！第一：<span class="highlight">“潜水器”</span>🚤——像“水下小飞船”，能载人潜到几千米深的海底！最著名的“深海潜艇”是“深海挑战者号”🚀，潜到了<span class="highlight">“马里亚纳海沟”</span>——地球最深的地方（<span class="highlight">11000米</span>）！第二：<span class="highlight">“水下机器人”</span>🤖——叫“ROV”，像“水下无人机”，用电缆连到船上🌊，科学家在船上“遥控操作”📡！机器人有“机械臂”🦾和“摄像头”📹，能采集样品、拍摄视频！第三：<span class="highlight">“声呐”</span>📡——用“声波”来“绘制”海底地图🗺️——像“蝙蝠回声定位”一样！<span class="fun-fact">人类对深海的了解<span class="highlight">“比火星还少”</span>🪐！火星🌌我们已经派了好多探测器🛰️，但深海的“绝大部分”地方，人类从未去过！</span>',
    number: 92
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🧜‍♀️📖',
    title: '海洋传说',
    question: '❓ 美人鱼是真的吗？',
    answer: '美人鱼🧜‍♀️——是<span class="highlight">“传说”</span>！古代水手⛵航行在大海上🌊，远远看到一种“半人半鱼”的生物🧜‍♀️，其实很可能是“儒艮”🦭——一种海洋哺乳动物，也叫“美人鱼”！儒艮🐋生活在浅海🌊，用“前鳍”抱着宝宝👶喂奶🍼，远远看去像“一个女子抱着孩子”坐在水面上👩‍👦——水手们误以为是“美人鱼”！儒艮是真正的“海洋牛”🐄——只吃海草🌿，性格温和、动作缓慢！所以“美人鱼”的传说🌊，可能是古人“看错了”，把“儒艮”当成了“半人半鱼”的奇幻生物🧜‍♀️！<span class="fun-fact">“儒艮”和“大象”🐘是“远房亲戚”——它们有共同的祖先！儒艮的“牙齿”和大象的“象牙”类似——都是“门牙”长长了形成的！</span>',
    number: 93
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🏴‍☠️⚓',
    title: '海洋宝藏',
    question: '❓ 海底有宝藏吗？',
    answer: '海底确实有<span class="highlight">“宝藏”</span>💎——但不是“金币💰和宝石💎”，而是“历史和科技”📜！沉船🚢是海底最大的“宝藏”：几百年前的“帆船”⛵在海上失事沉没，船上运载的货物（瓷器🏺、丝绸🧣、香料🌿、金币💰）都沉在海底，变成了“时间胶囊”📦！最有名的“沉船宝藏”是“泰坦尼克号”🚢——1912年沉没在大西洋🌊，直到1985年才被发现！科学家从沉船上打捞上来的“文物”🏺——帮我们了解几百年前的海上贸易、造船技术、航海生活！海底还有“天然宝藏”💎——石油⛽️、天然气🔥、稀土矿物🧪，藏在海底岩石里！<span class="fun-fact">据估计，全世界海洋里有<span class="highlight">“300万艘沉船”</span>🚢——绝大部分还没被发现！每一艘沉船都是“海底博物馆”🏛️！</span>',
    number: 94
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🏄‍♂️🌬️',
    title: '海洋运动',
    question: '❓ 人类在海里做什么运动？',
    answer: '海洋是人类的<span class="highlight">“巨大游乐场”</span>🏖️——有超多水上运动！<span class="highlight">“冲浪”</span>🏄‍♂️——站在冲浪板上，用波浪🌊的力量在水面上“滑行”，特别刺激！“帆板运动”⛵——踩着冲浪板、手上举着“帆”，靠风力🌬️推动前进！“皮划艇”🚣‍♂️——坐在“独木舟”🛶里，用双叶桨划水，在海上静静穿梭！“帆船”⛵——坐着或站着，靠风🌬️吹动帆布前进，比皮划艇更快！“潜水”🤿——背着氧气瓶🫧、穿着脚蹼，潜到水下看鱼🐠和珊瑚🪸！“浮潜”🤿——戴上面镜、呼吸管，在水面上漂浮着看水下——不需要氧气瓶！“深海潜水”🚀——坐潜水艇下到几千米深的“黑暗海底”！<span class="fun-fact">最刺激的海洋运动是“巨浪冲浪”🌊——冲浪者专门找<span class="highlight">“20米”</span>高的超级巨浪，在浪尖上“飞”起来！</span>',
    number: 95
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🦭🐧',
    title: '海洋哺乳动物',
    question: '❓ 海里有哪些“哺乳动物”？',
    answer: '海洋里有很多<span class="highlight">“哺乳动物”</span>🐋——它们不是“鱼”🐟，而是和人类一样是“哺乳动物”：用肺呼吸🌬️、胎生生宝宝👶、喂奶🍼！<span class="highlight">“鲸鱼”</span>🐋——最大的海洋哺乳动物！蓝鲸🐋是地球上最大的动物，比恐龙🦕还大！<span class="highlight">“海豚”</span>🐬——鲸鱼的“小表弟”，聪明、爱玩、会“唱歌”🎵！<span class="highlight">“海豹”</span>🦭——圆滚滚的身材、大胡子、喜欢在岩石上晒太阳☀️！<span class="highlight">“海狮”</span>🦭——和海豹很像，但耳朵👂更明显、前鳍能“撑地走路”！<span class="highlight">“海牛”</span>🐋——也叫“儒艮”（美人鱼🧜‍♀️的来源），只吃海草🌿，性格特别温和！<span class="highlight">“北极熊”</span>🐻‍❄️——生活在北极的海洋岸边，能游泳🏊，主要吃海豹！<span class="fun-fact">抹香鲸🐋可以潜到<span class="highlight">“3000米”</span>深的海底🔄——捕食“大王乌贼”🦑！一次潜水可以坚持<span class="highlight">“90分钟”</span>不换气！</span>',
    number: 96
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🪸🐠',
    title: '珊瑚礁生态',
    question: '❓ 珊瑚礁为什么重要？',
    answer: '珊瑚礁是海洋里的<span class="highlight">“热带雨林”</span>🌴——虽然只占海洋面积的<span class="highlight">“1%”</span>，但住着海洋里<span class="highlight">“25%”</span>的物种！珊瑚礁是鱼🐠、虾🦐、蟹🦀、海龟🐢、海星⭐的“家”🏠——像一座“海底大都市”🌊！珊瑚礁还有三大功能：<span class="highlight">“防浪堤”</span>🛡️——珊瑚礁像“天然防波堤”，能减弱海浪冲击，保护海岸🏖️不被侵蚀！“育苗场”🐟——很多鱼在珊瑚礁里生宝宝、宝宝在珊瑚缝里长大！“清洁工”🧹——珊瑚礁里的“鱼医生”给大鱼“洗澡”🛁，帮它们清除寄生虫！<span class="fun-fact">珊瑚礁是地球上<span class="highlight">“最古老的生态系统”</span>🕰️——已经存在了<span class="highlight">“4亿年”</span>！比恐龙🦕还早2亿多年！</span>',
    number: 97
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊📡🛰️',
    title: '海洋观测',
    question: '❓ 怎么监测海洋？',
    answer: '人类用各种“装备”来监测海洋🌊——像给海洋“测体温”、“量血压”🌡️！第一：<span class="highlight">“卫星”</span>🛰️——从太空“看”海洋：卫星拍海洋“表面温度”🌡️、“海浪高度”🌊、“藻类分布”🌿、“垃圾带”🗑️！第二：<span class="highlight">“浮标”</span>🫧——海面上漂着成千上万个“浮标”🔴——像“海上气象站”，实时测量：水温🌡️、盐度🧂、风向🌬️、波浪🌊！第三：<span class="highlight">“ARGO浮标”</span>——特殊的“深水浮标”，能潜入<span class="highlight">“2000米”</span>深的海底🔄，测量深海温度和盐度，再浮上来把数据“发”给卫星📡！第四：<span class="highlight">“科考船”</span>🚢——科学家坐着船到海上，用网🕸️、声呐📡、机器人🤖，亲自“下海”采集样品🧪！<span class="fun-fact">全球有<span class="highlight">“4000多个”</span>浮标在“监测”海洋——它们每天传回几万条数据📊，像“海洋的体检报告”🏥！</span>',
    number: 98
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊🔮🌿',
    title: '海洋未来',
    question: '❓ 海洋的未来会怎样？',
    answer: '海洋的未来🌊——取决于我们“今天”怎么做！如果人类“保护海洋”🛡️——减少污染🚯、减少碳排放💨、不过度捕捞🐟、建立海洋保护区🏝️——海洋会“变好”：珊瑚礁会“复活”🪸、鱼类数量“恢复”🐠、海水变清🌊、海洋生物“重新繁荣”🌿！如果人类“继续破坏”💔——继续排放温室气体🔥、继续扔塑料垃圾🛍️、继续过度捕捞🐟——海洋会“变糟”：珊瑚礁“消失”🪸、鱼类“灭绝”🐟、海洋垃圾“越来越多”🗑️、海平面“上升”🌊、很多沿海城市被淹没🏙️！<span class="highlight">“海洋的命运，掌握在我们手中”</span>🤲——少用塑料🛍️、不乱扔垃圾🗑️、节约用电💡、多骑车🚲、多关注海洋环保！<span class="fun-fact">如果你“少用1个塑料袋”🛍️——就减少了<span class="highlight">“0.1克”</span>海洋塑料！每个人都做一小点，加起来就是“大变化”💪！</span>',
    number: 99
  },
  {
    category: 'weather',
    categoryName: '🌍 地球与天气',
    emoji: '🌊👨‍👩‍👦🌏',
    title: '人类和海洋',
    question: '❓ 人类为什么离不开海洋？',
    answer: '人类<span class="highlight">“离不开”</span>海洋🌊——因为海洋是“地球的母亲”❤️！海洋给了我们“一切”：<span class="highlight">“氧气”</span>💨——海洋里的“浮游植物”🌿制造了地球上<span class="highlight">“50%”</span>的氧气！每呼吸两次，有一次来自海洋！“食物”🍽️——全球<span class="highlight">“30亿人”</span>以海洋鱼类🐟为主要蛋白质来源！“水”💧——海洋是水循环的起点🌧️——蒸发海水、形成云☁️、下雨🌧️，滋润了大地！“气候”🌤️——海洋吸收了大量热量🌡️，让地球温度“不那么热🔥、不那么冷❄️”，让气候稳定！“交通”🚢——海洋航线是国际贸易的“高速公路”——90%的货物通过海运！“探索”🔬——海洋是“最神奇的实验室”，藏着无数未解之谜🧬！<span class="fun-fact">人类的身体和海水“成分相似”💧——血液🩸中的盐分浓度和海水的盐分浓度几乎一样！说明人类的祖先🐟来自大海！</span>',
    number: 100
  },

  // ============================================================
  // 🍎 水果蔬菜 (50条)
  // ============================================================
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍉☀️🏭',
    title: '西瓜的条纹',
    question: '❓ 西瓜为什么有条纹？',
    answer: '西瓜身上的深色和浅色条纹，像是它的<span class="highlight">“工作服”</span>👗，每条条纹都有不同的分工！深绿色的条纹里含有更多的<span class="highlight">“叶绿素”</span>🌿，就像是“晒太阳能小工厂”🏭——专门负责使劲晒太阳、进行光合作用，把阳光变成甜甜的糖分🍬！浅绿色的条纹里叶绿素少一些，主要任务是<span class="highlight">“呼吸和散热”</span>🌬️，帮助西瓜呼出二氧化碳、排出多余的热量，不让西瓜“发烧”！深绿和浅绿互相配合，一个负责生产、一个负责降温🍉，才能长出又大又甜的大西瓜！<span class="fun-fact">西瓜的条纹像<span class="highlight">“指纹”</span>一样——每颗西瓜的条纹花纹都不完全相同！而且条纹越清晰、颜色越深，说明西瓜晒太阳越足、越甜🍉！</span>',
    number: 101
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍌☀️🌱',
    title: '香蕉为什么弯',
    question: '❓ 香蕉怎么是弯的？',
    answer: '香蕉一开始是<span class="highlight">“朝下长”</span>的——像一串串绿色的小手指，整整齐齐地挂在树上👇！但每根小香蕉都有一个愿望✨：要长得又大又甜，就得尽量多晒太阳☀️！于是，小香蕉们就拼命朝有阳光的方向<span class="highlight">“弯”</span>过去，像小朋友踮起脚尖看远处一样🧒！一天一天、一点一点🌱，小香蕉越弯越大、越弯越弯🍌——最后就变成了我们熟悉的“弯弯的月亮”形状！这种“追着太阳长”的本领叫做<span class="highlight">“向光性”</span>🌞——很多植物都会朝着阳光方向生长，向日葵🌻就是最典型的“追光运动员”！<span class="fun-fact">香蕉其实是一种<span class="highlight">“浆果”</span>🫐！而且香蕉树不是树，而是“巨型草本植物”🌿——它的“树干”其实是很多叶子卷起来的“假茎”🌱！</span>',
    number: 102
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🥕🎨👀',
    title: '胡萝卜橙色',
    question: '❓ 胡萝卜为什么是橙色的？',
    answer: '胡萝卜是橙色是因为身体里含有大量的<span class="highlight">“胡萝卜素”</span>🎨——这是一种天然色素，像“颜料”🧪一样，把整根胡萝卜都染成了漂亮的橙红色！胡萝卜素可厉害了——我们吃下去之后，身体里的“小厨师”👨‍🍳会把胡萝卜素<span class="highlight">“加工”</span>成<span class="highlight">“维生素A”</span>💊！维生素A是我们眼睛的“超级营养餐”👀——有了它，我们的眼睛能在暗一点的地方也看得清楚，像戴了夜视镜🌙！而且维生素A还能保护我们的皮肤🛡️，让皮肤光滑又有弹性！所以<span class="highlight">多吃胡萝卜对眼睛特别好</span>👁️！<span class="fun-fact">胡萝卜最开始不是橙色的——古代人吃的胡萝卜有紫色🟣、黄色🟡、白色⚪的！荷兰人🇳🇱为了纪念国王威廉·奥兰治（Orange），才专门培育出了橙色的胡萝卜🍊！</span>',
    number: 103
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌳🪤',
    title: '苹果浮水',
    question: '❓ 苹果掉水里为什么浮着？',
    answer: '苹果掉进水里会浮起来🏊，是因为苹果的果肉里藏着很多<span class="highlight">“看不见的小气孔”</span>💨——差不多有<span class="highlight">25%的体积都是空气</span>！这些气孔是苹果呼吸用的🌿，就像我们肺里的小肺泡一样！有这么多空气，苹果的“整体密度”就比水小⚖️——就像充了气的游泳圈🛟、塑料瓶子🥤，都能漂在水面上！如果你把苹果切成小块✂️，让里面的空气跑出来，苹果就会沉下去⏬！新鲜的苹果比放久了的苹果更容易浮起来🆙，因为放久了的苹果水分蒸发、气孔塌陷，空气变少了！<span class="fun-fact">全世界有<span class="highlight">7500多种</span>苹果品种🍎！有红的、绿的、黄的、甚至紫色的！最大的一种叫“世界一号”🍏，一个苹果比脸还大，能有一斤多重！</span>',
    number: 104
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍓☀️🌸',
    title: '草莓的种子',
    question: '❓ 草莓外面那些小点是什么？',
    answer: '草莓外面那些密密麻麻的小黄点⚫，是草莓的<span class="highlight">“宝宝——真正的种子”</span>🌱！每一颗“小芝麻”都是一粒种子，都能埋进土里，长出一株新的草莓苗🍓！一颗大草莓上差不多有<span class="highlight">200到300颗</span>种子，像洒满了小芝麻一样！每颗种子都是一个小小的“生命包裹”📦——里面有草莓宝宝的全部“说明书”🧬，等着被小鸟🐦吃掉、飞到远方，或者被风吹走🌬️，落地生根发芽！<span class="fun-fact">草莓是<span class="highlight">唯一一种种子长在外面的水果</span>🍓！大多数水果的种子都藏在里面（比如苹果核🍎、桃子核🍑），但草莓把种子“穿”在衣服外面当装饰品✨，超级特别！</span>',
    number: 105
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍊🧡🍋',
    title: '橙子补维C',
    question: '❓ 橙子为什么酸酸甜甜？',
    answer: '橙子里面有<span class="highlight">“两派味道小卫士”</span>——柠檬酸🍋是“酸派”，在果肉里到处布置“酸酸小炸弹”💣，一咬下去就爆炸，让人眯眼睛😖！果糖🍬是“甜派”，藏在果汁里，用温柔甜蜜的味道来安抚舌头👅！酸派和甜派“和平共处”🍊，所以橙子吃起来酸酸甜甜、特别开胃！橙子最出名的是含有超多<span class="highlight">“维生素C”</span>💪——它是身体里的“健康小卫士”，能帮助我们：抵抗感冒🤧、修复小伤口🩹、让皮肤光滑有弹性✨！吃一个橙子🍊，差不多能补充一天需要的维生素C的70%！<span class="fun-fact">以前的水手⛵在远航时容易得“坏血病”——牙龈出血、伤口不愈合，就是因为长期吃不到新鲜水果、缺少维生素C！后来发现吃柠檬和橙子🍋能治，就养成了带水果上船的习惯！</span>',
    number: 106
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍇☀️🍷',
    title: '葡萄变葡萄干',
    question: '❓ 葡萄怎么变成葡萄干？',
    answer: '葡萄变葡萄干的过程，是太阳公公<span class="highlight">“魔法晒干术”</span>☀️！新鲜葡萄🍇里含有大量的水分💧——大约80%都是水！把它放在太阳下晒🌞，或者用机器烘干💨，水分慢慢蒸发到空中，葡萄就越来越小、越来越“皱”😊！水分蒸发走了，但葡萄里的<span class="highlight">“糖分”</span>🍬留了下来——原来分散在水里的糖，现在挤在一起，浓度提高了好多倍！所以葡萄干比新鲜葡萄<span class="highlight">甜得多</span>🍭，嚼起来又软又韧，特别好吃！而且葡萄干里保留了葡萄所有的营养💪——维生素、矿物质、膳食纤维一样不少，只是水被“脱”掉了！<span class="fun-fact">一颗葡萄变成葡萄干，水分从80%降到了<span class="highlight">15%左右</span>💧，重量减少了大约<span class="highlight">四分之三</span>⚖️！所以一斤葡萄只能晒出三四两葡萄干！</span>',
    number: 107
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🥦🌳💪',
    title: '西兰花像树',
    question: '❓ 西兰花为什么像小树？',
    answer: '西兰花就是<span class="highlight">“可食用的小森林”</span>🌳！粗粗的淡绿色“梗”是它的<span class="highlight">“树干”</span>🌲——结实、挺拔，支撑着整个“树冠”；一团团深绿色的花球密密麻麻簇拥在一起，是它的<span class="highlight">“树冠和树叶”</span>🌿！花球由无数颗还未开放的小花苞组成🌸，密密麻麻挤在一起，像一棵迷你版的“花菜树”！西兰花可是<span class="highlight">“营养大宝库”</span>💎——含有超多维生素K🦴（帮助骨头强壮）、维生素C💪（提高免疫力）、膳食纤维🌾（帮助消化），吃了能长高长壮，还不容易生病！<span class="fun-fact">西兰花和包菜🥬、花菜、卷心菜、甚至芥菜都是<span class="highlight">“亲戚”</span>🧬——它们都来自同一种植物“甘蓝”的不同变种！植物学家真会“变魔术”🎩！</span>',
    number: 108
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍅❤️🌿',
    title: '番茄是水果吗',
    question: '❓ 番茄是水果还是蔬菜？',
    answer: '这是一个<span class="highlight">“世纪难题”</span>🧐！从植物学的角度来说🍃，番茄<span class="highlight">“是水果”</span>🍅——因为它是花朵🌺开放后结出来的果实，果实里包裹着种子🌱（那些小黄籽）！植物学家给“水果”的定义是：“开花植物结出的、含有种子的成熟子房”——番茄完全符合！但从小朋友吃蔬菜的角度🥗，番茄常常被用来做菜——番茄炒蛋🍳、番茄汤🍲、番茄酱🍝——更像<span class="highlight">“蔬菜”</span>！所以在日常生活中，我们把番茄当蔬菜吃！但在植物学家那里📖，番茄是“水果家庭”🍒的成员，和蓝莓🫐、草莓🍓是一伙的！<span class="fun-fact">1893年，美国最高法院⚖️曾经判决番茄是“蔬菜”而不是“水果”——因为当时蔬菜进口要交税，水果不用，政府想多收税！现在大家公认番茄“既是水果又是蔬菜”🍅🥗！</span>',
    number: 109
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🌽👑🍿',
    title: '玉米粒',
    question: '❓ 玉米粒怎么长的？',
    answer: '玉米棒上那一排排金黄色的“小牙齿”🦷，每一颗都是一粒<span class="highlight">“种子”</span>🌱——叫“玉米粒”！它们从小就在玉米棒上排得<span class="highlight">“整整齐齐”</span>，像小朋友在操场上做早操👫，一排排一列列，整整齐齐不插队！外面包裹着绿绿的“玉米苞叶”🌽，像给玉米穿上了一件<span class="highlight">“紧身绿外套”</span>🧥，还顶着“玉米须”穗子——那是雌花的花柱，用来接收花粉💛！每一根玉米须对应一粒玉米粒，所以玉米须越多，玉米粒越多！玉米粒其实就是玉米的<span class="highlight">“果实+种子”</span>二合一，一粒玉米既能当饭也能种出新的玉米植株🌿！<span class="fun-fact">一颗玉米棒上大约有<span class="highlight">500到1000粒</span>玉米粒🌽！而且玉米粒的数量总是<span class="highlight">偶数</span>🔢——因为玉米粒是一对对长出来的！</span>',
    number: 110
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🥑🟢💚',
    title: '牛油果',
    question: '❓ 牛油果为什么叫“牛油”？',
    answer: '牛油果切开后，果肉是<span class="highlight">“奶油”一样的浅绿色</span>🟢，摸起来软软的、滑滑的、像黄油🧈一样细腻！口感也像<span class="highlight">“植物黄油”</span>——所以名字里带了个“油”字🫒！牛油果的脂肪含量特别高——达到了<span class="highlight">15%到30%</span>🧈，比其他大多数水果（一般不到1%）高出几十倍！但这些脂肪是<span class="highlight">“健康脂肪”</span>💚，叫“不饱和脂肪酸”，能保护我们的心脏❤️、让血管更通畅，还能帮助身体吸收其他蔬菜里的营养！吃了牛油果🥑，就像给身体加了<span class="highlight">“优质燃油”</span>⛽，能量满满、精神百倍！<span class="fun-fact">牛油果的种子巨大一颗🟤，像一颗光滑的大石头！考古学家发现，早在<span class="highlight">1万年前</span>，人类就开始吃牛油果了——比种小麦还要早🌾！</span>',
    number: 111
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍑🌸❤️',
    title: '桃子有毛',
    question: '❓ 桃子为什么长毛？',
    answer: '桃子那层毛茸茸的“小绒毛”🧥，是它的<span class="highlight">“防晒小外套”</span>☀️和<span class="highlight">“防虫小雨衣”</span>🛡️！绒毛像一把把“小伞”☂️，密密麻麻地挡在桃子皮肤外面，减弱了太阳光的直射，防止桃子被太阳“晒伤”🌞——就像我们夏天穿防晒衣一样！同时，这些绒毛对虫子来说特别“不友好”🐛——毛毛虫🐜在上面爬行会被绒毛卡住脚，飞虫🪰不容易在上面产卵，所以绒毛起到了物理防虫的作用！另外，绒毛还能减少水分蒸发💧，让桃子保持水嫩多汁！<span class="fun-fact">桃子的“近亲”——油桃🍑——其实是桃子的<span class="highlight">“无毛变种”</span>！油桃的皮光滑无毛，吃起来更方便，不用洗掉绒毛就能直接吃！</span>',
    number: 112
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍋💧🍹',
    title: '柠檬的酸',
    question: '❓ 柠檬为什么那么酸？',
    answer: '柠檬的身体里藏着<span class="highlight">“酸酸小炸弹”</span>💣——一种叫<span class="highlight">“柠檬酸”</span>的天然有机酸！柠檬酸在柠檬果肉里大量存在，含量高达5%到8%🍋，比其他水果高出好多倍（橙子🍊只有1%左右）！当我们咬下一口柠檬的时候👄，柠檬酸就像“炸弹”一样在舌尖上“引爆”💥，把“酸”的信号传送到大脑🧠——所以我们会酸得眯眼睛、皱鼻子、流口水😖！柠檬的酸味其实是一种<span class="highlight">“自我保护”</span>🛡️——太酸了，动物不爱吃，就能保护种子的安全！但人类却爱上了这种酸爽🍋，用它来做菜、泡水、做饮料🍹，酸中带香，特别开胃！<span class="fun-fact">柠檬的维生素C含量其实没有橙子高🍊——但柠檬汁里的柠檬酸能帮助<span class="highlight">“锁住”</span>维生素C，让它不容易被破坏，所以泡柠檬水🍋喝也是补充维C的好方法！</span>',
    number: 113
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🧅😭💧',
    title: '切洋葱流泪',
    question: '❓ 切洋葱为什么会流泪？',
    answer: '洋葱在切的时候会“放”一种<span class="highlight">“催泪瓦斯”</span>💨——化学名叫<span class="highlight">“硫代丙醛-S-氧化物”</span>（名字超难念😵），是一种刺激性的挥发性气体！当你用刀切开洋葱🔪，把洋葱的细胞壁切破时，里面的化学物质和空气里的“酶”混合发生了反应，生成了这种刺激气体🌫️！这种气体飘到眼睛👀里，接触到眼球表面的湿润细胞，就像<span class="highlight">“胡椒粉撒进眼睛”</span>一样，眼睛又辣又疼🔥！为了保护自己，眼睛就开始“哗啦啦”流眼泪💧，想把刺激物冲走——就像我们的手碰了烫的东西会缩回去一样！<span class="fun-fact">切洋葱不流泪的秘诀🔑：把洋葱放进冰箱冷藏❄️再切，低温让化学反应变慢；或者在水里切🌊，刺激气体直接溶在水里就飘不到眼睛了！</span>',
    number: 114
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🥔🌱🧺',
    title: '土豆发芽',
    question: '❓ 土豆发芽还能吃吗？',
    answer: '土豆发芽了<span class="highlight">“绝对不能吃”</span>❌！发芽的土豆会变成“小毒土豆”☠️——身体里产生一种叫<span class="highlight">“龙葵素”</span>（也叫茄碱）的有毒物质，主要积聚在<span class="highlight">“芽眼周围”</span>和<span class="highlight">“表皮变绿”</span>的地方！龙葵素是一种天然“农药”🌿——土豆为了保护自己的“宝宝”（芽🌱）不被动物吃掉，才产生这种有毒物质。人吃了之后会<span class="highlight">“中毒”</span>🤢——轻则喉咙辣、肚子疼、恶心想吐🤮，严重的会头晕、呼吸困难、甚至危及生命！所以，土豆一旦发芽或者变绿🥔，哪怕只有一点点，也<span class="highlight">“直接扔掉”</span>🗑️，千万别舍不得！<span class="fun-fact">土豆和西红柿🍅、茄子🍆、青椒🫑是“茄科家族”的兄弟姐妹👨‍👩‍👧‍👦！它们的叶子、茎和未成熟的果实都含有“茄碱”，都有微毒！</span>',
    number: 115
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍠🔥🍭',
    title: '红薯更甜',
    question: '❓ 烤红薯为什么更甜？',
    answer: '烤红薯之所以比蒸红薯🍠甜得多，是因为高温🔥“施了魔法”！红薯身体里含有大量<span class="highlight">“淀粉”</span>🌾——淀粉本身不甜，像嚼面粉一样没味道。当红薯被放进烤箱或火堆里烤🔥，里面的“淀粉酶”被高温激活，像个“小厨师”👨‍🍳一样工作，把长长的淀粉分子<span class="highlight">“切碎”</span>成一个个<span class="highlight">“麦芽糖”</span>🍬分子！麦芽糖是甜的！而且烤的过程还让水分<span class="highlight">“蒸发”</span>💨——水分跑掉了，糖分就变得更集中，浓度大大提高⬆️！同时高温还让红薯发生“焦糖化反应”🍮——表面的糖被烤成深褐色的“焦糖”，散发出浓郁的香味，闻着就流口水！<span class="fun-fact">红薯在烤的时候，里面的糖分还会变成<span class="highlight">“焦糖色素”</span>🎨——就是红薯表面那层焦焦的、黏黏的、最甜最好吃的部分🍠！</span>',
    number: 116
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🥒💦🧊',
    title: '黄瓜水分多',
    question: '❓ 黄瓜为什么那么多水？',
    answer: '黄瓜的身体里<span class="highlight">“装满了水”</span>💧——含水量高达<span class="highlight">95%到96%</span>，是所有蔬菜里含水量最高的之一！咬一口黄瓜🥒，“咔嚓”一声，满嘴都是清清凉凉的汁水💦，像咬开了一个小水袋！这是因为黄瓜的细胞壁非常薄、细胞里的“液泡”特别大，液泡里全是水💧，像一个个“小水库”蓄满了水！黄瓜从地里吸收水分后，水分被储存在果肉里，随时等待被吃掉😋！夏天吃一根冰镇的黄瓜🥒，又凉快又解渴，还能补水——像喝了一小杯“固体水”🧊！而且黄瓜的卡路里超低🔥——一根黄瓜只有大约<span class="highlight">15-20大卡</span>，吃多少都不会胖，是减肥小伙伴的最爱！<span class="fun-fact">黄瓜其实是<span class="highlight">“水果”</span>🍇——从植物学角度看，它是由花朵结出的果实、里面含种子！但我们通常把它当蔬菜吃🥗！</span>',
    number: 117
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🌶️🔥💪',
    title: '辣椒的辣',
    question: '❓ 辣椒为什么辣？',
    answer: '辣椒的“辣”来自身体里的一种化学物质<span class="highlight">“辣椒素”</span>🔥——像一个个“火辣小刺客”潜伏在辣椒的白色“胎座”和籽上🌶️！辣椒为什么要这么辣呢？这是它的<span class="highlight">“防身武器”</span>🛡️！辣椒想让自己的种子被小鸟🐦吃掉——因为小鸟的消化系统不会破坏种子，小鸟飞走时还把种子“快递”到远方📦！但如果被哺乳动物🐿️吃掉（比如老鼠🐭、猴子🐒），种子的“发芽能力”会被破坏！所以辣椒“发明”了辣椒素——哺乳动物觉得辣得受不了🔥，小鸟却<span class="highlight">“感觉不到辣”</span>🐦！这样只有小鸟才愿意吃辣椒、传播种子——完美！<span class="fun-fact">世界上最辣的辣椒是“卡罗莱纳死神”🌶️🔥——辣度是<span class="highlight">220万斯科维尔</span>！普通人吃一口会像“嘴里喷火”🔥🔥🔥！</span>',
    number: 118
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🥝🟤💚',
    title: '猕猴桃',
    question: '❓ 猕猴桃为什么叫这名？',
    answer: '猕猴桃🥝的名字来自一种毛茸茸的小动物——<span class="highlight">“猕猴”</span>🐵！猕猴桃的皮是棕褐色的🟤，上面长满了细细的绒毛，摸起来毛茸茸的，和猕猴的皮毛特别像！所以人们就叫它“猕猴桃”——意思是<span class="highlight">“猕猴爱吃的毛茸茸桃子”</span>🍑！切开猕猴桃，里面是<span class="highlight">“翠绿色的果肉”</span>💚，布满了黑色的小籽⚫——像一颗颗小芝麻！味道酸酸甜甜，又像草莓🍓又像菠萝🍍又像香蕉🍌，特别神奇！猕猴桃是<span class="highlight">“维生素C之王”</span>👑——一个猕猴桃的维C含量比一个橙子🍊还要高，吃一个就满足一天的需要！<span class="fun-fact">猕猴桃的老家在<span class="highlight">中国</span>🇨🇳！100多年前被带到了新西兰🇳🇿，新西兰人特别喜欢，给它起了个新名字叫“奇异果”——因为长得像新西兰的国鸟“奇异鸟”🐦！</span>',
    number: 119
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍒❤️🌳',
    title: '樱桃的核',
    question: '❓ 樱桃里面的核是什么？',
    answer: '樱桃里面那颗硬硬的“小石头”🪨，是樱桃的<span class="highlight">“宝宝——种子”</span>🌱！外面那层甜甜的红色果肉🍒，其实是“包裹种子的礼物”🎁——果子长这么甜、这么漂亮，就是为了吸引动物🐦来吃掉果肉，然后把种子带到远方去！当小鸟吃下樱桃🍒，果肉被消化了，那颗坚硬的核（种子的“盔甲”）却能抵抗消化液🛡️，随着鸟粪排出来💩——落在新的地方，生根发芽🌱，长成一棵新的樱桃树！所以樱桃核既是“宝宝”又是“旅行箱”🧳，里面装着樱桃宝宝的“DNA说明书”🧬，外壳硬硬的保护宝宝不受伤害！<span class="fun-fact">樱桃核里面含有<span class="highlight">“苦杏仁苷”</span>☠️，咀嚼碎后会产生有毒物质——所以千万别用牙齿咬碎樱桃核！只吃外面的果肉，把核吐掉就好🍒！</span>',
    number: 120
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍈🌱🌿',
    title: '哈密瓜的网纹',
    question: '❓ 哈密瓜皮为什么有网纹？',
    answer: '哈密瓜皮的“网纹”🌐——是它“长大过程中留下的印记”📏！哈密瓜在长大的时候，里面的果肉“使劲长”⬆️，但外面的果皮“长得慢”⏳——果肉把果皮“撑”破了💥！果皮破了之后，又“愈合”了🩹，长出新的“木栓化组织”来填补裂缝！一次一次“撑破”💥、“愈合”🩹，就形成了一道道“网纹”🌐——像哈密瓜的“成长日记”📖！网纹越密越深，说明哈密瓜“拼命长大”过，果肉更甜、更香🍈！网纹还有一个功能——像“老茧”🖐️一样保护果皮，在运输🚚和储存中不容易碰坏！<span class="fun-fact">哈密瓜的网纹是“哈密瓜的身份证”📛——每颗哈密瓜的网纹花纹都不同，像雪花❄️一样独一无二！</span>',
    number: 121
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍊🧡🧊',
    title: '橘子瓣',
    question: '❓ 橘子为什么是一瓣一瓣的？',
    answer: '橘子是一瓣一瓣的——像一个<span class="highlight">“天然小口袋”</span>👜！每一瓣橘子里面包着几十颗“小水滴”💧（果肉细胞）和<span class="highlight">“种子”</span>🌱（白色小籽）！橘子瓣由一层薄薄的“膜”🫧包裹着——这层膜像“保鲜袋”一样，把果汁和果肉紧紧包住，不掉出来！一瓣一瓣的好处是：<span class="highlight">“方便分享”</span>🤝——我们可以掰开一瓣一瓣分给朋友！“方便吃”😋——一瓣刚好一口，不会弄脏手！“保护种子”🛡️——如果整个橘子被动物吃了，只坏掉一瓣，其他瓣的种子还能活！<span class="fun-fact">橘子的瓣数不是固定的🔢——每颗橘子有<span class="highlight">8到14瓣</span>！而且瓣数不是奇数或偶数——完全随机！像“大自然的骰子”🎲！</span>',
    number: 122
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🍐🍑',
    title: '水果的香味',
    question: '❓ 水果为什么有香味？',
    answer: '水果的香味🌺——来自它身体里的<span class="highlight">“挥发性芳香物质”</span>💨！这些是微小的“气味分子”🧪，从水果皮和果肉里“飘”出来，钻进我们的鼻子👃！每一种水果的“气味分子”组合都不同：苹果🍎有“乙酯类”的香味——像“甜甜的花香”；香蕉🍌有“乙酸异戊酯”的香味——像“糖果味”；柠檬🍋有“柠檬烯”的香味——像“清新橘子味”；草莓🍓有“草莓醛”的香味——像“草莓糖”！水果的香味<span class="highlight">“吸引动物”</span>🐦来吃掉果子、传播种子——香味越浓，越能“引诱”动物！<span class="fun-fact">水果的香味在“成熟”时最浓🌿——未成熟的水果没香味，因为还没有吸引动物的必要！所以“不香”的水果就是“没熟”的！</span>',
    number: 123
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍏🌿🔄',
    title: '水果变熟',
    question: '❓ 水果为什么会变软变甜？',
    answer: '水果变熟🍎——是“神奇的变身魔法”🔄！未熟的水果（青色的）又硬又酸——因为果肉里有很多“果胶”（让果实坚硬的“骨架”🧱）和“淀粉”（不甜的）！成熟时，“乙烯”气体💨——水果自己分泌的“催熟信号”——像“指挥棒”一样启动了变化！<span class="highlight">“淀粉变糖”</span>🍬——淀粉被“分解”成糖，水果变甜了！<span class="highlight">“果胶分解”</span>🧱——果胶被“溶解”了，果肉变软了！“叶绿素分解”🌿——绿色褪去，露出红、橙、黄等“本色”🎨！“酸味减少”🍋——有机酸被“消耗”了，酸味降低！成熟后的水果又软又甜又香🍎——吸引动物🐦来吃！<span class="fun-fact">把苹果🍎和青香蕉🍌放在一起——苹果释放的“乙烯”🍎会让香蕉<span class="highlight">“更快成熟”</span>！这是家里的“天然催熟法”！</span>',
    number: 124
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🧊❄️',
    title: '水果保鲜',
    question: '❓ 为什么要把水果放冰箱？',
    answer: '水果放冰箱🧊——是为了“减速保鲜”🔄！水果是“活的”——还在“呼吸”🌿（消耗氧气、产生二氧化碳）！低温能让水果的“呼吸”变慢、新陈代谢变慢——像按了“慢放键”⏪！低温还能<span class="highlight">“抑制细菌”</span>🦠——细菌🦠在低温下生长慢，水果不容易“腐烂”💀！低温还能<span class="highlight">“减少水分蒸发”</span>💧——水果不容易变干、变皱！但不是所有水果都适合放冰箱❄️——香蕉🍌、芒果🥭、木瓜、牛油果🥑这些“热带水果”在室温下熟得更好，放冰箱反而<span class="highlight">“冻伤”</span>——果皮变黑、味道变差！<span class="fun-fact">冰箱的“保鲜区”🌡️温度一般是<span class="highlight">4°C左右</span>——这是水果保鲜的“黄金温度”🌟！不要太冷（会冻坏），不要太热（会腐烂）！</span>',
    number: 125
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎⚖️💚',
    title: '水果的营养',
    question: '❓ 吃水果有什么好处？',
    answer: '吃水果的好处太多了💪——水果是“天然维生素药丸”💊！<span class="highlight">“维生素C”</span>🍊——增强免疫力、预防感冒！<span class="highlight">“维生素A”</span>🥕——保护眼睛、夜视能力！<span class="highlight">“膳食纤维”</span>🌾——促进消化、防止便秘！<span class="highlight">“抗氧化剂”</span>🛡️——对抗衰老、保护细胞！“钾”🍌——维持心跳、保护肌肉！“水分”💧——补充水分、滋润皮肤！每天吃“不同颜色”的水果🎨——红色（草莓🍓、西瓜🍉）、橙色（橙子🍊、芒果🥭）、绿色（猕猴桃🥝、青苹果🍏）、紫色（葡萄🍇、蓝莓🫐）——每一种颜色的水果含有不同的“营养素”！<span class="fun-fact">科学家建议每天吃<span class="highlight">“5份”</span>水果蔬菜🥗——一份大概就是“一个拳头”的大小👊！</span>',
    number: 126
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍊🌿🌍',
    title: '有机水果',
    question: '❓ 什么是有机水果？',
    answer: '有机水果🌿——是“不使用化学农药、化肥”种出来的水果🌱！普通水果在种的时候🌾，农民可能会“喷农药”🧪来防虫🐛、用“化学肥料”💊来催长！<span class="highlight">“有机种植”</span>不用这些“化学东西”——用“天然方法”：用“瓢虫🐞”来吃害虫（生物防治）、用“堆肥”♻️（腐烂的植物和动物粪便）作肥料、用“轮作”🔄（每年种不同的作物）来保持土壤健康！有机水果<span class="highlight">“更健康”</span>💚——没有化学残留，吃起来更放心！而且有机水果<span class="highlight">“口味更浓”</span>🍎——因为生长得更慢、更自然，糖分和香味积累更充分！<span class="fun-fact">有机水果的“价格”💸通常比普通水果贵<span class="highlight">“20%到50%”</span>——因为产量低、成本高、人工多！但更健康、更环保🌍！</span>',
    number: 127
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍊📦🚢',
    title: '水果运输',
    question: '❓ 水果怎么从产地到你手中？',
    answer: '水果的“旅程”🚢——从“果园”🏡到“餐桌”🍽️，是一段“长途旅行”！第一步：<span class="highlight">“采摘”</span>✋——果农在水果“七八分熟”的时候摘下来（太熟运输时会坏掉💀），用<span class="highlight">“剪刀”</span>✂️一个个剪下来，放在“大筐”🧺里！第二步：<span class="highlight">“预冷”</span>❄️——采摘后马上“降温”，阻止水果继续成熟、保持新鲜！第三步：<span class="highlight">“分拣包装”</span>📦——用机器🤖和人工👩‍🌾分拣：挑出“坏果”、按“大小”分等级📏，然后包上“保护膜”🫧、放进“纸箱”📦！第四步：<span class="highlight">“运输”</span>🚢🚛——用大卡车🚛、火车🚂、轮船🚢、飞机✈️——运到全国各地甚至全世界！第五步：<span class="highlight">“上架”</span>🏪——到超市🏪、水果店🍎，等着你来买！<span class="fun-fact">进口水果🍌（比如新西兰奇异果🥝、美国橙子🍊）在船上要<span class="highlight">“几周”</span>⏳——靠“冷链”（全程冷藏❄️）保持新鲜！</span>',
    number: 128
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🍋🍊',
    title: '水果的季节',
    question: '❓ 为什么水果有季节？',
    answer: '水果有季节🍎——“大自然的时间表”📅！每种水果都要在“合适的气候”里生长🌿！<span class="highlight">“西瓜”</span>🍉喜欢“夏天”——需要很多阳光☀️和高温🌡️——夏天6-8月成熟！“草莓”🍓喜欢“春天”——天气温暖但不热🌤️——春天4-6月成熟！“橙子”🍊喜欢“冬天”——需要“冷”来变甜❄️——冬天12-2月成熟！“苹果”🍎喜欢“秋天”——白天温暖、晚上凉爽🌙——秋天9-10月成熟！反季节水果🍌也能吃——但“非应季”水果可能是从“温室大棚”🌡️里种出来的（人工控温、光照💡），或者从“另一个半球”🌍运过来的（比如我们冬天吃澳洲夏天的水果🍒）！<span class="fun-fact">应季水果<span class="highlight">“更便宜、更好吃、更新鲜”</span>🍎——不需要长途运输、不需要大棚催熟！所以要“吃当季、吃当地”🥗！</span>',
    number: 129
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍊🫐🍓',
    title: '水果的颜色',
    question: '❓ 水果为什么五颜六色？',
    answer: '水果五颜六色🌈——是“天然色素”在“画画”🎨！<span class="highlight">“红色”</span>🔴——来自“花青素”和“番茄红素”（草莓🍓、西瓜🍉、番茄🍅），能抗氧化、保护心脏❤️！“橙色”🟠——来自“胡萝卜素”（橙子🍊、芒果🥭、胡萝卜🥕），对眼睛👀好！“黄色”🟡——来自“类黄酮”（香蕉🍌、柠檬🍋、菠萝🍍），增强免疫力💪！“绿色”🟢——来自“叶绿素”（猕猴桃🥝、青苹果🍏、葡萄🍇），帮助“排毒”🧹！“紫色”🟣——来自“花青素”（蓝莓🫐、葡萄🍇、黑莓），抗衰老🧓！“颜色”不只是为了“好看”🎨——是水果的“广告牌”📢：颜色越鲜艳，越吸引动物🐦来吃、传播种子！<span class="fun-fact">吃水果要“颜色丰富”🌈——每天吃<span class="highlight">“5种不同颜色”</span>的水果，营养更全面、身体更健康💪！</span>',
    number: 130
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿🌍',
    title: '水果的传播',
    question: '❓ 水果怎么传播种子？',
    answer: '水果传播种子🌱——“种子旅行”🧳！主要有“4种方式”！<span class="highlight">“动物传播”</span>🐦——水果又甜又香🍎，吸引动物🐒吃掉果实，种子随着动物粪便💩落在新的地方，发芽生长！<span class="highlight">“风力传播”</span>🌬️——有些水果的种子长着“小翅膀”🪽（比如枫树🌳、蒲公英🌼），风一吹就飞走了！<span class="highlight">“水力传播”</span>🌊——椰子🥥掉进海里，能漂到“远方”的海滩🏝️，在岸上扎根发芽！<span class="highlight">“弹射传播”</span>💥——有些水果的“豆荚”在成熟时会“自动炸开”💥，把种子弹射出去（比如豌豆🫛、油菜花🌼）！<span class="fun-fact">有些水果的种子“不怕消化”🛡️——比如“番茄”🍅的种子经过鸟🐦的消化道后，反而“更容易发芽”🌱！</span>',
    number: 131
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌱🌿',
    title: '水果的生长',
    question: '❓ 水果怎么从花变成？',
    answer: '水果的“生长过程”🌿——是一段<span class="highlight">“从花到果实”</span>的神奇旅程🌸➡️🍎！第一步：<span class="highlight">“开花”</span>🌺——果树春天开出“花”，花里有“雌蕊”和“雄蕊”！第二步：<span class="highlight">“授粉”</span>🐝——蜜蜂🐝、蝴蝶🦋、风🌬️把“花粉”从雄蕊（爸爸）传到雌蕊（妈妈）——像“动物交配”一样！第三步：<span class="highlight">“受精”</span>🧬——花粉“钻进”雌蕊的“子房”，和“卵细胞”结合，形成“种子”🌱！第四步：<span class="highlight">“果实发育”</span>🍎——“子房”开始“变大”📈——慢慢膨胀、长成“果实”（我们吃的部分）！种子（宝宝🌱）被包在果实里面“保护”着！第五步：<span class="highlight">“成熟”</span>🍎——果实变甜、变软、变香——等动物🐦来吃、传播种子！<span class="fun-fact">没有“授粉”🐝就没有“果实”🍎！蜜蜂🐝是“水果的媒人”——每年帮果树“授粉”，价值<span class="highlight">“几十亿美元”</span>！</span>',
    number: 132
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🪲🐛',
    title: '水果的虫害',
    question: '❓ 水果上为什么有虫子？',
    answer: '水果上的虫子🐛——是“水果的敌人”👾！很多“虫妈妈”🐛喜欢在水果上“产卵”🥚——让宝宝一出生就有“食物”🍎可以吃！<span class="highlight">“果蝇”</span>🪰喜欢在香蕉🍌、苹果🍎、葡萄🍇上产卵——“卵”变成“蛆”🐛，在果肉里钻洞、吃果肉！“蚜虫”🐜——吸食果树嫩叶🍃和花🌸的汁液，让树“生病”、果实长不大！“苹果蠹蛾”🦋——是苹果的“头号天敌”——它的毛毛虫钻进苹果里，把苹果“掏空”🍎！农民👨‍🌾为了保护水果，会用“防虫网”🕸️、套“纸袋”🛍️、喷“生物农药”🧪（用“好菌”杀死“坏虫”）！“有机水果”🌿不用化学农药，用“益虫”🐞来吃害虫——更健康、更安全！<span class="fun-fact">水果上如果有“小洞”🕳️——就是虫子🐛“钻过”的痕迹！水果有“虫子”不等于“坏”——说明“没有农药”💚！</span>',
    number: 133
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌡️🧊',
    title: '水果的储存',
    question: '❓ 水果怎么保存更久？',
    answer: '水果保存“有妙招”🔑——让水果“活得更久”🕰️！<span class="highlight">“冰箱冷藏”</span>❄️——大部分水果放“保鲜层”（4°C左右）——低温让水果“呼吸变慢”、细菌🦠生长变慢、腐烂速度减慢！<span class="highlight">“分开存放”</span>🔄——苹果🍎会释放“乙烯”💨（催熟气体），和香蕉🍌、猕猴桃🥝放一起会“催熟过快”——要分开放！<span class="highlight">“不洗就放”</span>🚫——水果表面有一层“天然保护膜”🫧——洗掉后水果容易“烂”💀！要吃的时候再洗！“不要挤压”📦——水果“瘀伤”后容易腐烂——要“轻拿轻放”🙌！“有些水果不能放冰箱”❄️——香蕉🍌、芒果🥭、牛油果🥑“怕冷”——放冰箱会“冻伤”（果皮变黑、果肉变烂）！<span class="fun-fact">苹果🍎放在“土豆🥔”旁边——苹果释放的“乙烯”会让土豆<span class="highlight">“发芽更快”</span>🌱！所以苹果和土豆“不能做邻居”🚫！</span>',
    number: 134
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿💧',
    title: '水果的果汁',
    question: '❓ 果汁和水果一样吗？',
    answer: '果汁🥤和水果🍎<span class="highlight">“不一样”</span>！<span class="highlight">“新鲜水果”</span>🍎——完整的水果含有“果肉、果皮、果核”——有“膳食纤维”🌾（帮助消化）、“维生素”💊、“水分”💧！吃一个苹果🍎，有“饱腹感”😋、有“嚼劲”！<span class="highlight">“纯果汁”</span>🥤——把水果“榨汁”了💨——“纤维”被过滤掉了（只剩“果汁”）——“糖分”集中了🍬，“纤维”丢失了🌾！喝果汁容易“喝多”🥤——一杯橙汁🍊要3-4个橙子，含糖量很高！<span class="highlight">“果汁饮料”</span>🥤——不是纯果汁——加了“糖🍬、水💧、添加剂🧪”——果汁含量只有<span class="highlight">“10%-30%”</span>——大部分是“糖水”！最健康的是<span class="highlight">“吃整个水果”</span>🍎——纤维多、糖分少、更饱腹！如果要喝果汁——喝“纯果汁”🥤、不加糖、不加水的！<span class="fun-fact">一杯果汁🥤的糖分和一个“可乐”🥤差不多——所以喝果汁也要“适量”🍊！</span>',
    number: 135
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿🧬',
    title: '水果的品种',
    question: '❓ 为什么苹果有那么多品种？',
    answer: '苹果的“家族”超级大🍎——全世界有<span class="highlight">“7500多个品种”</span>！这<span class="highlight">“不是自然长出来的”</span>——是人类“培育”出来的！品种不同是因为<span class="highlight">“杂交”</span>🧬和<span class="highlight">“嫁接”</span>🌱！<span class="highlight">“杂交”</span>——两种不同的苹果“花粉传粉”🌺，产生“新品种”种子🌱——种下去，长出的苹果可能“又红又甜”或“又黄又脆”！<span class="highlight">“嫁接”</span>——把一种苹果的“枝条”🌿剪下来，接到另一种苹果的“树干”上🌳——长出的果实和“枝条”一样（不是和“树干”一样）！比如“红富士”🍎——用“富士”的枝条嫁接到“野苹果”树干上，长出的就是“红富士”苹果！苹果品种有：红富士🍎、嘎啦🍏、金冠🍐、蛇果🍎、青苹果🍏、国光🍎……<span class="fun-fact">“蛇果”🍎——名字来自“Red Delicious”的“Delicious”音译成“地厘蛇”🇭🇰，简称“蛇果”！</span>',
    number: 136
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🏆💪',
    title: '水果之最',
    question: '❓ 水果界的“世界纪录”？',
    answer: '水果界有很多“冠军”🏆！<span class="highlight">“最大的水果”</span>——<span class="highlight">“海椰子”</span>🌴，长在非洲塞舌尔🇸🇨，一颗海椰子重达<span class="highlight">“25公斤”</span>⚖️——像一个大西瓜🍉！“最重的水果”——“菠萝蜜”🍈，一个菠萝蜜平均<span class="highlight">“10-20公斤”</span>⚖️——最大的达到<span class="highlight">“60公斤”</span>！“最轻的水果”——“树莓”🫐，一颗树莓只有<span class="highlight">“2克”</span>⚖️——“小不点”！“最贵的水果”——“日本夕张蜜瓜”🍈，一对夕张蜜瓜曾拍卖到<span class="highlight">“300万日元”</span>💴（约<span class="highlight">“20万人民币”</span>💰）！“最奇特的水果”——“榴莲”👑——水果之王，气味浓烈、有人爱有人恨！“最古老的水果”——“无花果”🌳——人类种植了<span class="highlight">“11000年”</span>，是水果界的“活化石”！<span class="fun-fact">“香蕉”🍌——不是“树”而是“草”🌿——香蕉树是世界上最大的“草本植物”！</span>',
    number: 137
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿🔄',
    title: '水果进化',
    question: '❓ 水果是怎么来的？',
    answer: '水果的“进化史”🌿——从“种子”到“果实”的演变🧬！最早期的“原始植物”🌱——用“孢子”繁殖（像蘑菇🍄一样）——后来进化出“种子”🌰！“种子”被“硬壳”包裹着——像“小石头”🪨，不容易传播！后来植物“发明”了<span class="highlight">“果实”</span>🍎——把种子包在“甜、软、香”的果肉里，吸引动物🐦来吃！动物吃了果肉后，把种子“拉”到远方💩——种子就“旅行”到了新地方！这就是“果实”的“诞生”👶——水果是植物和动物“合作”的“杰作”🤝！“鲜艳的颜色”🎨和“香甜的气味”🌺——都是“进化”出来的“招数”——为了“引诱”动物来吃！<span class="fun-fact">“香蕉”🍌的“种子”已经“退化”了——香蕉的“黑点”⚫就是退化的种子，不能发芽！现在的香蕉是“无性繁殖”🌱——靠“吸芽”长出来的！</span>',
    number: 138
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌍📊',
    title: '水果产量',
    question: '❓ 哪种水果产量最高？',
    answer: '水果界的“产量冠军”🏆——<span class="highlight">“西瓜”</span>🍉！全球每年产出<span class="highlight">“1亿吨”</span>西瓜⚖️——第一名🥇中国🇨🇳，产了全球<span class="highlight">“60%”</span>的西瓜！第二名是<span class="highlight">“苹果”</span>🍎——全球每年产出<span class="highlight">“8000多万吨”</span>——中国🇨🇳同样第一！第三名是<span class="highlight">“葡萄”</span>🍇——全球每年产出<span class="highlight">“7000多万吨”</span>——中国🇨🇳、意大利🇮🇹、美国🇺🇸产量领先！第四名是<span class="highlight">“香蕉”</span>🍌——全球每年产出<span class="highlight">“6000多万吨”</span>——印度🇮🇳、中国🇨🇳、菲律宾🇵🇭最多！第五名是<span class="highlight">“橙子”</span>🍊——全球每年产出<span class="highlight">“5000多万吨”</span>——巴西🇧🇷、中国🇨🇳、美国🇺🇸最多！<span class="fun-fact">全球每年水果总产量<span class="highlight">“8亿多吨”</span>⚖️——如果全部分给地球每个人——每人每年分到<span class="highlight">“100公斤”</span>水果🍎！</span>',
    number: 139
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿🤝',
    title: '水果和蜜蜂',
    question: '❓ 蜜蜂对水果多重要？',
    answer: '蜜蜂🐝对水果<span class="highlight">“超级重要”</span>——没有蜜蜂，就没有水果！蜜蜂是水果的<span class="highlight">“媒人”</span>💕——负责“授粉”🌺！果树开花了🌸，花蕊里有“花粉”和“花蜜”——蜜蜂🐝飞到花上吸花蜜🍯，身上会“粘”满“花粉”🌼！它飞到另一朵花上时，“花粉”被“蹭”到那朵花的“雌蕊”上——就完成了“授粉”🧬！“授粉”后的花才能“结出果实”🍎！没有蜜蜂🐝，就没有“苹果🍎、桃子🍑、梨🍐、草莓🍓、蓝莓🫐、西瓜🍉、南瓜🎃……”——超过<span class="highlight">“70%”</span>的农作物依赖蜜蜂授粉！蜜蜂数量在减少😢——因为“杀虫剂”🧪、气候变化🌍——我们要保护蜜蜂🐝——多种花🌺、不用杀虫剂！<span class="fun-fact">蜜蜂每采“一公斤”蜂蜜🍯——要飞<span class="highlight">“绕地球6圈”</span>🌍——来回飞行的总距离！</span>',
    number: 140
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿🛠️',
    title: '水果加工',
    question: '❓ 水果怎么变成罐头和果酱？',
    answer: '水果加工🍎——“延长保质期”🕰️！水果容易“烂”💀——加工后能吃“好几年”！<span class="highlight">“水果罐头”</span>🥫——水果切块➡️加糖水🍬➡️装进罐子➡️“高温杀菌”🔥（把细菌🦠杀死）➡️密封！“罐头”没加防腐剂🧪——靠“高温杀菌+密封”来保鲜！<span class="highlight">“果酱”</span>🍓——水果切碎➡️加大量“糖”🍬（糖是天然防腐剂）➡️加热熬煮🔥（蒸发掉水分💧）➡️装瓶！“糖”把水分“吸走”了——细菌🦠没水就活不了——果酱能放很久！<span class="highlight">“果干”</span>🍇——水果切片➡️用“太阳晒”☀️或“机器烘干”💨——把水分蒸发掉➡️变成“水果干”！“水分”没了细菌就“长不了”🦠——果干能放好几个月！<span class="fun-fact">“果酱”的发明——是为了在“冬天❄️”也能吃到水果的“味道”🍓！古代人把水果煮了加糖，能吃到第二年春天！</span>',
    number: 141
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿🧪',
    title: '转基因水果',
    question: '❓ 什么是转基因水果？',
    answer: '转基因水果🧬——“改变基因”的水果🌱！科学家从一种生物（比如细菌🦠）身上“取”出一个“基因”🧬，放进水果的“基因”里——让水果拥有<span class="highlight">“新特点”</span>！比如：<span class="highlight">“抗虫”</span>🐛——把“抗虫基因”放进水果里，水果自己“制造”杀虫剂🧪，虫子🐛吃了会死——就不需要喷农药了！“抗病毒”🦠——让水果抵抗“病毒病”，不容易生病！“保质期长”🕰️——让水果“放更久才坏”！“口感更好”🍎——让水果更甜、更脆！转基因水果<span class="highlight">“安全吗”</span>❓——经过“严格检测”🔬——目前市场上的转基因水果（比如“转基因木瓜”在市场上）是安全的✅！但有些人对转基因“有顾虑”😟——“不想吃”可以选择“有机”🌿和“非转基因”水果！<span class="fun-fact">世界上第一种<span class="highlight">“转基因水果”</span>是“转基因番茄”🍅——1994年上市，叫“Flavr Savr”——能放更久才烂！</span>',
    number: 142
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿🌳',
    title: '果树寿命',
    question: '❓ 果树能活多少年？',
    answer: '果树的寿命<span class="highlight">“差别很大”</span>📏——从“十几年”到“几千年”！<span class="highlight">“苹果树”</span>🍎——平均<span class="highlight">“50-80年”</span>——有些能活“100多年”！<span class="highlight">“梨树”</span>🍐——“100-200年”——比苹果树更长寿！“橄榄树”🫒——能活<span class="highlight">“2000多年”</span>——世界上最老的橄榄树在希腊🇬🇷，有<span class="highlight">“3000年”</span>历史！“枣树”🌴——能活“几百年”——沙漠里的“长寿树”！“椰子树”🥥——“60-80年”——寿命不算长！“猕猴桃”🥝——“30-50年”——寿命较短！果树老了之后🍎——结果变少、果实变小、更容易生病——果农会把老树砍掉🌳、种新树苗🌱！<span class="fun-fact">日本有一棵“樱桃树”🍒——叫“神代樱”🌸——树龄估计<span class="highlight">“1800年”</span>——是日本最古老的“樱花树”！每年春天依然开花🌸！</span>',
    number: 143
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿🧑‍🌾',
    title: '果农的工作',
    question: '❓ 果农每天做什么？',
    answer: '果农🧑‍🌾是“水果的保姆”👩‍🍼——每天为水果“操心”💚！<span class="highlight">“剪枝”</span>✂️——冬天❄️，果农给果树“理发”——剪掉“病枝、弱枝、密枝”，让果树“通风好、光照足”☀️！“施肥”🌱——春天🌱，给果树“加营养”——用“有机肥”💩或“化肥”🧪——让果树长壮、开花多！“防虫防病”🛡️——夏天☀️，给果树“喷药”🧪（或“生物防治”🐞）——保护果子不被虫子🐛吃了！“套袋”🛍️——给果子“穿衣服”（纸袋），防虫、防鸟🐦、防晒☀️！“采摘”✋——秋天🍂，果子熟了——果农一个个摘下来🍎，轻拿轻放，放进“筐”🧺里！“分拣”📦——摘下来的果子按“大小、颜色、甜度”分等级——最好的卖“高价”💰，小的做“果汁”🥤！<span class="fun-fact">果农每天<span class="highlight">“弯腰几百次”</span>——摘果子是“体力活”💪！每一颗水果都“来之不易”🍎！</span>',
    number: 144
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿🚫',
    title: '水果的浪费',
    question: '❓ 为什么很多水果被扔掉？',
    answer: '水果浪费🌍——“长得丑”和“卖不完”！<span class="highlight">“长得丑”</span>🍎——水果“形状奇怪”😅、“有疤痕”🩹、“大小不一”——超市🏪“不要”它们（因为“不好卖”💸）！这些“丑水果”其实<span class="highlight">“一样好吃”</span>🍎——只是“长得不好看”！“卖不完”🏪——超市每天要“新鲜”水果——过了“保质期”的水果，即使“没坏”🥺，也会被扔掉！“运输损坏”🚛——水果在运输中被“压坏”“碰伤”——卖不出去，也扔掉了！“家庭浪费”🏠——很多人买了水果🍎——忘了吃、或者“一次吃不完”——最后坏了扔掉🗑️！减少水果浪费的方法✅：买“丑水果”🍎（便宜、好吃、不浪费）、“按需买”🛍️（不买太多、先买先吃）、“做果酱”🍓（吃不完的水果做果酱、放更久）！<span class="fun-fact">全球每年有<span class="highlight">“30%”</span>的食物被浪费🗑️——相当于<span class="highlight">“13亿吨”</span>⚖️！够养活<span class="highlight">“20亿人”</span>！</span>',
    number: 145
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿💚',
    title: '水果的未来',
    question: '❓ 水果会有新物种吗？',
    answer: '水果的新物种🍎——“未来的水果”会是什么样？科学家和果农在<span class="highlight">“创造新水果”</span>🧬——让水果更好吃、更健康、更环保！<span class="highlight">“实验室育种”</span>🧪——用“基因编辑”技术，让水果“抗病力更强”🛡️、“保存期更长”🕰️、“营养更丰富”💪！“垂直农场”🏗️——在“大楼里”种水果——用“LED灯”💡代替“太阳”☀️，用“水培”💧代替“土壤”🌱——全年都能种水果，不受天气影响！“太空水果”🚀——宇航员在“空间站”🛰️种水果（“生菜”🥬和“番茄”🍅已经种出来了）——未来在火星🪐上也能种水果！“气候适应”🌍——全球变暖🔥让传统水果“热死了”🌵——科学家培育“耐热水果”🌞——让水果在“热天气”里也能长得好！<span class="fun-fact">科学家已经“复活”了一种“古老的水果”🍑——从<span class="highlight">“2000年前的种子”</span>🌱里培育出了“古树”🌳——结出的果实叫“朱迪亚枣”🌴——古代人吃过的味道！</span>',
    number: 146
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿🍽️',
    title: '水果的吃法',
    question: '❓ 水果怎么吃最健康？',
    answer: '水果的“健康吃法”🍎——不同水果、不同吃法！<span class="highlight">“整个吃”</span>🍎——最推荐✅！纤维多🌾、糖分少、有嚼劲——营养“最完整”！<span class="highlight">“当零食吃”</span>🍌——水果是“天然零食”——课间🔔、下午茶🍵、运动后🏃——吃一根香蕉🍌或一个苹果🍎——“能量满格”⚡！<span class="highlight">“饭后吃”</span>🍉——饭后吃水果🍉——“帮助消化”🧠，但不要吃太多（会“胀气”💨）！“空腹吃”❌——有些水果（比如柿子🍅、菠萝🍍）空腹吃“刺激胃”😣——最好“饭后吃”！<span class="highlight">“榨汁喝”</span>🥤——可以喝，但“少喝”——不加糖🍬、不加水💧、不滤渣🌾——喝“带渣”的果汁（纤维还在）！<span class="highlight">“冻着吃”</span>🧊——夏天🍉把水果冻起来——做成“水果冰棍”🍧、“水果冰淇淋”🍦——健康又解暑！<span class="fun-fact">每天吃水果的最佳“时间”🕐——上午10点🕙、下午3点🕒——正好“补充能量”、不会“影响正餐”！</span>',
    number: 147
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿🍽️',
    title: '水果的禁忌',
    question: '❓ 吃水果有什么要注意？',
    answer: '吃水果“有讲究”🔑——有些水果“不能乱吃”！<span class="highlight">“空腹不要吃柿子”</span>🍅——柿子含“鞣酸”🧪，空腹时胃酸多，鞣酸和胃酸结合成“胃柿石”🪨——会肚子疼！“芒果过敏”🥭——有些人对芒果“过敏”😖——嘴周围发痒、起红疹，说明“身体不喜欢芒果”，要少吃或不吃！“榴莲和酒”🍷——榴莲含“硫化物”，和酒精🍷一起吃会“加重身体负担”😵——最好“别一起吃”！<span class="highlight">“荔枝不能空腹吃”</span>🍒——空腹吃荔枝会“降血糖”⬇️——头晕、无力（叫“荔枝病”）——要“饭后吃”！“杨桃”⭐——肾脏不好的人“不能吃”杨桃——“杨桃毒素”对肾脏有害！“菠萝”🍍——含“菠萝蛋白酶”，吃多了“嘴麻”👄——泡“盐水”🧂后再吃——“蛋白酶被破坏”就不麻了！<span class="fun-fact">“荔枝病”真的存在😵——每年夏天都有吃荔枝太多低血糖的“案例”——小朋友尤其要注意！</span>',
    number: 148
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿💊',
    title: '水果和健康',
    question: '❓ 水果能治病吗？',
    answer: '水果“不能治病”❌——但能“帮助健康”💪！“膳食纤维”🌾——帮助消化、预防便秘（苹果🍎、香蕉🍌、火龙果）！“维生素C”💊——增强免疫力、预防感冒（橙子🍊、猕猴桃🥝、草莓🍓）！“钾”💊——保护心脏❤️、降血压（香蕉🍌、橙子🍊）！“抗氧化剂”🛡️——对抗“自由基”（衰老的元凶🧓）——预防癌症和心脏病（蓝莓🫐、葡萄🍇、石榴）！“叶酸”💊——对孕妇🤰特别好——预防宝宝“神经管缺陷”（橙子🍊、草莓🍓）！“水分”💧——补水、排毒（西瓜🍉、黄瓜🥒）！每天吃<span class="highlight">“5份水果蔬菜”</span>🥗——能降低<span class="highlight">“30%”</span>的心脏病风险❤️、降低“20%”的癌症风险💪！<span class="fun-fact">“一天一个苹果🍎，医生远离我”🏥——不是“苹果能治病”，而是“坚持吃健康食物”身体更好！</span>',
    number: 149
  },
  {
    category: 'fruit',
    categoryName: '🍎 水果蔬菜',
    emoji: '🍎🌿🌍',
    title: '水果和环保',
    question: '❓ 吃水果也影响环境？',
    answer: '吃水果真的影响环境🌍——“水果也有碳足迹”🌿！<span class="highlight">“运输距离”</span>🚢——进口水果（比如新西兰猕猴桃🥝、智利车厘子🍒）从“地球另一边”运过来——飞机✈️、轮船🚢烧油产生“碳排放”💨——增加“碳足迹”📈！<span class="highlight">“包装”</span>🛍️——很多水果用“塑料盒、塑料膜”包装🛍️——产生“塑料垃圾”🗑️！“化肥农药”🧪——种植水果用的“化肥和农药”会污染“土壤和河流”🌊！“选本地水果”🍎——买“当地产”的水果——运输近、碳排低！“选应季水果”🌿——吃“当季”的水果——不需要温室大棚🌡️、不需要长途运输！“少用塑料”🛍️——买“散装”水果、用“布袋”代替“塑料袋”！<span class="fun-fact">一公斤进口水果的“碳足迹”🌍——相当于一公斤本地水果的<span class="highlight">“5到10倍”</span>📈——所以“买本地、买应季”就是“保护地球”🌍！</span>',
    number: 150
  },

  // ============================================================
  // 🐛 昆虫世界 (50条)
  // ============================================================
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🥚🐛🦋',
    title: '蝴蝶的一生',
    question: '❓ 毛毛虫怎么变蝴蝶？',
    answer: '蝴蝶的一生要经历<span class="highlight">“魔法四部曲”</span>✨——这是一场<span class="highlight">“完全变态”</span>的华丽变身！第一步：蝴蝶妈妈在叶子上产下圆圆的<span class="highlight">“卵”</span>🥚，像一颗颗小珍珠！第二步：卵孵化出<span class="highlight">“毛毛虫”</span>🐛——它什么都不做，只知道拼命吃树叶🍃，吃得胖胖的、圆滚滚的！第三步：毛毛虫长大后就<span class="highlight">“吐丝做茧”</span>🧶，把自己裹起来变成<span class="highlight">“蛹”</span>🫧——在蛹里，它的身体几乎完全“融化”成一种“细胞汤”🫠，然后再重新组合成蝴蝶的结构！第四步：大约两周后🕐，蛹壳裂开——一只<span class="highlight">“美丽的蝴蝶”</span>🦋飞出来啦！刚出来时翅膀是湿湿的、皱皱的，等晒干展平后，就能飞上天空！<span class="fun-fact">蝴蝶用<span class="highlight">“脚”</span>尝味道👣——它的脚上有“味觉感受器”，停在花朵上就知道花蜜甜不甜！</span>',
    number: 151
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐜💪🤝',
    title: '蚂蚁大力士',
    question: '❓ 蚂蚁力气多大？',
    answer: '蚂蚁是昆虫界的<span class="highlight">“举重冠军”</span>🏆！一只蚂蚁能搬起比自己体重重<span class="highlight">“50倍”</span>的东西💪——相当于一个50公斤的小朋友，能扛起<span class="highlight">“2.5吨”</span>的大石头🪨（比一辆小汽车🚗还重）！蚂蚁为什么力气这么大呢？第一，蚂蚁的身体特别轻⚖️——体重只有几毫克，所以相对的“力气占比”就特别大！第二，蚂蚁的肌肉比例特别高💪——全身大部分都是肌肉，像一个小“肌肉球”！第三，蚂蚁有<span class="highlight">6条腿</span>🦵——可以同时用力，分散了重量！蚂蚁最厉害的其实不是单打独斗，而是<span class="highlight">“团队合作”</span>🤝——搬不动就回去搬“救兵”，几十只甚至几百只蚂蚁一起来，再大的食物也能搬回家！<span class="fun-fact">一只蚂蚁能<span class="highlight">“举起”</span>比自重大50倍的东西，还能<span class="highlight">“拉动”</span>比自重大<span class="highlight">500倍</span>的东西🐜——相当于一个人<span class="highlight">“拉动”</span>一架波音747飞机✈️！</span>',
    number: 152
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐝🌺🍯',
    title: '蜜蜂采蜜',
    question: '❓ 蜜蜂怎么酿蜜？',
    answer: '蜜蜂酿蜜是一套<span class="highlight">“精密流水线”</span>🏭！第一步：工蜂飞到花朵上🌸，用像吸管一样的“口器”🍬——叫“虹吸式口器”——伸进花蕊深处，把花蜜<span class="highlight">“吸”</span>出来，存进肚子里的“蜜囊”🍯——一个像小水袋一样的临时仓库！第二步：蜜蜂飞回蜂巢🏠，把花蜜“吐”出来给“内勤蜂”👷——内勤蜂把花蜜反复吞进吐出🔄，混入自己分泌的“转化酶”🧪，把花蜜里的蔗糖变成葡萄糖和果糖！第三步：把处理好的“半成品蜜”薄薄地涂在蜂巢的六角形“小房间”里🛏️，然后用翅膀扇风💨把水分吹干蒸发掉！当水分降到18%以下时⬇️，蜂蜜就“熟”了——蜜蜂用蜂蜡封上盖子🟡，留着冬天慢慢吃❄️！<span class="fun-fact">一只工蜂一辈子只能酿造<span class="highlight">“1/12茶匙”</span>的蜂蜜🍯！要产一斤蜂蜜，蜜蜂们需要飞<span class="highlight">“绕地球6圈”</span>🌍的来回总距离！</span>',
    number: 153
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🦟🩸😤',
    title: '蚊子吸血',
    question: '❓ 蚊子为什么要吸血？',
    answer: '其实只有<span class="highlight">“母蚊子”</span>才吸血🩸——而且不是因为它饿了，而是为了<span class="highlight">“生宝宝”</span>🥚！母蚊子交配后需要大量的蛋白质和营养来发育卵子，而血🩸是最好的“蛋白质营养液”！所以母蚊子冒着被拍死的风险💀，也要找到人或动物吸血！公蚊子🦟是“素食主义者”🌱——它们不吸血，只吸花蜜🌸和植物汁液，性格温和得多！蚊子吸血的时候🩸，会用一根像针管一样的“刺吸式口器”📌刺穿皮肤，同时往里面注射“抗凝血剂”💉——防止血液凝固、让血流更顺畅！这个抗凝血剂会让人发痒😤、起包，就是过敏反应！<span class="fun-fact">蚊子是地球上<span class="highlight">“最致命的动物”</span>😱——每年通过传播疟疾、登革热等疾病，导致大约<span class="highlight">72万人</span>死亡！比鲨鱼🦈、狮子🦁加起来还多！</span>',
    number: 154
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐞🐜🌿',
    title: '瓢虫是益虫',
    question: '❓ 瓢虫是好虫子吗？',
    answer: '大多数瓢虫都是农民伯伯的<span class="highlight">“超级好帮手”</span>👨‍🌾——是<span class="highlight">“益虫”</span>👍！瓢虫最爱吃的食物是<span class="highlight">“蚜虫”</span>🐜——一种专门吸食庄稼汁液、危害作物的“坏虫子”！一只瓢虫🐞一天能吃掉<span class="highlight">50到100只</span>蚜虫！一生能吃掉<span class="highlight">5000多只</span>蚜虫！就像一个“活体杀虫剂”💚！瓢虫鲜艳的颜色（红色+黑斑点🔴⚫）是它的“警告标志”⚠️——“我有毒、别吃我”！当受到惊吓时，瓢虫还会从关节处渗出一种<span class="highlight">“黄色液体”</span>🟡——味道又苦又臭，让小鸟🐦和蜘蛛🕷️赶紧吐掉！<span class="fun-fact">不是所有瓢虫都是益虫👍——有一种<span class="highlight">“二十八星瓢虫”</span>🐞是吃植物叶子的，是<span class="highlight">“害虫”</span>👎！但大多数带斑点的瓢虫都是好虫，要保护它们！</span>',
    number: 155
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🦗🎵🌙',
    title: '蟋蟀唱歌',
    question: '❓ 蟋蟀怎么“唱歌”？',
    answer: '蟋蟀“唱歌”🎵不是用嘴巴唱的，而是用翅膀<span class="highlight">“拉小提琴”</span>🎻！雄蟋蟀的右翅膀上有一排像锯齿一样的硬“音齿”🪚——像小提琴的“弓”🪄；左翅膀上有一块硬硬的“刮器”像琴弦🎸！当它快速摩擦左右翅膀时🦗，“音齿”刮到“刮器”，翅膀就会像“琴弦”一样振动，发出“唧唧唧”的美妙声音🎶——就像用梳子快速刮另一把梳子发出的声音一样！雄蟋蟀“唱歌”有两个目的❤️：一是<span class="highlight">“求偶”</span>💕——吸引雌蟋蟀过来交配，是“爱情小夜曲”；二是<span class="highlight">“警告”</span>⚠️——告诉其他雄蟋蟀“这是我的地盘，别过来！”<span class="fun-fact">蟋蟀“唱歌”的速度可以<span class="highlight">“测量温度”</span>🌡️——蟋蟀在15秒内叫的次数 + 40 = 华氏温度°F！这叫“多兰定律”📐！</span>',
    number: 156
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🕷️🕸️🪰',
    title: '蜘蛛织网',
    question: '❓ 蜘蛛网怎么黏？',
    answer: '蜘蛛网不是所有的丝都黏——它是一个<span class="highlight">“精心设计的陷阱”</span>🕸️！蜘蛛肚子里有专门的“丝腺”🧬，能分泌出不同种类的丝：<span class="highlight">“框架丝”</span>（从中心向外辐射的“经线”🔴）——又硬又牢固，不黏，是蜘蛛自己走路的主干道！<span class="highlight">“螺旋丝”</span>（一圈圈绕上去的“纬线”🔄）——上面涂着<span class="highlight">“黏性胶水珠”</span>💧，像一串串小水珠，飞虫🪰一撞上去就被粘住、越挣扎粘得越紧！蜘蛛自己在网上走的时候🕷️，只踩“框架丝”，避开黏黏的“螺旋丝”——就像我们在一条路上，知道哪块地板有胶水，专门绕开走！蜘蛛网的丝其实是从<span class="highlight">“纺织器”</span>（蜘蛛屁股上的小孔）挤出来的液体蛋白质，遇到空气后瞬间凝固成丝🔄！<span class="fun-fact">蜘蛛丝的强度是同等粗细的钢丝的<span class="highlight">“5倍”</span>💪——如果有一根铅笔那么粗的蜘蛛丝，能<span class="highlight">“吊起一架直升机”</span>🚁！</span>',
    number: 157
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪳🏃💨',
    title: '蟑螂跑得快',
    question: '❓ 蟑螂为什么跑那么快？',
    answer: '蟑螂是陆地上跑得最快的昆虫之一🏃——每秒能跑<span class="highlight">“自己体长50倍”</span>的距离！如果人类有这个速度，能跑<span class="highlight">“每小时300公里”</span>💨，比动车🚄还快！蟑螂跑得快有三个秘诀🔑：第一，它有<span class="highlight">“6条大长腿”</span>🦵，交替运动——像三对“风火轮”同时旋转，永远不会同时离地，所以跑得特别稳！第二，它的腿上有超灵敏的“毛状感受器”👁️——能感知最微小的气流变化，一有风吹草动，“嗖”地一下就启动逃跑模式！第三，蟑螂反应超快⏱️——从感觉到危险到开始逃跑只需<span class="highlight">“0.05秒”</span>，比人眨眼睛还快（眨眼睛要0.1秒）！蟑螂能跑能钻、还会飞🪳，适应能力超强，被称为“地球上的活化石”🪨——已经存在了<span class="highlight">3.5亿年</span>，比恐龙🦕还古老！<span class="fun-fact">蟑螂被砍掉头还能活<span class="highlight">“9天”</span>🪳——它的“呼吸系统”在身体上，不靠嘴也不靠鼻子，最后是“饿死”的！</span>',
    number: 158
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🦗🟢🌿',
    title: '螳螂捕食',
    question: '❓ 螳螂怎么抓虫子？',
    answer: '螳螂是昆虫界的<span class="highlight">“潜伏狙击手”</span>🎯！它最厉害的武器是前面一对<span class="highlight">“折叠大刀”</span>🔪——前足上有一排排锋利的锯齿🦷，像一把“折叠刀”一样平时收在胸前，不露声色！螳螂捕食时🦗：第一步：<span class="highlight">“伪装”</span>🌿——身体像一片绿叶或一根树枝，一动不动地伏在叶子上，等猎物靠近！第二步：<span class="highlight">“瞄准”</span>👀——用一对“大复眼”死死盯住猎物，计算距离和时机！第三步：<span class="highlight">“出击”</span>⚡——前足以<span class="highlight">“0.03秒”</span>的速度弹射出去，“咔嚓”一下死死夹住猎物——比眨眼睛还快10倍！被夹住的虫子根本跑不掉🐜，螳螂再一口一口地把猎物吃掉！螳螂是“益虫”👍——专吃苍蝇、蚊子、飞蛾等害虫，是农民伯伯的“天然保镖”！<span class="fun-fact">雌螳螂有时候会在交配时<span class="highlight">“吃掉”</span>雄螳螂🦗——这不是“残忍”，而是为了给卵宝宝补充蛋白质营养🥚！</span>',
    number: 159
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐛🐜🔄',
    title: '毛毛虫搬家',
    question: '❓ 毛毛虫为什么排队走？',
    answer: '毛毛虫排队走是跟着<span class="highlight">“丝路线”</span>导航的🧭——像一支<span class="highlight">“小火车队”</span>🚂！领头的毛毛虫走在最前面🐛，一边走一边从嘴里吐出一条细细的<span class="highlight">“丝路”</span>🪡，像在地上铺了一条“白线公路”！后面的毛毛虫紧紧跟着，它们用肚子上的“小脚”🦶和头顶上的“传感器”👁️，一边爬一边“闻”着前面伙伴留下的丝线气味——就像沿着“导航线”走路一样！这样整群毛毛虫就排成一列<span class="highlight">“整整齐齐的队伍”</span>，不会走丢、不会掉队🚶‍♂️🚶‍♀️🚶！队伍前面的毛毛虫如果走错了路，后面的也会跟着错——所以有时候会看到毛毛虫排成一圈绕来绕去，像在“绕圈圈”🌀，那是因为领头的不小心走到了自己的“丝路”上，形成了一个圆圈！<span class="fun-fact">这种排队的毛毛虫通常是<span class="highlight">“松毛虫”</span>🐛——它们白天吃树叶、晚上一起搬家，是森林里最守纪律的“小行军部队”🪖！</span>',
    number: 160
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪰🔄🧲',
    title: '苍蝇搓手',
    question: '❓ 苍蝇为什么老搓手？',
    answer: '苍蝇“搓手”🧼其实是在<span class="highlight">“洗手洗脸”</span>——保持清洁卫生！苍蝇的脚上👣长着很多“味觉感受器”和“毛状感受器”，专门用来<span class="highlight">“尝味道”</span>和<span class="highlight">“感觉物体”</span>！它落到食物上🍞，要先“踩一踩”，用脚上的“味觉细胞”来“尝尝”这食物能不能吃、好不好吃🤤！所以苍蝇的脚特别重要——必须保持干净灵敏！如果脚上沾了灰尘、脏东西🧹，味觉就不灵了——所以苍蝇会不停地<span class="highlight">“搓手”</span>🔄，把脚上的脏东西搓掉，让感受器“恢复灵敏”🆕！而且苍蝇搓手的动作特别快⚡——每秒能搓<span class="highlight">“几十次”</span>，看起来像在“搓麻将”🀄！另外，苍蝇搓手也是为了把脚上的“黏性物质”🧲涂均匀，帮助它能在光滑的玻璃🪟或墙壁上“倒挂行走”！<span class="fun-fact">苍蝇的脚上有一对<span class="highlight">“爪垫”</span>和<span class="highlight">“刚毛”</span>🦶，能产生“分子粘附力”——所以苍蝇能<span class="highlight">“倒立”</span>在天花板上走路，超级稳！</span>',
    number: 161
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐞🟡⚫',
    title: '七星瓢虫',
    question: '❓ 七星瓢虫为什么有斑点？',
    answer: '七星瓢虫身上的7个小黑点⚫，是它的<span class="highlight">“身份证”</span>📛和<span class="highlight">“防身服”</span>🛡️！因为红色的外壳加上黑色斑点，色彩对比特别鲜艳👀——这在动物世界里是一个<span class="highlight">“警告标志”</span>⚠️：“我很难吃、我有毒、别吃我”！当小鸟🐦或蜘蛛🕷️看到这个鲜艳的颜色，就会想起以前吃瓢虫的“糟糕经历”——又苦又臭🤢，于是就不敢再碰了！这叫做<span class="highlight">“警戒色”</span>🎨！而且七星瓢虫的斑点数量和排列方式<span class="highlight">“每只都不一样”</span>，像人类的指纹！科学家通过斑点的形状、大小和位置，能“识别”出每一只瓢虫！<span class="fun-fact">七星瓢虫的“七星”名字来自于它的<span class="highlight">“7个斑点”</span>——但其实不是所有瓢虫都是7星！有二星瓢虫、四星瓢虫、十星瓢虫、甚至<span class="highlight">“二十八星瓢虫”</span>🐞（这是害虫！）</span>',
    number: 162
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🦋🌙👀',
    title: '夜蛾的伪装',
    question: '❓ 夜蛾为什么像树叶？',
    answer: '夜蛾像树叶🍂是为了<span class="highlight">“隐身术”</span>👻——这叫<span class="highlight">“保护色”</span>和<span class="highlight">“拟态”</span>！夜蛾是夜间活动的昆虫🌙，白天要找一个安全的地方休息——停在树干上或树枝上🪵！它的翅膀花纹和颜色像极了一片<span class="highlight">“枯叶”</span>🍂——有褐色的“叶脉”纹路、有深色的“霉点”，甚至翅膀边缘还有像被虫咬过的“小缺口”🐛！当夜蛾停在树枝上时，把翅膀平展开来，就完全“融进”了周围的环境🌿，看起来和一片真的枯叶一模一样！飞鸟🐦和蜥蜴🦎从旁边经过，根本分不清哪是叶子、哪是蛾子——于是就“放过”它了！除了像枯叶，有些夜蛾的翅膀还像树皮、像苔藓、像鸟粪💩——总之<span class="highlight">“长得丑”</span>反而更安全！<span class="fun-fact">有一种<span class="highlight">“枯叶蝶”</span>🦋——翅膀闭合时像枯叶、张开时却是一对美丽的蓝紫色翅膀，是“伪装大师”🎭中的顶级高手！</span>',
    number: 163
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐜🏠🌍',
    title: '蚂蚁建巢',
    question: '❓ 蚂蚁地下宫殿什么样？',
    answer: '蚂蚁的地下巢穴是一座<span class="highlight">“超级城堡”</span>🏰——结构复杂、功能齐全，比人类的高楼大厦🏢还精妙！蚁巢有<span class="highlight">“多层地下公寓”</span>🛏️——深度从几十厘米到几米不等，分成很多“房间”：<span class="highlight">“婴儿房”</span>🍼——专门存放白色的蚂蚁卵🥚和幼虫🐛，工蚁每天搬进搬出“晒太阳”☀️；<span class="highlight">“仓库”</span>📦——储存粮食，比如种子🌾、蜜露🍯、猎物🪰，分门别类堆放得整整齐齐；<span class="highlight">“通道”</span>🔄——互相连接各个房间的隧道，像蚂蚁的“地铁系统”🚇，保证快速通行；<span class="highlight">“垃圾房”</span>🗑️——专门放排泄物和废物，保持巢穴干净卫生！整个蚁巢能住<span class="highlight">“几百万只蚂蚁”</span>🐜，有自己的“女王”👑、有工蚁、有兵蚁，像一座“地下城市”🌍！<span class="fun-fact">有些蚂蚁的蚁巢深度超过<span class="highlight">“10米”</span>📏——相当于三层楼高！而且蚁巢里面全年保持<span class="highlight">“恒温”</span>🌡️，冬暖夏凉，比空调还厉害！</span>',
    number: 164
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪲💎🎨',
    title: '甲虫的光泽',
    question: '❓ 甲虫壳为什么闪亮？',
    answer: '甲虫的硬壳闪闪发光💎，不是因为它涂了油漆🎨，而是因为壳的表面有一层<span class="highlight">“微棱镜结构”</span>——像<span class="highlight">“天然彩虹膜”</span>🌈！甲虫壳的表层是由很多层超薄的“角质层”叠加而成的，每一层的厚度只有<span class="highlight">“几万分之一毫米”</span>🔬——相当于头发丝的1/100！当阳光☀️照到壳上时，光在不同层之间<span class="highlight">“反射和折射”</span>，像肥皂泡🫧和油膜🛢️上的彩色光一样——不同波长的光（也就是不同颜色）被“分开”了，所以我们看到的是<span class="highlight">“金属光泽”</span>✨——有绿色🟢、蓝色🔵、紫色🟣、金色🟡，甚至彩虹色！甲虫的壳不只是“好看”——它非常坚固，能抵抗天敌的撕咬🛡️，还防水💧、防晒☀️，是甲虫的“多功能盔甲”！<span class="fun-fact">有些甲虫的“金色光泽”🏆在考古学上叫“珠宝甲虫”——古代人把它们当<span class="highlight">“活体珠宝”</span>💍戴在身上，还会用它们的壳做装饰品和画颜料🎨！</span>',
    number: 165
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐝🌡️🔥',
    title: '蜜蜂跳舞',
    question: '❓ 蜜蜂发现花蜜会怎样？',
    answer: '蜜蜂发现花蜜🌸后会回蜂巢“跳一支舞”💃——用舞蹈动作告诉伙伴们<span class="highlight">“花蜜在哪儿、有多远、有多好”</span>！这个舞蹈叫<span class="highlight">“摇摆舞”</span>🕺——是动物世界里最复杂的“信息交流系统”📡！如果花蜜在<span class="highlight">“很近”</span>的地方（100米内），蜜蜂跳<span class="highlight">“圆圈舞”</span>⭕——转一个小圈，再反向转一个小圈，重复多次，意思是“就在附近，快去找”！如果花蜜在<span class="highlight">“很远”</span>的地方（100米以上），蜜蜂跳<span class="highlight">“8字舞”</span>🐝——走一个“8”字形，同时“抖动”肚子🍑：抖动时间越长，说明距离越远；“8字”中间直线段的方向，正好指向<span class="highlight">“太阳的方向”</span>☀️，告诉伙伴们“往那个方向飞”！<span class="fun-fact">蜜蜂跳舞时摇摆的“频率”📈——每秒钟摇摆的次数越多，说明花蜜越甜、越好吃🍯！</span>',
    number: 166
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪲💡🌙',
    title: '萤火虫发光',
    question: '❓ 萤火虫为什么发光？',
    answer: '萤火虫会发光是因为肚子里有<span class="highlight">“荧光小灯泡”</span>💡——这是世界上最高效的“冷光”技术！它的腹部末端有一个专门的“发光器”🔦，里面装了两样“化学材料”：<span class="highlight">“荧光素”</span>🧪（发光原料）和<span class="highlight">“荧光素酶”</span>⚗️（催化剂）！当萤火虫要发光时，它把氧气🫧送进发光器——荧光素在荧光素酶的催化下，和氧气发生反应，产生<span class="highlight">“化学能”</span>⚡，然后发出<span class="highlight">“冷光”</span>💡——亮度高但不发热！就像LED灯一样节能！萤火虫发光主要有两个目的：<span class="highlight">“找对象”</span>❤️——雄虫和雌虫用特定的“闪光密码”✨互相交流，一闪一闪像在发暗号！<span class="highlight">“吓唬敌人”</span>⚠️——光告诉天敌“我有毒、不好吃”！<span class="fun-fact">萤火虫的光是<span class="highlight">“100%能量转化为光”</span>💡——没有红外线、没有热量浪费，是所有“人造灯”都梦寐以求的效率！人类发明的白炽灯只有<span class="highlight">“10%的光”</span>，其他90%都变成了热！</span>',
    number: 167
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐜🌾🍃',
    title: '切叶蚁',
    question: '❓ 蚂蚁为什么搬树叶？',
    answer: '切叶蚁搬树叶🌿不是为了自己吃——它们不会消化树叶！而是为了<span class="highlight">“种蘑菇”</span>🍄！切叶蚁是世界上最早的“农民”👨‍🌾——已经“种地”了<span class="highlight">“5000万年”</span>🕰️，比人类农业早了<span class="highlight">“几千万年”</span>！它们把树叶切下来🍃，搬回地下巢穴🏠，用口器把树叶<span class="highlight">“嚼碎成糊状”</span>🫕，再混上自己的唾液和粪便💩——做成一片片“蘑菇田”🌾！然后，它们在“蘑菇田”上接种一种特殊的“真菌孢子”🍄——这种真菌只生活在切叶蚁的巢穴里，靠切叶蚁提供的“树叶肥料”茁壮成长！真菌长出的“蘑菇”🍄——是切叶蚁唯一吃的“主食”！<span class="fun-fact">切叶蚁和真菌是<span class="highlight">“共生关系”</span>🤝——蚂蚁给真菌提供“肥料”和“住所”，真菌给蚂蚁提供“食物”——谁也离不开谁，就像人和小麦🌾一样！</span>',
    number: 168
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪳🛡️🐜',
    title: '甲虫装死',
    question: '❓ 虫子为什么装死？',
    answer: '甲虫“装死”是一个<span class="highlight">“骗人战术”</span>🎭——科学上叫<span class="highlight">“假死行为”</span>！当遇到危险时——比如被小鸟🐦发现、或者被蜘蛛🕷️抓住——甲虫会立刻把腿一缩、一动不动，像“死”了一样💀！这个“骗术”有两个作用：第一，<span class="highlight">“让敌人失去兴趣”</span>😒——很多捕食者（尤其是鸟类和蜥蜴🦎）只对“活的、会动”的猎物感兴趣，面对一动不动的“死虫子”，它们会觉得“没意思”而走开！第二，<span class="highlight">“等待安全时机”</span>⏳——等敌人走远后，甲虫会先“试探”一下：先动一动触角👁️，再动一动腿🦵，确认安全后立刻“活过来”，爬起来飞快逃跑💨！有些甲虫装死能装<span class="highlight">“几分钟到几个小时”</span>⏱️——耐心十足！<span class="fun-fact">装死的“高手”是<span class="highlight">“铁甲虫”</span>🪲——不仅装死，还会在装死的时候从身体里流出<span class="highlight">“臭味液体”</span>💨，让敌人觉得“又没意思又臭”，彻底放弃！</span>',
    number: 169
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐛🌱🌿',
    title: '竹节虫伪装',
    question: '❓ 它为什么像树枝？',
    answer: '竹节虫是地球上的<span class="highlight">“伪装大师”</span>🎭——它的身体形态、颜色、甚至行为都<span class="highlight">“演得像”</span>一根小树枝🌿！竹节虫的身体又长又细、呈圆柱形🟤，颜色是褐色或绿色——和身边的树枝颜色一模一样！它的六条腿也像“小树枝”一样细长，伸展开来后看起来就像是<span class="highlight">“树枝的分叉”</span>🌳！竹节虫白天“休息”的时候🛌，会把身体伸直、腿贴在身体两侧，头朝上、身体朝下——像一根真正的树枝插在树上！风一吹🌬️，它还会跟着树枝一起<span class="highlight">“轻轻晃动”</span>🍃——演得像真的树枝在风中摇摆！连小鸟🐦和蜥蜴🦎从旁边经过都发现不了！竹节虫这种“伪装”叫<span class="highlight">“保护性拟态”</span>——不是为了吓唬敌人，而是为了<span class="highlight">“隐形”</span>👻，让敌人“看不见自己”！<span class="fun-fact">世界上最大的竹节虫叫<span class="highlight">“巨型竹节虫”</span>🐛——长度可达<span class="highlight">“62厘米”</span>📏，比成年人的前臂还长！是地球上最长的昆虫！</span>',
    number: 170
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐜🌿🌍',
    title: '行军蚁',
    question: '❓ 什么蚂蚁会“行军”？',
    answer: '行军蚁🐜——是蚂蚁中的“游牧民族”🏕️！它们不像其他蚂蚁有“固定巢穴”🏠——它们是“移动军团”🚶！一个行军蚁群有<span class="highlight">“几百万只”</span>——排成几公里长的“队伍”🐜🐜🐜，像“流动的军队”在森林里“扫荡”！行军蚁没有“家”——它们“走到哪儿、住到哪儿”——用身体搭成“蚂蚁桥”🌉和“蚂蚁帐篷”⛺，睡觉的时候互相抓住对方的脚，形成一个“蚂蚁球”🟤！行军蚁是“凶猛的猎手”🦁——它们吃掉路上遇到的一切昆虫🐛、蜘蛛🕷️、甚至小蜥蜴🦎——像“扫荡”一样！<span class="fun-fact">行军蚁的“大颚”特别锋利🔪——能像“剪刀”一样剪断敌人的身体！非洲的行军蚁甚至能“啃穿”人类的袜子🧦、叮咬皮肤——被称为“驱动蚁”！</span>',
    number: 171
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪰🐛🍎',
    title: '果蝇',
    question: '❓ 果蝇为什么围着水果飞？',
    answer: '果蝇🪰——是“水果的追踪者”🍎！果蝇的“鼻子”👃特别灵敏，能“闻”到水果散发出来的“发酵气味”💨——特别是水果开始“烂”的时候！水果烂了，里面的“糖分”🍬被酵母菌“发酵”成“酒精”🍷——果蝇“超级喜欢”这个气味！果蝇飞到水果上🍎，不是为了吃果肉——而是为了在水果上<span class="highlight">“产卵”</span>🥚！卵变成“蛆”🐛，蛆吃掉发酵的果肉，然后变成“蛹”🫧，再变成“成虫”🪰——一生都在水果上完成！果蝇“繁殖超级快”⚡——一只雌果蝇一生能产<span class="highlight">“500个卵”</span>，一个星期就是“一代”，一年有“几十代”！<span class="fun-fact">果蝇是科学家最爱的“实验动物”🧬——因为繁殖快、基因简单，很多“基因研究”都是用果蝇做的！果蝇的基因和人类有<span class="highlight">“60%”</span>相似！</span>',
    number: 172
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐜🌿🔄',
    title: '蚂蚁搬家',
    question: '❓ 蚂蚁为什么搬家？',
    answer: '蚂蚁搬家🐜——“未雨绸缪”☔️！蚂蚁“预感”到天气要变坏🌧️——就会“搬家”到“高处”🏔️！蚂蚁的触角👁️能“感知”到“气压变化”和“湿度变化”——当空气湿度升高、气压降低☁️，蚂蚁知道“要下雨了”！它们会成群结队地“搬家”——每只蚂蚁“搬运”一个“卵”🥚或“幼虫”🐛，排成“长长的队伍”🐜🐜🐜，从“低处”搬到“高处”🏔️——新巢穴必须“干燥、安全”！“蚂蚁搬家”是“天气预报”📡——“蚂蚁搬家蛇过道，明日必有大雨到”☔️！蚂蚁搬家还有另一个原因——<span class="highlight">“食物短缺”</span>🍽️——原来的巢穴附近没吃的了，它们就“搬家”到“食物多的地方”！<span class="fun-fact">蚂蚁搬家时，会有“兵蚁”🪖在队伍“两边”站岗——保护“搬家队伍”，防止被敌人🐛攻击！</span>',
    number: 173
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🦟🍃🔄',
    title: '蜻蜓点水',
    question: '❓ 蜻蜓为什么在水面上“点”？',
    answer: '蜻蜓“点水”💧——不是“玩水”，而是<span class="highlight">“产卵”</span>🥚！“点水”是蜻蜓妈妈在<span class="highlight">“生宝宝”</span>！蜻蜓的卵必须在水里🌊才能孵化成“幼虫”（水虿）！雌蜻蜓飞到水面🌊上，把尾巴（产卵器）伸进水里——“点”一下水面，就在水里产下一颗卵！一颗一颗“点”💧——一个蜻蜓妈妈能产<span class="highlight">“几百颗到几千颗”</span>卵！卵在水里孵化成“幼虫”🐛——“水虿”——水虿是“水里的猎手”🦁，吃小蝌蚪🐸、小鱼苗🐟、甚至小水虫！水虿在水里生活<span class="highlight">“几个月到几年”</span>（不同种类不同），然后爬出水面、蜕皮🔄——变成“蜻蜓”成虫，飞上天空！<span class="fun-fact">蜻蜓的幼虫（水虿）是有“牙齿”的🦷——下唇能“弹射”出去抓住猎物，像“弹簧拳”一样💪！</span>',
    number: 174
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪲🌙💡',
    title: '叩头虫',
    question: '❓ 叩头虫为什么会“磕头”？',
    answer: '叩头虫“磕头”🙇——其实不是“行礼”，而是<span class="highlight">“翻身”</span>和<span class="highlight">“逃跑”</span>！叩头虫的身体有一个特殊的“关节”🔄——在“前胸”和“中胸”之间——像“弹簧”一样！当叩头虫被“翻过来”🪲（背朝下、肚子朝上），它“弯下腰”🙇——前胸和中胸“卡”住、蓄力💪——然后“啪”地一下弹开💥！身体被“弹”到空中，翻个跟斗🤸，落下来时“正好翻正”✅——成功逃脱！叩头虫“磕头”的声音“嗒嗒嗒”🔊——像在“磕头”一样！叩头虫还有“装死”功能💀——遇到危险时，腿一缩、一动不动，像“死”了一样，等敌人走了再“弹”起来逃跑💨！<span class="fun-fact">叩头虫的“弹跳力”超强💪——能弹到<span class="highlight">“自己体长的10倍”</span>高📏——相当于一个人<span class="highlight">“跳到20层楼”</span>那么高🏢！</span>',
    number: 175
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🦗🌿🎤',
    title: '纺织娘',
    question: '❓ 夜里“滋滋”叫的是什么虫？',
    answer: '夜里“滋滋滋”的叫声🔊——大多是<span class="highlight">“纺织娘”</span>或<span class="highlight">“螽斯”</span>（蝈蝈🦗的亲戚）！纺织娘是“夜猫子”🌙——白天休息、晚上活动！雄性纺织娘的翅膀上有“发音器”🎵——和蟋蟀🦗一样，也是“翅膀摩擦”发出声音！但纺织娘的“音齿”更多🪚——发出的声音更“尖”、更“连续”——像“织布机”的声音“滋——滋——滋——”🧵！所以叫“纺织娘”！纺织娘的叫声有“三个目的”：<span class="highlight">“求偶”</span>❤️（吸引雌虫）、“领地”⚠️（警告其他雄虫）、“温度”🌡️（叫声速度和温度有关——越热叫得越快）！纺织娘是“素食主义者”🌿——吃树叶🍃、花🌸、嫩茎——不咬人！<span class="fun-fact">纺织娘的“听器”👂在“前腿上”🦵——和蟋蟀一样！它不是用耳朵听声音，而是用“腿”来“听”👂！</span>',
    number: 176
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪲🌿🔄',
    title: '独角仙',
    question: '❓ 独角仙的角有什么用？',
    answer: '独角仙🪲——是“昆虫界的武士”⚔️！它的“角”🦄——只有“雄虫”才有——像“武士的头盔”🎖️和“武器”🛡️！独角仙的角有三大功能：<span class="highlight">“打架”</span>⚔️——两只雄虫为了争夺“女朋友”❤️，会用“角”互相“顶”——像“斗牛”🐂一样！“谁力气大、谁顶得高”谁赢！<span class="highlight">“撬东西”</span>🪚——独角仙用角“撬”树皮、撬石头，找食物🍎、挖洞🕳️！<span class="highlight">“求偶展示”</span>💃——“角越大、越威猛”的雄虫，越受雌虫喜欢❤️——像“孔雀开屏”一样！独角仙的角是“几丁质”做的🧬——和昆虫的外壳同一种材料，特别坚硬！<span class="fun-fact">独角仙的力气巨大💪——能拖动<span class="highlight">“自己体重100倍”</span>的东西——比蚂蚁🐜还厉害！是“昆虫界的举重冠军”🥇！</span>',
    number: 177
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪲🌍🔄',
    title: '屎壳郎',
    question: '❓ 屎壳郎为什么推粪球？',
    answer: '屎壳郎“推粪球”💩——不是“玩耍”，而是“存粮食”和“生宝宝”🥚！屎壳郎发现一堆“动物粪便”💩后——先“搓”成一个“圆球”⚽——用“头”和“前腿”揉、推、压！然后<span class="highlight">“倒立着”</span>用“后腿”推粪球💪——像“推独轮车”🛒一样！推粪球有两个目的：<span class="highlight">“食物储备”</span>🍽️——把粪球推回家，慢慢吃（屎壳郎主要吃“粪”里的“营养”）！<span class="highlight">“育儿房”</span>👶——雌屎壳郎在粪球里“产卵”🥚，然后把粪球埋进土里🕳️——卵孵化成“幼虫”🐛后，幼虫直接吃“粪球”长大！“幼虫”在粪球里“安全长大”，变成成虫🪲后再钻出地面！<span class="fun-fact">屎壳郎是“自然界清洁工”🧹——把动物粪便“推走”埋进土里，土壤变肥🌱、苍蝇🪰减少、环境更干净！</span>',
    number: 178
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐜🍯🔄',
    title: '蜜罐蚁',
    question: '❓ 蚂蚁能存“蜜”吗？',
    answer: '蜜罐蚁🐜——是“活体蜜罐”🍯！蜜罐蚁生活在“沙漠”🏜️——干旱的时候食物很少🌵！一些工蚁“专职”做<span class="highlight">“蜜罐”</span>——它们吸食“花蜜”和“昆虫蜜露”🍯，吸到肚子鼓得像一颗<span class="highlight">“半透明的小葡萄”</span>🍇——圆滚滚的、像“玻璃珠子”一样！这些“蜜罐”蚂蚁挂在巢穴的天花板上🔄，像“活的冰箱”🧊和“活的蜂蜜罐”🍯！当干旱来了、食物不够了🌵，其他蚂蚁就爬到“蜜罐”身边，用触角👁️“敲敲”蜜罐——“蜜罐”就“吐”一点“蜜”给它们吃！蜜罐蚁的“蜜”是<span class="highlight">“全蚂蚁的食物储备”</span>——相当于“应急粮仓”🏪！<span class="fun-fact">蜜罐蚁的肚子能“撑到”<span class="highlight">“葡萄那么大”</span>🍇——是它身体大小的<span class="highlight">“几十倍”</span>！能存“几个月”的“蜜”🍯！</span>',
    number: 179
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🦋🌿🔄',
    title: '蝴蝶的迁徙',
    question: '❓ 蝴蝶也会“长途旅行”？',
    answer: '蝴蝶的迁徙🦋——最著名的是<span class="highlight">“帝王蝶”</span>🦋！每年秋天🍂，北美🦋的帝王蝶从“加拿大🇨🇦”和“美国北部🇺🇸”——飞到“墨西哥🇲🇽”的“云杉林”🌲过冬——距离<span class="highlight">“4000多公里”</span>📏！帝王蝶的迁徙“不是一代完成”的——要“4代”接力🧬！第一代🦋从墨西哥出发，飞到美国南部——产卵🥚、死亡💀——第二代🦋继续飞、到美国中部——产卵、死亡——第三代🦋飞到加拿大——产卵、死亡——第四代🦋出生后，从加拿大“一路飞回墨西哥”🔄！——完成“一整圈”迁徙！<span class="fun-fact">帝王蝶的“导航系统”🧭——靠“太阳”🌞和“地球磁场”🧲指引方向！科学家说，蝴蝶的大脑🧠里有一个“生物钟”⏰，告诉它们“什么时候飞、往哪个方向飞”！</span>',
    number: 180
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪲🌿💪',
    title: '天牛',
    question: '❓ 天牛的触角为什么那么长？',
    answer: '天牛的“长触角”👁️——像“两根天线”📡，比身体还长！天牛是“长角冠军”🏆——触角长度能达到<span class="highlight">“身体的2到3倍”</span>！这么长的触角有什么用？<span class="highlight">“感知世界”</span>🔍——触角上布满了“感受器”，能“闻”到气味🌺、“感觉”到振动💨、“判断”温度和湿度🌡️——像“多功能传感器”！“找对象”❤️——雄天牛的“长触角”能“闻到”几公里外“雌天牛”的信息素（气味）——就像“远程雷达”📡！“探路”🕵️——天牛在“树皮缝里”爬行时🪵，触角“前面探路”，避开障碍物！天牛的幼虫叫“木蠹”🐛——专门“蛀木”——在树干里挖“隧道”🕳️，危害树木🌳！<span class="fun-fact">天牛的“触角”能转<span class="highlight">“360度”</span>🔄——像“小风车”一样转圈圈，特别灵活！</span>',
    number: 181
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🦟🌊🔄',
    title: '水黾',
    question: '❓ 什么虫能在水上走？',
    answer: '水黾🦟——是“水上漂”高手🏄——能在水面上“滑行”而不沉下去！水黾的秘密在于它的“腿”🦵——腿上覆盖着“超级疏水”的“微毛”🪶——像“小刷子”一样排列着微小的“凹槽”！这些“微毛”能“困住”一层“空气膜”🫧——让水和腿的“接触面积”特别小——水就“托”住了腿💧！而且水黾的腿特别长、体重特别轻⚖️——所以水面“张力”能把水黾“托起来”！水黾在水面上“滑行”的时候🌊——像“滑冰”一样⛸️——速度快、姿势帅！水黾是“捕食者”🦁——吃水面上“掉落的昆虫”🐛和小鱼苗🐟！<span class="fun-fact">水黾的“划水速度”⏱️——每秒能滑<span class="highlight">“100倍体长”</span>的距离——相当于一个人<span class="highlight">“每秒跑200米”</span>💨！</span>',
    number: 182
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐛🌿🔄',
    title: '尺蠖',
    question: '❓ 尺蠖走路为什么“拱”起来？',
    answer: '尺蠖🐛——是“测量虫”📏——走路“一拱一拱”的，像“测量尺子”📐！“拱”起来的原因：尺蠖只有“前腿”和“后腿”🦵——<span class="highlight">“中间没有腿”</span>！它走路的时候——“前腿”先抓住树枝🌿，“后腿”往前“弓”起来🔄——身体弯成一个“拱桥”🌉——然后“前腿”往前伸、身体拉直⬆️——就“拱”出去了一步！尺蠖的“一拱一拱”看起来像“伸手探路、再拉直身体”——像“尺子”在“量”树枝！尺蠖是“蛾子”🦋的“幼虫”——不是“蝴蝶”的幼虫！尺蠖“休息”的时候🛌——身体“伸得直直的”、一动不动——看起来像<span class="highlight">“一根小树枝”</span>🌿——这是“伪装”——让鸟🐦看不见它！<span class="fun-fact">尺蠖的“尺”字——来自它“一拱一拱”的走路样子，像“用尺子量尺寸”📏！</span>',
    number: 183
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪲🌿🔄',
    title: '金龟子',
    question: '❓ 金龟子为什么有金属光泽？',
    answer: '金龟子🪲——是“会飞的珠宝”💎——外壳有“金属光泽”✨（绿色、蓝色、金色、铜色）！金龟子的“金属色”不是“颜料”🎨——而是“物理结构色”🔬！金龟子的“外壳”有多层“微结构”——像“光栅”🔦一样，能“反射”特定波长的光🌈——和“甲虫的光泽”原理一样！光在不同层之间“反射和干涉”💫——产生“金属光泽”！“金属色”有两个作用：<span class="highlight">“伪装”</span>🌿——在阳光下✨闪着光，和“露珠💧”或“水滴”混在一起，敌人看不清它！“警告”⚠️——鲜艳的颜色告诉捕食者：“我有毒、别吃我！”（有些金龟子确实有毒☠️）！<span class="fun-fact">金龟子的“幼虫”🐛——叫“蛴螬”——白白胖胖、住在土里🕳️，吃树根🌱！有些“蛴螬”是“害虫”——危害植物根系！</span>',
    number: 184
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🦋🌿🔄',
    title: '蝴蝶和蛾子',
    question: '❓ 蝴蝶和蛾子怎么分？',
    answer: '蝴蝶🦋和蛾子🦋——“很像”，但“不一样”！<span class="highlight">“触角”</span>👁️：蝴蝶的触角是<span class="highlight">“棒状”</span>——末端“鼓鼓的”（像“火柴棒”🔥）；蛾子的触角是<span class="highlight">“羽状”</span>或“丝状”——像“小羽毛”🪶！“活动时间”🕐：蝴蝶<span class="highlight">“白天活动”</span>☀️（日出🦋）；蛾子<span class="highlight">“夜间活动”</span>🌙（夜出🦋）！“休息姿势”🛌：蝴蝶休息时翅膀<span class="highlight">“竖起来”</span>🔼（合拢在背上）；蛾子休息时翅膀<span class="highlight">“平展开”</span>🔽（摊开在身体两侧）！“颜色”🎨：蝴蝶颜色“鲜艳”🌈；蛾子颜色“暗淡”（褐色、灰色）！“蛹”🫧：蝴蝶的蛹是“裸蛹”（没有茧，挂在树枝上🌿）；蛾子的蛹是“茧”（有丝做的“外套”🧶）！<span class="fun-fact">有一些<span class="highlight">“白天活动的蛾子”</span>也有！叫“日行性蛾子”——比如“虎蛾”🐯——白天飞、颜色鲜艳！所以“区分方法”不是100%准确！</span>',
    number: 185
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪲🌿🔄',
    title: '瓢虫的翅膀',
    question: '❓ 瓢虫的硬壳是翅膀吗？',
    answer: '瓢虫的“硬壳”<span class="highlight">“是翅膀”</span>🪲——是“前翅”进化来的！“前翅”变成了“硬壳”（叫“鞘翅”）——像“盔甲”🛡️一样保护“后翅”和“身体”！硬壳“合拢”时像“半球”——保护瓢虫！瓢虫飞行的时候🛫——把“硬壳”张开🔄——露出下面“透明的后翅”🪶——“后翅”又薄又大，是“真正的飞行翅膀”！瓢虫把“后翅”从“硬壳下面”展开🪄——飞起来！飞行结束后🛬——“后翅”收起来、藏进“硬壳”下面——“硬壳”再合上，保护好后翅！“硬壳”还有“伪装”功能🎨——颜色和斑点让捕食者“不敢吃”！<span class="fun-fact">瓢虫的“硬壳”是“透明的”——硬壳下面是“黑色身体”和“红色斑点”——红色其实是“身体”的颜色，硬壳是“透明”的🪞！</span>',
    number: 186
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐜🌿🔄',
    title: '蚂蚁的触角',
    question: '❓ 蚂蚁怎么用触角“说话”？',
    answer: '蚂蚁的触角👁️——是“语言器官”💬和“感觉器官”👃！触角上布满了“化学感受器”🧪——能“闻到”信息素（蚂蚁分泌的“气味信使”）！蚂蚁见面的时候🐜——会用“触角”互相“碰一碰”🔄——这叫<span class="highlight">“触角交流”</span>！触角“碰”的过程中，蚂蚁能“闻到”对方身上的“信息素”——知道对方是“朋友”👫还是“敌人”👾、“同巢”还是“异巢”、“是工蚁还是女王”👑、“要去哪里、找什么食物”🍎！蚂蚁的触角还有“触觉”🖐️——“探路”和“感知物体”——像“盲人的拐杖”🦯！触角“左右摆动”🔃——“闻”左右方向的气味；触角“上下摆动”🔽——“闻”上下的气味！<span class="fun-fact">蚂蚁的触角断了不会“再生”🔄——所以蚂蚁的触角特别重要，断了就“失聪”了👂！</span>',
    number: 187
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪲🌿🔄',
    title: '萤火虫的幼虫',
    question: '❓ 萤火虫小时候什么样？',
    answer: '萤火虫的“小时候”🐛——和成虫“完全不同”！萤火虫的幼虫叫“萤火虫幼虫”🐛——身体“扁平、长条”📏，背上有一层“硬壳”🛡️，颜色“深褐色”🟤——像“小蜈蚣”🪳！幼虫有<span class="highlight">“发光器”💡</span>——也能发光✨——但发出的光比成虫“暗”一些！幼虫发光用来“吓唬敌人”⚠️——“我有毒、不好吃”！萤火虫幼虫是“肉食性”🥩——吃“蜗牛🐌”和“蛞蝓”🐛！幼虫用“上颚”咬住蜗牛，注入“消化液”🧪——把蜗牛肉“溶解”成“液体”——然后“吸”掉液体🍽️——像“喝汤”一样！萤火虫幼虫“很能活”⏳——幼虫期长达<span class="highlight">“几个月到一年”</span>，成虫（会飞🦟）只能活<span class="highlight">“几天到几周”</span>！<span class="fun-fact">萤火虫的幼虫叫<span class="highlight">“水栖”</span>或“陆栖”——一些幼虫生活在水里🌊、一些在陆地上🌿！</span>',
    number: 188
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪰🌿🔄',
    title: '蚊子的一生',
    question: '❓ 蚊子怎么长大的？',
    answer: '蚊子的一生要经历“四个阶段”🔄——和蝴蝶🦋一样“完全变态”！第一阶段：<span class="highlight">“卵”</span>🥚——母蚊子在“水面”🌊或“潮湿的地方”产卵——一颗一颗或“几百颗粘在一起”像“小船”🚣！第二阶段：<span class="highlight">“幼虫”</span>🐛——叫“孑孓”——像“小蝌蚪”🐸，在水里“扭来扭去”💦，吃“微生物”和“有机碎屑”！第三阶段：<span class="highlight">“蛹”</span>🫧——叫“蚊蛹”——像“小逗号”✨，在水里“漂浮”，不吃不喝，正在“变身”！第四阶段：<span class="highlight">“成虫”</span>🪰——蛹“裂开”，蚊子🦟“爬出来”，先在水面上“休息”🛌，等“翅膀干了”才能飞！母蚊子飞出水面后——需要“血”🩸来产卵！“生命周期”只有<span class="highlight">“1到2周”</span>——很短！<span class="fun-fact">蚊子喜欢“积水”🪣——花盆底盘🚰、旧轮胎🛞、水沟🕳️——只要有水，蚊子就在那里“生宝宝”！所以“清积水”能“减少蚊子”🦟！</span>',
    number: 189
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪲🌿🔄',
    title: '锹甲',
    question: '❓ 锹甲的大颚有什么用？',
    answer: '锹甲🪲——是“昆虫界的鹿🦌”——“大颚”像“鹿角”🌿！锹甲的“大颚”只有“雄虫”有——像两把“大钳子”🔧！大颚有三大功能：<span class="highlight">“打架”</span>⚔️——两只雄虫为了“争抢”雌虫❤️，会用“大颚”互相“钳”住对方、然后“举起来”🏋️——谁“举得高”、“力气大”谁赢！<span class="highlight">“撬开”</span>🪚——用大颚“撬开”树皮🪵，找“树液”🍯（锹甲喜欢甜甜的“树汁”）！<span class="highlight">“展示”</span>💃——“大颚越大”越受雌虫喜欢——像“鹿角”一样！“大颚”虽然“看着吓人”——但其实锹甲是“素食主义者”🌿——只吃“树汁”和“水果汁”🍎，不咬人！<span class="fun-fact">锹甲的“大颚”能<span class="highlight">“张开到身体1.5倍”</span>宽📏——像“老鹰的翅膀”🦅一样霸气！</span>',
    number: 190
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐞🌿🔄',
    title: '瓢虫的斑点',
    question: '❓ 瓢虫的斑点会变吗？',
    answer: '瓢虫的斑点⚫——<span class="highlight">“不会变”</span>——从“幼虫”变成“成虫”🪲后，斑点的“数量和位置”就“固定”了！瓢虫的“斑点”由“基因”🧬决定——像“指纹”一样，每只瓢虫的“斑点排列”都不同！但有个“神奇”的现象：一些瓢虫的“斑点”<span class="highlight">“颜色深浅”</span>会随“温度”🌡️变化——天气“冷”的时候❄️，斑点颜色“变深”🖤（吸收更多热量☀️）；天气“热”的时候☀️，斑点颜色“变浅”🤍（反射更多阳光🌞）！瓢虫的“斑点”是“硬壳”（鞘翅）上的“色素”🎨——像“颜料”一样——不会“移动”也不会“消失”！“斑点”有“警告”功能⚠️——告诉捕食者“我有毒、不好吃”！<span class="fun-fact">瓢虫的“头”上也有<span class="highlight">“白色斑点”</span>⚪——叫“前胸背板斑纹”——每只瓢虫的“头斑”也不同！</span>',
    number: 191
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🦋🌿🔄',
    title: '蝴蝶的鳞粉',
    question: '❓ 蝴蝶翅膀上的“粉”是什么？',
    answer: '蝴蝶翅膀上的“粉”🧂——不是“花粉”，而是<span class="highlight">“鳞粉”</span>🪶！蝴蝶的翅膀上覆盖着<span class="highlight">“几十万片”</span>极小的“鳞片”——像“瓦片”一样层层叠叠🪄！“鳞片”非常小——只有“几微米”🔬——用显微镜才能看到！“鳞粉”有三大功能：<span class="highlight">“颜色”</span>🎨——鳞片反射光，产生“颜色”（结构色和色素色）——让蝴蝶“五颜六色”🌈！“防水”💧——鳞片像“瓦片”一样排列，雨水💧不会浸湿翅膀！“飞行”🛫——鳞片产生“微小的涡流”💨，帮助蝴蝶“飞行更稳定”！“鳞粉”很容易“掉落”——手一摸翅膀就会“掉粉”，蝴蝶的“鳞粉”掉了翅膀就不会“再生”🔄——所以<span class="highlight">“不要摸蝴蝶翅膀”</span>👋——会伤害它！<span class="fun-fact">蝴蝶翅膀的“鳞粉”在显微镜下🔬——像“鱼鳞”🐟一样排列整齐，每片鳞粉都有自己的“颜色”🎨！</span>',
    number: 192
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪲🌿🔄',
    title: '象鼻虫',
    question: '❓ 象鼻虫的“鼻子”是什么？',
    answer: '象鼻虫🐜——名字里带“象”🐘——因为它的“头”前面长着一个<span class="highlight">“长鼻子”</span>👃——其实是<span class="highlight">“口器”</span>和“头部”延长了！这个“长鼻子”其实叫“喙”——像“大象鼻子”一样！象鼻虫的“喙”末端长着“嘴巴”👄——用“喙”在“坚果🌰”和“果实🍎”上“打洞”🕳️——然后把“卵”🥚产进洞里！幼虫🐛在果实里面“长大”——吃果肉、做“隧道”——等“长大了”再“钻出来”！象鼻虫的“喙”有“感觉器”👃——能“闻”到食物的“气味”！象鼻虫是“坚果杀手”🥜——很多坚果（栗子🌰、核桃🥜）被象鼻虫“蛀空”了！<span class="fun-fact">象鼻虫的“喙”的长度<span class="highlight">“和身体一样长”</span>📏——像“大象的鼻子”一样长！有些象鼻虫的“喙”甚至比身体还长！</span>',
    number: 193
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐞🌿🔄',
    title: '瓢虫的吃食',
    question: '❓ 瓢虫除了蚜虫还吃什么？',
    answer: '瓢虫🐞——“不是都吃蚜虫🐜”！不同种类的瓢虫吃“不同的食物”！<span class="highlight">“益虫瓢虫”</span>👍——吃“蚜虫”🐜、“介壳虫”🐛、“螨虫”🕷️——“害虫”的“天敌”！<span class="highlight">“食菌瓢虫”</span>🍄——吃“真菌”（霉菌、白粉病🌿）——帮助植物“治病”！“食花粉瓢虫”🌼——吃“花粉”和“花蜜”——不是“益虫”也不是“害虫”！<span class="highlight">“害虫瓢虫”</span>👎——<span class="highlight">“二十八星瓢虫”</span>🐞——吃“植物叶子”🌿——是“害虫”！瓢虫“小时候”（幼虫🐛）和“长大”后“吃的东西”<span class="highlight">“不一样”</span>：蚜虫🐜是“瓢虫幼虫”最爱吃的！一只瓢虫幼虫一天能吃<span class="highlight">“100只蚜虫”</span>——比成虫吃得多！<span class="fun-fact">瓢虫“饿”的时候会“同类相食”😱——吃“其他瓢虫”的“卵”🥚！所以“食物不够”时瓢虫会“自相残杀”！</span>',
    number: 194
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪲🌿🔄',
    title: '放屁虫',
    question: '❓ 放屁虫为什么能“放屁”？',
    answer: '放屁虫🪲——真的会“放屁”💨——而且“屁”是<span class="highlight">“化学武器”</span>🧪！放屁虫的腹部有一个“化学反应室”🧪——里面装着“过氧化氢”和“对苯二酚”——两种“化学物质”！受到威胁时😱——放屁虫把这两种物质“混合”在一起，加入“催化剂”⚗️——发生“爆炸性反应”💥，产生<span class="highlight">“高温气体”</span>🔥（超过“100°C”🌡️）和<span class="highlight">“刺激性液体”</span>💨——“噗”地一下“喷”出来！这个“气体”有“臭味”👃和“刺激性”🔥——能“烫伤”和“恶心”捕食者🐦！放屁虫的“屁”还能“精准瞄准”🎯——“屁股”能“转动”，朝“任何方向”喷！<span class="fun-fact">放屁虫的“化学武器”🛡️——是地球上“最复杂的防御系统”之一！科学家模仿放屁虫的“化学喷气”发明了“喷雾器”💨！</span>',
    number: 195
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐜🌿🔄',
    title: '蚂蚁的寿命',
    question: '❓ 蚂蚁能活多久？',
    answer: '蚂蚁的“寿命”差别巨大📏——和“职位”有关！<span class="highlight">“工蚁”</span>🐜——最“短命”——活<span class="highlight">“几个月到1年”</span>——每天“干活”💪（觅食、筑巢、照顾宝宝），“劳累”致死！<span class="highlight">“兵蚁”</span>🪖——活<span class="highlight">“1到2年”</span>——“保卫”蚁巢，战斗💥中可能“牺牲”！<span class="highlight">“蚁后”</span>👑——最“长寿”——能活<span class="highlight">“10到30年”</span>——甚至“50年”！蚁后的“寿命”是“工蚁”的“几十倍”！蚁后为什么“长寿”🧐——因为它“待”在巢穴深处🏠，不干活、不冒险、不受“外界伤害”——而且蚁后的“新陈代谢”更慢⏳！<span class="fun-fact">吉尼斯世界纪录🏆——“活得最久的昆虫”是<span class="highlight">“蚁后”</span>——一只“针蚁”蚁后活了<span class="highlight">“28年”</span>！在实验室里养的！</span>',
    number: 196
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪲🌿🔄',
    title: '天牛的危害',
    question: '❓ 天牛为什么是害虫？',
    answer: '天牛🪲是“森林的破坏者”🌳——是<span class="highlight">“严重的害虫”</span>！天牛的“幼虫”🐛——叫“木蠹”——在“树干”内部“蛀洞”🕳️——吃“木质部”（树的“血管”🩸）！幼虫在树干里挖“隧道”🔄——破坏树木的“运输系统”（水分💧和养分🌿的通道）——树就会“枯萎”🌿、“死亡”💀！一棵大树🌳，可能被“几只”天牛幼虫“蛀空”！天牛“成虫”🐞——也“咬树皮”🌳——让树“受伤”🩹、更容易生病🦠！天牛“危害”的树木：松树🌲、杨树🌳、柳树🌿、果树🍎——都是“经济林木”和“生态树木”！防治天牛的方法🧪：喷“生物农药”、放“天敌”（寄生蜂🐝）、“砍伐病树”🪓！<span class="fun-fact">有一种天牛叫<span class="highlight">“松褐天牛”</span>🪲——是“松材线虫病”的“传播者”！松材线虫病是“松树的癌症”💀——已经“杀死”了<span class="highlight">“几百万棵”</span>松树🌲！</span>',
    number: 197
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🐞🌿🔄',
    title: '瓢虫的越冬',
    question: '❓ 瓢虫冬天去哪里了？',
    answer: '瓢虫冬天“不见”了🐞——它们去“越冬”了❄️！瓢虫是“冷血动物”🦎——冬天“太冷”了，它们就<span class="highlight">“休眠”</span>💤！瓢虫找“暖和”的地方“躲”起来：<span class="highlight">“石头缝”</span>🪨、“树皮底下”🌳、“落叶堆”🍂、“房屋角落”🏠、“山洞”🕳️——甚至是“人类的窗户缝”🪟！成千上万只瓢虫<span class="highlight">“挤在一起”</span>🐞🐞🐞——“抱团取暖”🔥——互相“挨着”减少热量散失！冬天瓢虫“不吃不动”🍽️——靠“体内存储的脂肪”活下来！春天🌱来了，气温回升☀️——瓢虫“醒”过来、爬出来——开始“觅食”（蚜虫🐜）和“繁殖”🥚！<span class="fun-fact">瓢虫“越冬”的时候——身体“颜色变暗”🟤——因为“温度低”让“色素”变暗！春天“温度升高”又“变红”🔴！</span>',
    number: 198
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🦗🌿🔄',
    title: '蟋蟀的洞穴',
    question: '❓ 蟋蟀住哪里？',
    answer: '蟋蟀住“地下”🕳️——是“洞穴动物”🏠！蟋蟀用“前足”🦵（像“小铲子”🔧）挖“洞”——挖出“隧道”🔄和“卧室”🛏️！洞穴深度<span class="highlight">“10到30厘米”</span>📏——有“多个出口”🚪（逃跑用💨）！洞穴“冬暖夏凉”🌡️——夏天避暑☀️、冬天避寒❄️——是蟋蟀的“舒适家”🏠！蟋蟀的洞穴有“功能分区”：<span class="highlight">“入口”</span>🚪——用“草叶”🍃和“泥土”🪨“挡”住入口，伪装成“土堆”！“卧室”🛏️——洞穴最深处，蟋蟀“睡觉”💤和“休息”！“储存室”📦——存“食物”（植物碎屑🌿）！雄蟋蟀🐞——在洞穴“门口”“唱歌”🎵——吸引“雌蟋蟀”💕！<span class="fun-fact">蟋蟀的洞穴“方向”🧭——喜欢“朝南”☀️——因为“阳光充足、温暖”！蟋蟀是“聪明的建筑师”👷！</span>',
    number: 199
  },
  {
    category: 'insect',
    categoryName: '🐛 昆虫世界',
    emoji: '🪲🌿🔄',
    title: '瓢虫的天敌',
    question: '❓ 谁吃瓢虫？',
    answer: '瓢虫虽然“有毒”☠️——但还是有“天敌”🐦！<span class="highlight">“鸟类”</span>🐦——有些鸟（比如“燕子🐦”和“麻雀🐦”）“不怕毒”——会吃瓢虫！但它们只吃“少量”——吃多了会“中毒”🤢！<span class="highlight">“蜘蛛”</span>🕷️——蜘蛛网🕸️能“粘住”瓢虫——蜘蛛“咬”瓢虫、注入“毒液”💉——吃掉！<span class="highlight">“螳螂”</span>🦗——“昆虫猎手”——抓住瓢虫后“一口一口”吃掉（螳螂“不怕毒”💪）！<span class="highlight">“寄生蜂”</span>🐝——在瓢虫身体里“产卵”🥚——卵孵化成“幼虫”🐛，从“里面”吃掉瓢虫！<span class="highlight">“青蛙”</span>🐸和“蜥蜴”🦎——也吃瓢虫！“瓢虫的防御”🛡️——鲜艳颜色“警告”⚠️、装死💀、分泌“臭味液体”💨——但还是“难逃”天敌！<span class="fun-fact">瓢虫的“黄色液体”🟡——含有“生物碱”（有毒物质）——能让“小鸟”🐦“恶心呕吐”🤢——“学聪明”后不敢再吃！</span>',
    number: 200
  }
];

var categories = [
  { key: 'animal', label: '🐾 动物认知', tabClass: 'tab-animal' },
  { key: 'weather', label: '🌍 地球与天气', tabClass: 'tab-weather' },
  { key: 'fruit', label: '🍎 水果蔬菜', tabClass: 'tab-fruit' },
  { key: 'insect', label: '🐛 昆虫世界', tabClass: 'tab-insect' }
];

export { cards, categories };
