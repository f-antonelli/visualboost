interface NavRoutes {
  name: string;
  to?: string;
  img?: string;
  id?: string
}

export const navRoutes: NavRoutes[] = [
  {
    name: 'Conocenos',
    id: '#meetUs',
  },
  {
    name: 'Servicios',
    id: '#services',
  },
  {
    name: 'Contacto',
    id: '#contact',
  }
];