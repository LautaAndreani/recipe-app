import { Table, Thead, Tr, Th, Tbody, Td, Text } from "@chakra-ui/react";
import { IngredientsProps } from "../../types/interfaces";
interface TableTypes {
  tableContent: IngredientsProps[];
}


const TableComp = ({tableContent}: TableTypes) => {
  return (
    <Table>
        <Thead>
          <Tr>
            <Th color="white">Nombre</Th>
            <Th color="white">Cantidad</Th>
          </Tr>
        </Thead>
        <Tbody>
        <Tr>
        </Tr>
        </Tbody>
    </Table>
  )
}

export default TableComp;