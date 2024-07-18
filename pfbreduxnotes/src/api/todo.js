import {db} from '../firebase';
import {
	collection,
	addDoc,
	updateDoc,
	doc,
	deleteDoc,
} from 'firebase/firestore';

// TOGGLE COMPLETE
const toggleTodoStatus = async ({docId, status}) => {
	try {
		const todoRef = doc(db, 'todo', docId);
		await updateDoc(todoRef, {
			status,
		});
	} catch (error) {
		console.log(error);
	}
};

// ADD A TODO
const addTodo = async ({userId, title, description, status}) => {
	try {
		await addDoc(collection(db, 'todo'), {
			user: userId,
			title: title,
			description: description,
			status: status,
			createdAt: new Date().getTime(),
		});
	} catch (error) {}
};

// UPDATE A TODO
const updateTodo = async ({docId, title, description}) => {
	try {
		const todoRef = doc(db, 'todo', docId);
		await updateDoc(todoRef, {
			title,
			description,
		});
	} catch (error) {
		console.log(error);
	}
};

// DELETE A TODO
const deleteTodo = async (docId) => {
	try {
		const todoRef = doc(db, 'todo', docId);
		await deleteDoc(todoRef);
	} catch (error) {
		console.log(error);
	}
};

export {addTodo, toggleTodoStatus, deleteTodo, updateTodo};
