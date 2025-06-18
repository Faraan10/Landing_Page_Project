import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white px-6 py-10 text-[15px] leading-relaxed">
      <div className="w-full md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2">
            <li>Why shop with us?</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>About us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Security & Privacy</h3>
          <ul className="space-y-2">
            <li>Secure Website</li>
            <li>PCI Compliance</li>
            <li>Privacy Policy</li>
            <li>Terms of service</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Subscribe</h3>
          <p className="mb-3">Invite customers to join your mailing list.</p>
          <input
            type="email"
            placeholder="Email address"
            className="input input-sm text-black w-full mb-3"
          />
          <button className="btn btn-sm bg-white text-purple-900 w-full">
            Sign up
          </button>
        </div>

        <div>
          <p className="text-sm text-gray-200">
            *Statements made on this website have not been evaluated by the U.S.
            Food and Drug Administration. These products are not intended to
            diagnose, treat, cure or prevent any disease. Information provided
            by this website or this company is not a substitute for individual
            medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
