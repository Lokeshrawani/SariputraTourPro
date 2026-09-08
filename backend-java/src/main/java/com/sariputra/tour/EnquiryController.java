package com.sariputra.tour;
import java.util.Map; import org.springframework.web.bind.annotation.*;
@RestController @RequestMapping("/api")
public class EnquiryController {
 @GetMapping("/health") public Map<String,String> health(){return Map.of("status","ok","service","Sariputra Java Tour API");}
 @PostMapping("/enquiry") public Map<String,Object> enquiry(@RequestBody Map<String,Object> data){return Map.of("ok",true,"message","Enquiry received","data",data);}
}