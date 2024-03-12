import { useEffect, useState } from 'react'
import './App.css'
import { contact } from './data/details'
import Table from './components/Table'
import AddPage from './pages/AddPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditPage from './pages/EditPage'
import ShowDetailPage from './pages/ShowDetailPage'

function App() {

  const [details, setDetails] = useState(contact)
  localStorage.setItem("details", JSON.stringify(details))

  console.log(details);
  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem("details"))
    setDetails(datas)
  }, [])


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Table details={details}
             />}
          />
          <Route path='/adddetail' element={<AddPage details={details}
            setDetails={setDetails}
          />} />
          <Route path='/edit/:id' element={<EditPage
            details={details}
            setDetails={setDetails}
          />} />
          <Route path='/show/:id' element={<ShowDetailPage details={details} />}

          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
