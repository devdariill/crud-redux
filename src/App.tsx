import { Toaster } from "sonner"
import CreateNewUser from "./components/CreateNewUser"
import ListOfUsers from "./components/ListOfUsers"

function App() {

  return (
   <main>
    <ListOfUsers/>
    <CreateNewUser/>
    <Toaster richColors/>
   </main>
  )
}

export default App
