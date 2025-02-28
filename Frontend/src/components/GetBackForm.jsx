import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GetBackForm = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100 p-6 md:p-12 mt-6 mb-6 md:px-20 px-4">
      {/* Left Side - Form (70%) */}
      <div className="md:w-2/3 w-full bg-white shadow-lg rounded-lg p-6 md:p-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Get Back to Us</h2>
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Name</label>
            <input type="text" className="w-full border rounded p-2 focus:ring focus:ring-blue-300" />
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Address</label>
            <input type="text" className="w-full border rounded p-2 focus:ring focus:ring-blue-300" />
          </div>

          {/* Country & City (Side by Side) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Country</label>
              <input type="text" className="w-full border rounded p-2 focus:ring focus:ring-blue-300" />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-2">City</label>
              <input type="text" className="w-full border rounded p-2 focus:ring focus:ring-blue-300" />
            </div>
          </div>

          {/* Phone & Email (Side by Side) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Phone</label>
              <input type="text" className="w-full border rounded p-2 focus:ring focus:ring-blue-300" />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full border rounded p-2 focus:ring focus:ring-blue-300" />
            </div>
          </div>

          {/* Type of Survey Requested */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Type of Survey Requested</label>
            <select className="w-full border rounded p-2 focus:ring focus:ring-blue-300">
              <option>Site/Civil Engineering</option>
              <option>Land Surveying</option>
              <option>Environmental and Water Resources</option>
              <option>Utility Engineering Services</option>
              <option>Traffic Engineering Services</option>
              <option>Structural Engineering Services</option>
              <option>Alternative Delivery-Design-Build</option>
            </select>
          </div>

          {/* Timeline */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Timeline</label>
            <input type="text" className="w-full border rounded p-2 focus:ring focus:ring-blue-300" placeholder="e.g. 2 weeks, 1 month" />
          </div>

          {/* How did you hear about us? */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">How did you hear about us?</label>
            <select className="w-full border rounded p-2 focus:ring focus:ring-blue-300">
              <option>Friend and Family</option>
              <option>Newspaper Ads</option>
              <option>Google Ads</option>
              <option>Yahoo Ads</option>
              <option>Other</option>
            </select>
          </div>

          {/* Do you have any paperwork? */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Do you have any paperwork that could help?</label>
            <input type="file" className="w-full border rounded p-2 focus:ring focus:ring-blue-300" />
          </div>

          {/* Reason for Survey */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Reason for Survey</label>
            <textarea className="w-full border rounded p-2 focus:ring focus:ring-blue-300" rows="3"></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="bg-customBlue text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Right Side - Company Info (30%) */}
      <div className="md:w-1/3 w-full mt-8 md:mt-0 flex flex-col items-center md:items-start md:pl-12">
        {/* Company Logo */}
        <img src="/Color---JPG.jpg" alt="Company Logo" className="h-16 mb-4" />
        
        {/* Company Description */}
        <p className="text-gray-700 text-center md:text-left">
          Bengal Engineers is a leading firm providing high-quality engineering services, including structural design,
          site planning, urban development, and sustainable design. Our expert team is dedicated to delivering innovative 
          solutions tailored to our clients' needs.
        </p>
      </div>
    </div>
  );
};

export default GetBackForm;
