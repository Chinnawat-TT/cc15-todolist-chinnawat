import { useState } from "react";
import styles from "./TodoCreate.module.scss";
import TodoForm from "./TodoForm";
import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
/* 
#CC1 condition rendering
- Default : show button & text
- Active : show TodoForm
concept : ture ? <AddTask/> :<TodoForm/>  => render <Addtask/>
concept : false ? <AddTask/> :<TodoForm/>  => render <TodoForm/>
*/

/*
#CC2 event handling
  - เอาฟังก์ชัั่นไปผูกติดกับ UI เพื่อให้  USER  เป็นคนเรียกฟังก์ชั่นเอง
  - onClick : ต้อง  click ก่อน, Fn ถึงจะรัน
    - User  ทำการคลิก
    - Browser จะเป็นคนเรียกใช้ฟังก์ชั่น โดยส่ง parameter มา 1 ตัว handleClick(evenObject)

 */

/*
#CC3 JS value ไม่สามารถทำให้ React Rerender ได้
ต้องใช้  state
*/

/*
#CC4 Array Destruring 
function myUseState(){
  return [5,9]
}
let [a,b] = myUseState()
a= 5
b= 9

*/

/*
#CC5 React State  (1 ในฟังก์ชั่นของกลุ่ม  React Hook)
const [ state,setState ] = useState(initiaState:any)
  element 1 current state
  element 2 Fn สำหรับ setState
  เมื่อ  state  เปลี่ยน  Function Component จะ  Rerender
  Rerender 1 ครั้ง  == code ทั้งหมดใน FC จะถูกรันใหม่ 1 ครั้ง
*/

// #1 : FC = Function Component (Render)
function TodoCreate() {
  // Hook FN
  const [ isOpenForm,setIsOpenForm ]=useState(false)

  // #2 :  JS Function (Logic)
  const handleClick = function (event) {
    setIsOpenForm(!isOpenForm)
    console.log("clicked")

  };

  return (
    <>
      {isOpenForm ? (
       <TodoForm textSubmit="Add Task" setIsOpenForm={setIsOpenForm}/> //  ส่ง ฟังก์ชั้นของ setstate ไปใน Todoform ผ่านตัวเเปร setIsOpen ในรูปเเบบ props
      ) : (<div 
        className={styles.todo__create}
        onClick={handleClick}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
       
      )}
    </>
  );
}

export default TodoCreate;
