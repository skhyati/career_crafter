import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import countries from "@/utils/countries"; // Import the countries list
import NavbarRecruiter from "../shared/NavbarRecruiter";

const Label = ({ children }) => (
  <label className="block font-medium text-gray-700 mb-2">{children}</label>
);

const Input = (props) => (
  <input
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  />
);

const Select = (props) => (
  <select
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  />
);

function SignupRecruiter() {
  const [companyIndustry, setCompanyIndustry] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [recruiterEmail, setRecruiterEmail] = useState("");
  const [recruiterPassword, setRecruiterPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "companyIndustry":
        setCompanyIndustry(value);
        break;
      case "companyLocation":
        setCompanyLocation(value);
        break;
      case "companyName":
        setCompanyName(value);
        break;
      case "companyWebsite":
        setCompanyWebsite(value);
        break;
      case "recruiterEmail":
        setRecruiterEmail(value);
        break;
      case "recruiterPassword":
        setRecruiterPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !companyIndustry ||
      !companyLocation ||
      !companyName ||
      !companyWebsite ||
      !recruiterEmail ||
      !recruiterPassword
    ) {
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    const recruiterData = {
      recruiterId: 0, // Assuming ID is auto-generated on the backend
      companyIndustry: companyIndustry,
      companyLocation: companyLocation,
      companyName: companyName,
      companyWebsite: companyWebsite,
      recruiterEmail: recruiterEmail,
      recruiterPassword: recruiterPassword,
    };

    try {
      const response = await axios.post(
        "http://localhost:7070/api/recruiters",
        recruiterData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSuccess("Recruiter created successfully!");
    } catch (error) {
      setError("Error creating recruiter. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavbarRecruiter/>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold text-xl mb-5">Recruiter Registration</h1>

          {/* Company Name */}
          <div className="my-2">
            <Label>Company Name</Label>
            <Input
              type="text"
              name="companyName"
              placeholder="Enter your company name"
              value={companyName}
              onChange={handleInputChange}
            />
          </div>

          {/* Company Industry */}
          <div className="my-2">
            <Label>Company Industry</Label>
            <Input
              type="text"
              name="companyIndustry"
              placeholder="Enter your company industry"
              value={companyIndustry}
              onChange={handleInputChange}
            />
          </div>

          {/* Company Location */}
          <div className="my-2">
            <Label>Company Location</Label>
            <Select
              name="companyLocation"
              value={companyLocation}
              onChange={handleInputChange}
            >
              <option value="">Select your company location</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Select>
          </div>

          {/* Company Website */}
          <div className="my-2">
            <Label>Company Website</Label>
            <Input
              type="url"
              name="companyWebsite"
              placeholder="Enter your company website"
              value={companyWebsite}
              onChange={handleInputChange}
            />
          </div>

          {/* Recruiter Email */}
          <div className="my-2">
            <Label>Recruiter Email</Label>
            <Input
              type="email"
              name="recruiterEmail"
              placeholder="Enter your email"
              value={recruiterEmail}
              onChange={handleInputChange}
            />
          </div>

          {/* Recruiter Password */}
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              name="recruiterPassword"
              placeholder="Enter your password"
              value={recruiterPassword}
              onChange={handleInputChange}
            />
          </div>

          {/* Error and Success Messages */}
          {error && <div className="text-red-500 mb-2">{error}</div>}
          {success && <div className="text-green-500 mb-2">{success}</div>}

          {/* Submit Button */}
          <div className="my-2">
            <button
              type="submit"
              className={`w-full px-4 py-2 bg-[#02367B] text-white font-bold rounded-md focus:outline-none ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
          <div className="my-2">
            <Link to="/loginrecruiter" className="text-blue-500 hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupRecruiter;
