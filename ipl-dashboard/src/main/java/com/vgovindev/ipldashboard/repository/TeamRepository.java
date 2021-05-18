package com.vgovindev.ipldashboard.repository;

import com.vgovindev.ipldashboard.model.Team;

import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long>{
    Team findByTeamName(String teamName);
}
