import Container from "../components/Container";
import { Button, } from "flowbite-react";

import { Table } from "flowbite-react";
import SectionItem from "./SectionItem";
import SectionSearch from "./SectionSearch";

import { useState } from "react";
import { ModalPopup } from "../components/Modal";




function SectionTable() {
  let [openModal, setOpenModal] = useState(false)
  return (





    <Container>

        <div className="flex items-start">

        <Button  onClick={() => {setOpenModal(true)}} className="mr-3" color="failure">Add Task</Button>
        <Button className="bg-green-500 dark: decoration-black" color="">Clear Tasks</Button>
      

        </div>


      

        <div className="p-2 border rounded-md my-7">
            <SectionSearch/>
            <div className="overflow-x-auto">
      <Table hoverable>           
        <Table.Head>
          <Table.HeadCell> Product name</Table.HeadCell> 
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Assigned To</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>          
          <Table.HeadCell>Price&Color</Table.HeadCell>
        
        </Table.Head>
        <Table.Body className="divide-y">

       <SectionItem/>
       <SectionItem/>
       <SectionItem/>
       <SectionItem/>

        
        </Table.Body>
      </Table>
    </div>
        </div>
        <ModalPopup onOpen={openModal} onClose={() => setOpenModal(false)}/>
    </Container>
  )
}

export default SectionTable


     














