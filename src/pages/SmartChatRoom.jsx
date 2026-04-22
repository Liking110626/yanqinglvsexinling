import { BarChart3, ClipboardCheck, LayoutDashboard, Users, Zap } from 'lucide-react'

const overviewStats = [
  { label: '服务覆盖率', value: '92%', note: '较上月 +4%' },
  { label: '重点预警', value: '18', note: '已闭环 12' },
  { label: '执行进度', value: '86%', note: '覆盖 27 单元' },
  { label: '资源调度', value: '41', note: '人力 / 场地 / 物资' },
]

const coverageBars = [
  ['政府监管', 92],
  ['区级医院', 84],
  ['基层执行', 78],
  ['企业协同', 72],
]

const panels = [
  {
    title: '全域数据看板',
    icon: LayoutDashboard,
    summary: '服务覆盖率、人群需求分布、基层执行进度实时可视化',
    cards: [
      ['覆盖率', '92%'],
      ['需求热区', '6 个'],
      ['执行进度', '86%'],
      ['异常预警', '18 条'],
    ],
  },
  {
    title: '考核管理',
    icon: ClipboardCheck,
    summary: '自动生成各单位量化考核数据，对接政府年度绩效考核',
    cards: [
      ['考核单位', '27'],
      ['已评分项', '124'],
      ['待复核项', '9'],
      ['达标率', '88%'],
    ],
  },
  {
    title: '资源统筹',
    icon: Users,
    summary: '全区心理服务人力、场地、物资统一调度与管理',
    cards: [
      ['人力', '41'],
      ['场地', '23'],
      ['物资', '68'],
      ['调度中', '12'],
    ],
  },
]

function SmartChatPage({ onNavigate = () => {} }) {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600">
              政府监管
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">监管中枢</h2>
          </div>
          
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {overviewStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {stat.label}
              </p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-500">{stat.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-5 w-5 text-emerald-300" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200">
                全域数据看板
              </p>
              <h3 className="mt-1 text-xl font-semibold">服务覆盖率 / 需求分布 / 执行进度</h3>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {coverageBars.map(([label, value]) => (
              <div key={label} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">{label}</span>
                  <span className="text-slate-300">{value}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-200"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                考核与资源
              </p>
              <h3 className="text-lg font-semibold text-slate-900">量化考核 / 统一调度</h3>
            </div>
          </div>

          <div className="grid gap-3">
            {[
              '自动生成考核数据',
              '对接政府年度绩效考核',
              '统一调度人力、场地、物资',
              '高危问题自动预警',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {panels.map((panel, index) => {
          const Icon = panel.icon
          return (
            <article
              key={panel.title}
              className={`rounded-[2.1rem] border p-6 shadow-sm ${
                index === 0
                  ? 'border-emerald-200 bg-[linear-gradient(180deg,rgba(236,253,245,0.92),rgba(255,255,255,1))] shadow-[0_18px_40px_rgba(16,185,129,0.08)]'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{panel.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{panel.summary}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-2">
                {panel.cards.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3"
                  >
                    <span className="text-sm font-semibold text-slate-700">{label}</span>
                    <span className="text-sm font-semibold text-slate-900">{value}</span>
                  </div>
                ))}
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default SmartChatPage
