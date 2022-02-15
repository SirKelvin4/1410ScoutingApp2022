import { data } from "../../helpers/data"
import Dropdown from 'react-dropdown'

export default function Endgame() {
    return (
        <div className='Page'>
            <Dropdown onChange={(value) => data.endgame.climbing = value.value} options={['Did Not Attempt','Failed Climb','Low Bar Climb','Mid Bar Climb','High Bar Climb','Traversal Bar Climb']} placeholder="Did they climb?" />
        </div>
    )
}