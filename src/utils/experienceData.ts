
export interface Experience {
  id: string;
  company: string;
  position: string;
  type: 'Full-Time' | 'Part-Time' | 'Contract' | 'Internship';
  startDate: string;
  endDate: string | 'Present';
  duration: string;
  description: string;
  logo: string; 
  logoAlt: string;
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Axtionable',
    position: 'Building',
    type: 'Full-Time',
    startDate: 'Jan 2024',
    endDate: 'Present',
    duration: '1 yr 6 mons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    logo: '/experience/axt.svg', 
    logoAlt: 'Axtionable Logo'
  },
  {
    id: '2',
    company: 'OnePay',
    position: 'Fraud Analyst',
    type: 'Full-Time',
    startDate: 'Feb 2024',
    endDate: 'Jun 2024',
    duration: '5 mons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    logo: '/experience/one-pay.svg', 
    logoAlt: 'OnePay Logo'
  },
    {
    id: '2',
    company: 'OnePay',
    position: 'Fraud Analyst',
    type: 'Full-Time',
    startDate: 'Feb 2024',
    endDate: 'Jun 2024',
    duration: '5 mons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    logo: '/experience/axt.svg', 
    logoAlt: 'OnePay Logo'
  }
];
