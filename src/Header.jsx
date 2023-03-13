const header = ({selectedTeam,countMember}) => {
  return (
    <header>
      <h1>Team Member Allocation</h1>
      <h3>{selectedTeam} now has {countMember} members.</h3>
    </header>
  )
}

export default header;