package org.Restaurants.Dao;

import org.Restaurants.Entity.Visit;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import java.util.UUID;

public interface VisitDao extends JpaRepositoryImplementation <Visit, UUID> {
}

