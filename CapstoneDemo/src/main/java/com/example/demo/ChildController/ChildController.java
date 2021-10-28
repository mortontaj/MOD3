package com.example.demo.ChildController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.ChildException.ResourceNotFoundException;
import com.example.demo.ChildModel.ChildModel;
import com.example.demo.ChildRepository.ChildRepository;


@CrossOrigin (origins = "http://localhost:3000")
@RestController 

//path for api
@RequestMapping ("/api/")


public class ChildController {
	
	@Autowired
	private ChildRepository childRepo; 
	
	
//get request URL: "/api/allchildren"
	
	@GetMapping ("/allchildren")
	public List<ChildModel> getAllChildren(){
		return childRepo.findAll();
	}
	
	@GetMapping ("/child/{id}")
	public ResponseEntity <ChildModel> getChildById(@PathVariable int id ){
		ChildModel s = childRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException());
		
		return ResponseEntity.ok(s);
	}
	
  	
  @PostMapping ("/addchild")
  public ChildModel updateItem(@RequestBody ChildModel z) {
	  System.out.println("post id: " + z.toString());
	  return childRepo.save(z);
  }
  
  @PutMapping ("/child/{id}")
  public ChildModel updateItem(@PathVariable int id, @RequestBody ChildModel z){
	  ChildModel old = childRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException()); 
	  old.setName(z.getName());
	  old.setAge(z.getAge());
	  old.setToy(z.getToy());
	  old.setCost(z.getCost());
	  System.out.println("Update id: " + id + z.toString());
	  return childRepo.save(old);
  }
  
  @DeleteMapping ("/child/{id}")
  public void deleteItem(@PathVariable int id) {
//	  ChildModel old = childRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException());
	  childRepo.deleteById(id);
	  System.out.println("Child " + id + " was deleted!");
  }
  
  
 /* @PatchMapping
    public Model updateItem(@RequestBody Model item) {
        return modelService.updateItem(item);
    }
 * put request
 * delete request
 * 
 */
	
	
}