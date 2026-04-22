import { ArrowRight, BookOpen, Headphones, ShieldAlert, Wand2 } from 'lucide-react'
import { useMemo, useState } from 'react'

const panels = [
  {
    title: '培训赋能',
    icon: BookOpen,
    summary: '线上课程、技能考核、培训统计',
    points: ['基层课程发布', '技能考核认证', '培训数据统计'],
  },
  {
    title: '业务管控',
    icon: ShieldAlert,
    summary: '案例审核、远程指导、绿色通道',
    points: ['基层案例审核', '疑难问题远程指导', '高危转诊绿色通道管理'],
  },
  {
    title: '案例智库',
    icon: Wand2,
    summary: '全区归集、分类归档、素材共享',
    points: ['全区案例归集', '分类归档', '培训素材生成与共享'],
  },
  {
    title: '热线联动',
    icon: Headphones,
    summary: '12356 同步、服务记录、统一管理',
    points: ['12356 心理援助热线数据同步', '全渠道服务记录统一管理'],
  },
]

function MatchListPage({ onNavigate = () => {} }) {
  const [activePanel, setActivePanel] = useState(panels[0].title)

  const activeMeta = useMemo(
    () => panels.find((panel) => panel.title === activePanel) ?? panels[0],
    [activePanel],
  )

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600">
              区级医院
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">精神病医院技术中枢</h2>
          </div>
        
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {panels.map((panel) => {
          const Icon = panel.icon
          const isActive = activePanel === panel.title

          return (
            <article
              key={panel.title}
              className={`rounded-[2.1rem] border p-6 shadow-sm transition ${
                isActive
                  ? 'border-cyan-200 bg-[linear-gradient(180deg,rgba(240,249,255,0.92),rgba(255,255,255,1))] shadow-[0_18px_40px_rgba(14,165,233,0.08)]'
                  : 'border-slate-200 bg-white hover:-translate-y-0.5 hover:shadow-lg'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="inline-flex rounded-2xl bg-cyan-50 p-3 text-cyan-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{panel.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{panel.summary}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePanel(panel.title)}
                  className={`inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-cyan-600 text-white'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-cyan-200 hover:bg-cyan-50'
                  }`}
                >
                  进入
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 grid gap-2">
                {panel.points.map((point) => {
                  const pointActive = isActive && activeMeta.points.includes(point)
                  return (
                    <button
                      key={point}
                      type="button"
                      onClick={() => setActivePanel(panel.title)}
                      className={`flex items-center justify-between rounded-[1.2rem] border px-4 py-3 text-left transition ${
                        pointActive
                          ? 'border-cyan-300 bg-cyan-50 text-cyan-800'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-cyan-200 hover:bg-cyan-50'
                      }`}
                    >
                      <span className="text-sm font-semibold">{point}</span>
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </button>
                  )
                })}
              </div>
            </article>
          )
        })}
      </section>

    
    </div>
  )
}

export default MatchListPage
