import React, UseState from 'react'
import Navbar from '../../components/Navbar'
import simpleCard from '../../components/Card'



const Home = () => {

  const {
    getCampaign,
    createCampaign,
    deleteCampaign
  } = CampaignAPI

  const App = () => {
    const [itemState, setItemState] = useState({
      campaign: '',
      campaigns: []
    })

    campaignState.handleInputChange = event => {
      setCampaignState({ ...campaignState, [event.target.name]: event.target.value })
    }

    campaignState.handleAddItem = event => {
      event.preventDefault()
      let campaigns = JSON.parse(JSON.stringify(campaignState.campaigns))
      createCampaign({
        text: campaignState.campaign,
        isDone: false
      })
        .then(({ data: campaign }) => {
          campaigns.push(campaign)
          setCampaignState({ ...campaignState, campaigns, campaign: '' })
        })
        .catch(err => console.error(err))
    }

    campaignState.handleDeleteItem = id => {
      let campaigns = JSON.parse(JSON.stringify(campaignState.campaigns))
      deleteCampaign(id)
        .then(() => {
          campaigns = campaigns.filter(campaign => campaign._id !== id)
          setCampaignState({ ...campaignState, campaigns })
        })
        .catch(err => console.error(err))
    }

    useEffect(() => {
      getCampaign()
        .then(({ data: campaigns }) => {
          setCampaignState({ ...campaignState, campaigns })
        })
    }, [])

  
    return (
      <>
        <hr />
        <Typography variant="h6">
          Your Dashboard
      </Typography>
        <Form
          search={campaignState.search}
          handleInputChange={handleInputChange}
          handleSearchOMDB={handleSearchOMDB} />
        {
          campaignState.setCampaignState.length ?
            campaignState.setCampaignState.map(setCampaignState => (
              <setCampaignState
                key={setCampaignState.}
                setCampaignState={setCampaignState}
                saved={false}
                handleBtnClick={handleSavesetCampaignState} />
            )) : null
        }
      </>
    )
  }
}

export default Home 