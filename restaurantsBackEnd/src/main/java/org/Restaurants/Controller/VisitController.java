package org.Restaurants.Controller;

import org.Restaurants.Service.VisitService;
import org.Restaurants.Entity.Visit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.UUID;

@RestController
@RequestMapping("/Visits")
public class VisitController {


    @Autowired
    private  VisitService VisitService;



    @CrossOrigin("http://localhost:3000")

    @RequestMapping(method= RequestMethod.GET)
    public Collection<Visit> getAllVisits(){
        return VisitService.getAllVisits();
    }


    @CrossOrigin("http://localhost:3000")
    @PostMapping(path = "{id}")
    public ResponseEntity<Boolean> makeVisited(@PathVariable("id") UUID id){
        boolean done = VisitService.makeVisited(id);
        if (done){
            return new ResponseEntity<>(true,HttpStatus.OK);}
        else {
            return new ResponseEntity<>(false,HttpStatus.BAD_REQUEST);}

    }



}
