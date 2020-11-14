package org.Restaurants.Controller;

import org.Restaurants.Entity.Restaurant;
import org.Restaurants.Service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping ("/Restaurants")
public class RestaurantController {
    @Autowired
    private RestaurantService RestaurantService;

    @RequestMapping(method= RequestMethod.GET)
    public Collection<Restaurant> getAllRestaurants(){
        return RestaurantService.getAllRestaurants();
    }
}
