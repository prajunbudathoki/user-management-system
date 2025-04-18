import TwoAuthenticate from '@/pages/TwoAuthenticate'
import UserProfilePage from '@/pages/UserProfilePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
    {/* <TwoAuthenticate /> */}
      {/* <h1 className='text-center text-4xl h-[100vh]'>Welcome to the Home section</h1> */}
      <UserProfilePage />
    </>
  )
}
