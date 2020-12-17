# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: the foreign key would be Animal ID. It would be part of the sightings model.

  Researched answer:

  When you declare that one model belonds to another, you instruct rails to maintain primary-key foreign-key info between the two instances of models. Rails supports 6 kinds of association:
        belongs_to
        has_one
        has_many
        has_many :through
        has_one :through
        has_and_belongs_to_many



2. Which RESTful routes must always be passed params? Why?

  Your answer: show, edit, update and destroy

  Researched answer:

  POST, GET (for show & edit), PATCH & PUT (for update), & DELETE

  These are the routes that need params because they require us to identify parameters from the database in order to make sure the info is updated or created correctly.

  https://learn.co/lessons/sinatra-restful-routes-readme#:~:text=A%20RESTful%20route%20is%20a,HTTP%20verb%20and%20the%20URL.

  ALL the Restful Routes are GET POST SHOW PUT PATCH DELETE



3. Name three rails generator commands. What is created by each?

  Your answer:
  - rails generate uses a template to create things. if you just run 
  $ rails generate
  you can see what is available for you to use.


 $ rails generate model ModelNameHere
 $ rails generate resource 
 TableNameHere

  Researched answer:

  $ rails generate model ModelNameHere
  $ rails generate resource 
  $ rails generate controller ControllerName [options]
    - makes sure a bunch of directories were in our application, and created a controller file, a functional test file, a helper for the view, and a view file.
  $ rails generate generator
  $ rails generate scaffold 
    - this creates a full set of model, database migration for that model, controller to manipulate it, views to view and manipulate the data, and a test suite for each of the above.







4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /users    index      

method="GET"    /users/1  show

method="GET"    /users/new    new

method="GET"    /users/edit/1    create

method="POST"   /users/       edit

method="PUT"    /users/1      update

method="DELETE" /users/1      destroy



5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started. 

1. The user can see a page with the names of all the items on the to do list in order of due date and priority. This is the home page of the app. 
2. The user can click each of the names of the items on the above page and be brought to a separate page where they can view more details about that to do list item.
3. The user can see a button on the home page that says "Add a to do list item"
4. If the user clicks the above button, it will take them to another page with a form.
5. On the form page, the user will see fields that say "Item Name", "Details, "Due Date", and "Priority"
6. The user will be able to type their information into these fields and submit the information using a button at the bottom. If any of the fields are left blank by the user, the user will see a popup that says "*FieldName* is a required field. Please enter your information into *FieldName* to submit your to do list item."
7. On the details pages, the user will be able to see a button that says "Update this item." When they click it, they will be brought to a page with the form that allows them to submit a to do list item, but the fields will already be populated with the original info about the to-do list item they selected. They will then be able to change the info in these fields to reflect their desired edits.
8. The user will be able to click the submit button on the above page and see their changes reflected in the details page for the correct item.
9. On the details page for each item, the user will also see a button that says "Delete this item". When they click it, they will see a popup that says "Are you sure you would like to delete this item?" with 2 options that say "yes" & "no".
10. From any page, the user will see a button at the bottom that says "Back to to do list." This button will allow the user to navigate back to the home page.
