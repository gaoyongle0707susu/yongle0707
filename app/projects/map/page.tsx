import Link from "next/link";
import Image from "next/image";

const IMG_BASE = "https://km.sankuai.com/api/file/cdn/1483476930";

const images = {
  cover: `${IMG_BASE}/17325479537?contentType=1&isNewContent=false`,
  toc: `${IMG_BASE}/17314493962?contentType=1&isNewContent=false`,
  flowOrder: `${IMG_BASE}/17316806020?contentType=1&isNewContent=false`,
  flowPickup: `${IMG_BASE}/17316887216?contentType=1&isNewContent=false`,
  flowDeliver: `${IMG_BASE}/17314547840?contentType=1&isNewContent=false`,
  priority: `${IMG_BASE}/17314787568?contentType=1&isNewContent=false`,
  solution01a: `${IMG_BASE}/17315023760?contentType=1&isNewContent=false`,
  solution01b: `${IMG_BASE}/17314613345?contentType=1&isNewContent=false`,
  solution02: `${IMG_BASE}/17316885395?contentType=1&isNewContent=false`,
  solution03: `${IMG_BASE}/17314787567?contentType=1&isNewContent=false`,
  solution04: `${IMG_BASE}/17314613341?contentType=1&isNewContent=false`,
  solution05: `${IMG_BASE}/17315105820?contentType=1&isNewContent=false`,
  solution06a: `${IMG_BASE}/17315023759?contentType=1&isNewContent=false`,
  solution06b: `${IMG_BASE}/17314787569?contentType=1&isNewContent=false`,
  solution06c: `${IMG_BASE}/17316885391?contentType=1&isNewContent=false`,
  solution06d: `${IMG_BASE}/17314613340?contentType=1&isNewContent=false`,
  solution06e: `${IMG_BASE}/17316887214?contentType=1&isNewContent=false`,
  solution06f: `${IMG_BASE}/17315023757?contentType=1&isNewContent=false`,
  solution07a: `${IMG_BASE}/17314787565?contentType=1&isNewContent=false`,
  solution07b: `${IMG_BASE}/17315105817?contentType=1&isNewContent=false`,
  solution07c: `${IMG_BASE}/17316806015?contentType=1&isNewContent=false`,
  solution07d: `${IMG_BASE}/17314613338?contentType=1&isNewContent=false`,
  solution07e: `${IMG_BASE}/17314547833?contentType=1&isNewContent=false`,
  launch: `${IMG_BASE}/17316887211?contentType=1&isNewContent=false`,
  result: `${IMG_BASE}/17314547832?contentType=1&isNewContent=false`,
};

function SectionHeader({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div className={`${color} rounded-xl px-6 py-4 mb-6`}>
      <h2 className="text-white font-bold text-lg">{children}</h2>
    </div>
  );
}

function ProblemBlock({
  number,
  title,
  subtitle,
  strategy,
  children,
}: {
  number: string;
  title: string;
  subtitle?: string;
  strategy: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden mb-6">
      <div className="bg-blue-50 px-6 py-4 flex gap-3 items-start">
        <span className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
          {number}
        </span>
        <div>
          <div className="font-semibold text-gray-800">{title}</div>
          {subtitle && <div className="text-sm text-gray-400 mt-0.5">{subtitle}</div>}
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-800">
        <div className="text-yellow-400 text-xs font-semibold mb-1">策略</div>
        <div className="text-white text-sm font-medium">{strategy}</div>
      </div>
      <div className="px-6 py-5 bg-white">{children}</div>
    </div>
  );
}

function ProjectImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative w-full rounded-xl overflow-hidden bg-gray-50 ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto object-contain" loading="lazy" />
    </div>
  );
}

