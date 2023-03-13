import { useState } from 'react';

const groupmember = ({ selectedTeam, employees, changeTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers())

  function groupTeamMembers() {
    let teams = [];

    let teamAMembers = employees.filter((e) => e.teamName === 'TeamA')
    let teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true }
    teams.push(teamA)

    let teamBMembers = employees.filter((e) => e.teamName === 'TeamB')
    let teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true }
    teams.push(teamB)

    let teamCMembers = employees.filter((e) => e.teamName === 'TeamC')
    let teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true }
    teams.push(teamC)

    let teamDMembers = employees.filter((e) => e.teamName === 'TeamD')
    let teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true }
    teams.push(teamD)

    return teams
  }

  function handleTeamClick(event) {
    let transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
      ? { ...groupedData, collapsed: !groupedData.collapsed }
      : groupedData);
    setGroupedData(transformedGroupData);
    changeTeam(event.currentTarget.id);
  }
  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div key={item.team} className='card mt-2' style={{ cursor: "pointer" }}>
            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
              Team Name: {item.team}
            </h4>
            <div id={"collapse_" + item.team}
              className={item.collapsed === true ? "collapse" : ""}>
              <hr />
              {
                item.members.map(member => {
                  return (
                    <div key={member.id} className="mt-2">
                      <h5 className="card-title mt-2">
                        <span className="text-dark">Full Name: {member.fullName}</span>
                      </h5>
                      <p>Designation: {member.designation}</p>
                    </div>
                  );
                })
              }
            </div>
            <hr />
          </div>
        );
      })}
    </main>
  )
}

export default groupmember;