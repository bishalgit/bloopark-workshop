# User Story
Futsal is a very refreshing and team building sport. There are so many futsal grounds all over the world. In this project we want to connect futsal ground owners and futsal users. Our main goal in this first sprint is to have basic skeleton ready. 

The main idea here is futsal owners and users can login to their portals.
- Owners will add their grounds.
- Owners will add/update available slots.
- Users will book the ground they want.  

# CASE 3
- Create a base module if it doesn't exist.
- Create a model for recording futsal users.
    - You can use res.partner or new model 
    - Add basic fields
- Create a model for booking grounds by users.
    - Assume ground can only be booked for whole day. So no need to create time slots for now. 
    - Add basic fields
    - Add a method from where selected records could be made booked at once
    - Connect with owner model
