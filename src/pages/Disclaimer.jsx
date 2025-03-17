import React from 'react';

const Disclaimer = () => {
  return (
    <>
      <div className="bg-[#e5e7eb] flex flex-col justify-center items-center py-6">
        <div className="w-[95%]">
          <h1 className="text-4xl font-bold text-center text-[#3730a3] ">
            Disclaimer
          </h1>
          <div className=" p-6">
            <p className="text-gray-700 mb-4 h-[80px] text-[14px]">
            printersolutiononline.com operates as a completely independent third-party company, unaffiliated with any printer brand and not involved in associate programs, affiliate advertising, or product endorsements. We strive to provide comprehensive printer information, but cannot guarantee its absolute accuracy or compatibility with your specific model. We strongly recommend users carefully review this disclaimer to understand the information presented. Additionally, we do not host external links on our website. If you encounter any, please inform us for prompt removal. Brand names and logos are used solely for representation and do not imply endorsement. Ultimately, users are responsible for ensuring the compatibility of any printer content (cartridges, toner, etc.) with their device. We recommend consulting your printer manual or manufactures website for definitive compatibility information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
