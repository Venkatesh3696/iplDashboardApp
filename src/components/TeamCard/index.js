// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamImageUrl, name} = teamDetails

  return (
    <li className="team-card">
      <Link to={`/team-matches/${id}`} className="link">
        <img className="team-logo" alt={name} src={teamImageUrl} />
        <p>{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
