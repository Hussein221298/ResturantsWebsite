package org.Restaurants.Service;

import org.Restaurants.Dao.VisitDao;
import org.Restaurants.Entity.Restaurant;
import org.Restaurants.Entity.Visit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Collection;
import java.util.Optional;
import java.util.UUID;

@Service
public class VisitService {

    @Autowired
    private VisitDao VisitDao;

    @Autowired
    private RestaurantService RestaurantService;

    public Collection<Visit> getAllVisits(){
        return VisitDao.findAll();
    }

    public Optional<Visit> getVisit(UUID vid){
        return VisitDao.findById(vid);
    }

    public boolean makeVisited(UUID id) {
        Optional<Restaurant> restaurant = RestaurantService.getRestaurant(id);
        if (restaurant.isPresent()){
            Visit visitDate= new Visit(restaurant.get());
            VisitDao.save(visitDate);
            return true;
        }
        return false;

    }
}