import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <h1 className='text-center text-4xl h-[100vh]'>Welcome to the Home section</h1>
    </>
  )
}
