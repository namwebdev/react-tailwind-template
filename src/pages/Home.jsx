import { useContext } from 'react'
import { AppContext } from '../contexts/app/AppContext'

const HomePage = () => {
  const { state, dispatch } = useContext(AppContext)
  const handleClick = () => {
    console.log('test')
    dispatch({ type: 'ADD', data: { id: 1, test: 'test' } })
  }
  return (
    <div>
      Home
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default HomePage
