//Controllers are the fuctions that handle the requests and send responses
//They are imported in the routes file and used as middleware for specific routes
//They are pul inside the routes to call the functions when the route is hit

export function getAllNotes (req, res) {
    res.status(200).send('List of notes');
};

export function createNote (req, res) {
    res.status(201).json({message: 'Note created'});
} 

export function updateNote (req, res) {
    res.status(200).send({message: `Note ${req.params.id} updated`});
}

export function deleteNote (req, res) {
    res.status(200).send({message: `Note ${req.params.id} deleted`});
}