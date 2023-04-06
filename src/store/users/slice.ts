import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;
export interface User {
	name: string;
	email: string;
	github: string;
}
export interface UserWithId extends User {
	id: UserId;
}
const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
	name: "users",
	initialState, // [...initialState]
	reducers: {
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			// deleteUserById: (state, action: { type: string; payload: UserId }) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions;
