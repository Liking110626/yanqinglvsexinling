import {
  ArrowRight,
  ChartNoAxesCombined,
  ClipboardList,
  HeartHandshake,
  Layers3,
  ShieldCheck,
  Stethoscope,
  Users,
  Workflow,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import counsellingSession from '../image/counselling-session.jpg'
import communityMeeting from '../image/community-meeting.jpg'
import governmentMeeting from '../image/government-meeting.jpg'

const coreRoles = [
  {
    title: '基层执行',
    subtitle: '街道 / 卫生所 / 学校 / 企业',
    key: 'Assessment',
    icon: ClipboardList,
    bullets: ['需求登记', '任务派发', '走访回传'],
    accent: 'emerald',
  },
  {
    title: '区级医院',
    subtitle: '培训 / 审核 / 热线联动',
    key: 'MatchList',
    icon: Stethoscope,
    bullets: ['培训', '审核', '联动'],
    accent: 'sky',
  },
  {
    title: '政府监管',
    subtitle: '看板 / 预警 / 考核',
    key: 'SmartChat',
    icon: ShieldCheck,
    bullets: ['看板', '预警', '考核'],
    accent: 'slate',
  },
]

const businessAreas = [
  {
    title: '团体活动预报管理',
    key: 'DetailBooking',
    icon: Workflow,
    bullets: ['活动申报', '审批排期', '数据留痕'],
  },
  {
    title: '商业公益赞助申请',
    key: 'DetailBooking',
    icon: HeartHandshake,
    bullets: ['企业申报', '联合审核', '资源匹配', '公示留档'],
  },
]

const supportItems = [
  {
    title: '信息互通',
    desc: '四大主体与企业实时共享关键数据，减少重复录入。',
    icon: Layers3,
    tone: 'emerald',
  },
  {
    title: '风险预警',
    desc: '识别高危人群和高频问题，自动推送到医院和监管。',
    icon: ShieldCheck,
    tone: 'rose',
  },
  {
    title: '权限分级',
    desc: '按角色控制查看和操作范围，保护隐私和医疗数据。',
    icon: Users,
    tone: 'sky',
  },
  {
    title: '数据导出',
    desc: '一键生成报表、台账与合作报告，直接用于汇总上报。',
    icon: ChartNoAxesCombined,
    tone: 'amber',
  },
]

const roleStyles = {
  emerald:
    'border-emerald-200 bg-[linear-gradient(180deg,rgba(237,253,244,0.96),rgba(255,255,255,1))] shadow-[0_18px_42px_rgba(16,185,129,0.08)]',
  sky:
    'border-sky-200 bg-[linear-gradient(180deg,rgba(240,249,255,0.96),rgba(255,255,255,1))] shadow-[0_18px_42px_rgba(14,165,233,0.08)]',
  slate:
    'border-slate-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.98),rgba(255,255,255,1))] shadow-[0_18px_42px_rgba(15,23,42,0.08)]',
}

const supportStyles = {
  emerald: 'bg-emerald-50 text-emerald-700',
  rose: 'bg-rose-50 text-rose-700',
  sky: 'bg-sky-50 text-sky-700',
  amber: 'bg-amber-50 text-amber-700',
}

const showcaseSlides = [
  {
    title: '协同服务场景',
    subtitle: '基层发现、医院支撑、政府统筹，现场联动更顺畅。',
    image: counsellingSession,
  },
  {
    title: '活动联动场景',
    subtitle: '活动报备、审批排期、统一公示，避免重复安排。',
    image: communityMeeting,
  },
  {
    title: '监管协同场景',
    subtitle: '预警、考核、资源调度同步推进，数据一屏可见。',
    image: governmentMeeting,
  },
]

function LandingPage({ onNavigate = () => {} }) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % showcaseSlides.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[2.5rem] border border-emerald-200/70 bg-[linear-gradient(135deg,rgba(240,253,244,0.96),rgba(255,255,255,0.98),rgba(236,254,255,0.94))] p-5 shadow-[0_20px_55px_rgba(16,185,129,0.08)]">
        <div className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-sm">
            <img
              src={showcaseSlides[activeSlide].image}
              alt={showcaseSlides[activeSlide].title}
              className="h-[320px] w-full object-cover sm:h-[360px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04),rgba(4,120,87,0.38))]" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-emerald-700 shadow-sm backdrop-blur">
              绿色心灵 · 场景展示
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.35rem] border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-600">
                当前展示
              </p>
              <div className="mt-2 flex items-end justify-between gap-3">
                <h4 className="text-2xl font-semibold text-slate-900">{showcaseSlides[activeSlide].title}</h4>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  真实场景
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {showcaseSlides[activeSlide].subtitle}
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            {showcaseSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`rounded-[1.45rem] border p-4 text-left transition ${
                  index === activeSlide
                    ? 'border-emerald-300 bg-white shadow-[0_12px_30px_rgba(16,185,129,0.08)]'
                    : 'border-white/80 bg-white/70 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="h-1.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
                <div className="mt-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-900">{slide.title}</p>
                  <span className="text-[11px] font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-500">{slide.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-white/80 bg-white/90 p-7 shadow-sm backdrop-blur">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600">
              核心主体
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">三类一线角色</h3>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            基层、医院、政府分别承担发现、支撑和统筹职责，入口清晰，协同顺手。
          </p>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {coreRoles.map(({ title, subtitle, key, icon: Icon, bullets, accent }) => (
            <button
              key={title}
              type="button"
              onClick={() => onNavigate(key)}
              className={`group rounded-[2rem] border p-8 text-left transition hover:-translate-y-1 hover:shadow-xl ${roleStyles[accent]}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`inline-flex rounded-[1rem] p-4 ${
                    accent === 'emerald'
                      ? 'bg-emerald-50 text-emerald-700'
                      : accent === 'sky'
                        ? 'bg-sky-50 text-sky-700'
                        : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowRight className="mt-1 h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600" />
              </div>

              <h4 className="mt-5 text-xl font-semibold text-slate-900">{title}</h4>
              <p className="mt-2 text-sm font-medium text-slate-500">{subtitle}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {bullets.map((item) => (
                  <span
                    key={item}
                    className={`rounded-2xl px-3 py-1 text-xs font-semibold ${
                      accent === 'emerald'
                        ? 'bg-emerald-50 text-emerald-700'
                        : accent === 'sky'
                          ? 'bg-sky-50 text-sky-700'
                          : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-white/80 bg-white/90 p-7 shadow-sm backdrop-blur">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600">
              专项功能
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">活动与公益联动</h3>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            既承接团体活动的报备、排期与留痕，也支持企业公益资源的合规申报和对接。
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {businessAreas.map(({ title, key, icon: Icon, bullets }) => (
            <button
              key={title}
              type="button"
              onClick={() => onNavigate(key)}
              className="rounded-[1.8rem] border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex rounded-2xl bg-teal-50 p-3 text-teal-700">
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowRight className="mt-1 h-5 w-5 text-slate-300" />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-slate-900">{title}</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {bullets.map((item) => (
                  <span
                    key={item}
                    className="rounded-2xl bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-white/80 bg-white/90 p-7 shadow-sm backdrop-blur">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              平台底座
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">支撑能力</h3>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {supportItems.map(({ title, desc, icon: Icon, tone }) => (
            <article
              key={title}
              className="rounded-[1.55rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className={`inline-flex rounded-2xl p-3 ${supportStyles[tone]}`}>
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-slate-900">{title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default LandingPage
