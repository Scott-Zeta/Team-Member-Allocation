const Dashboard = ({ selectedTeam, countMember, employees }) => {
  return (
    <>
      <h4>{selectedTeam} now has {countMember} members.</h4>
      <h4 style={{ color: 'skyblue' }}>People currently not been assigned to any team</h4>
      <div className="card-collection">
        {employees.map((e) => {
          return e.teamName.length === 0 ? <p key={e.id}>{e.fullName}</p> : null
        })
        }
      </div>
      <h4 style={{ color: 'gold' }}>People currently been assigned more than 2 team</h4>
      <div className="card-collection">{employees.map((e) => {
          return e.teamName.length > 2 ? <p key={e.id}>{e.fullName}</p> : null
        })
        }</div>
    </>
  )
}

export default Dashboard