import { ArrowRight, ClipboardList, School, Stethoscope, Users2 } from 'lucide-react'
import { useMemo, useState } from 'react'

const groups = [
  {
    name: '街道办',
    icon: ClipboardList,
    summary: '辖区需求台账、排班、走访、派单、物料分发',
    entries: [
      '辖区需求台账管理',
      '志愿者排班管理',
      '重点人群走访记录',
      '服务需求派单',
      '科普物料分发登记',
    ],
  },
  {
    name: '基层卫生所',
    icon: Stethoscope,
    summary: '疏导、直报、培训、交流、转诊随访',
    entries: [
      '基础疏导记录',
      '高危案例直报',
      '线上培训学习',
      '案例经验交流',
      '转诊对接与随访登记',
    ],
  },
  {
    name: '中小学',
    icon: School,
    summary: '档案、测评、预警、转介、家校对接',
    entries: [
      '学生心理档案管理',
      '测评数据汇总',
      '重点学生预警',
      '个案转介登记',
      '家校服务对接',
    ],
  },
  {
    name: '本地企业',
    icon: Users2,
    summary: '诉求收集、预约、问题汇总、公益对接',
    entries: ['职工诉求收集', '团体辅导预约', '高频问题汇总', '公益服务对接'],
  },
]

function AssessmentPage({ onNavigate = () => {} }) {
  const [activeGroup, setActiveGroup] = useState(groups[0].name)
  const [activeEntry, setActiveEntry] = useState(groups[0].entries[0])

  const activeGroupMeta = useMemo(
    () => groups.find((group) => group.name === activeGroup) ?? groups[0],
    [activeGroup],
  )

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600">
              基层执行
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">街道办 / 卫生所 / 学校 / 企业</h2>
          </div>
          
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {groups.map((group) => {
          const Icon = group.icon
          const isActive = activeGroup === group.name

          return (
            <article
              key={group.name}
              className={`rounded-[2.1rem] border p-6 shadow-sm transition ${
                isActive
                  ? 'border-emerald-200 bg-[linear-gradient(180deg,rgba(236,253,245,0.92),rgba(255,255,255,1))] shadow-[0_18px_40px_rgba(16,185,129,0.08)]'
                  : 'border-slate-200 bg-white hover:-translate-y-0.5 hover:shadow-lg'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{group.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{group.summary}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveGroup(group.name)
                    setActiveEntry(group.entries[0])
                  }}
                  className={`inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-emerald-600 text-white'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  进入
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 grid gap-2">
                {group.entries.map((entry) => {
                  const entryActive = isActive && activeEntry === entry
                  return (
                    <button
                      key={entry}
                      type="button"
                      onClick={() => {
                        setActiveGroup(group.name)
                        setActiveEntry(entry)
                      }}
                      className={`flex items-center justify-between rounded-[1.2rem] border px-4 py-3 text-left transition ${
                        entryActive
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-200 hover:bg-emerald-50'
                      }`}
                    >
                      <span className="text-sm font-semibold">{entry}</span>
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

export default AssessmentPage
