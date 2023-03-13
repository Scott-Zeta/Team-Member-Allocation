const Dashboard = ({selectedTeam, countMember,employees}) => {
  return(
    <>
      <h4>{selectedTeam} now has {countMember} members.</h4>
      <h4 style={{color:'skyblue'}}>There are x people currently not been assigned to any team</h4>
      <div>
        {employees.map((e) => {
          return e.teamName === ''?<p key={e.id}>{e.fullName}</p>:<div key={e.id}></div>})
        }
      </div>
      <h4 style={{color:'gold'}}>There are x people currently been assigned more than 2 team</h4>
      <div>{}</div>
    </>
  )
}

export default Dashboard