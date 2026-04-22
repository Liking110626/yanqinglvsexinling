import { Activity, DatabaseZap, Download, Shield, Users } from 'lucide-react'

const supportItems = [
  {
    title: '信息互通',
    icon: DatabaseZap,
    desc: '四大主体、政府、企业实时共享关键数据。',
  },
  {
    title: '风险预警',
    icon: Activity,
    desc: '自动识别高危人群和高频问题并推送。',
  },
  {
    title: '权限分级',
    icon: Shield,
    desc: '按角色分权管理，保护隐私和医疗数据。',
  },
  {
    title: '数据导出',
    icon: Download,
    desc: '一键生成报表、台账和合作报告。',
  },
]

const supportFlow = [
  ['数据汇聚', '基层、医院、政府、企业统一接入。'],
  ['规则识别', '按预警条件筛查重点对象和异常趋势。'],
  ['分级处置', '按权限推送到对应主体处理。'],
  ['结果留档', '形成可追溯记录，支持导出与考核。'],
]

const permissionItems = [
  '按角色开放查看范围',
  '敏感信息脱敏展示',
  '关键操作全程留痕',
]

function UserDashboard() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600">
              平台支撑
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">全平台底层保障</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              为基层执行、区级医院、政府监管和公益协同提供统一数据、统一规则和统一留痕。
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
              覆盖主体
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">基层 / 医院 / 政府 / 企业</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {supportItems.map((item) => {
          const Icon = item.icon

          return (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-white/70 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
            </article>
          )
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200">
            支撑链路
          </p>
          <h3 className="mt-2 text-xl font-semibold">从汇聚到导出的一条线</h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {supportFlow.map(([title, desc], index) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-sm font-semibold text-emerald-200">
                    0{index + 1}
                  </span>
                  <p className="text-sm font-semibold text-emerald-200">{title}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-200">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                权限与留痕
              </p>
              <h3 className="text-lg font-semibold text-slate-900">分级分权管理</h3>
            </div>
          </div>

          <div className="space-y-3">
            {permissionItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-slate-900">常用导出</p>
            <div className="mt-3 grid gap-3">
              {[
                '工作报表',
                '考核台账',
                '公益合作报告',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default UserDashboard
