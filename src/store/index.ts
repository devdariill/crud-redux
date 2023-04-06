import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { rollbackUser } from "./users/slice";

const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		console.log(store.getState()); // before action
		console.log(action); // action
		next(action);
		console.log(store.getState()); // after action
		localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
	};
const syncWhitDatabaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		const { type, payload } = action;
		const previuseState = store.getState();
		next(action);
		console.log({ type, payload });
		if (type === "users/deleteUserById") {
			const userIdToRemove = payload;
			const userToRemove = previuseState.users.find(
				(user) => user.id === userIdToRemove,
			);
			fetch(
				`https://jsonplaceholder.typicode.cdfdfgdfgom/users/${userIdToRemove}`,
				{
					method: "DELETE",
				},
			)
				.then((res) => {
					if (res.ok) {
						toast.success("User deleted");
					}
					throw new Error("Error deleting user");
				})
				.catch((_) => {
					if (userToRemove) store.dispatch(rollbackUser(userToRemove));
					toast.error("Error deleting user");
				});
		}
		console.log({ action, state: store.getState() }); // before action
		console.log(action); // action
	};
export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistanceLocalStorageMiddleware, syncWhitDatabaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
