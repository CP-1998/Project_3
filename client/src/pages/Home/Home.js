import { useState} from 'react'
import Navbar from '../../components/Navbar'
import simpleCard from '../../components/Card'



const Home = () => {

  const [campaignState, setCampaignState] = useState({
    search: '',
    campaign: []
  })

  const handleInputChange = event => {
    setCampaignState({ ...campaignState, [event.target.name]: event.target.value })
  }

  const handleSearchCampaign = event => {
    event.preventDefault()
    getCampaign(campaignState.search)
      .then(({ data: campaign }) => {
        setCampaignState({ ...campaignState, campaign, search: '' })
      })
      .catch(err => console.error(err))
  }

  const handleSaveMedia = imdbID => {
    const newMedia = campaignState.campaign.filter(x => x.imdbID === imdbID)[0]
    saveMedia(newMedia)
      .then(() => {
        let campaign = JSON.parse(JSON.stringify(campaignState.campaign))
        campaign = campaign.filter(x => x.imdbID !== imdbID)
        setCampaignState({ ...campaignState, campaign })
      })
  }

  
  return (
    <h1>Hello World!</h1>
  )
}

export default Home 