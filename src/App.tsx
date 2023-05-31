import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import routes from './Helpers/routes'

function App() {


  return (
    <> 
         <Router>
          <Routes>
            {
              routes.map((ele:any)=> <Route path = {ele.path} element={ele.component} />)
            }
           
          </Routes>
         </Router>
    </>
  )
}

export default App
