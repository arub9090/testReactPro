import spinner from './loading-11.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img src={spinner} alt="loading" className='text-center mx-auto'/>
    </div>
  )
}

export default Spinner