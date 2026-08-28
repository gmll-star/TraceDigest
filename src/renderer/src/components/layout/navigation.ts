export type AppPage = 'archive' | 'report' | 'agent-hub' | 'export' | 'settings'

export interface NavigationItem {
  id: AppPage
  label: string
}

export const PRIMARY_NAV_ITEMS: NavigationItem[] = [
  { id: 'archive', label: '档案' },
  { id: 'report', label: '日报' },
  { id: 'agent-hub', label: 'Agent' },
  { id: 'export', label: '导出' },
  { id: 'settings', label: '设置' }
]
