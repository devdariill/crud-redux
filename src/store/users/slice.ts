import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1 ",
		name: "John Doe",
		email: "jonh@gmail.com",
		github: "jonhdoe",
	},
	{
		id: "2",
		name: "Jane Doe",
		email: "janedoe@gmail.com",
		github: "janedoe",
	},
	{
		id: "3",
		name: "Darius Smith",
		email: "dariussmith@gmail.com",
		github: "dariussmith",
	},
];

export type UserId = string;
export interface User {
	name: string;
	email: string;
	github: string;
}
export interface UserWithId extends User {
	id: UserId;
}
// let initialState: UserWithId[] = DEFAULT_STATE;
// const persistedState = localStorage.getItem("__redux__state__");
// if (persistedState) {
// 	const parsedState = JSON.parse(persistedState);
// 	initialState = parsedState.users;
// }
const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
	// if (persistedState) {
	// 	const parsedState = JSON.parse(persistedState);
	// 	return parsedState.users;
	// }
	// return DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState, // [...initialState]
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			// deleteUserById: (state, action: { type: string; payload: UserId }) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const user = state.some((user) => user.id === action.payload.id);
			if (!user) return [...state, action.payload];
		},
	},
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;
