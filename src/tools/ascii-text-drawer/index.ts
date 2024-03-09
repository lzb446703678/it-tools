import { Artboard } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'ASCII艺术文字生成器', // Tool name translated to Chinese
  path: '/ascii-text-drawer', // Path remains the same for consistency
  description: '使用多种字体和样式创建ASCII艺术文字。',
  keywords: ['ascii', 'asciiart', 'text', 'drawer'], // Keywords typically remain in English for SEO and consistency
  component: () => import('./ascii-text-drawer.vue'),
  icon: Artboard,
  createdAt: new Date('2024-03-03'),
});
