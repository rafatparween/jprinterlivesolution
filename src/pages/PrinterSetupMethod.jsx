import React from 'react';

const PrinterSetupMethod = () => {
  return (
    <main className="bg-gray-100 min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <section className="w-full bg-white overflow-hidden shadow-xl rounded-lg">
        {troubleshootingSteps.map(
          ({ step, description, imageUrl, adsId }, index) => (
            <div
              key={adsId}
              className={`flex flex-col sm:flex-row p-6 border-b border-gray-200 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              <div className="sm:w-1/2">
                <img
                  src={imageUrl}
                  alt={`Step ${step}`}
                  className="w-full h-64 sm:h-80 rounded-md shadow-md object-cover"
                />
              </div>
              <div className="sm:w-1/2 sm:pl-8 mt-4 sm:mt-0">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step - {step}
                </h2>
                <ul className="list-disc pl-5">
                  {Array.isArray(description) ? (
                    description.map((desc, index) => (
                      <li key={index} className="text-sm text-gray-700 mb-1">
                        {desc}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-700">{description}</li>
                  )}
                </ul>
              </div>
            </div>
          ),
        )}
      </section>
    </main>
  );
};

export default PrinterSetupMethod;
const troubleshootingSteps = [
  {
    step: 1,
    description: [
      'Ensure that your printer is switched on. Make sure that your printer is turned on and linked to a power source before moving on to the next step in the troubleshooting procedure.',
      'You may need to click a button on the printer to wake it up if it is in Sleep mode.',
    ],
    imageUrl:
      'https://smartdeviceassistant.com/wp-content/uploads/2022/03/1.jpg',
    adsId: 'ad001',
  },
  {
    step: 2,
    description: [
      'Restart your printer if it hasn’t done so already. If the printer was already turned on, it may only need to be restarted to stop showing up as unavailable.',
      'For 30 seconds, turn off and unplug your printer. This will allow your printer to restart and reconnect with your computer.',
      'Turn on your printer after plugging it in. Check to see if the printer is still showing as “offline” after a few moments.',
    ],
    imageUrl:
      'https://smartdeviceassistant.com/wp-content/uploads/2022/03/2.jpg',
    adsId: 'ad002',
  },
  {
    step: 3,
    description: [
      'Confirm that your printer is on the same network as your computer. If your printer is linked to your computer through Wi-Fi or ethernet, it may appear to be offline due to a network issue.',
      'The steps for checking your printer’s network settings differ depending on the printer you have. To explore the printer’s internal menus, you’ll normally have to utilise the buttons on the printer itself.',
      'If you’re connecting to the printer through a USB cable, ensure it’s securely plugged in. To rule out a broken cable connection, you could try an alternative USB cable.',
    ],
    imageUrl:
      'https://smartdeviceassistant.com/wp-content/uploads/2022/03/3.jpg',
    adsId: 'ad003',
  },
];
