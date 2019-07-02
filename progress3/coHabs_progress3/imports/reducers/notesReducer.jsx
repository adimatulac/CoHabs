import { FETCH_NOTES, ADD_NOTE, DELETE_NOTE } from '../actions/types';

// WHY IS STATE DIFFERENT FOR EACH CASE?
export default function notesReducer(state = initialState, action) {
	let tempState;
	switch (action.type) {
		case FETCH_NOTES:
			console.log('fetching notes ...');
			return state.notes;
		case ADD_NOTE:
			console.log('this is current state:')
			console.log(state);
			return addNote(state, action.payload);
		case DELETE_NOTE:
			// state is object or array?
			tempState = state;
			return (deleteNote(tempState, action.payload.id));
		default:
			return state;
	}
}

function addNote(notes, newNote) {
	const id = notes.length + 1;
	newNote['id'] = id;
	let newList = notes;
	return newList.concat(newNote);

	
	// PlayersList.insert({ name: "David", score: 0 });
}

function deleteNote(notes, givenID) {
	console.log('given id:')
	console.log(givenID);
	return notes.filter(note => {
		return note.id !== givenID;
	});
}

const initialState = {
	notes: [
		{
			id: 1, 
			message: "mom's in town!", 
			type: "event",
			date: "sunday"
		},
		{
			id: 2, 
			message: "cable guy coming to fix cable", 
			type: "home maintenance",
			date: "monday"
		},
		{
			id: 3, 
			message: "take out trash pls", 
			type: "chores",
			date: "tuesday"
		},
		{
			id: 4, 
			message: "vaccuum living room", 
			type: "chores",
			date: "wednesday"
		},
		{
			id: 5, 
			message: "jason's birthday", 
			type: "event",
			date: "thursday"
		},
		{
			id: 6, 
			message: "beach bbq", 
			type: "event",
			date: "friday"
		},
		{
			id: 7, 
			message: "walk sunny pls", 
			type: "chore",
			date: "saturday"
		}
	]
};