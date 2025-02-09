/**
 * @file Careers Constants
 */

// **************************************************** VALUES DESCRIPTIONS ****************************************************

export const VALUES_DESCRIPTION =
  'At SureBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.';
export const VALUES = [
  {
    _id: 1,
    title: 'Integrity',
    description:
      'We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.',
  },
  {
    _id: 2,
    title: 'Service Excellence',
    description:
      'We are committed to providing exceptional service to our customers, exceeding their expectations, and delivering personalized solutions that meet their unique needs.',
  },
  {
    _id: 3,
    title: 'Innovation',
    description:
      'We embrace innovation and continuously seek new ways to improve our products, services, and processes. We encourage creativity, experimentation, and a willingness to take risks.',
  },
  {
    _id: 4,
    title: 'Teamwork',
    description:
      'We foster a collaborative and inclusive work environment where every team member is valued, respected, and empowered. We believe in the power of teamwork to drive success and achieve our shared goals',
  },
];

// **************************************************** BENEFITS DESCRIPTIONS ****************************************************

export const BENEFITS_DESCRIPTION =
  'At SureBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.';

export const BENEFITS = [
  {
    _id: 1,
    title: 'Competitive Compensation',
    description:
      'We provide a competitive salary package that recognizes the skills and expertise of our employees. SureBank believes in rewarding exceptional performance and offering opportunities for financial growth.',
    icon_url: '/icons/careers/icon-1-1.svg',
    className: 'lg:rounded-tl-[40px] lg:rounded-br-[40px] rounded-t-[40px]',
  },
  {
    _id: 2,
    title: 'Health and Wellness',
    description:
      'We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.',
    icon_url: '/icons/careers/icon-1-2.svg',
    className: 'lg:rounded-tr-[40px] lg:rounded-bl-[40px] rounded-t-[40px]',
  },
  {
    _id: 3,
    title: 'Retirement Planning',
    description:
      'SureBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.',
    icon_url: '/icons/careers/icon-1-3.svg',
    className: 'lg:rounded-bl-[40px] lg:rounded-tr-[40px] rounded-t-[40px]',
  },
  {
    _id: 4,
    title: 'Work-Life Balance',
    description:
      'We understand the importance of maintaining a healthy work-life balance. SureBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.',
    icon_url: '/icons/careers/icon-1-4.svg',
    className: 'lg:rounded-tl-[40px] lg:rounded-br-[40px] rounded-t-[40px]',
  },
];

// **************************************************** JOB DESCRIPTIONS ****************************************************

export const JOB_DESCRIPTION =
  'Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry';

export const JOB_LIST = [
  {
    _id: 1,
    title: 'Relationship Manager',
    location: 'India',
    department: 'Retail Banking',
    description:
      'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
    requirements: [
      "Bachelor's degree in Business, Finance, or a related field",
      'Minimum of 3 years of experience in sales or relationship management in the banking industry',
      'Proven track record of meeting and exceeding sales targets',
      'Excellent interpersonal and negotiation skills',
      'Strong knowledge of banking products and services',
    ],
  },
  {
    _id: 2,
    title: 'Risk Analyst',
    location: 'United States',
    department: 'Risk Management',
    description:
      'As a Risk Analyst at YourBank, you will play a key role in identifying, assessing, and mitigating risks across the organization. You will analyze data, develop risk models, and provide insights to help the bank make informed decisions. We are looking for candidates with a strong analytical background, attention to detail, and the ability to work collaboratively with cross-functional teams.',
    requirements: [
      "Bachelor's degree in Mathematics, Statistics, Economics, or a related field",
      'Minimum of 2 years of experience in risk management or data analysis',
      'Proficiency in statistical analysis tools and techniques',
      'Strong problem-solving and critical thinking skills',
      'Excellent written and verbal communication skills',
    ],
  },
  {
    _id: 3,
    title: 'IT Security Specialist',
    location: 'Canada',
    department: 'Information Technology',
    description:
      'As an IT Security Specialist at YourBank, you will be responsible for protecting the bank’s information systems and data assets from cyber threats. You will implement security measures, monitor network activity, and respond to incidents to ensure the confidentiality, integrity, and availability of our systems. We are seeking candidates with a strong technical background, knowledge of cybersecurity best practices, and a commitment to continuous learning and development.',
    requirements: [
      "Bachelor's degree in Computer Science, Information Technology, or a related field",
      'Minimum of 3 years of experience in IT security or cybersecurity',
      'Certifications such as CISSP, CISM, or CEH are preferred',
      'Experience with security tools and technologies such as firewalls, intrusion detection systems, and SIEM solutions',
      'Strong problem-solving and analytical skills',
    ],
  },
];
