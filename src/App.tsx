/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Phone, 
  Code2, 
  Cpu, 
  BrainCircuit, 
  Database, 
  Cat, 
  Gamepad2, 
  BookOpen, 
  MessageSquare,
  ChevronRight,
  Terminal,
  Layers,
  Sparkles,
  Trophy,
  Award,
  Target,
  BarChart3,
  Lightbulb,
  Check,
  Copy,
  MessageCircle
} from 'lucide-react';

const SKILLS = [
  { name: "LangChain & LangGraph", category: "AI Framework", icon: BrainCircuit },
  { name: "RAG & Agentic Workflows", category: "System Architecture", icon: Layers },
  { name: "Python / C++ / JS", category: "Languages", icon: Code2 },
  { name: "MySQL / PostgreSQL / Qdrant", category: "Databases", icon: Database },
  { name: "FastAPI / Redis", category: "Backend", icon: Terminal },
  { name: "Docker / Git", category: "DevOps", icon: Cpu }
];

const PROJECTS = [
  {
    title: "校园流浪猫AI管理平台",
    tag: "AI应用开发",
    period: "2026/03 - 2026/04",
    description: "依托AI技术实现校园流浪猫的规范化管理，集猫咪档案浏览、AI猫咪识别、喂养打卡、AI问答于一体。",
    highlights: [
      "设计NL2SQL评测框架覆盖，确立双路径交叉验证机制",
      "精调BM25+向量语义检索，RAG检索相关性从50%提升至80%",
      "多模态特征提取，支撑100+个体识别与200+分块RAG应用"
    ],
    tech: ["LangChain", "RAG", "Multi-modal", "FastAPI"],
    icon: Cat,
    link: "https://dog-shit-0708.github.io/catAI/"
  },
  {
    title: "AI垂类小说二创平台",
    tag: "AI应用开发",
    period: "2026/04 - 2026/05",
    description: "聚焦青春校园IP的AI辅助二创平台，支持原文阅读、时长回溯、章节续写与同人创作。",
    highlights: [
      "LoRA多任务微调，平均提升评价指标12%",
      "构建自动化评测体系，周期由周级缩短至天级",
      "Multi-Agent分阶段写作流，历史冲突压缩80%，一致性大幅提升"
    ],
    tech: ["LoRA", "Multi-Agent", "LLM-as-Judge", "Python"],
    icon: BookOpen,
    link: "https://dog-shit-0708.github.io/endlessNovel"
  },
  {
    title: "余淮人设聊天机器人",
    tag: "IP陪伴",
    period: "2025 - 2026",
    description: "基于《最好的我们》余淮角色打造，高度还原语气的沉浸式对话机器人。",
    highlights: [
      "深度Prompt工程，高度还原角色语气与性格特点",
      "对话记忆关联与情绪识别，提供陪伴式互动体验",
      "微信生态适配，实现流畅的即时通讯交互"
    ],
    tech: ["Prompt Engineering", "OpenAI", "Python"],
    icon: MessageSquare,
    link: "http://xhslink.com/o/86q9CT31yiz"
  },
  {
    title: "桌宠项目 (Trashy)",
    tag: "桌面交互",
    period: "2025",
    description: "轻量化桌面互动宠物，支持基础动作、交互反馈与个性化展示。",
    highlights: [
      "打通桌面单调感，提升趣味性与个性化体验",
      "提供桌面悬浮展示与基础动作逻辑实现",
      "轻量化客户端适配，适配多类桌面环境"
    ],
    tech: ["Web", "Interactivity", "Graphics"],
    icon: Gamepad2,
    link: "http://xhslink.com/o/532FzqebJif"
  }
];

const AWARDS = [
  { title: "蓝桥杯 C++ 赛道", rank: "省一等奖", date: "2025.05", icon: Trophy },
  { title: "睿抗足球机器人大赛", rank: "国家级二等奖", date: "2025.09", icon: Target },
  { title: "高教精英挑战赛", rank: "国家级二等奖", date: "2025.07", icon: Award },
  { title: "市场分析与调查大赛", rank: "省二等奖", date: "2025.04", icon: BarChart3 },
  { title: "“互联网+”大学生创新创业大赛", rank: "省级铜奖", date: "2025.12", icon: Lightbulb },
];

