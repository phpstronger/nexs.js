import { useEffect } from "react"
import { useDispatch } from "react-redux"

import {test} from '../redux/actions/test'

const Index = () => {
  const dispatch = useDispatch()  
  
  useEffect(() => {
   dispatch(test())
  }, [])

  return (
    <div>
      <h1>Index page</h1>
    </div>
  )
}

export default Index