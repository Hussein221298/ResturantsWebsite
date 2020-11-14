package org.Restaurants.Dao;

import org.Restaurants.Entity.Restaurant;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class RestaurantDao {
    private static Map<Integer, Restaurant> Restaurants;
    static {
        Restaurants = new HashMap<Integer, Restaurant>(){
            {
                put(1, new Restaurant(1, "Swiss Butter", "Lebanese", "jimayze", "01111111", 45000));
                put(2, new Restaurant(2, "Roadster", "Japanese", "Bliss", "01222222", 35000));
                put(3, new Restaurant(3, "Deek Duke", "american", "Hamra", "01333333", 30000));
                put(3, new Restaurant(4, "Chillis", "chinese", "Verdun", "01444444", 40000));
            }
        };
    }
    public Collection<Restaurant> getAllRestaurants(){
        return this.Restaurants.values();
    }
}
