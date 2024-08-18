package com.app.controller;

import com.app.dto.JobSeekerDTO;
import com.app.dto.LoginRequest;
import com.app.entity.JobSeeker;
import com.app.service.JobSeekerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/jobseekers")
@CrossOrigin("*")
public class JobSeekerController {

	@Autowired
	private JobSeekerService jobSeekerService;

	@PostMapping("/createJobSeeker")
	public ResponseEntity<JobSeekerDTO> createJobSeeker(@RequestBody JobSeekerDTO jobSeekerDTO) {
		try {
			JobSeekerDTO createdJobSeeker = jobSeekerService.createJobSeeker(jobSeekerDTO);
			return ResponseEntity.ok(createdJobSeeker);
		} catch (RuntimeException e) {
			// Log the error and return a proper response
			return ResponseEntity.badRequest().body(null);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<JobSeekerDTO> getJobSeekerById(@PathVariable Long id) {
		JobSeekerDTO jobSeekerDTO = jobSeekerService.getJobSeekerById(id);
		return ResponseEntity.ok(jobSeekerDTO);
	}

	@GetMapping
	public ResponseEntity<List<JobSeekerDTO>> getAllJobSeekers() {
		List<JobSeekerDTO> jobSeekers = jobSeekerService.getAllJobSeekers();
		System.out.println(jobSeekers.get(0).getSubscriptionId());
		return ResponseEntity.ok(jobSeekers);
	}

	@PutMapping("/{id}")
	public ResponseEntity<JobSeekerDTO> updateJobSeeker(@PathVariable Long id, @RequestBody JobSeekerDTO jobSeekerDTO) {
		try {
			JobSeekerDTO updatedJobSeeker = jobSeekerService.updateJobSeeker(id, jobSeekerDTO);
			return ResponseEntity.ok(updatedJobSeeker);
		} catch (RuntimeException e) {
			return ResponseEntity.badRequest().body(new JobSeekerDTO());
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteJobSeeker(@PathVariable Long id) {
		jobSeekerService.deleteJobSeeker(id);
		return ResponseEntity.noContent().build();
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
		Optional<JobSeeker> jobSeeker = jobSeekerService.login(loginRequest.getEmail(), loginRequest.getPassword());
		if (jobSeeker.isPresent()) {
			return ResponseEntity.ok(jobSeeker.get());
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
		}
	}

}
