
# Pastry App

Second Module Project for Ironhack Wed Development Bootcamp

- Name: TartApp

- Autoras: Melissa Meléndez Zamora, Belén Olías Ericsson

- v1.0.0



## Endpoints


| ENDPOINT                  | METHOD |  DESCRIPTION OF RESPONSE                                           |
|---------------------------|--------|--------------------------------------------------------------------|
| /                         | GET    | Home Page                                                          |
| /welcome                  | GET    | Render the page with the welcome menu \(Places, Recipes, Profile\) |
| /login                    | GET    | Render the login form                                              |
| /login                    | POST   | 204 if successful                                                  |
| /signup                   | GET    | Render the signup form                                             |
| /signup                   | POST   | 204 if successful                                                  |
| /logout                   | GET    | Close session                                                      |
| /recipes                  | GET    | Render the list of all recipes                                     |
| /recipes/new              | GET    | Render the create recipe form                                      |
| /recipes/new              | POST   | 204 if successful                                                  |
| /recipes/:recipe\_id      | GET    | Render the specific recipe details view                            |
| /recipes/:recipe\_id/edit | GET    | Render the edit recipe form                                        |
| /recipes/:recipe\_id/edit | POST   | 204 if successful                                                  |
| /places                   | GET    | Render the list of all places                                      |
| /places/new               | GET    | Render the create place form                                       |
| /places/new               | POST   | 204 if successful                                                  |
| /profile                  | GET    | Render the user's profile                                          |
| /profile/myRecipes        | GET    | Render the user's saved recipe                                     |
| /profile/myRecipes        | POST   | 204 if succesful                                                   |


 
