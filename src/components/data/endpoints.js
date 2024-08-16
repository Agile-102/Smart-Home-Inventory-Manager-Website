export const endpoints = [
    {
        // ROOM ENDPOINTS START HERE
        name: 'Adds a room to the user',
        route: 'vercel-api.com/room/addRoom',
        method: 'POST',
        category: 'Room',
        desc: "Checks if user already exists in database. If user doesn't exist, creates new user followed by the room, else create a room for the user. (Also checks for duplicate room names!)",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Name of room to add"
            }
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 502,
                code_desc: "Room(s) already exist",
                desc: 'Duplicate room found, choose another name',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: 'Retrieves all rooms of the user',
        route: 'vercel-api.com/room/getAllRooms',
        method: 'POST',
        category: 'Room',
        desc: "Checks the database and retrieves all rooms which belongs to the user. Request returns a response of a list of rooms.",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            }
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: 'Retrieves a specific rooms of a user',
        route: 'vercel-api.com/room/getRoom',
        method: 'POST',
        category: 'Room',
        desc: "Checks the database and retrieves the room which the user has specified.",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Name of chosen room"
            }
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Updates a room's name for a user",
        route: 'vercel-api.com/room/editRoom',
        method: 'PATCH',
        category: 'Room',
        desc: "Checks the database to see if the room exists before updating the name",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'oldName',
                desc: "Name of the room to update"
            },
            {
                name: 'newName',
                desc: "New name for the room"
            }
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Deletes a room for a user",
        route: 'vercel-api.com/room/deleteRoom',
        method: 'DELETE',
        category: 'Room',
        desc: "Checks the database to see if the room exists before deleting the room",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Name of the room to delete"
            }
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    // ROOM ITEMS ENDPOINT STARTS HERE
    {
        name: "Adds an item in a specified room",
        route: 'vercel-api.com/room/addItem',
        method: 'POST',
        category: 'Room - Item',
        desc: "Checks the database to see if the room exists before checking if the item exists. If room exists, check to see if there are duplicated items in the room. If not, adds an item to specified room.",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Name of the selected room"
            },
            {
                name: 'itemName',
                desc: "Name of the item to add"
            }
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 504,
                code_desc: "Item already exist",
                desc: 'Duplicate item found, choose another name',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Gets all items in a room of a user",
        route: 'vercel-api.com/room/getItemsOfRoom',
        method: 'POST',
        category: 'Room - Item',
        desc: "Checks the database to see if the room exists. If room exists and is not empty, returns a list of all items in specified room.",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Name of the selected room"
            }
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 505,
                code_desc: "Item(s) not found",
                desc: 'No items found in the room',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Updates an item's name in a room",
        route: 'vercel-api.com/room/editItem',
        method: 'PATCH',
        category: 'Room - Item',
        desc: "Checks the database to see if the room and item exists. If both exist, update the item's name",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Name of the selected room"
            },
            {
                name: 'oldname',
                desc: "Name of the selected item"
            },
            {
                name: 'newName',
                desc: "New name for item"
            },
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 505,
                code_desc: "Item(s) not found",
                desc: 'Item not found in the room',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Deletes an item from a specified room",
        route: 'vercel-api.com/room/deleteItem',
        method: 'DELETE',
        category: 'Room - Item',
        desc: "Checks the database to see if the room and item exists. If both exist, deletes the item from the room",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Name of the selected room"
            },
            {
                name: 'itemName',
                desc: "Name of the selected item"
            },
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 505,
                code_desc: "Item(s) not found",
                desc: 'Item not found in the room',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    // SUBSPACE ENDPOINTS START HERE
    {
        name: "Adds a subspace into a room of a user",
        route: 'vercel-api.com/subspace/addSpace',
        method: 'POST',
        category: 'Subspace',
        desc: "Checks the database to see if the room exists. If the room exists and no subspaces with similar names are found, adds the subspace to the room.",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Name of the selected room"
            },
            {
                name: 'spaceName',
                desc: "Name of the subspace to add"
            },
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 506,
                code_desc: "Subspace already exist",
                desc: 'Duplicate subspace found, choose another name',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Retrieves all subspaces of a user",
        route: 'vercel-api.com/subspace/getAllSpaces',
        method: 'POST',
        category: 'Subspace',
        desc: "Checks the database to see if user exists. If user exists, retrieves all subspaces belonging to that user.",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 507,
                code_desc: "Subspace not found",
                desc: 'No subspaces found',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Retrieves all subspaces of a room",
        route: 'vercel-api.com/subspace/getSpacesOfRoom',
        method: 'POST',
        category: 'Subspace',
        desc: "Checks the database to see if user and room exists. If both exists, returns all subspaces of the specified room.",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Chosen room's name"
            },
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 507,
                code_desc: "Subspace not found",
                desc: 'No subspaces found',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Retrieves information of a subspace",
        route: 'vercel-api.com/subspace/getSpecificSpace',
        method: 'POST',
        category: 'Subspace',
        desc: "Checks the database to see if user and room exists. If both exists, returns all subspaces of the specified room.",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'spaceName',
                desc: "Chosen room's name"
            },
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 507,
                code_desc: "Subspace not found",
                desc: 'No subspaces found',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Changes the name of a subspace",
        route: 'vercel-api.com/subspace/editSpace',
        method: 'PATCH',
        category: 'Subspace',
        desc: "Checks the database to see if user, room and subspace exists. If all exists, updates the name of the specified subspace with the new name.",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Room name of subspace"
            },
            {
                name: 'oldName',
                desc: "Chosen room's name"
            },
            {
                name: 'newName',
                desc: "New name of subspace"
            },
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 507,
                code_desc: "Subspace not found",
                desc: 'No subspaces found',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Deletes a subspace of a room",
        route: 'vercel-api.com/subspace/deleteSpace',
        method: 'DELETE',
        category: 'Subspace',
        desc: "Checks the database to see if user, room and subspace exists. If all exists, deletes the subspace from the room.",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Room name of subspace"
            },
            {
                name: 'spaceName',
                desc: "Name of subspace to delete"
            },
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 507,
                code_desc: "Subspace not found",
                desc: 'No subspaces found',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Adds an item to the subspace",
        route: 'vercel-api.com/subspace/addItem',
        method: 'POST',
        category: 'Subspace - Items',
        desc: "Checks the database to see if user, room and subspace exists. If all exists, adds an item into the subspace if there isn't another item in the same space with the same name.",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Chosen room name"
            },
            {
                name: 'spaceName',
                desc: "Chosen subspace name"
            },
            {
                name: 'itemName',
                desc: "Name of item to add"
            },
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 504,
                code_desc: "Item already exists",
                desc: 'Duplicate item found, choose another name',
                type: 'invalid'
            },
            {
                code: 507,
                code_desc: "Subspace not found",
                desc: 'No subspaces found',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Gets all items in a subspace of a room",
        route: 'vercel-api.com/subspace/getItemsInSpace',
        method: 'POST',
        category: 'Subspace - Items',
        desc: "Checks the database to see if user, room and subspace exists. If all exists, returns a list of all items present in specified subspace",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Chosen room name"
            },
            {
                name: 'spaceName',
                desc: "Chosen subspace name"
            },
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 505,
                code_desc: "Item not found",
                desc: 'No items found for subspace',
                type: 'invalid'
            },
            {
                code: 507,
                code_desc: "Subspace not found",
                desc: 'No subspaces found',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Edits an item's name in a subspace of a room",
        route: 'vercel-api.com/subspace/editItem',
        method: 'POST',
        category: 'Subspace - Items',
        desc: "Checks the database to see if user, room, subspace and item exists. If all exists, updates the item's name.",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Chosen room name"
            },
            {
                name: 'spaceName',
                desc: "Chosen subspace name"
            },
            {
                name: 'oldItemName',
                desc: "Chosen item's name"
            },
            {
                name: 'newItemName',
                desc: "New item name"
            },
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 505,
                code_desc: "Item not found",
                desc: 'No items found for subspace',
                type: 'invalid'
            },
            {
                code: 507,
                code_desc: "Subspace not found",
                desc: 'No subspaces found',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Deletes an item's from a subspace of a room",
        route: 'vercel-api.com/subspace/deleteItem',
        method: 'POST',
        category: 'Subspace - Items',
        desc: "Checks the database to see if user, room, subspace and item exists. If all exists, deletes the item from the subspace.",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'roomName',
                desc: "Chosen room name"
            },
            {
                name: 'spaceName',
                desc: "Chosen subspace name"
            },
            {
                name: 'itemName',
                desc: "Name of item to delete"
            },
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 503,
                code_desc: "No rooms found",
                desc: 'Room does not exist for user',
                type: 'invalid'
            },
            {
                code: 505,
                code_desc: "Item not found",
                desc: 'No items found for subspace',
                type: 'invalid'
            },
            {
                code: 507,
                code_desc: "Subspace not found",
                desc: 'No subspaces found',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    // ITEM ENDPOINTS STARTS HERE
    {
        name: "Retrieves a list of matching item names of a user, along with their locations.",
        route: 'vercel-api.com/item/getItem',
        method: 'POST',
        category: 'Items',
        desc: "Checks the database to see if user exists and checks if the item exists for the user",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
            {
                name: 'itemName',
                desc: "Name of item to retrieve"
            },
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 505,
                code_desc: "Item not found",
                desc: 'No items found for subspace',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
    {
        name: "Retrieves a list of matching item names of a user, along with their locations.",
        route: 'vercel-api.com/item/getAllItems',
        method: 'POST',
        category: 'Items',
        desc: "Checks the database to see if user exists. If user exists, returns a list of all items belonging to that user.",
        parameters: [
            {
                name: 'username',
                desc: "User's username"
            },
        ],
        response_codes: [
            {
                code: 200,
                code_desc: "Response OK",
                desc: 'Successful operation',
                type: 'success'
            },
            {
                code: 501,
                code_desc: "User not found",
                desc: 'User has not initiated contact with bot',
                type: 'invalid'
            },
            {
                code: 505,
                code_desc: "Item not found",
                desc: 'No items found for subspace',
                type: 'invalid'
            },
            {
                code: 400,
                code_desc: "Connection fail",
                desc: 'Network or Connection error',
                type: 'error'
            }
        ]
    },
]