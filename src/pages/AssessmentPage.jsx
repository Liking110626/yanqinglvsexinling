import { ArrowRight, ClipboardList, School, Stethoscope, Users2, MessageCircle, Send, Shield, ChevronDown, ChevronUp, User } from 'lucide-react'
import { useMemo, useState } from 'react'

// 示例数据
const initialPosts = [
  {
    id: 1,
    author: '张社区工作者',
    type: '基层',
    avatar: '张',
    content: '辖区一位独居老人最近情绪低落，不愿与人交流，请问有什么建议可以提供？',
    time: '2小时前',
    replies: [
      {
        id: 101,
        author: '心理健康服务中心',
        type: '医院',
        isOfficial: true,
        avatar: '心',
        content: '您好，建议先了解老人近期是否有生活事件发生（如丧偶、疾病等）。可以尝试：1.定期上门陪伴；2.邀请参加社区活动；3.联系专业心理咨询师上门评估。如情况严重，请及时转介。',
        time: '1小时前',
      },
    ],
  },
  {
    id: 2,
    author: '李老师',
    type: '学校',
    avatar: '李',
    content: '学校一名初中生反映上课注意力不集中，睡眠也不好，家长应该怎么做？',
    time: '5小时前',
    replies: [
      {
        id: 201,
        author: '心理健康服务中心',
        type: '医院',
        isOfficial: true,
        avatar: '心',
        content: '建议：1.先排查学业压力源；2.保证每天8小时睡眠；3.适当增加户外运动；4.如持续2周以上，建议预约专业评估。',
        time: '4小时前',
      },
    ],
  },
  {
    id: 3,
    author: '王企业HR',
    type: '企业',
    avatar: '王',
    content: '员工反映工作压力大，经常加班到很晚，情绪焦虑，有什么团体辅导形式可以推荐吗？',
    time: '昨天',
    replies: [],
  },
]

const userTypes = ['基层', '学校', '企业']

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
  const [posts, setPosts] = useState(initialPosts)
  const [newPost, setNewPost] = useState('')
  const [selectedUserType, setSelectedUserType] = useState('基层')
  const [expandedPosts, setExpandedPosts] = useState({})
  const [replyInputs, setReplyInputs] = useState({})
  const [showUserTypeMenu, setShowUserTypeMenu] = useState(false)

  function handleSubmitPost() {
    if (!newPost.trim()) return
    const post = {
      id: Date.now(),
      author: `${selectedUserType}用户`,
      type: selectedUserType,
      avatar: selectedUserType[0],
      content: newPost.trim(),
      time: '刚刚',
      replies: [],
    }
    setPosts([post, ...posts])
    setNewPost('')
  }

  function toggleReplies(postId) {
    setExpandedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }))
  }

  function handleReply(postId) {
    const content = replyInputs[postId]
    if (!content?.trim()) return
    const reply = {
      id: Date.now(),
      author: '心理健康服务中心',
      type: '医院',
      isOfficial: true,
      avatar: '心',
      content: content.trim(),
      time: '刚刚',
    }
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, replies: [...post.replies, reply] } : post,
      ),
    )
    setReplyInputs((prev) => ({ ...prev, [postId]: '' }))
  }

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

      {/* 互动评论区 */}
      <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur">
        <div className="mb-6 flex items-center gap-3">
          <div className="inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-700">
            <MessageCircle className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">互动问答区</h2>
            <p className="text-sm text-slate-500">基层发布问题，医院专业解答，大家共享经验</p>
          </div>
        </div>

        {/* 发布问题 */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowUserTypeMenu(!showUserTypeMenu)}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <User className="h-4 w-4" />
                {selectedUserType}
                <ChevronDown className="h-4 w-4" />
              </button>
              {showUserTypeMenu && (
                <div className="absolute left-0 top-full z-10 mt-1 rounded-xl border border-slate-200 bg-white shadow-lg">
                  {userTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setSelectedUserType(type)
                        setShowUserTypeMenu(false)
                      }}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-slate-50 first:rounded-t-xl last:rounded-b-xl"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span className="text-sm text-slate-500">发布问题</span>
          </div>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="请输入您的问题...（如：遇到心理困扰如何处理？）"
            className="w-full resize-none rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            rows={3}
          />
          <div className="mt-3 flex justify-end">
            <button
              type="button"
              onClick={handleSubmitPost}
              disabled={!newPost.trim()}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              发布
            </button>
          </div>
        </div>

        {/* 问题列表 */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="rounded-2xl border border-slate-200 bg-white p-4">
              {/* 问题内容 */}
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                  {post.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900">{post.author}</span>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      post.type === '医院' ? 'bg-rose-100 text-rose-700' :
                      post.type === '学校' ? 'bg-amber-100 text-amber-700' :
                      post.type === '企业' ? 'bg-blue-100 text-blue-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {post.type}
                    </span>
                    <span className="text-xs text-slate-400">{post.time}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{post.content}</p>
                </div>
              </div>

              {/* 回复列表 */}
              {post.replies.length > 0 && (
                <div className="mt-4 ml-13 space-y-3">
                  {expandedPosts[post.id] ? (
                    post.replies.map((reply) => (
                      <div key={reply.id} className={`rounded-xl p-3 ${
                        reply.isOfficial ? 'bg-emerald-50 border border-emerald-200' : 'bg-slate-50'
                      }`}>
                        <div className="flex items-center gap-2">
                          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                            reply.isOfficial ? 'bg-emerald-200 text-emerald-800' : 'bg-slate-200 text-slate-600'
                          }`}>
                            {reply.avatar}
                          </div>
                          <span className="font-semibold text-slate-900">{reply.author}</span>
                          {reply.isOfficial && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white">
                              <Shield className="h-3 w-3" />
                              官方解答
                            </span>
                          )}
                          <span className="text-xs text-slate-400">{reply.time}</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">{reply.content}</p>
                      </div>
                    ))
                  ) : (
                    <button
                      type="button"
                      onClick={() => toggleReplies(post.id)}
                      className="flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700"
                    >
                      <ChevronDown className="h-4 w-4" />
                      查看{post.replies.length}条回复
                    </button>
                  )}
                </div>
              )}

              {/* 底部操作 */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <button
                  type="button"
                  onClick={() => toggleReplies(post.id)}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-emerald-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  {post.replies.length > 0 ? (
                    expandedPosts[post.id] ? '收起回复' : `${post.replies.length}条回复`
                  ) : '写回复'}
                </button>
              </div>

              {/* 回复输入框 */}
              {expandedPosts[post.id] && (
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    value={replyInputs[post.id] || ''}
                    onChange={(e) => setReplyInputs((prev) => ({ ...prev, [post.id]: e.target.value }))}
                    onKeyDown={(e) => e.key === 'Enter' && handleReply(post.id)}
                    placeholder="输入官方解答..."
                    className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  />
                  <button
                    type="button"
                    onClick={() => handleReply(post.id)}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                  >
                    <Send className="h-4 w-4" />
                    解答
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AssessmentPage
