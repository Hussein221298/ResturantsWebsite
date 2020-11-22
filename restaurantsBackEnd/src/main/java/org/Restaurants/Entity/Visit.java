package org.Restaurants.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;


@Entity
@Table(name="visits")
public class Visit {

    @Id
    private UUID vid;

    private LocalDate visitDate;

    @JsonIgnore
    @ManyToOne
    private Restaurant restaurant;

    @Transient
    private String restaurantName;

    public String getRestaurantName() {
        return getRestaurant().getName();
    }

    public void setRoleName(String restaurantName) {
        this.restaurantName = restaurantName;
    }
    //constructors
    public Visit() {}

    public Visit(Restaurant restaurant) {
        this.vid=UUID.randomUUID();
        this.restaurant = restaurant;
        this.visitDate = LocalDate.now();
    }

    //setters
    public void setVisitDate(LocalDate visitDate) {
        this.visitDate = visitDate;
    }

    public void setVid(UUID vid) {
        this.vid = vid;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    //getters
    public UUID getVid() {
        return vid;
    }

    public LocalDate getVisitDate() {
        return visitDate;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }
}
