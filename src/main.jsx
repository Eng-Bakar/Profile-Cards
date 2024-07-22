import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Profile from './profile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='sm:flex ml-[25px]'>
   <Profile image="https://img.freepik.com/free-photo/person-wearing-high-tech-vr-glasses-while-surrounded-by-bright-blue-neon-colors_23-2151255133.jpg?t=st=1721649765~exp=1721653365~hmac=2a65f4fad052f9cc84c8d7423c8f84a2095d9b4b724ca8681e5b12291e8e1fda&w=900" BtnColor="red" name="Eng Bakar" bio={"Fullstack developer: JavaScript, React, Node.js, MongoDB, problem-solver, innovative, adaptable."} />
   <Profile image="https://img.freepik.com/free-photo/man-with-vr-glasses-experiencing-metaverse_23-2150904750.jpg?t=st=1721652227~exp=1721655827~hmac=3e5572628649803b1cc4549be42d9613b4753808089a77c41086efdd2af7aa12&w=1060" BtnColor="orange" name="Farhia Ibrahim"  bio={"Fullstack developer:  adaptable, problem-solver, API expert, team player."} />
   <Profile image="https://img.freepik.com/free-photo/woman-with-vr-glasses-futuristic-city_23-2150904808.jpg?t=st=1721652258~exp=1721655858~hmac=309111d3995db9f10622492cc263e17429d7a32fc5cdf9e1f17ace698ddfb551&w=1060" BtnColor="green" name="Geedi Omar"  bio={"Fullstack developer: HTML, CSS, JavaScript,  collaborative, efficient, resourceful.."} />
  </div>
)
