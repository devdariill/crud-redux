import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}
export interface UserWithId extends User {
	id: string;
}
const initialState: UserWithId[] = [
	{
		id: "1",
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
		github: "midudev",
	},
];

export const usersSlice = createSlice({
	name: "users",
	initialState, // [...initialState]
	reducers: {},
});

export default usersSlice.reducer;
