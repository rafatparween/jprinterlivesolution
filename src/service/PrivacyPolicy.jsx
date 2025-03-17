import React from 'react';

const privacyPolicy = [
  {
    title: 'Privacy Policy',
    content: `At printersolutiononline, accessible from https://printersolutiononline, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by printersolutiononline and how we use it.`,
  },
  {
    title: 'Contact Us',
    content: `If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.`,
  },
  {
    title: 'Scope',
    content: `This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in printersolutiononline. This policy is not applicable to any information collected offline or via channels other than this website.`,
  },
  {
    title: 'Consent',
    content: `By using our website, you hereby consent to our Privacy Policy and agree to its terms.`,
  },
  {
    title: 'Information We Collect',
    content: `The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, and the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information we collect in various ways, including to:\n\nProvide, operate, and maintain our website\n\nImprove, personalize, and expand our website\n\nUnderstand and analyse how you use our website\n\nDevelop new products, services, features, and functionality\n\nCommunicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes\n\nSend you emails\n\nFind and prevent fraud`,
  },
  {
    title: 'Log Files',
    content: `printersolutiononline follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analysing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.`,
  },
  {
    title: 'Our Advertising Partners',
    content: `Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.\n\nGoogle: https://policies.google.com/technologies/ads`,
  },
  {
    title: 'Advertising Partners Privacy Policies',
    content: `You may consult this list to find the Privacy Policy for each of the advertising partners of printersolutiononline.\n\nThird-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on printersolutiononline, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.\n\nNote that printersolutiononline has no access to or control over these cookies that are used by third-party advertisers.`,
  },
  {
    title: 'Third Party Privacy Policies',
    content: `printersolutiononline’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.\n\nYou can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites.`,
  },
  {
    title: 'CCPA Privacy Rights (Do Not Sell My Personal Information)',
    content: `Under the CCPA, among other rights, California consumers have the right to:\n\nRequest that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.\n\nRequest that a business delete any personal data about the consumer that a business has collected.\n\nRequest that a business that sells a consumer’s personal data, not sell the consumer’s personal data.\n\nIf you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.`,
  },
  {
    title: 'GDPR Data Protection Rights',
    content: `We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:\n\nThe right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.\n\nThe right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.\n\nThe right to erasure – You have the right to request that we erase your personal data, under certain conditions.\n\nThe right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.\n\nThe right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.\n\nThe right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.\n\nIf you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.`,
  },
  {
    title: 'Children’s Information',
    content: `Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.\n\nprintersolutiononline does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.`,
  },
];

const PrivacyPolicy = () => {
  return (
      <div className="py-16  bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 ">
          {/* Container with shadow and rounded corners */}
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12 ">
            {/* Main Heading */}
            <h1 className="text-4xl font-bold text-center text-[#1E3A8A] mb-10">
              Privacy Policy
            </h1>
            {privacyPolicy.map((section, index) => (
              <div
                key={index}
                className="mb-10 border-b border-gray-200 pb-8 "
              >
                {/* Section Titles */}
                <h2 className="text-3xl font-semibold text-blue-800 mb-6 ">
                  {section.title}
                </h2>
                {/* Section Content */}
                <p className="text-lg text-[#1E3A8A] leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default PrivacyPolicy;
 