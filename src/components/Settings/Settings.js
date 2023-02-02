import {FcSettings }            from 'react-icons/fc'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {MdDone}                 from 'react-icons/md'
import {Link}                   from 'react-router-dom'
import './Settings.scss'

const Settings = ({setActive}) => {

return(
    <div className='parent__list'>
        <div className='tabs__list'>
            
            <Link to='/'className='button__list'> <button><AiOutlineUnorderedList size={26}/></button></Link>
            <button className='button__list' onClick={()=> setActive(true)}><FcSettings size={26}/></button>
            <Link to='/done'className='button__list'><button><MdDone size={26}/></button></Link>
            
        </div>
    </div>
)}

export default Settings;