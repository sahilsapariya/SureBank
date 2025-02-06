import CTA from '@surebank/components/common/CTA';
import Features from '@surebank/components/home/Features';
import Hero from '@surebank/components/home/Hero';
import Products from '@surebank/components/home/Products';
import UseCases from '@surebank/components/home/UseCases';
import React from 'react';
import FAQs from '@surebank/components/common/FAQs';

const Home = () => {
  const faqs = [
    {
      id: 1,
      question: 'How do I open an account with SureBank?',
      answer:
        'Opening an account with SureBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
    },
    {
      id: 2,
      question: 'What documents do I need to provide to apply for a loan?',
      answer:
        "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver&apos;s license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
    },
    {
      id: 3,
      question: 'How can I access my accounts online?',
      answer:
        'Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven&apos;t registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.',
    },
    {
      id: 4,
      question: 'Are my transactions and personal information secure?',
      answer:
        'At SureBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.',
    },
    {
      id: 5,
      question: 'How can I contact customer support?',
      answer:
        'Our customer support team is available to assist you with any questions or concerns you may have. You can reach us by phone, email, or live chat. Visit our "Contact Us" page for more information on how to get in touch with us. We are here to help you with all your banking needs.',
    },
    {
      id: 6,
      question: 'Can I apply for a loan online?',
      answer:
        'Yes, you can apply for a loan online with SureBank. Simply visit our website and click on the "Apply for a Loan" button. Follow the prompts, provide the required information, and submit your application. Our loan officers will review your application and contact you to discuss the next steps. If you have any questions or need assistance, our customer support team is available to help',
    },
  ];
  return (
    <>
      <Hero />
      <Products />
      <UseCases />
      <Features />
      <FAQs data={faqs} />
      <CTA />
    </>
  );
};

export default Home;
