import { useState } from 'react'
import femaleProfile from './image/femaleProfile.jpg'
import maleProfile from './image/maleProfile.jpg'

const employee = () => {
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
    const transformedEmployees = employees.map((employee) => {
      return employee.id === parseInt(e.currentTarget.id) ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam } : employee
    })
    setEmployees(transformedEmployees)
    //toggle the teamName, if person belongs to team selected(first hook), empty the string(remove by click), if it doesn't belongs to it, add by click the card
  }

  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-6'>
          <select className='form-select form-select-lg' value={selectedTeam} onChange={changeTeam}>
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
        </div>
      </div>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
          <div className='card-collection'>
            {employees.map(e => (
              <div key={e.id} className={e.teamName === selectedTeam?'card m-2 standout':'card m-2'} style={{ cursor: "pointer" }} onClick={cardClick}>
                <img src={e.gender === 'male' ? maleProfile : femaleProfile} className='card-img-top' />
                <div className='card-body'>
                  <h5 className='card-title'>{e.fullName}</h5>
                  <p className='card-text'><b>Designation</b>: {e.designation}</p>
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default employee;