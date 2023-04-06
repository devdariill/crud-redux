import { Button, Card, TextInput, Title } from "@tremor/react"
import { useUserActions } from "../hooks/useUserActions"

function CreateNewUser(){
  const {addUser}=useUserActions() 
  // const handleSubmit=(event: React.FormEvent<HTMLFormEvent>)=>{
  const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    const form =event.target
    const formData=new FormData(form)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const github = formData.get("github") as string

    addUser({name,email,github})
  }
  return(
    <Card className="mt-5 gap-3 ">
      <Title>Crear nuevo usuario</Title>
      <form className="grid sm:flex gap-3" onSubmit={handleSubmit}>
      <TextInput name="name" placeholder="Nombre" />
      <TextInput name="email" placeholder="Email" />
      <TextInput name="github" placeholder="Github" />
      <div className="items-center flex-1 justify-center">
          <Button>Crear</Button>
      </div>
      </form>
    </Card>
  )
}
export default CreateNewUser