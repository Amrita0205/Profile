import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserProfile from '../src/components/sample_card';
import Card from '../src/components/card';
import Load from '../src/components/loading';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <div className="flex justify-center items-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-4 min-h-screen ">
      <Load />
    </div> */}
    <Card/>
    {/* <UserProfile/> */}
  </StrictMode>,
)
