package org.Restaurants.Entity;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name="restaurants")
public class Restaurant {

    @Id
    private UUID id;

    private String name;

    private String type;

    private String address;

    private String phoneNb;

    private int costForTwo;

    private String photo;

    @JsonIgnore
    @OneToMany(targetEntity = Visit.class,  cascade = CascadeType.ALL)
    @JoinColumn(name = "id")
    private List<Visit> visits;




    //constructors
    public Restaurant(UUID id, String name, String type, String address, String phoneNb, int costForTwo) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.address = address;
        this.phoneNb = phoneNb;
        this.costForTwo = costForTwo;
        this.photo="https://i.ibb.co/WyrkMDw/NoImage.jpg";
    }

    public Restaurant() {}

    //setters
    public void setId(UUID id) {this.id = id;}
    public void setName(String name) {this.name = name;}
    public void setType(String type) {this.type = type;}
    public void setAddress(String address) {this.address = address;}
    public void setPhoneNb(String phoneNb) {this.phoneNb = phoneNb;}
    public void setCostForTwo(int costForTwo) {this.costForTwo = costForTwo;}
    public void setPhoto(String link) {this.photo = link;}
    public void setVisits(List<Visit> visits) {this.visits = visits;}


    //getters
    public UUID getId() {return id;}
    public String getName() {return name;}
    public String getType() {return type;}
    public String getAddress() {return address;}
    public String getPhoneNb() {return phoneNb;}
    public int getCostForTwo() {return costForTwo;}
    public String getPhoto() {return photo;}
    public List<Visit> getVisits() {return visits;}


}
