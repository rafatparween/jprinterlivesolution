import React from 'react';

const PrinterSetupIssue = () => {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className='text-4xl mb-2 text-blue-800 font-semibold'>Printer Setup Issue</h2>
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

export default PrinterSetupIssue;
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
  {
    step: 4,
    description:
      'Check to see if the printer tray is full of paper. If there is no paper available to print on, certain printers will go offline.',
    imageUrl:
      'https://smartdeviceassistant.com/wp-content/uploads/2022/03/4.jpg',
    adsId: 'ad004',
  },
  {
    step: 5,
    description: `The print spooler should be restarted. To restart the service that manages your print jobs, follow these steps:

To open the search bar, press Win+S and type services.
In the search results, select Services.
Scroll down to the Print Spooler service and right-click it.
Press the Restart button. The printer dialogue will be restarted, giving the computer a chance to rediscover the printer.
Check to see whether your printer is showing up online after a few minutes. Because the printer spooler service takes a few minutes to restart, you’ll have to wait a few minutes until the printer appears as identified by Windows.`,
    imageUrl:
      'https://smartdeviceassistant.com/wp-content/uploads/2022/03/5.jpg',
    adsId: 'ad005',
  },
  {
    step: 6,
    description:
      'Open the Windows Start menu and choose Settings.There are some further troubleshooting methods you can try if the printer still appears to be down.',
    imageUrl:
      'https://smartdeviceassistant.com/wp-content/uploads/2022/03/6.jpg',
    adsId: 'ad006',
  },
  {
    step: 7,
    description: 'Select Devices from the Settings menu.',
    imageUrl:
      'https://smartdeviceassistant.com/wp-content/uploads/2022/03/7.jpg',
    adsId: 'ad007',
  },
  {
    step: 8,
    description:
      'Choose Printers & Scanners from the drop-down menu. Your printer, as well as any other devices connected to your computer, should now be listed.',
    imageUrl:
      'https://smartdeviceassistant.com/wp-content/uploads/2022/03/8.jpg',
    adsId: 'ad008',
  },
  {
    step: 9,
    description: `  Make sure the print queue is empty. To remove all documents from the queue, follow these steps:

   Select your printer and then Open Queue from the drop-down menu.
  Choose a document from the queue.
Under “Document,” select Cancel.
Rep until the line is completely empty.
Examine the printer to see if it is operational. Continue with this procedure if you’re still having problems.`,
    imageUrl:
      'https://smartdeviceassistant.com/wp-content/uploads/2022/03/9.jpg',
    adsId: 'ad009',
  },
  {
    step: 10,
    description:
      'Select Remove device from the printer’s name. This step will remove the printer’s drivers so you may re-add them if clearing the queue didn’t work.',
    imageUrl:
      'https://smartdeviceassistant.com/wp-content/uploads/2022/03/10.jpg',
    adsId: 'ad010',
  },
  {
    step: 11,
    description:
      'Select Add a device or printer from the drop-down menu. This option can be found at the top of the “Printers & Scanners” menu.',
    imageUrl:
      'https://smartdeviceassistant.com/wp-content/uploads/2022/03/11.jpg',
    adsId: 'ad011',
  },
  {
    step: 12,
    description:
      'To re-add your printer, follow the on-screen directions. Check to see if the printer is showing up as “online” after it has been re-added.',
    imageUrl:
      'https://smartdeviceassistant.com/wp-content/uploads/2022/03/12.jpg',
    adsId: 'ad012',
  },
  {
    step: 13,
    description: `Make sure your printer is set in the default. If the printer is still not working, set it as the default printer so that Windows recognises it as the one you wish to use. Here’s how to do it:

Navigate to the Printers & Scanners section of the menu.
Select the printer that you want to be the default.
Choose the option to open the queue.
In the menu for your printer’s queue, choose Set As Default Printer. This is found in the Printer menu, which is seen on the printer queue window.
For more information, contact the manufacturer of your printer. If you’re still having problems with your printer, it’s most likely a hardware problem. For more information about connecting your printer to your PC, contact the printer’s manufacturer.`,
    imageUrl:
      'https://smartdeviceassistant.com/wp-content/uploads/2022/03/13.jpg',
    adsId: 'ad013',
  },
];
