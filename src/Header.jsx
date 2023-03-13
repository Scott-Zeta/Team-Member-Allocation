import Dashboard from "./DashBorad";

const header = ({ selectedTeam, countMember, employees }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Member Allocation</h1>
          <Dashboard selectedTeam={selectedTeam} countMember={countMember} employees={employees}/>
        </div>
      </div>
    </header>
  )
}

export default header;