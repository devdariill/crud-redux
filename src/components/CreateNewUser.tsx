import { Button, Card, TextInput, Title } from "@tremor/react"

function CreateNewUser(){
    return(
        <Card className="mt-5 gap-3 ">
            <Title>Crear nuevo usuario</Title>
            <form className="grid sm:flex gap-3">
            <TextInput placeholder="Nombre" />
            <TextInput placeholder="Email" />
            <TextInput placeholder="Github" />
            <div className="items-center flex-1 justify-center">
                <Button>Crear</Button>
            </div>
            </form>
        </Card>
    )
}
export default CreateNewUser