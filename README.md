# snax-errors-js

Basic snax errors library

| Name           | code | Description                                                                                        |
| :------------- | :--- | :------------------------------------------------------------------------------------------------- |
| AlreadyExists  | 1    | Means that something already exists                                                                |
| BadRequest     | 2    | Means that request payload is not valid                                                            |
| NotFound       | 3    | Means that something not found                                                                     |
| General        | 4    | Means that this error is representing common error and cannot be associated with other error types |
| Twitter        | 5    | Means that this error was returned from Twitter API                                                |
| Steemit        | 6    | Means that this error was returned from Steemit Chain                                              |
| Restriction    | 7    | Means that not authenticated or not allowed                                                        |
| InternalServer | 8    | Means that something in general wrong with the server side                                         |
| ResourcesUsage | 9    | Means that user don't have enough resources to send transactions to the chain                      |
