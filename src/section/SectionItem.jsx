import { Table } from "flowbite-react";

function SectionItem() {
  return (
    <Table.Row className="font-bold bg-white dark:border-black-700 dark:bg-gray-800">
          
          <Table.Cell>Accessories</Table.Cell>
          <Table.Cell>Create an API by using platform</Table.Cell>
          <Table.Cell>Kawser Ramadan</Table.Cell>
          <Table.Cell>Height</Table.Cell>
          <Table.Cell>
            <a href="#" className="mr-3 font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Edit
            </a>
            <a href="#" className="items-start font-medium text-rose-600 hover:underline dark:text-rose-500">
              Delete
            </a>
          </Table.Cell>
        </Table.Row>
  )
}

export default SectionItem