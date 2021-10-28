package com.example.demo.ChildRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.ChildModel.ChildModel;

import java.util.List;

@Repository
public interface ChildRepository extends JpaRepository <ChildModel, Integer> {
	
	List <ChildModel> findByName(String name);

}