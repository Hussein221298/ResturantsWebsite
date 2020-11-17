package org.Restaurants.Service;

import org.Restaurants.Dao.RestaurantDao;
import org.Restaurants.Entity.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collection;
import java.util.UUID;

@Service
public class RestaurantService {

    @Autowired
    RestaurantDao RestaurantDao;

    public Collection<Restaurant> getAllRestaurants(){
        return RestaurantDao.findAll();
    }

    public boolean makeVisited(UUID id) {
        Restaurant rest = RestaurantDao.getOne(id);
        rest.setVisited(true);
        rest.setVisitDate(LocalDate.now());
        RestaurantDao.save(rest);   
        return true;
    }
}
