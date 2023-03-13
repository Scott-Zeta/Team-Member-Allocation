import femaleProfile from './image/femaleProfile.jpg'
import maleProfile from './image/maleProfile.jpg'

import Teambar from './Teambar'

const employee = ({ changeTeam, employees, cardClick, selectedTeam }) => {

  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-6'>
          <Teambar selectedTeam={selectedTeam} changTeam={changeTeam}/>
        </div>
      </div>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
          <div className='card-collection'>
            {employees.map(e => (
              <div key={e.id} id={e.id} className={e.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2'} style={{ cursor: "pointer" }} onClick={cardClick}>
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