import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "骑手地图体验优化",
      tag: "主 R · 长期方向",
      desc: "大规模骑手使用场景下，系统优化地图易用性。通过实地跑单走查发现真实问题，从 0 到 1 搭建找店指引方案，提出「轻导航」模式，推动多个优化点落地。",
      metrics: [
        { label: "地图满意度", value: "显著提升" },
        { label: "末端找店时长", value: "明显缩短" },
        { label: "找店困难运单", value: "明显减少" },
      ],
      color: "from-orange-50 to-amber-50",
      border: "border-orange-100",
      href: "/projects/map",
    },
    {
      title: "地图笔记（UGC）",
      tag: "主 R · 从 0 到 1",
      desc: "长期关注骑手社区，洞察骑手自发分享地理信息的诉求，提出「地图笔记」产品概念。在无 PRD 阶段主动帮助产品构思方案，纳入产品侧重点 OKR。",
      metrics: [
        { label: "指引数据覆盖", value: "持续提升" },
        { label: "纳入产品 OKR", value: "Q2 重点" },
        { label: "UGC 路径", value: "从 0 搭建" },
      ],
      color: "from-blue-50 to-sky-50",
      border: "border-blue-100",
    },
    {
      title: "平台推荐产品设计",
      tag: "轮岗 · 导师岗",
      desc: "预判风险，提前沉淀商卡规范模板（覆盖多类型商卡）。精准洞察用户差异化需求，支持首页跨品类场景 Tab 方案落地。",
      metrics: [
        { label: "GTV 增长", value: "正向提升" },
        { label: "交易实付增量", value: "千万级" },
        { label: "商卡规范", value: "40+ 类" },
      ],
      color: "from-green-50 to-emerald-50",
      border: "border-green-100",
    },
    {
      title: "外卖柜体验优化",
      tag: "系统专项",
      desc: "结合外卖柜业务发展阶段，制定中短期目标与优先级，系统盘点找柜困难、易存错柜等核心痛点，提供解决方案并跟进落地，优化末端配送体验。",
      metrics: [
        { label: "找外卖柜时长", value: "明显缩短" },
        { label: "专利申请", value: "多项" },
        { label: "业务覆盖", value: "全链路" },
      ],
      color: "from-purple-50 to-violet-50",
      border: "border-purple-100",
    },
  ];

  const skills = [
    { name: "体验设计思维", desc: "从业务模式与用户群体出发，多角度分析核心问题" },
    { name: "用户研究", desc: "专家走查、访谈、问卷、数据分析等多手段交叉验证" },
    { name: "体验度量", desc: "态度指标 + 行为指标双维度，四分图满意度评估模型" },
    { name: "设计规范体系", desc: "组件库搭建、地图规范、商卡模板，提升研发效率" },
    { name: "跨职能协作", desc: "强推动力，主动对齐产研资源，自驱落地复杂方案" },
    { name: "人才培养", desc: "担任导师岗，指导多名设计师成长及实习生转正" },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-gray-900 tracking-tight">永乐</span>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#about" className="hover:text-gray-900 transition-colors">简介</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">项目</a>
            <a href="#skills" className="hover:text-gray-900 transition-colors">能力</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">联系</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-500 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
            产品体验设计师 · 互联网公司
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            永乐
            <span className="block text-2xl sm:text-3xl font-normal text-gray-400 mt-2">
              UX Designer
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-10">
            美院油画出身、深耕用户体验设计的产品体验设计师。
            擅长深入一线实地跑单、从真实场景挖掘问题，自驱推动跨团队落地。
            累计多项 GUI 专利。
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              查看项目
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 rounded-full px-6 py-3 text-sm font-medium hover:border-gray-400 transition-colors"
            >
              联系我
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-10">关于我</h2>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">从油画到用户体验</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                本科与硕士均就读于<strong className="text-gray-700">鲁迅美术学院</strong>（油画 / 美术学），
                先后在多家互联网公司从事界面设计，后完成向用户体验（UX）方向的跨专业转型。
              </p>
              <p className="text-gray-500 leading-relaxed">
                长期负责<strong className="text-gray-700">履约配送</strong>场景的体验设计，
                后轮岗至平台推荐产品设计，并承担<strong className="text-gray-700">设计导师</strong>岗位。
              </p>
            </div>
            <div className="space-y-4">
              {[
                { period: "2016 – 2018", role: "用户界面设计师", org: "金融科技公司" },
                { period: "2018 – 2020", role: "产品视觉设计师", org: "互联网公司 · 生鲜业务" },
                { period: "2020 – 至今", role: "产品体验设计师", org: "互联网公司 · 到家 / 平台设计" },
              ].map((item) => (
                <div key={item.period} className="flex gap-4">
                  <span className="text-xs text-gray-400 mt-1 whitespace-nowrap w-24 shrink-0">{item.period}</span>
                  <div>
                    <div className="text-sm font-medium text-gray-800">{item.role}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{item.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-10">代表项目</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((p) => {
              const card = (
                <div
                  key={p.title}
                  className={`rounded-2xl border ${p.border} bg-gradient-to-br ${p.color} p-6 flex flex-col gap-4 ${"href" in p ? "hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400 bg-white/60 rounded-full px-3 py-1">
                      {p.tag}
                    </span>
                    {"href" in p && (
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        查看详情
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{p.desc}</p>
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/50">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="text-base font-bold text-gray-900">{m.value}</div>
                        <div className="text-xs text-gray-400 mt-0.5 leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
              return "href" in p ? (
                <Link key={p.title} href={(p as { href: string }).href}>
                  {card}
                </Link>
              ) : (
                <div key={p.title}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-10">专业能力</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {skills.map((s) => (
              <div key={s.name} className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{s.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-xl border border-gray-100 p-6">
            <div className="flex flex-wrap gap-2">
              {[
                "交互设计", "视觉设计", "用户研究", "体验度量", "信息架构",
                "组件库", "设计规范", "Figma", "骑手地图", "推荐产品",
                "GUI 专利",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-50 border border-gray-200 text-gray-500 rounded-full px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-10">联系方式</h2>
          <div className="max-w-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">一起聊聊？</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              无论是体验设计探讨、项目合作，还是对我工作感兴趣，都欢迎联系。
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">欢迎通过各渠道联系我</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-sm text-gray-300">© 2025 永乐</span>
          <span className="text-xs text-gray-300">产品体验设计师</span>
        </div>
      </footer>
    </main>
  );
}
