const groupmember = ({ selectedTeam, countMember }) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Member Allocation</h1>
          <h3>{selectedTeam} now has {countMember} members.</h3>
        </div>
      </div>
    </main>
  )
}

export default groupmember;