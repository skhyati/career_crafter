package com.app.dto;

public class JobSeekerDTO {

	private Long jobSeekerId;
	private String jobSeekerFullName;
	private String jobSeekerMobileNumber;
	private String jobSeekerProfileSummary;
	private Long jobSeekerExperience;
	private byte[] jobSeekerResume;
	private String jobSeekerEmail;
	private String jobSeekerPassword;
	private String location;
	private Long skillId;
	private Long subscriptionId;

	// Constructors
	public JobSeekerDTO() {
	}

	public JobSeekerDTO(Long jobSeekerId, String jobSeekerFullName, String jobSeekerMobileNumber,
			String jobSeekerProfileSummary, Long jobSeekerExperience, byte[] jobSeekerResume, String jobSeekerEmail,
			String jobSeekerPassword, Long skillId, Long subscriptionId) {
		this.jobSeekerId = jobSeekerId;
		this.jobSeekerFullName = jobSeekerFullName;
		this.jobSeekerMobileNumber = jobSeekerMobileNumber;
		this.jobSeekerProfileSummary = jobSeekerProfileSummary;
		this.jobSeekerExperience = jobSeekerExperience;
		this.jobSeekerResume = jobSeekerResume;
		this.jobSeekerEmail = jobSeekerEmail;
		this.jobSeekerPassword = jobSeekerPassword;
		this.skillId = skillId;
		this.subscriptionId = subscriptionId;
	}

	// Getters and Setters
	public Long getJobSeekerId() {
		return jobSeekerId;
	}

	public void setJobSeekerId(Long jobSeekerId) {
		this.jobSeekerId = jobSeekerId;
	}

	public String getJobSeekerFullName() {
		return jobSeekerFullName;
	}

	public void setJobSeekerFullName(String jobSeekerFullName) {
		this.jobSeekerFullName = jobSeekerFullName;
	}

	public String getJobSeekerMobileNumber() {
		return jobSeekerMobileNumber;
	}

	public void setJobSeekerMobileNumber(String jobSeekerMobileNumber) {
		this.jobSeekerMobileNumber = jobSeekerMobileNumber;
	}

	public String getJobSeekerProfileSummary() {
		return jobSeekerProfileSummary;
	}

	public void setJobSeekerProfileSummary(String jobSeekerProfileSummary) {
		this.jobSeekerProfileSummary = jobSeekerProfileSummary;
	}

	public Long getJobSeekerExperience() {
		return jobSeekerExperience;
	}

	public void setJobSeekerExperience(Long jobSeekerExperience) {
		this.jobSeekerExperience = jobSeekerExperience;
	}

	public byte[] getJobSeekerResume() {
		return jobSeekerResume;
	}

	public void setJobSeekerResume(byte[] jobSeekerResume) {
		this.jobSeekerResume = jobSeekerResume;
	}

	public String getJobSeekerEmail() {
		return jobSeekerEmail;
	}

	public void setJobSeekerEmail(String jobSeekerEmail) {
		this.jobSeekerEmail = jobSeekerEmail;
	}

	public String getJobSeekerPassword() {
		return jobSeekerPassword;
	}

	public void setJobSeekerPassword(String jobSeekerPassword) {
		this.jobSeekerPassword = jobSeekerPassword;
	}

	public Long getSkillId() {
		return skillId;
	}

	public void setSkillId(Long skillId) {
		this.skillId = skillId;
	}

	public Long getSubscriptionId() {
		return subscriptionId;
	}

	public void setSubscriptionId(Long subscriptionId) {
		this.subscriptionId = subscriptionId;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

}
