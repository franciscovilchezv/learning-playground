package hello.user;

import com.sun.prism.impl.ResourcePool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository ;

    @RequestMapping("/users")
    public Object getUser(){
        return userRepository.getUsers();
    }
}
