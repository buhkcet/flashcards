/* Courses and exams shown on the home screen, in this order.
   To add an exam: make its data file in this folder (see HOW-TO-ADD.md), then add a line under its course here.

   course: id   short, lowercase, no spaces (used in links and saved progress)
           code shown as the heading, e.g. "MECH 3542"
           name optional full course name
   exam:   id   short, lowercase, no spaces
           name shown on the home screen, e.g. "Midterm 2"
           file path to the exam's data file
           storageKey  leave this out for new exams. (Midterm 2 keeps its old key so saved progress isn't lost.) */
FC.courses([
  {id:"mech3542", code:"MECH 3542", name:"", exams:[
    {id:"midterm1", name:"Midterm 1", file:"data/mech3542-midterm1.js"},
    {id:"midterm2", name:"Midterm 2", file:"data/mech3542-midterm2.js", storageKey:"mech3542_sel"}
  ]}
]);
