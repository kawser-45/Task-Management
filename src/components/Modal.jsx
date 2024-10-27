




import { Button, Modal, Select, Checkbox, Label, TextInput, Textarea} from "flowbite-react";
import { useState } from "react";

export function ModalPopup({onOpen,onClose}) {

let [data, setData] = useState({
   Title: '',
   message: '',
  country: '',
});

  let changeHandler = (e) => {
    let newObject= {
      ...data,
      // title: 'something'
      title: e. target.value,
    }

    setData(newObject);
  }

console.log(data);


  


  let submitHandler = (event) => {
      event.preventDefault();
      let title = event.target.querySelector("[name='title']").value;
      console.log(title);
      let error ='how are you and you';

      if (data, title == '') {
        alert ('The Title field is required.');
      }
      
  }



  return (
    <>
     
      <Modal show={onOpen} onClose ={() => onClose()}>   
        <Modal.Header>Add Task </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          <form action="" onSubmit={submitHandler}>
          <div>
        <div className="block mb-2">
          <Label htmlFor="title" value=" Title" />
        </div>
        <TextInput name="title" onChange={changeHandler} id="title" type="text"/>
      </div>

          <div className="max-w-md">
          <div className="block mb-2">
            <Label htmlFor="comment" value=" message" />
          </div>
          <Textarea id="comment" rows={4} />
        </div>
        
       <div className="flex flex-wrap mt-3 ">
      <div className="w-1/3 pr-6">
      <div className="block mb-2">
        <Label htmlFor="countries" value=" country" />
      </div>
      <Select onChange={changeHandler} name="countries">
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>
    </div>
      

      <div className="w-1/3">
      <div className="block mb-2">
        <Label htmlFor="countries" value="Select your country" />
      </div>
      <Select id="Assign">
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
        
      </Select>
    </div>
       </div>
          <Button type="submit" className="mt-4">I accept</Button>
          </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

