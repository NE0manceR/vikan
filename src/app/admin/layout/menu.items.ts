// tslint:disable-next-line: class-name
interface item {
  name: string;
  url: string;
  class?: string;
}

// tslint:disable-next-line: class-name
interface listitem {
  name: string;
  img: string;
  items?: item[];
  url?: string;
}

export const MenuItems: listitem[] = [
  {
    name: 'Про нас',
    img: 'message',
    items: [{ name: 'Редагування ', url: '/admin/about' }],
  },
  {
    name: 'Каталог',
    img: 'message',
    items: [{ name: 'Редагування ', url: '/admin/catalog' }],
  },
  {
    name: 'Контакти',
    img: 'message',
    items: [{ name: 'Редагування контактів', url: '/admin/contact' }],
  },
  {
    name: 'Популярні запитання',
    img: 'message',
    items: [{ name: 'Редагування запитань', url: '/admin/questions' }],
  },
  {
    name: 'Сировина',
    img: 'message',
    items: [{ name: 'Редагування ', url: '/admin/raw' }],
  },
  {
    name: 'Зворотння форма (велика)',
    img: 'message',
    items: [{ name: 'Редагування ', url: '/admin/bigform' }],
  },
  {
    name: 'Зворотння форма (мала)',
    img: 'message',
    items: [{ name: 'Редагування', url: '/admin/smallform' }],
  },
  {
    name: 'Сервісний Title ',
    img: 'message',
    items: [{ name: 'Редагування', url: '/admin/title' }],
  },
  {
    name: 'Подрібнювачі',
    img: 'message',
    items: [{ name: 'Редагування', url: '/admin/shredders' }],
  },
  {
    name: 'Сортувальні лінії',
    img: 'message',
    items: [{ name: 'Редагування', url: '/admin/sortline' }],
  },
  {
    name: 'Течнічні характеристики',
    img: 'message',
    items: [{ name: 'Редагування', url: '/admin/models' }],
  },
  {
    name: 'Користувачі',
    img: 'message',
    items: [{ name: 'Редагування', url: '/admin/users' }],
  },
];
