import { data } from "../../helpers/data"
import Button from '@mui/material/Button'
import { ButtonGroup } from "@mui/material"
import Dropdown from 'react-dropdown'

export default function Teleop() {
    return (
        <div className='Page'>
            <ButtonGroup variant='contained' color='primary' aria-label='split button' disableRipple fullWidth disableElevation>
                <Button id='1' onClick={() => {data.teleop.teleop_high_hub++; document.getElementById('1').innerText=`High Hub Cargo Scored: ${data.teleop.teleop_high_hub}`}}>high Hub Cargo Scored</Button>
                <Button style={{width: 100}} onClick={() => {data.teleop.teleop_high_hub--; document.getElementById('1').innerText=`High Hub Cargo Scored: ${data.teleop.teleop_high_hub}`}}>-</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' color='primary' aria-label='split button' disableRipple fullWidth disableElevation>
                <Button id='2' onClick={() => {data.teleop.teleop_low_hub++; document.getElementById('2').innerText=`Low Hub Cargo Scored: ${data.teleop.teleop_low_hub}`}}>Low Hub Cargo Scored</Button>
                <Button style={{width: 100}} onClick={() => {data.teleop.teleop_low_hub--; document.getElementById('2').innerText=`Low Hub Cargo Scored: ${data.teleop.teleop_low_hub}`}}>-</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' color='secondary' aria-label='split button' disableRipple fullWidth disableElevation>
                <Button id='3' className='Missed' onClick={() => {data.teleop.wrong_color_cargo++; document.getElementById('3').innerText=`Wrong Color Cargo: ${data.teleop.wrong_color_cargo}`}}>Wrong Color Cargo Scored</Button>
                <Button className='Missed' style={{width: 100}} onClick={() => {data.teleop.wrong_color_cargo--; document.getElementById('3').innerText=`Wrong Color Cargo: ${data.teleop.wrong_color_cargo}`}}>-</Button>
            </ButtonGroup>
            <Dropdown onChange={(value) => data.teleop.defense = value.value} options={['Yes', 'No']} placeholder="Did they play defense?" />
            <Dropdown onChange={(value) => data.teleop.dead_on_field = value.value} options={['Yes', 'No']} placeholder="Dead on field for 15 seconds?" />
            <Dropdown onChange={(value) => data.teleop.start_climbing = value.value} options={['Yes', 'No']} placeholder="Did they start climbing in Teleop?" />
        </div>
    )
}