package com.app.services.impl;

import com.app.dto.JobSeekerDTO;
import com.app.entity.JobSeeker;
import com.app.entity.Skill;
import com.app.entity.Subscription;
import com.app.repository.JobSeekerRepository;
import com.app.repository.SkillRepository;
import com.app.repository.SubscriptionRepository;
import com.app.service.JobSeekerService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JobSeekerServiceImpl implements JobSeekerService {

	@Autowired
	private JobSeekerRepository jobSeekerRepository;

	@Autowired
	private SkillRepository skillRepository;

	@Autowired
	private SubscriptionRepository subscriptionRepository;

	@Autowired
	private ModelMapper modelMapper;

	@PostConstruct
	public void setupModelMapper() {
		modelMapper.typeMap(JobSeeker.class, JobSeekerDTO.class).addMappings(mapper -> {
			mapper.map(src -> src.getSkill().getSkillId(), JobSeekerDTO::setSkillId);
			mapper.map(src -> src.getSubscription().getSubscriptionId(), JobSeekerDTO::setSubscriptionId);
		});

		modelMapper.typeMap(JobSeekerDTO.class, JobSeeker.class).addMappings(mapper -> {
			mapper.skip(JobSeeker::setSkill);
			mapper.skip(JobSeeker::setSubscription);
		});
	}

	@Override
	public JobSeekerDTO createJobSeeker(JobSeekerDTO jobSeekerDTO) {
		try {
			JobSeeker jobSeeker = modelMapper.map(jobSeekerDTO, JobSeeker.class);
			System.out.println("the job seeker id is " + jobSeeker.getJobSeekerId());
			Skill skill = skillRepository.findById(jobSeekerDTO.getSkillId())
					.orElseThrow(() -> new EntityNotFoundException("Skill not found"));
			jobSeeker.setSkill(skill);

			if (jobSeekerDTO.getSubscriptionId() != null) {
				Subscription subscription = subscriptionRepository.findById(jobSeekerDTO.getSubscriptionId())
						.orElseThrow(() -> new EntityNotFoundException("Subscription not found"));
				jobSeeker.setSubscription(subscription);
			}

			JobSeeker savedJobSeeker = jobSeekerRepository.save(jobSeeker);
			return modelMapper.map(savedJobSeeker, JobSeekerDTO.class);
		} catch (DataIntegrityViolationException e) {
			throw new RuntimeException("Job seeker with the same email or mobile number already exists.");
		}
	}

	@Override
	public JobSeekerDTO getJobSeekerById(Long jobSeekerId) {
		JobSeeker jobSeeker = jobSeekerRepository.findById(jobSeekerId)
				.orElseThrow(() -> new EntityNotFoundException("JobSeeker not found"));
		return modelMapper.map(jobSeeker, JobSeekerDTO.class);
	}

	@Override
	public List<JobSeekerDTO> getAllJobSeekers() {

		List<JobSeeker> jobSeekers = jobSeekerRepository.findAll();
		System.out.println(jobSeekers.get(0).getSubscription());
		return jobSeekers.stream().map(jobSeeker -> modelMapper.map(jobSeeker, JobSeekerDTO.class))
				.collect(Collectors.toList());
	}
	
	@Override
    public Optional<JobSeeker> login(String email, String password) {
        return jobSeekerRepository.findByJobSeekerEmailAndJobSeekerPassword(email, password);
    }

	@Override
	public JobSeekerDTO updateJobSeeker(Long jobSeekerId, JobSeekerDTO jobSeekerDTO) {
		try {
			JobSeeker jobSeeker = jobSeekerRepository.findById(jobSeekerId)
					.orElseThrow(() -> new EntityNotFoundException("JobSeeker not found"));
			jobSeeker.setJobSeekerFullName(jobSeekerDTO.getJobSeekerFullName());
			jobSeeker.setJobSeekerMobileNumber(jobSeekerDTO.getJobSeekerMobileNumber());
			jobSeeker.setJobSeekerProfileSummary(jobSeekerDTO.getJobSeekerProfileSummary());
			jobSeeker.setJobSeekerExperience(jobSeekerDTO.getJobSeekerExperience());
			jobSeeker.setJobSeekerResume(jobSeekerDTO.getJobSeekerResume());
			jobSeeker.setJobSeekerEmail(jobSeekerDTO.getJobSeekerEmail());
			jobSeeker.setJobSeekerPassword(jobSeekerDTO.getJobSeekerPassword());

			Skill skill = skillRepository.findById(jobSeekerDTO.getSkillId())
					.orElseThrow(() -> new EntityNotFoundException("Skill not found"));
			jobSeeker.setSkill(skill);

			if (jobSeekerDTO.getSubscriptionId() != null) {
				Subscription subscription = subscriptionRepository.findById(jobSeekerDTO.getSubscriptionId())
						.orElseThrow(() -> new EntityNotFoundException("Subscription not found"));
				jobSeeker.setSubscription(subscription);
			}

			JobSeeker updatedJobSeeker = jobSeekerRepository.save(jobSeeker);
			return modelMapper.map(updatedJobSeeker, JobSeekerDTO.class);
		} catch (DataIntegrityViolationException e) {
			throw new RuntimeException("Job seeker with the same email or mobile number already exists.");
		}
	}

	@Override
	public void deleteJobSeeker(Long jobSeekerId) {
		JobSeeker jobSeeker = jobSeekerRepository.findById(jobSeekerId)
				.orElseThrow(() -> new EntityNotFoundException("JobSeeker not found"));
		jobSeekerRepository.delete(jobSeeker);
	}
}
