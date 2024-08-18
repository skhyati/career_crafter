package com.app.service;

import com.app.dto.JobSeekerDTO;
import com.app.entity.JobSeeker;

import java.util.List;
import java.util.Optional;

public interface JobSeekerService {
	JobSeekerDTO createJobSeeker(JobSeekerDTO jobSeekerDTO);

	JobSeekerDTO getJobSeekerById(Long jobSeekerId);

	List<JobSeekerDTO> getAllJobSeekers();

	JobSeekerDTO updateJobSeeker(Long jobSeekerId, JobSeekerDTO jobSeekerDTO);

	void deleteJobSeeker(Long jobSeekerId);
	
	Optional<JobSeeker> login(String email, String password);
	
}
