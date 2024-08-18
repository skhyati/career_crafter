import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "../ui/table";

function ApplicationTable() {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7070/applications/details"
        );
        setApplications(response.data);
      } catch (error) {
        setError("Error fetching applications");
        console.error(error);
      }
    };

    fetchApplications();
  }, []);

  const handleStatusChange = async (applicationId, newStatus) => {
    try {
      // Send the update request to the backend API
      await axios.put(
        `http://localhost:7070/applications/${applicationId}/status`,
        { status: newStatus }
      );

      // Update the application status in the state
      setApplications((prevApplications) =>
        prevApplications.map((application) =>
          application.applicationId === applicationId
            ? { ...application, applicationStatus: newStatus }
            : application
        )
      );
    } catch (error) {
      setError("Error updating application status");
      console.error(error);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white">
          <TableCaption>Job Applications</TableCaption>
          <TableHeader>
            <TableRow>
              <TableCell className="font-semibold">Application ID</TableCell>
              <TableCell className="font-semibold">Job Title</TableCell>
              <TableCell className="font-semibold">Job Seeker Name</TableCell>
              <TableCell className="font-semibold">Status</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.length > 0 ? (
              applications.map((application) => (
                <TableRow key={application.applicationId}>
                  <TableCell>{application.applicationId}</TableCell>
                  <TableCell>{application.jobTitle}</TableCell>
                  <TableCell>{application.jobSeekerFullName}</TableCell>
                  <TableCell>
                    <select
                      value={application.applicationStatus}
                      onChange={(e) =>
                        handleStatusChange(
                          application.applicationId,
                          e.target.value
                        )
                      }
                    >
                      <option value="APPLIED">APPLIED</option>
                      <option value="INTERVIEWED">INTERVIEWED</option>
                      <option value="SELECTED">SELECTED</option>
                      <option value="REJECTED">REJECTED</option>
                    </select>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="4" className="text-center py-4">
                  No applications available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ApplicationTable;
