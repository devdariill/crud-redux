import { Badge, Button, Card, TextInput, Title } from "@tremor/react"
import { useState } from "react"
import { useUserActions } from "../hooks/useUserActions"

function CreateNewUser(){
  const {addUser}=useUserActions() 
  const[result , setResult]=useState<"ok"|"ko"|null>(null)
  // const handleSubmit=(event: React.FormEvent<HTMLFormEvent>)=>{
  const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    setResult(null)
    const form =event.target
    const formData=new FormData(form)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const github = formData.get("github") as string
    if(!name || !email || !github){
      return setResult('ko')
    }
    addUser({name,email,github})
    setResult('ok')
    form.reset()
  }
  return(
    <Card className="mt-5 gap-3 items-cente">
      <Title>Crear nuevo usuario</Title>
      <form className="grid sm:flex gap-3 items-center" onSubmit={handleSubmit}>
        <TextInput name="name" placeholder="Nombre" />
        <TextInput name="email" placeholder="Email" />
        <TextInput name="github" placeholder="Github" />
        <div className="items-center flex-1 justify-center">
          <Button>Crear</Button>
        </div>
        <span>
          {result === 'ok' && <Badge color="green">'Usuario creado'</Badge>}
          {result === 'ko' && <Badge color="red">'Error al crear el usuario'</Badge>}
        </span>
      </form>
    </Card>
  )
}
export default CreateNewUser