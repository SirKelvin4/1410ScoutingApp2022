import { data } from "../../helpers/data"
import Button from '@mui/material/Button'
import { ButtonGroup } from "@mui/material"
import Dropdown from 'react-dropdown'

export default function Auto() {
    return (
        <div className='Page'>
            <Dropdown onChange={(value) => data.autonomous.taxi = value.value} options={['Taxied', 'Did Not Taxi']} placeholder="Did they Taxi?" />
            <ButtonGroup variant='contained' color='primary' aria-label='split button' disableRipple fullWidth disableElevation>
                <Button id='1' onClick={() => {data.autonomous.auto_high_hub++; document.getElementById('1').innerText=`High Hub Cargo Scored: ${data.autonomous.auto_high_hub}`}}>Auto High Hub</Button>
                <Button style={{width: 100}} onClick={() => {data.autonomous.auto_high_hub--; document.getElementById('1').innerText=`High Hub Cargo Scored: ${data.autonomous.auto_high_hub}`}}>-</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' color='primary' aria-label='split button' disableRipple fullWidth disableElevation>
                <Button id='2' onClick={() => {data.autonomous.auto_low_hub++; document.getElementById('2').innerText=`Low Hub Cargo Scored: ${data.autonomous.auto_low_hub}`}}>Auto Low Hub</Button>
                <Button style={{width: 100}} onClick={() => {data.autonomous.var3--; document.getElementById('2').innerText=`Level 2 Cells Scored: ${data.autonomous.var3}`}}>-</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' color='secondary' aria-label='split button'  disableRipple fullWidth disableElevation>
                <Button id='3' className='Missed' onClick={() => {data.autonomous.auto_missed++; document.getElementById('3').innerText=`Shots Missed: ${data.autonomous.auto_missed}`}}>Shots Missed</Button>
                <Button className='Missed' style={{width: 100}} onClick={() => {data.autonomous.auto_missed--; document.getElementById('3').innerText=`Shots Missed: ${data.autonomous.auto_missed}`}}>-</Button>
            </ButtonGroup>
        </div>
    )
}