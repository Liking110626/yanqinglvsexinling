import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarDays,
  HandCoins,
  Megaphone,
} from 'lucide-react'

const activitySteps = [
  '医院、街道、学校、企业线上申报',
  '政府审核排期并统一公示',
  '基层单位一键报名参与',
  '报名、开展、反馈全流程留痕',
]

const sponsorTypes = ['文旅', '民宿', '园艺', '冰雪']

const weeklySchedule = [
  ['周一 14:00', '心理科普进校园', '中小学', '40 人'],
  ['周三 09:30', '企业团体辅导', '本地企业', '26 人'],
  ['周四 15:00', '户外疗愈活动', '街道办', '32 人'],
  ['周六 10:00', '亲子情绪管理讲座', '基层单位', '48 人'],
]

const sponsorResources = [
  {
    title: '山谷民宿群',
    tag: '场地支持',
    detail: '可承接户外疗愈、团体辅导与小规模工作坊。',
  },
  {
    title: '冰雪运动中心',
    tag: '活动支持',
    detail: '支持冬季情绪舒缓活动、亲子互动与团体减压。',
  },
  {
    title: '文旅体验基地',
    tag: '物资支持',
    detail: '可提供科普物料、导览服务与活动协助资源。',
  },
]

function DetailBookingPage({ onNavigate = () => {} }) {
  const [activeTab, setActiveTab] = useState('活动报备')

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600">
              业务分区
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">活动赞助</h2>
          </div>
        </div>

        <div className="mt-6 inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-1">
          {['活动报备', '公益申报'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                activeTab === tab
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {activeTab === '活动报备' ? (
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/70 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
            <div className="flex items-center gap-3">
              <Megaphone className="h-5 w-5 text-emerald-300" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200">
                  团体活动预报管理
                </p>
                <h3 className="mt-1 text-xl font-semibold">统一发布 / 统一排期 / 统一留痕</h3>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                活动申报
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                活动数据查看
                <BarChart3 className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {activitySteps.map((item, index) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-emerald-200">0{index + 1}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-4 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-emerald-600" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  排期信息
                </p>
                <h3 className="text-lg font-semibold text-slate-900">活动排期</h3>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                本周排期
              </p>
              <div className="mt-3 space-y-3">
                {weeklySchedule.map(([time, title, org, count]) => (
                  <div
                    key={`${time}-${title}`}
                    className="rounded-[1.1rem] border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-slate-900">{title}</p>
                      <span className="text-xs font-semibold text-emerald-700">{count}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <p className="text-xs font-medium text-slate-500">{time}</p>
                      <p className="text-xs font-medium text-slate-500">{org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      ) : (
        <section className="space-y-6">
          <div className="rounded-[1.8rem] border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
            
                <h3 className="mt-1 text-lg font-semibold text-slate-900">企业公益资源推荐</h3>
              </div>
              
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {sponsorResources.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.25rem] border border-emerald-100 bg-white p-4 shadow-sm"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-500">
                    {item.tag}
                  </p>
                  <h4 className="mt-2 text-sm font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <aside className="space-y-4 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3">
                <HandCoins className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                    商业公益赞助申请
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900">企业申报</h3>
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-600">
                物资、场地、资金、活动支持在线提交。
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-500"
                >
                  公益申报信息填写
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  查看所有申报信息
                  <BarChart3 className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ['申报中', '12'],
                  ['待审核', '7'],
                  ['已通过', '18'],
                  ['已留档', '26'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{label}</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">{value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {sponsorTypes.map((item) => (
                  <span
                    key={item}
                    className="rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>

              
            </aside>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200">
                公益申报
              </p>
              <h3 className="mt-2 text-xl font-semibold">公益合作对接</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  ['企业申报', '提交支持类型与联系信息'],
                  ['联合审核', '政府与医院联合确认'],
                  ['资源匹配', '对接基层服务需求'],
                  ['公示留档', '记录使用与对接结果'],
                ].map(([title, desc], index) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-emerald-200">
                      <BadgeCheck className="h-4 w-4" />
                      <p className="text-sm font-semibold">
                        0{index + 1} {title}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      )}
    </div>
  )
}

export default DetailBookingPage
