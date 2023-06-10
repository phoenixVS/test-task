import { ItemsPrice } from '@/components/ItemsPrice/ItemsPrice'
import { Navbar } from '@/components/Navbar/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-col w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          <h1>Task 1:</h1>
          <Navbar />
        </div>
        <div className='mt-8'>
          <h1>Task 2:</h1>
          <ItemsPrice />
        </div>
      </div>
    </main>
  )
}