export default function MapProjectPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回
          </Link>
          <span className="text-gray-200">/</span>
          <span className="text-sm text-gray-500">骑手地图体验优化</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-20">

        {/* 封面图 */}
        <ProjectImage src={images.cover} alt="配送地图体验优化封面" className="mb-8 rounded-2xl" />

        {/* 标题区 */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-orange-50 text-orange-500 border border-orange-100 text-xs font-medium rounded-full px-3 py-1">主 R · 长期方向</span>
            <span className="bg-gray-50 text-gray-500 border border-gray-100 text-xs rounded-full px-3 py-1">⭐️⭐️⭐️ DC 推荐</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">配送地图体验优化</h1>
          <p className="text-gray-500 leading-relaxed">
            主要介绍配送地图体验优化自驱项目——设计侧如何准确挖掘骑手使用地图的核心痛点、制定中短期目标与设计策略，并在落地过程中驱动项目稳健推进，最终完成效果评估，帮助业务拿到正向结果。
          </p>
        </div>

        {/* 元信息 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-5 bg-gray-50 rounded-2xl">
          {[
            { label: "分享人", value: "高永乐" },
            { label: "更新日期", value: "2022.12.16" },
            { label: "版本", value: "V1.0.0" },
            { label: "关键字", value: "骑手体验设计" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-xs text-gray-400 mb-1">{item.label}</div>
              <div className="text-sm font-medium text-gray-700">{item.value}</div>
            </div>
          ))}
        </div>

        {/* TL 推荐语 */}
        <div className="border-l-4 border-orange-300 bg-orange-50 rounded-r-xl px-6 py-5 mb-10">
          <div className="text-xs text-orange-400 font-semibold mb-2">TL 推荐语</div>
          <p className="text-sm text-gray-600 leading-relaxed">
            该案例是一个以体验角度驱动的典型项目，在产品方向和策略不清晰的情况下，通过多种设计分析手段挖掘明确对业务目标影响大、体验问题严重的具体原因，洞察关键解决策略。作为视觉设计转型的 UX 设计师，在跨职能的专业产出方面有超出预期的表现，可以为大家提供具备参考价值的思路。
          </p>
          <div className="text-xs text-gray-400 mt-3">— 李莹，到家事业群 / 设计部 / 履约产品设计组</div>
        </div>

        {/* 目录图 */}
        <ProjectImage src={images.toc} alt="文档目录" className="mb-12" />

        {/* ─── 一、项目概述 ─── */}
        <section className="mb-12">
          <SectionHeader color="bg-gray-800">一、项目概述</SectionHeader>

          {/* 项目背景 */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">项目背景</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="text-blue-600 font-medium text-sm mb-2">骑手使用率高</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  骑手在配送过程中，地图是使用率非常高且重要的功能。
                  进入详情页的骑手有 <strong>87.35%</strong> 会操作地图。
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <div className="text-red-500 font-medium text-sm mb-2">易用性提升空间大</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  2021 H1 众包 App 体验评估中，订单详情页地图满意度为 <strong>3.45</strong>，低于整体满意度，体验问题间接影响履约效率。
                </p>
              </div>
            </div>
          </div>

          {/* 项目目标 */}
          <div className="bg-gray-800 rounded-xl px-6 py-5 mb-6">
            <div className="text-gray-400 text-xs font-semibold mb-2">项目目标</div>
            <p className="text-white font-medium">
              全面优化<span className="text-yellow-400 underline underline-offset-2">地图使用体验</span>，提升骑手
              <span className="text-yellow-400 underline underline-offset-2">使用满意度</span>，进而促进
              <span className="text-yellow-400 underline underline-offset-2">履约末端环节效率提升</span>。
            </p>
          </div>

          {/* 衡量指标 */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="border border-gray-100 rounded-xl p-4">
              <div className="text-xs text-gray-400 mb-2">态度指标</div>
              <div className="font-semibold text-gray-800">地图使用满意度</div>
              <div className="text-xs text-gray-400 mt-1">前后测对比</div>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <div className="text-xs text-gray-400 mb-2">行为指标</div>
              <div className="font-semibold text-gray-800">末端环节任务时长</div>
              <div className="text-xs text-gray-400 mt-1">算法计算行为节点</div>
            </div>
          </div>

          {/* 结果 */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-6">
            <div className="text-green-700 font-bold mb-4">✅ 结果正向，符合预期</div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">行为指标</div>
                <ul className="space-y-2">
                  {[
                    { metric: "找店时长缩短", value: "1.12s" },
                    { metric: "找店困难运单占比减少", value: "0.87pp" },
                    { metric: "末端找外卖柜时长缩短", value: "1.85s" },
                  ].map((item) => (
                    <li key={item.metric} className="flex items-center gap-2 text-sm">
                      <span className="text-green-500 font-bold">↓</span>
                      <span className="text-gray-600">{item.metric}</span>
                      <span className="ml-auto font-bold text-green-600">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">态度指标</div>
                <div className="flex items-center gap-2 text-sm mb-4">
                  <span className="text-green-500 font-bold">↑</span>
                  <span className="text-gray-600">地图使用满意度</span>
                  <span className="ml-auto font-bold text-green-600">+0.16</span>
                </div>
                <div className="text-xs text-gray-400">3.40 → 3.56（显著提升）</div>
                <div className="mt-4">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">其他沉淀</div>
                  <div className="text-sm text-gray-600">地图方向 GUI 专利 4 项</div>
                  <div className="text-sm text-gray-600">沉淀地图规范与组件库</div>
                </div>
              </div>
            </div>
          </div>

          {/* 难点与亮点 */}
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <div className="flex gap-2 items-center mb-2">
                <span className="text-red-400">🤔</span>
                <span className="font-semibold text-gray-800">难点：地图场景复杂，问题难定位</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                地图体验取决于是否能真实还原线下环境细节。线下场景多变、环境复杂，通过<strong>实地跑单</strong>将自己带入骑手场景，快速发现有价值的问题；再通过深入访谈<strong>深挖影响履约效率的末端关键节点</strong>；最终以配送流程为线索，<strong>将非标场景刻画成标准化流程</strong>，找到解决问题的突破口。
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5">
              <div className="flex gap-2 items-center mb-2">
                <span className="text-yellow-500">⭐️</span>
                <span className="font-semibold text-gray-800">亮点 1：贡献多个关键策略</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 leading-relaxed">
                <li>· 提出从<strong>大众点评、商家资质、外卖柜业务侧</strong>等渠道获取多源位置数据</li>
                <li>· 基于骑手体验与技术能力，提出<strong>「轻导航」模式</strong>，在导航方向迈出第一步</li>
                <li>· 在产品形态不明确时，从 0 到 1 <strong>完成完整找店指引方案</strong></li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5">
              <div className="flex gap-2 items-center mb-2">
                <span className="text-yellow-500">⭐️</span>
                <span className="font-semibold text-gray-800">亮点 2：长期持续自驱体验优化点落地</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 leading-relaxed">
                <li>· 主动沟通设计研究结论，强调体验收益，反复坚持推进</li>
                <li>· 主动创建落地规划表，采用<strong>独立版本 + 搭车版本</strong>结合的落地方式</li>
                <li>· 累计推动完成 <strong>12 个优化点</strong>，3 个版本独立研发，7 个版本搭车落地</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 二、设计分析 ─── */}
        <section className="mb-12">
          <SectionHeader color="bg-blue-600">二、设计分析</SectionHeader>

          {/* 研究思路 */}
          <h3 className="font-semibold text-gray-800 mb-4">1）确定研究思路，准确挖掘问题</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="border border-gray-100 rounded-xl p-5">
              <div className="text-blue-500 font-semibold text-sm mb-3">方法：线下真实场景跑单</div>
              <div className="text-xs text-gray-400 mb-3">目标：真正了解地图使用场景，洞察骑手可能遇到的体验问题</div>
              <ol className="text-sm text-gray-600 space-y-1.5">
                <li>1. 确定走查任务，制定 8 类跑单任务</li>
                <li>2. 确定走查原则（尼尔森可用性原则 & 公司走查标准）</li>
                <li>3. 结合组内与其他部门跑单报告综合分析</li>
                <li>4. 汇总总结：共 10 类体验问题</li>
              </ol>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <div className="text-blue-500 font-semibold text-sm mb-3">方法：骑手访谈 & 问卷调研</div>
              <div className="text-xs text-gray-400 mb-3">目标：获取骑手真实反馈，提炼设计机会点</div>
              <ol className="text-sm text-gray-600 space-y-1.5">
                <li>1. 确定访谈样本，共邀约 6 名骑手</li>
                <li>2. 配置真实地图 demo，让骑手带入真实场景</li>
                <li>3. 问卷调研广泛收集意见（大样本量）</li>
                <li>4. 汇总总结：共 9 类体验问题</li>
              </ol>
            </div>
          </div>

          {/* 配送环节图 */}
          <h3 className="font-semibold text-gray-800 mb-4">2）明确各环节使用地图的诉求</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-100 w-24">配送环节</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-100">核心诉求</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { stage: "接单 ↓", need: "查看配送路线与位置信息，决策接单" },
                  { stage: "途中 ↓", need: "查看商家大概位置与路线，判断路程与目的地" },
                  { stage: "取餐 ↓", need: "查看商家具体位置，快速准确找到商家" },
                  { stage: "途中 ↓", need: "查看顾客大概位置与路线，判断路程" },
                  { stage: "送餐", need: "查看顾客具体位置，快速准确送达" },
                  { stage: "整体", need: "查看信息清晰高效，操作顺滑流畅" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 border border-gray-100 font-medium text-gray-700 whitespace-nowrap">{row.stage}</td>
                    <td className="px-4 py-3 border border-gray-100 text-gray-600">{row.need}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <ProjectImage src={images.flowOrder} alt="接单环节地图" />
            <ProjectImage src={images.flowPickup} alt="取餐环节地图" />
            <ProjectImage src={images.flowDeliver} alt="送餐环节地图" />
          </div>
          <div className="text-center text-xs text-gray-400 mb-4">接单 · 取餐 · 送餐 各环节地图使用示意</div>

          <ProjectImage src={images.priority} alt="问题优先级矩阵" className="mb-8" />

          {/* 设计策略表 */}
          <h3 className="font-semibold text-gray-800 mb-4">3）明确本期核心问题，制定合理的设计策略</h3>
          <div className="space-y-3 mb-4">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1">🔷 信息全面性问题</div>
            {[
              { no: "01", problem: "骑手借助地图找店困难", sub: "部分商家位置特殊，地图无法有效帮助定位", strategy: "增加有效的找店指引信息，优化找店指引功能" },
              { no: "02", problem: "骑手借助地图找外卖柜困难，且容易存错柜", sub: "地图中没有外卖柜位置，多柜时难以区分", strategy: "增加外卖柜位置与实景图信息" },
              { no: "03", problem: "顾客位置封闭管理时，骑手交餐困难", sub: "疫情背景下封闭场景增多，骑手交餐无指引", strategy: "增加封闭场景交餐指引信息，并支持选择交餐点" },
            ].map((item) => (
              <div key={item.no} className="flex gap-3 items-start bg-blue-50 rounded-xl p-4">
                <span className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">{item.no}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-800 text-sm">{item.problem}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
                </div>
                <div className="text-xs text-blue-600 font-medium text-right max-w-[180px]">→ {item.strategy}</div>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1">🔷 基础可用性问题</div>
            {[
              { no: "04", problem: "地图内配送信息展示有遮挡", sub: "默认比例尺下信息遮挡，取送路线覆盖关系错误", strategy: "提升配送信息可见性" },
              { no: "05", problem: "地图内部分信息表意不易理解", sub: "小区入口状态难理解，方向感弱", strategy: "确保配送信息易理解" },
              { no: "06", problem: "地图内配送路线信息识别度差", sub: "颜色对比度低，重点信息不突出", strategy: "提升配送信息易扫性好识别" },
              { no: "07", problem: "地图整体视觉品质差", sub: "视觉基础元素一致性差，图标缺乏细节打磨", strategy: "打磨地图设计细节" },
            ].map((item) => (
              <div key={item.no} className="flex gap-3 items-start bg-orange-50 rounded-xl p-4">
                <span className="bg-orange-400 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">{item.no}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-800 text-sm">{item.problem}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
                </div>
                <div className="text-xs text-orange-500 font-medium text-right max-w-[180px]">→ {item.strategy}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 三、方案落地 ─── */}
        <section className="mb-12">
          <SectionHeader color="bg-orange-500">三、方案落地</SectionHeader>
          <h3 className="font-semibold text-gray-800 mb-6">方案设计</h3>

          <ProblemBlock
            number="01"
            title="骑手借助地图找店困难"
            subtitle="信息全面性问题"
            strategy="增加有效的找店指引信息，优化找店指引功能"
          >
            <div className="mb-4">
              <div className="text-sm font-medium text-gray-700 mb-3">设计研究方向</div>
              <div className="grid sm:grid-cols-3 gap-3 text-sm mb-4">
                {[
                  { q: "哪些商家难找？", a: "居民楼内 / 商场 / 写字楼 / 美食广场 / 背街小巷" },
                  { q: "难在哪里？", a: "入口不知道在哪 / 楼层不好找 / 没有预期" },
                  { q: "要完善哪些信息？", a: "入口位置 / 楼层 / 商家名称 / 实景图 / 附近商家" },
                ].map((item) => (
                  <div key={item.q} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-gray-400 text-xs mb-1">{item.q}</div>
                    <div className="text-gray-700 text-xs">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-500 mb-2">① 在地图中增加有效的找店指引信息，减少骑手找点难度</div>
            <ProjectImage src={images.solution01a} alt="找店指引信息方案" className="mb-4" />
            <div className="text-sm text-gray-500 mb-2">② 优化找店指引弹窗，提高聚焦找店难场景能力</div>
            <ProjectImage src={images.solution01b} alt="找店指引弹窗方案" />
          </ProblemBlock>

          <ProblemBlock
            number="02"
            title="骑手借助地图找外卖柜困难，且容易存错外卖柜"
            subtitle="信息全面性问题"
            strategy="增加外卖柜位置与实景图信息"
          >
            <div className="text-sm text-gray-500 mb-2">① 增加外卖柜位置与实景图，提升找柜效率；② 合理展示外卖柜名称，提升区分度</div>
            <ProjectImage src={images.solution02} alt="外卖柜位置方案" />
          </ProblemBlock>

          <ProblemBlock
            number="03"
            title="顾客位置封闭管理时，骑手交餐困难"
            subtitle="信息全面性问题"
            strategy="增加封闭场景交餐指引信息，并支持选择交餐点"
          >
            <div className="text-sm text-gray-500 mb-2">① 突出封闭场景感知，提供可交餐的位置信息；② 增加选点动效，提升选点体验</div>
            <ProjectImage src={images.solution03} alt="封闭场景交餐方案" />
          </ProblemBlock>

          <ProblemBlock
            number="04"
            title="地图内配送信息展示有遮挡"
            subtitle="基础可用性问题"
            strategy="提升配送信息可见性"
          >
            <div className="text-sm text-gray-500 mb-2">① 设计合理的地图默认展示范围，确保信息完整展示；② 优化路线覆盖关系</div>
            <ProjectImage src={images.solution04} alt="配送信息可见性方案" />
          </ProblemBlock>

          <ProblemBlock
            number="05"
            title="地图内部分信息表意不易理解"
            subtitle="基础可用性问题"
            strategy="确保配送信息易理解"
          >
            <div className="text-sm text-gray-500 mb-2">① 优化小区入口通行状态信息；② 取送路线中增加方向提示箭头</div>
            <ProjectImage src={images.solution05} alt="信息易理解方案" />
          </ProblemBlock>

          <ProblemBlock
            number="06"
            title="地图内配送路线信息识别度差"
            subtitle="基础可用性问题"
            strategy="提升配送信息易扫性好识别"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
              <ProjectImage src={images.solution06a} alt="识别度优化方案1" />
              <ProjectImage src={images.solution06b} alt="识别度优化方案2" />
              <ProjectImage src={images.solution06c} alt="识别度优化方案3" />
              <ProjectImage src={images.solution06d} alt="识别度优化方案4" />
              <ProjectImage src={images.solution06e} alt="识别度优化方案5" />
            </div>
            <ProjectImage src={images.solution06f} alt="识别度优化整体效果" />
          </ProblemBlock>

          <ProblemBlock
            number="07"
            title="地图整体视觉品质差"
            subtitle="基础可用性问题"
            strategy="打磨地图设计细节"
          >
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-xs text-gray-400 mb-2">① 统一配送信息颜色</div>
                <ProjectImage src={images.solution07a} alt="颜色统一" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-2">② 整合字号关系</div>
                <ProjectImage src={images.solution07b} alt="字号整合" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-2">③ 优化基础排版</div>
                <ProjectImage src={images.solution07c} alt="排版优化" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-2">④ 统一圆角阴影样式</div>
                <ProjectImage src={images.solution07d} alt="圆角阴影统一" />
              </div>
              <div className="col-span-2">
                <div className="text-xs text-gray-400 mb-2">⑤ 打磨基础图标，提升视觉品质</div>
                <ProjectImage src={images.solution07e} alt="图标打磨" />
              </div>
            </div>
          </ProblemBlock>

          {/* 上线效果 */}
          <ProjectImage src={images.launch} alt="上线效果" className="mb-3" />
          <div className="text-center text-xs text-gray-400 mb-8">上线效果总览</div>
          <ProjectImage src={images.result} alt="项目成果汇总" />
        </section>

        {/* ─── 四、项目复盘 ─── */}
        <section className="mb-12">
          <SectionHeader color="bg-green-600">四、项目复盘</SectionHeader>
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            <div className="bg-green-50 border border-green-100 rounded-xl p-5">
              <div className="font-semibold text-green-700 mb-3">✅ 收获</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>· <strong>专业沉淀</strong>：快速积累多种研究手段，熟练掌握 UX 设计全流程</li>
                <li>· <strong>心智成长</strong>：快速适应职能范围，承担更具挑战性的工作</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
              <div className="font-semibold text-orange-600 mb-3">📌 不足</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>· <strong>系统化沉淀不足</strong>：多个地图方向的设计过程尚未形成系统化的方法论或指南</li>
                <li>· 后续将总结地图项目经验进行分享</li>
              </ul>
            </div>
          </div>

          {/* 后续计划 */}
          <div className="border border-gray-100 rounded-2xl p-6">
            <div className="font-semibold text-gray-800 mb-4">后续计划</div>
            <div className="space-y-4">
              {[
                {
                  title: "地图基础功能",
                  items: [
                    "持续深入挖掘末端 100 米体验，如顾客位置图文指引、AR 寻路等创新方向",
                    "「轻导航」模式灰度评估后复用到骑手地图，持续提升导航体验",
                  ],
                },
                {
                  title: "地图信息",
                  items: [
                    "深入摸底地图数据核心痛点，通过地图笔记（UGC）等方式提升数据全面性",
                    "细化骑手使用场景与诉求，探索合适的信息优先级策略",
                  ],
                },
                {
                  title: "地图视觉表现",
                  items: [
                    "信息清晰度当前提升 +0.11（3.49→3.60），仍有空间",
                    "系统性优化地图覆盖层与底层视觉风格",
                  ],
                },
              ].map((plan) => (
                <div key={plan.title}>
                  <div className="text-sm font-semibold text-gray-700 mb-2">· {plan.title}</div>
                  <ul className="space-y-1 pl-4">
                    {plan.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-500">{i + 1}. {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 返回按钮 */}
        <div className="pt-4 border-t border-gray-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>
        </div>
      </div>
    </main>
  );
}
