package org.Restaurants.Service;

import org.Restaurants.Dao.RestaurantDao;
import org.Restaurants.Entity.Restaurant;
import org.Restaurants.Entity.Visit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;
import java.util.UUID;

@Service
public class RestaurantService {

    @Autowired
    RestaurantDao RestaurantDao;

    public Collection<Restaurant> getAllRestaurants(){
        return RestaurantDao.findAll();
    }

    public Optional<Restaurant> getRestaurant(UUID restaurantId){
        return RestaurantDao.findById(restaurantId);
    }
}

//    public boolean makeVisited(UUID id) {
//        Restaurant rest = RestaurantDao.getOne(id);
//        rest.setVisited(true);
//        rest.setVisitDate(LocalDate.now());
//        RestaurantDao.save(rest);
//        return true;
//    }
