import instagram from '../../assets/icons/instagram.png'
import tiktok from '../../assets/icons/tiktok.png'
import behance from '../../assets/icons/behance.png'

interface SocialMedias {
  name: string;
  to?: string;
  img?: string;
}

export const socialMedias: SocialMedias[] = [
  {
    name: 'Instagram',
    img: instagram,
    to: 'https://www.instagram.com/_visualboost'
  },
  {
    name: 'Tiktok',
    img: tiktok,
    to: 'https://www.tiktok.com/@_visualboost'
  },
  {
    name: 'Behance',
    img: behance,
    to: 'https://www.behance.net/visualboost1'
  }
];