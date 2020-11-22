package org.Restaurants.Dao;

import org.Restaurants.Entity.Restaurant;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import java.util.UUID;


public interface RestaurantDao extends JpaRepositoryImplementation <Restaurant,UUID> {
}