export default function App() {
  const [copied, setCopied] = useState(false);
  const WECHAT_ID = "z2745756567";

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(WECHAT_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen font-sans relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-[-1]">
        <img 
          src="https://zhouxi-1417306345.cos.ap-guangzhou.myqcloud.com/bestOurselves/picture/%E4%B8%8B%E8%BD%BD%20%2818%29.jpg" 
          alt="background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
      </div>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-pink-100 bg-white/60 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-display font-bold text-xl tracking-tighter text-slate-900">
            ZHOU<span className="text-brand-primary">XI</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="https://github.com/dog-shit-0708" target="_blank" className="text-slate-600 hover:text-brand-primary transition-colors">
              <Github size={20} />
            </a>
            <button 
              onClick={copyToClipboard}
              className="flex items-center gap-2 bg-brand-primary text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-brand-primary/80 transition-all group shadow-sm shadow-brand-primary/20"
            >
              {copied ? <Check size={14} /> : <MessageCircle size={14} />}
              <span>{copied ? "Copied!" : "WeChat ID"}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono mb-6">
              <Sparkles size={14} />
              AI Application / Agent Developer
            </div>
            <h1 className="text-6xl lg:text-8xl font-display font-bold tracking-tighter text-slate-900 mb-6 leading-[0.9]">
              周西 <br />
              <span className="text-gradient">ZHOU XI</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mb-8 leading-relaxed">
              Wuhan University of Technology • GPA 3.7/4.0
              <br />
              专注大语言模型(LLM)应用开发、RAG架构设计及多智能体(Multi-Agent)工作流构建。
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-mono glass-card px-4 py-2 border-brand-primary/10">
                <Phone size={14} className="text-brand-primary" /> 13072778607
              </div>
              <div className="flex items-center gap-2 text-sm font-mono glass-card px-4 py-2 border-brand-primary/10">
                <Mail size={14} className="text-brand-primary" /> 2745756567@qq.com
              </div>
              <a 
                href="https://github.com/dog-shit-0708" 
                target="_blank"
                className="flex items-center gap-2 text-sm font-mono glass-card px-4 py-2 hover:border-brand-primary/40 transition-colors group border-brand-primary/10"
              >
                <div className="p-1 rounded bg-brand-primary/10 mr-1">
                  <Github size={14} className="text-brand-primary" />
                </div>
                <span className="text-slate-800">GitHub:</span>
                <span className="text-slate-600 font-medium">dog-shit-0708</span>
                <ExternalLink size={14} className="text-slate-400 group-hover:text-brand-primary ml-2" />
              </a>
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-2 text-sm font-mono glass-card px-4 py-2 hover:border-brand-primary/40 transition-colors group border-brand-primary/10"
              >
                <div className="p-1 rounded bg-brand-primary/10 mr-1">
                  <MessageCircle size={14} className="text-brand-primary" />
                </div>
                <span className="text-slate-800">WeChat:</span>
                <span className="text-slate-600 font-medium">{WECHAT_ID}</span>
                {copied ? <Check size={14} className="text-green-500 ml-2" /> : <Copy size={14} className="text-slate-400 group-hover:text-brand-primary ml-2" />}
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-card relative group shadow-2xl shadow-brand-primary/5">
              <img 
                src="https://zhouxi-1417306345.cos.ap-guangzhou.myqcloud.com/d223b31d66ef4bf3d672829afded65cb.jpg" 
                alt="周西 Zhou Xi" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-100/20 via-transparent to-transparent opacity-40" />
            </div>
            {/* Float badges */}
            <div className="absolute -top-6 -right-6 glass-card p-4 animate-bounce duration-[3000ms] shadow-xl border-brand-primary/10">
                <div className="text-xs font-mono text-brand-primary mb-1">Status</div>
                <div className="text-slate-900 font-bold text-sm">Open to Internships</div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-4 shadow-xl border-brand-primary/10">
                <div className="text-xs font-mono text-brand-primary mb-1">Certification</div>
                <div className="text-slate-900 font-bold text-sm">软件设计师 | CET-6</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-pink-100/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Technical Arsenal</h2>
            <div className="h-1 w-20 bg-brand-primary rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, i) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex items-start gap-4 hover:border-brand-primary/40 group border-brand-primary/5"
              >
                <div className="p-3 rounded-xl bg-pink-50 group-hover:bg-brand-primary/10 transition-colors">
                  <skill.icon className="text-brand-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-slate-900 font-semibold mb-1">{skill.name}</h3>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">{skill.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Selected Projects</h2>
              <div className="h-1 w-20 bg-brand-primary rounded-full" />
            </div>
            <a href="https://github.com/dog-shit-0708" className="text-sm font-medium text-brand-primary hover:underline flex items-center gap-1">
              View All <ChevronRight size={16} />
            </a>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card group flex flex-col overflow-hidden border-brand-primary/5 hover:border-brand-primary/30"
              >
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 rounded-2xl bg-pink-50 group-hover:bg-brand-primary/10 transition-colors">
                      <project.icon className="text-brand-primary" size={32} />
                    </div>
                    <div className="text-right">
                      <span className="block text-xs font-mono text-brand-primary mb-1 uppercase tracking-tighter font-bold">{project.tag}</span>
                      <span className="block text-xs text-slate-500">{project.period}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="text-xs text-slate-500 flex gap-3">
                        <span className="text-brand-primary mt-1">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-pink-100/50 border border-brand-primary/10 text-[10px] font-mono text-brand-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank"
                  className="p-4 bg-pink-50 border-t border-pink-100 group-hover:bg-brand-primary group-hover:text-white flex justify-center items-center gap-2 transition-all font-medium text-sm text-slate-600"
                >
                  Explore Project <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-6 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Awards & Honors</h2>
            <div className="h-1 w-20 bg-brand-primary rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {AWARDS.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex flex-col items-center text-center group hover:bg-brand-primary/5 hover:border-brand-primary/30 border-brand-primary/5"
              >
                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <award.icon size={24} className="text-brand-primary" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1 leading-tight tracking-tight">{award.title}</h3>
                <p className="text-brand-primary text-xs font-mono font-bold mb-2 uppercase tracking-wider">{award.rank}</p>
                <p className="text-[10px] text-slate-500 font-mono italic">{award.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-pink-100/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Experience</h2>
            <div className="h-1 w-20 bg-brand-primary rounded-full" />
          </div>

          <div className="max-w-3xl">
            <div className="relative pl-8 border-l border-brand-primary/20 space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-0 p-2 rounded-full bg-pink-50 border border-brand-primary shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                  <Cpu size={16} className="text-brand-primary" />
                </div>
                <div className="mb-2 flex flex-wrap gap-x-4 items-baseline">
                  <h3 className="text-xl font-bold text-slate-900">绿盟科技 (NSFOCUS)</h3>
                  <span className="text-sm font-mono text-brand-primary font-bold">研发技术部 - AI应用开发 (实习)</span>
                  <span className="text-sm text-slate-500 ml-auto font-medium">2025/12 - 2026/04</span>
                </div>
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                  <p><strong className="text-slate-900">架构设计：</strong> 主导全自动/半自动/辅助分析三模式路由架构，按 issue 类型决策 AI 介入深度，覆盖团队 50% 前端需求。</p>
                  <p><strong className="text-slate-900">工程落地：</strong> 打通 Jira → Claude Code SDK → GitLab → 内部研发平台全链路，实现 issue 自动闭环，单单处理时长缩短至 20 分钟。</p>
                  <p><strong className="text-slate-900">风险控制：</strong> 设计本地验证、feature 分支隔离、三层控制机制，0 次主分支事故，MR 一次通过率 82%。</p>
                  <p><strong className="text-slate-900">流水线诊断：</strong> 结合 WebSocket 实时提示流水线失败原因，降低日志排查时间 3 分钟。</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-pink-200 px-6 bg-white/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-display font-bold text-xl tracking-tighter text-slate-900 mb-2">
              ZHOU<span className="text-brand-primary">XI</span>
            </div>
            <p className="text-xs text-slate-500 font-mono">© 2026 Crafted with Passion for AI Engineering.</p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/dog-shit-0708" target="_blank" className="p-3 rounded-full bg-pink-50 text-slate-600 hover:bg-brand-primary hover:text-white transition-colors border border-brand-primary/10">
              <Github size={20} />
            </a>
            <a href="mailto:2745756567@qq.com" className="p-3 rounded-full bg-pink-50 text-slate-600 hover:bg-brand-primary hover:text-white transition-colors border border-brand-primary/10">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
