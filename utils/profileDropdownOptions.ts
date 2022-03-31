export type IprofileDropdownOption = {
  label: string;
  path: string;
};

export const profileDropdownOptions: Array<IprofileDropdownOption> = [
  {
    label: 'Profile',
    path: '/profile',
  },
  {
    label: 'My Cart',
    path: '/mycart',
  },
  {
    label: 'Favourite',
    path: '/favourite',
  },
  {
    label: 'log out',
    path: '/logout',
  },
];
