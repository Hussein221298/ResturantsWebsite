package org.Restaurants.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name="restaurants")
public class Restaurant {

    @Id
    @Column(name="id")
    private UUID id;

    @Column(name="name")
    private String name;

    @Column(name="type")
    private String type;

    @Column(name="address")
    private String address;

    @Column(name="Phonenb")
    private String phoneNb;

    @Column(name="avgcostfortwo")
    private int costForTwo;

    @Column(name="photolink")
    private String photo;

    @Column(name="visited")
    private boolean visited;

    @Column(name="visiteddate")
    private LocalDate visitDate;


    //constructors
    public Restaurant(UUID id, String name, String type, String address, String phoneNb, int costForTwo) {
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
    public void setId(UUID id) {this.id = id;}
    public void setName(String name) {this.name = name;}
    public void setType(String type) {this.type = type;}
    public void setAddress(String address) {this.address = address;}
    public void setPhoneNb(String phoneNb) {this.phoneNb = phoneNb;}
    public void setCostForTwo(int costForTwo) {this.costForTwo = costForTwo;}
    public void setVisited(boolean visited) {this.visited = visited;}
    public void setVisitDate(LocalDate visitDate) {this.visitDate = visitDate;}

    //getters
    public UUID getId() {return id;}
    public String getName() {return name;}
    public String getType() {return type;}
    public String getAddress() {return address;}
    public String getPhoneNb() {return phoneNb;}
    public int getCostForTwo() {return costForTwo;}
    public LocalDate getVisitDate() {return visitDate;}
    public boolean isVisited() {return visited;}
}
