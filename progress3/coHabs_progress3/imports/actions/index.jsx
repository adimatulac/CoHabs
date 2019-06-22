import { FETCH_NOTES, ADD_NOTE, DELETE_NOTE } from './types';

export const addNote = (data) => {
	return  {
		type: ADD_NOTE,
		payload: {
			id: data.id,
			message: data.message,
			type: data.type,
			date: data.date
		}
	}
}

export const deleteNote = (id) => {
	return {
		type: DELETE_NOTE,
		payload: {
			id
		}
	}
}

export const fetchAllNotes = (NOTES) => {
	return {
		type: FETCH_NOTES,
		payload: NOTES
	}
}