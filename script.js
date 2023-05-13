
/*given 
arr is array ...store the student information like id ,name,age,marks...(attributes)
 */
let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  //`PrintStudentbyMap()`: console.log all students with marks over 50 using the `.map` function.
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    //get all students whose marks greater than 50
   
    arr.map(function(student){
        if( student.marks > 50 ){
          console.log(student);
        }
      });
  }
  
  //`PrintStudentbyForEach()`: console.log all the students who have marks over 50 using the `.forEach` function.
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(student){
      if(student.marks > 50 ){
        console.log(student)
      }
    });
  }
  
  //`addData()`: In this function, create another student object and append it to the array. For example, push this in the array - `{id:4,name:"susan",age:"20",marks:45}` and then console.log it.

  function addData() {
    //Write your code here, just console.log
    //when we add any vaue in array just used push
    let newStudentAdd = {id:4, name:"susan", age:"20" , marks:45};
    arr.push(newStudentAdd);
    console.log(arr);
  }
  
  //`removeFailedStudent()`: In this function, remove the student who has failed, i.e. with less than 50 marks. console.log the changed array.
   function removeFailedStudent() {
    //Write your code here, just console.log
   let failedStudents = arr.filter((student) => student.marks < 50)
   console.log(failedStudents);
  }
  
  //`ConcatenateArray()`: Create another array with 3 student objects similar to the one in the given array but with different ids and all other parameters.
  function concatenateArray() {
    //Write your code here, just console.log
    let newArray = [
      { id: 4, name: "Mayu", age: "24", marks: 96},
      { id: 5, name: "Mayuri", age: "25", marks: 90 },
      { id: 6, name: "Megha", age: "16", marks: 50 },
    ];
  
    let concatenatedArr = arr.concat(newArray);
    console.log(concatenatedArr);
  }