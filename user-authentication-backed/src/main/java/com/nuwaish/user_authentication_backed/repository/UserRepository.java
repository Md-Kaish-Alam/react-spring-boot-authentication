package com.nuwaish.user_authentication_backed.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.nuwaish.user_authentication_backed.userModel.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    @Query("{email :?0}")
    User findByEmail(String email);
}
