import {
  Building2,
  HeartHandshake,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import AssessmentPage from './pages/AssessmentPage'
import DetailBookingPage from './pages/Detail_BookingPage'
import LandingPage from './pages/LandingPage'
import MatchListPage from './pages/Match_ListPage'
import SmartChatPage from './pages/SmartChatRoom'
import UserDashboard from './pages/UserDashboard'

const PLATFORM_NAME = '延庆区绿色心灵数智联动平台'

const PAGES = [
  { key: 'Landing', label: '平台入口', hint: '首页总览', icon: Sparkles, tier: 'home' },
  { key: 'Assessment', label: '基层执行', hint: '街道 / 卫生所 / 学校 / 企业', icon: Users, tier: 'core' },
  { key: 'MatchList', label: '区级医院', hint: '培训 / 审核 / 热线联动', icon: Building2, tier: 'core' },
  { key: 'SmartChat', label: '政府监管', hint: '看板 / 预警 / 考核', icon: ShieldCheck, tier: 'core' },
  { key: 'DetailBooking', label: '活动赞助', hint: '活动报备 / 公益申报', icon: HeartHandshake, tier: 'branch' },
  { key: 'Dashboard', label: '平台支撑', hint: '互通 / 权限 / 导出 / 风险', icon: LayoutDashboard, tier: 'base' },
]

const PAGE_MAP = {
  Landing: LandingPage,
  Assessment: AssessmentPage,
  MatchList: MatchListPage,
  SmartChat: SmartChatPage,
  DetailBooking: DetailBookingPage,
  Dashboard: UserDashboard,
}

function getNavButtonClass(tier, isActive) {
  if (tier === 'home') {
    return isActive
      ? 'border-emerald-400 bg-emerald-500 text-white shadow-[0_16px_30px_rgba(16,185,129,0.18)]'
      : 'border-emerald-100 bg-white text-emerald-700 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50'
  }

  if (tier === 'core') {
    return isActive
      ? 'border-emerald-200 bg-emerald-50 text-slate-900 shadow-[0_14px_28px_rgba(16,185,129,0.10)]'
      : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white'
  }

  return isActive
    ? 'border-teal-200 bg-teal-50 text-slate-900 shadow-[0_12px_24px_rgba(45,212,191,0.10)]'
    : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-50'
}

function App() {
  const [currentPage, setCurrentPage] = useState('Landing')
  const PageComponent = PAGE_MAP[currentPage] ?? LandingPage

  useEffect(() => {
    document.title = PLATFORM_NAME
  }, [])

  return (
    <div className="min-h-screen text-slate-900">
      <header className="sticky top-0 z-30 border-b border-emerald-100/70 bg-white/88 backdrop-blur-lg">
        <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-5 lg:px-6">
          <div className="grid gap-3 xl:grid-cols-[340px_1fr] xl:items-end">
            <div className="rounded-[1.75rem] border border-emerald-100 bg-white/90 px-5 py-4 shadow-sm">
              <button type="button" onClick={() => setCurrentPage('Landing')} className="text-left">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-emerald-700/90">
                  政务协同平台
                </p>
                <h1 className="mt-2 text-[1.2rem] font-black leading-[1.05] tracking-tight sm:text-[1.45rem]">
                  <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-sky-600 bg-clip-text text-transparent">
                    {PLATFORM_NAME}
                  </span>
                </h1>
              </button>

              <button
                type="button"
                onClick={() => setCurrentPage('Landing')}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-100"
              >
                首页
                <Sparkles className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2.5">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                <span>核心主体</span>
                <span className="text-slate-300">/</span>
                <span>扩展模块</span>
              </div>

              <div className="grid gap-2.5 xl:grid-cols-3">
                {PAGES.filter((page) => page.tier === 'core').map((page) => {
                  const Icon = page.icon
                  const isActive = page.key === currentPage

                  return (
                    <button
                      key={page.key}
                      type="button"
                      onClick={() => setCurrentPage(page.key)}
                      className={`flex items-center gap-3 rounded-[1.35rem] border px-4 py-3 text-left transition ${getNavButtonClass(
                        'core',
                        isActive,
                      )}`}
                    >
                      <span
                        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[1rem] ${
                          isActive ? 'bg-white text-emerald-600' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold leading-5">{page.label}</span>
                        <span
                          className={`mt-0.5 block text-[11px] leading-4 ${
                            isActive ? 'text-slate-600' : 'text-slate-500'
                          }`}
                        >
                          {page.hint}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {PAGES.filter((page) => page.tier === 'branch' || page.tier === 'base').map(
                  (page) => {
                    const Icon = page.icon
                    const isActive = page.key === currentPage

                    return (
                      <button
                        key={page.key}
                        type="button"
                        onClick={() => setCurrentPage(page.key)}
                        className={`flex items-center gap-3 rounded-[1.2rem] border px-4 py-3 text-left transition ${getNavButtonClass(
                          page.tier,
                          isActive,
                        )}`}
                      >
                        <span
                          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.95rem] ${
                            isActive
                              ? page.tier === 'branch'
                                ? 'bg-white text-teal-600'
                                : 'bg-white text-emerald-600'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold leading-5">{page.label}</span>
                          <span
                            className={`mt-0.5 block text-[11px] leading-4 ${
                              isActive ? 'text-slate-600' : 'text-slate-400'
                            }`}
                          >
                            {page.hint}
                          </span>
                        </span>
                      </button>
                    )
                  },
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent" />
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
        <PageComponent onNavigate={setCurrentPage} />
      </main>
    </div>
  )
}

export default App
