import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import WebsiteDesign from 'assets/key-feature/website-design.svg';
import BusinessBots from 'assets/key-feature/business-bots.svg';
import Flyers from 'assets/key-feature/flyers.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: WebsiteDesign,
    altText: 'Custom Website Design',
    title: 'Custom Website Design',
    text:
      'Get a website tailored to your business needs, designed to be responsive and user-friendly, ensuring a strong online presence.',
  },
  {
    id: 2,
    imgSrc: BusinessBots,
    altText: 'Business Bot Integration',
    title: 'Business Bot Integration',
    text:
      'Automate your business processes with intelligent bots designed to streamline operations and enhance customer interactions.',
  },
  {
    id: 3,
    imgSrc: Flyers,
    altText: 'Professional Flyer Design',
    title: 'Professional Flyer Design',
    text:
      'Create impactful flyers that effectively communicate your brand message and attract attention with high-quality designs.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Dedicated Support',
    title: 'Dedicated Support',
    text:
      'Receive continuous support and maintenance to ensure your website, bots, and flyers are always up-to-date and performing optimally.',
  },
];

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
