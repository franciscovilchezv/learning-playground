package hello.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository{
    @Autowired
    JdbcTemplate jdbcTemplate;

    public final String GET_USERS =
            "SELECT id, name, email FROM user";


    public Object getUsers() {
        return jdbcTemplate.query(GET_USERS, new BeanPropertyRowMapper<>(User.class));
    }
}

