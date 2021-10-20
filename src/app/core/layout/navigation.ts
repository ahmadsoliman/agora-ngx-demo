import { NavItem } from './nav-item';

export const menuItems = [
  {
    'id': 1,
    'name': 'Dashboard',
    'path': '/dashboard',
    'description': 'Dashboard',
    'iconClass': 'fa-dashboard',
  },
  // {
  //   'id': 2,
  //   'name': 'Grids',
  //   'path': '/grids',
  //   'description': 'Grids',
  //   'iconClass': 'fa-grid',
  // },
  // {
  //   'id': 3,
  //   'name': 'Forms',
  //   'path': '/forms',
  //   'description': 'Forms',
  //   'iconClass': 'fa-forms',
  // },
  // {
  //   'id': 4,
  //   'name': 'Buttons',
  //   'path': '/buttons',
  //   'description': 'Buttons',
  //   'iconClass': 'fa-buttons',
  // },
  // {
  //   'id': 5,
  //   'name': 'Form Elements',
  //   'path': '/form-elements',
  //   'description': 'Form Elements',
  //   'iconClass': 'fa-form-elements',
  // },
  // {
  //   'id': 6,
  //   'name': 'Kendo',
  //   'path': '/kendo',
  //   'description': 'Kendo',
  //   'iconClass': 'fa-kendo',
  // },
  // {
  //   'id': 7,
  //   'name': 'Ui Elements',
  //   'path': '/ui-elements',
  //   'description': 'Ui Elements',
  //   'iconClass': 'fa-ui-elements',
  // },
  // {
  //   'id': 8,
  //   'name': 'Account Settings',
  //   'path': '/account-settings',
  //   'description': 'Account Settings',
  //   'iconClass': 'fa-account',
  // }
];

export const navItems: NavItem[] = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/dashboard',
    description: 'Dashboard',
    iconClass: 'fa-dashboard',
    items: [],
    level: 0
  },
  // {
  //   id: 2,
  //   name: 'Projects',
  //   path: '',
  //   description: 'Grids',
  //   iconClass: 'fa-grid',
  //   items: [
  //     {
  //       id: 1,
  //       name: 'Projects Grid',
  //       path: '/grids',
  //       description: 'Grids',
  //       iconClass: 'fa-grid',
  //       items: [],
  //       level: 1
  //     },
  //     {
  //       id: 2,
  //       name: 'Projects Cards',
  //       path: '/projects-cards',
  //       description: 'Projects Cards',
  //       iconClass: 'fa-grid',
  //       items: [],
  //       level: 1
  //     },
  //     {
  //       id: 3,
  //       name: 'Projects Board',
  //       path: '/projects-board',
  //       description: 'Projects Board',
  //       iconClass: 'fa-grid',
  //       items: [],
  //       level: 1
  //     },
  //     {
  //       id: 4,
  //       name: 'Project Details',
  //       path: '/project-details',
  //       description: 'Project Details',
  //       iconClass: 'fa-grid',
  //       items: [],
  //       level: 1
  //     },
  //   ],
  //   level: 0
  // },
  // {
  //   id: 3,
  //   name: 'UI',
  //   path: '',
  //   description: 'Different UI pages',
  //   iconClass: 'fa-ui',
  //   items: [
  //     {
  //       id: 1,
  //       name: 'Forms',
  //       path: '/forms',
  //       description: 'Forms',
  //       iconClass: 'fa-forms',
  //       items: [],
  //       level: 1
  //     },
  //     {
  //       id: 2,
  //       name: 'Buttons',
  //       path: '/buttons',
  //       description: 'Buttons',
  //       iconClass: 'fa-buttons',
  //       items: [],
  //       level: 1
  //     },
  //     {
  //       id: 3,
  //       name: 'Form Elements',
  //       path: '/form-elements',
  //       description: 'Form Elements',
  //       iconClass: 'fa-form-elements',
  //       items: [],
  //       level: 1
  //     },
  //     {
  //       id: 4,
  //       name: 'Ui Elements',
  //       path: '/ui-elements',
  //       description: 'Ui Elements',
  //       iconClass: 'fa-ui-elements',
  //       items: [],
  //       level: 1
  //     },
  //   ],
  //   level: 0
  // },
  // {
  //   id: 4,
  //   name: 'Kendo',
  //   path: '/kendo',
  //   description: 'Kendo',
  //   iconClass: 'fa-kendo',
  //   items: [],
  //   level: 0
  // },
  // {
  //   id: 5,
  //   name: 'Cards',
  //   path: '/cards',
  //   description: 'Cards',
  //   iconClass: 'fa-cards',
  //   items: [],
  //   level: 0
  // },
  // {
  //   id: 6,
  //   name: 'Invoices',
  //   path: '',
  //   description: 'Invoices pages',
  //   iconClass: 'fa-invoices',
  //   items: [
  //     {
  //       id: 1,
  //       name: 'Invoice List',
  //       path: '/invoice-list',
  //       description: 'Invoice List',
  //       iconClass: 'fa-invoices',
  //       items: [],
  //       level: 1
  //     },
  //     {
  //       id: 2,
  //       name: 'Invoice Details',
  //       path: '/invoice-details',
  //       description: 'Invoice Details',
  //       iconClass: 'fa-invoices',
  //       items: [],
  //       level: 1
  //     }
  //   ],
  //   level: 0
  // },
  // {
  //   id: 7,
  //   name: 'Calendar',
  //   path: '/calendar',
  //   description: 'Calender',
  //   iconClass: 'fa-calendar',
  //   items: [],
  //   level: 0
  // },
  // {
  //   id: 8,
  //   name: 'Dropdown',
  //   path: '#',
  //   description: 'Ui Elements',
  //   iconClass: 'fa-ui-elements',
  //   level: 0,
  //   items: [
  //     {
  //       id: 1,
  //       name: 'Item 1',
  //       path: '#',
  //       description: 'Ui Elements',
  //       iconClass: 'fa-ui-elements',
  //       items: [
  //           {
  //             id: 1,
  //             name: 'Item 1 1',
  //             path: '/ui-elements',
  //             description: 'Ui Elements',
  //             iconClass: 'fa-ui-elements',
  //             items: [],
  //             level: 2
  //           }
  //       ],
  //       level: 1
  //     },
  //     {
  //       id: 2,
  //       name: 'Item 2',
  //       path: '/ui-elements',
  //       description: 'Ui Elements',
  //       iconClass: 'fa-ui-elements',
  //       items: [],
  //       level: 1
  //     }

  //   ]
  // }
];