package com.mochijump.stubserver;

import com.mochijump.stubserver.Level;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface LevelRepository extends CrudRepository<Level, Long> {
	public List<Level> findByLevelName(String levelName);

}
