#!/bin/bash
echo creating user $MONGO_USERNAME

mongo -- "$MONGO_INITDB_DATABASE" <<-EOJS
    var rootUser = '$MONGO_INITDB_ROOT_USERNAME';
    var rootPassword = '$MONGO_INITDB_ROOT_PASSWORD';
    var admin = db.getSiblingDB('admin');
    admin.auth(rootUser, rootPassword);
    
    var user = '$MONGO_USERNAME';
    var password = '$MONGO_PASSWORD';
    
    db.createUser({user: user, pwd: password, roles: ["readWrite"]});
EOJS