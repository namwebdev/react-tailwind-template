import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../contexts/app/AppContext'
import productApi from '@/api/product'

const HomePage = () => {
  const { state, dispatch } = useContext(AppContext)
  const history = useHistory()
  const handleClick = () => {
    dispatch({ type: 'ADD', data: { id: 1, test: 'test' } })
    history.push('/about')
  }

  const initData = async () => {
    const data = await productApi.getProducts()
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
