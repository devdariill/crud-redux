import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow
} from "@tremor/react";
  
  const users: {
    id: string;
    name:string;
    email:string;
    github:string;
  }[] = [
    {
      id: "1",
      name: "John Doe",
      email: "jonh@gmail.com",
      github: "jonhdoe"
    },
    {
      id: "2",
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      github: "janedoe"
    },
    {
      id: "3",
      name: "Darius Smith",
      email: "dariussmith@gmail.com",
      github: "dariussmith"
    },
  ];
  
  export default function ListOfUsers() {
    return (
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell > Id </TableHeaderCell>
              <TableHeaderCell> Nombre </TableHeaderCell>             
              <TableHeaderCell > Email </TableHeaderCell>              
            </TableRow>
          </TableHead>
  
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.id}</TableCell>
                <TableCell style={{"display":"flex"}} className="items-center" >
                  <img style={{width: "32px", height:"32px", borderRadius:"50%", marginRight:"8px"}}  src={`https://unavatar.io/github/${item.github}`} alt={item.name}/>
                  {item.name}
                </TableCell>
                <TableCell >{item.email}</TableCell>
                <TableCell >
                  <button>Editar</button>
                  <button>Eliminar</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }