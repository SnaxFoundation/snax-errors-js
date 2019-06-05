# snax-errors-js

Basic snax errors library

| Name                | code | Description                                                                                        |
| :------------------ | :--- | :------------------------------------------------------------------------------------------------- |
| AlreadyExistsError  | 1    | Means that something already exists                                                                |
| BadRequestError     | 2    | Means that request payload is not valid                                                            |
| NotFoundError       | 3    | Means that something not found                                                                     |
| GeneralError        | 4    | Means that this error is representing common error and cannot be associated with other error types |
| TwitterError        | 5    | Means that this error was returned from Twitter API                                                |
| SteemitError        | 6    | Means that this error was returned from Steemit Chain                                              |
| RestrictionError    | 7    | Means that not authenticated or not allowed                                                        |
| InternalServerError | 8    | Means that something in general wrong with the server side                                         |
| ResourcesUsageError | 9    | Means that user don't have enough resources to send transactions to the chain                      |
