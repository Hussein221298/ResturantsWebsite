package org.Restaurants.Entity;

import java.time.LocalDate;

public class Restaurant {
    private int id;
    private String name;
    private String type;
    private String address;
    private String phoneNb;
    private int costForTwo;
    private boolean visited;
    private LocalDate visitDate;


    //constructors
    public Restaurant(int id, String name, String type, String address, String phoneNb, int costForTwo) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.address = address;
        this.phoneNb = phoneNb;
        this.costForTwo = costForTwo;
        this.visited = false;
        this.visitDate = null;
    }

    public Restaurant() {}

    //setters
    public void setId(int id) {this.id = id;}
    public void setName(String name) {this.name = name;}
    public void setType(String type) {this.type = type;}
    public void setAddress(String address) {this.address = address;}
    public void setPhoneNb(String phoneNb) {this.phoneNb = phoneNb;}
    public void setCostForTwo(int costForTwo) {this.costForTwo = costForTwo;}
    public void setVisited(boolean visited) {this.visited = visited;}
    public void setVisitDate(LocalDate visitDate) {this.visitDate = visitDate;}

    //getters
    public int getId() {return id;}
    public String getName() {return name;}
    public String getType() {return type;}
    public String getAddress() {return address;}
    public String getPhoneNb() {return phoneNb;}
    public int getCostForTwo() {return costForTwo;}
    public LocalDate getVisitDate() {return visitDate;}
    public boolean isVisited() {return visited;}
}
