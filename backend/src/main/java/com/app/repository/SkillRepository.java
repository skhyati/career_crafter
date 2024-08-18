package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Skill;

public interface SkillRepository extends JpaRepository<Skill,Long> {
	 Optional<Skill> findBySkillName(String name);
}
