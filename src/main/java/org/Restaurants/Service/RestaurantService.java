package org.Restaurants.Service;

import org.Restaurants.Dao.RestaurantDao;
import org.Restaurants.Entity.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class RestaurantService {

    @Autowired
    RestaurantDao RestaurantDao;

    public Collection<Restaurant> getAllRestaurants(){
        return RestaurantDao.findAll();
    }
}
