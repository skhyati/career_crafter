import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableCaption, TableHeader, TableBody, TableRow, TableCell } from '../ui/table';
import { Button } from '../ui/button';

const CompaniesTable = () => {
  const [jobListings, setJobListings] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    recruiterName: '',
    skillName: ''
  });

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:7070/api/joblistings') // Replace with your actual endpoint
      .then((response) => {
        setJobListings(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the job listings!", error);
      });
  }, []);

  const handleAddNewClick = () => {
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Send the JSON data directly to the backend
    axios.post('http://localhost:7070/api/joblistings', formData)
      .then(response => {
        setJobListings(prev => [...prev, response.data]);
        setShowForm(false);
        setFormData({
          jobTitle: '',
          jobDescription: '',
          recruiterName: '',
          skillName: ''
        });
      })
      .catch(error => {
        console.error("There was an error adding the job listing!", error);
      });
  };

  return (
    <div className="overflow-x-auto">
      <Button onClick={handleAddNewClick} className="mb-4 p-2 text-white rounded">
        Add New Job Listing
      </Button>
      {showForm && (
        <form onSubmit={handleFormSubmit} className="mb-4 p-4 border border-gray-300 rounded bg-white">
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleFormChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">Job Description</label>
            <textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleFormChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">Recruiter Name</label>
            <input
              type="text"
              name="recruiterName"
              value={formData.recruiterName}
              onChange={handleFormChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">Skill Name</label>
            <input
              type="text"
              name="skillName"
              value={formData.skillName}
              onChange={handleFormChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="ml-2 bg-gray-500 text-white p-2 rounded"
          >
            Cancel
          </button>
        </form>
      )}
      <Table className="min-w-full bg-white">
        <TableCaption>A List Of Your Recent Job Listings</TableCaption>
        <TableHeader>
          <TableRow>
            <TableCell className="font-semibold">Job ID</TableCell>
            <TableCell className="font-semibold">Job Title</TableCell>
            <TableCell className="font-semibold">Job Description</TableCell>
            <TableCell className="font-semibold">Recruiter Name</TableCell>
            <TableCell className="font-semibold">Skill Name</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobListings.length > 0 ? (
            jobListings.map((job) => (
              <TableRow key={job.jobId}>
                <TableCell>{job.jobId}</TableCell>
                <TableCell>{job.jobTitle}</TableCell>
                <TableCell>{job.jobDescription}</TableCell>
                <TableCell>{job.recruiterName}</TableCell>
                <TableCell>{job.skillName}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="5" className="text-center py-4">
                No job listings available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
