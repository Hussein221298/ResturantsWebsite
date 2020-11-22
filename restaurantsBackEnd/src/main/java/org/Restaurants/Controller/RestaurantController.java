package org.Restaurants.Controller;

import org.Restaurants.Entity.Restaurant;
import org.Restaurants.Service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.UUID;

@RestController
@RequestMapping ("/Restaurants")
public class RestaurantController {


    @Autowired
    private RestaurantService RestaurantService;


    @CrossOrigin("http://localhost:3000")
    @RequestMapping(method= RequestMethod.GET)
    public Collection<Restaurant> getAllRestaurants(){
        return RestaurantService.getAllRestaurants();
    }

//    @RequestMapping(value="/{id}",method=RequestMethod.PUT)
//    public boolean makeVisited (@PathVariable("id") UUID id){
//        return RestaurantService.makeVisited(id);
//    }
}
