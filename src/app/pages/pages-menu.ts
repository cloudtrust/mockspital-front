import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-tables',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'BUSINESS',
    group: true,
  },
  {
    title: 'Hospitals',
    icon: 'nb-home',
    link: '/pages/hospitals',
  },
  {
    title: 'Departments',
    icon: 'nb-list',
    link: '/pages/departments',
  },
  {
    title: 'Doctors',
    icon: 'nb-person',
    link: '/pages/doctors',
  },
  {
    title: 'Patients',
    icon: 'nb-person',
    link: '/pages/patients',
  },
  {
    title: 'Files',
    icon: 'nb-compose',
    link: '/pages/files',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
