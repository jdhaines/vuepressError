export interface ArticleInfoItem {
  author: string
  category: string[]
  date: string
  snippet: string
  tag: string[]
  title: string
}

export interface ArticleItem {
  path: string
  info: ArticleInfoItem
}

export interface ArticlesItem {
  path: string
  items: ArticleItem[]
}

export interface keyResultNoteItem {
  id: number
  msg: string
  date: string
}

export interface keyResultItem {
  id: number
  created: string
  due: string
  keyResultText: string
  progress: number
  stretch: boolean
  assignee: string
  notes?: keyResultNoteItem[]
}

export interface BasicOkrItem {
  id: number
  active: boolean
  objectiveText: string
  keyResults: keyResultItem[]
}

export interface OrganizationOkrItem extends BasicOkrItem {
  capability: 'arvr' | 'devsecops' | 'aiml'
  strategyLeg?: string
  assignee?: never
}

export interface IndividualOkrItem extends BasicOkrItem {
  assignee: string
  capability?: never
  strategyLeg?: never
}

export interface ToolItem {
  id: number
  title: string
  imageLight: string
  imageDark: string
  description: string
  justification: string
  benefits: string
  cost?: string
  costUnit?: string
  alternatives: string
  link: string
  startedUsing: string
  category: 'Productivity' | 'Security' | 'Collaboration' | 'Automation'
}

export interface SkillItem {
  id: number
  titleShort: string
  titleLong: string
  skillLink: string
  skillImage: string
  description: string
  skillType: 'architecture' | 'framework' | 'language' | 'general'
}

export interface MemberSkillItem {
  id: number
  skill: number
  level: 1 | 2 | 3
}

export interface MemberItem {
  id: number
  name: string
  skills: MemberSkillItem[]
}
