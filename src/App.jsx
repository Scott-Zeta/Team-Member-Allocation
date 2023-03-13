import { useState, useEffect } from 'react'
import{BrowserRouter as Router} from 'react-router-dom'

import './App.css'
import Footer from './Footer'
import Header from './Header'
import Employee from './Employee'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam'))||"TeamA")

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList'))||[{
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

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees])

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])

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

  const countMember = (employees, selectedTeam) => {
    return employees.filter((e) => e.teamName === selectedTeam).length
  }

  return (
    <div>
      <Header countMember={countMember(employees, selectedTeam)} selectedTeam={selectedTeam} />
      <Employee cardClick={cardClick} employees={employees} selectedTeam={selectedTeam} changeTeam={changeTeam} />
      <Footer />
    </div>
  )
}

export default App;