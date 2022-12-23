import react,{useState} from 'react'

const Tour = ({id,name,info,price,image,removeTour}) => {
    const [readmore,setreadmore] = useState(false)
    return (
        <artile className='single-tour'>
            <img  src={image}/>
            <footer>
                <div className='tour-info'>
                    <h4>{name}</h4>
                    <p className='tour-price'>{price}</p>
                </div>
                <p>
                    {readmore?info:`${info.substring(0,200)}...`}
                    <button onClick={ () =>{setreadmore(!readmore)}}>{readmore?'Show Less...':'Show More..'}</button>
                    
                </p>
                <button className='delete-btn' onClick={() => {removeTour(id)}}>not intereset</button>
            </footer>
        </artile>
    )
}
export default Tour;