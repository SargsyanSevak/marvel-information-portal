import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import ComicsDetails from '../components/ComicsDetails/ComicsDetails'
import Characters from '../pages/Characters/Characters'
import Comics from '../pages/Comics/Comics'
import SearchResult from '../pages/SearchResult/SearchResult'


const Router = () => {
  return (
    <Routes>
    <Route path='/' element={<Navigate to="/characters"/>}/>
    <Route path='/characters' element={<Characters/>}/>
    <Route path='/comics' element={<Comics/>}/>
    <Route path='/comics/:id' element={<ComicsDetails/>}/> 
    <Route path='/search/:id' element={<SearchResult/>}/>
</Routes>
  )
}

export default Router