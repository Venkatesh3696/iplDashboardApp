// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
// import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatches: [], isLoading: true}

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }

    const {latestMatchDetails, recentMatches} = formattedData

    const newLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const newRecentMatches = recentMatches.map(eachMatch => ({
      id: eachMatch.id,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      result: eachMatch.result,
      matchStatus: eachMatch.match_status,
    }))

    formattedData.recentMatches = newRecentMatches
    formattedData.latestMatchDetails = newLatestMatchDetails

    this.setState({teamMatches: formattedData, isLoading: false})
  }

  render() {
    const {teamMatches, isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {latestMatchDetails, recentMatches, teamBannerUrl} = teamMatches
    // console.log(latestMatchDetails, 'postong')
    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch latestDetails={latestMatchDetails} />
      </div>
    )
  }
}

export default TeamMatches
