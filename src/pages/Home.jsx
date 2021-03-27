import { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/app/AppContext'
import { fetchData } from '../api/index'

const HomePage = () => {
  const { state, dispatch } = useContext(AppContext)
  const handleClick = () => {
    dispatch({ type: 'ADD', data: { id: 1, test: 'test' } })
  }

  const initData = async () => {
    const { data } = await fetchData()
    console.log(data)
  }
  useEffect(() => {
    initData()
  }, [])

  return (
    <div>
      Home
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default HomePage
