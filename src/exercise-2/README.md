# Exercise - 2

## Task
## As a new User to platform I want to change the password and notify user with an email regarding password change on successful update.


Criteria to change password
1. User should be in the system otherwise through an exception
2. user.oldPassword and given old password should match if user is not admin 
3. Old password and New Password shoudn't be same, otherwise through an exception
4. if user is admin then update directly without checking old password and new password comparison


```typescript
type User = {
    isAdmin: boolean;
    email: string;
    password: string;
}

function getUser(email) {
    // you dont need to write logic here assume this returns user or null 
}

function changePassword(email, oldPassword, newPassword){
    // write your logic here
}

```


--------

## Task - 2 | Sprint Time - 10 minutes

### As an Car Rental Service provider I want generate html statement and send bill for a customer who rented car.

`Current codebase generates statement already, new requirement is generate html statement`
