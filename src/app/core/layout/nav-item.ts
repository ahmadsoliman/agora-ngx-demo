export interface NavItem {
    id: number;
    name: string;
    path: string;
    description: string;
    iconClass: string;
    items: NavItem[];
    level: number
  }