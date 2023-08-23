// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: []}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data)
    const {teams} = data
    const formattedData = teams.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }))

    this.setState({teamsList: formattedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div className="home-container">
        <div className="logo-container">
          <img
            alt="ipl logo"
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <p>{isLoading}</p>
        <ul className="teams-container">
          {teamsList.map(team => (
            <TeamCard key={team.id} teamDetails={team} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
