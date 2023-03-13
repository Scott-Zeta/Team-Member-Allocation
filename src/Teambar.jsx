const Teambar = ({ selectedTeam, changeTeam }) => {
  
  return (<select className='form-select form-select-lg' value={selectedTeam} onChange={changeTeam}>
    <option value="TeamA">Team A</option>
    <option value="TeamB">Team B</option>
    <option value="TeamC">Team C</option>
    <option value="TeamD">Team D</option>
  </select>)
}

export default Teambar