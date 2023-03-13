import { useState } from 'react'

import './App.css'
import Footer from './Footer'
import Header from './Header'
import Employee from './Employee'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedTeam, setTeam] = useState("TeamA")

  const [employees, setEmployees] = useState([{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }])

  const changeTeam = (e) => {
    console.log(e.target.value)
    setTeam(e.target.value)
    //e alrady been pass by onChange event
  }

  const cardClick = (e) => {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(e.currentTarget.id) ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam } : employee)
    // the e.currentTarget.id refer to attribute id on element not the data's id, it also can not substitute to key since key only for track elements can not be accessed
    setEmployees(transformedEmployees)
    console.log(transformedEmployees)
    //toggle the teamName, if person belongs to team selected(first hook), empty the string(remove by click), if it doesn't belongs to it, add by click the card
  }

  return (
    <div>
      <Header />
      <Employee cardClick={cardClick} employees={employees} selectedTeam={selectedTeam} changeTeam={changeTeam} />
      <Footer />
    </div>
  )
}

export default App;