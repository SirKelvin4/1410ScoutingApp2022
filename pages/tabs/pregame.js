import { data } from "../../helpers/data"
import Dropdown from 'react-dropdown'
import json from '/public/config.json'

export default function Pregame() {
    return (
        <div className='Page'>
            <input onChange={(event) => data.pregame.scout_name = event.target.value} type='text' placeholder='Scout First Name and Last Initial' />
            <Dropdown onChange={(value) => data.pregame.team_number = value.value} options={json.team_numbers} placeholder="Select a Team Number" />
            <Dropdown onChange={(value) => data.pregame.alliance_position = value.value} options={json.team_positions} placeholder="Select an Alliance Position" />
            <input onChange={(event) => data.pregame.match_number = event.target.value} type='text' placeholder='Match Number' />
        </div>
    )
}