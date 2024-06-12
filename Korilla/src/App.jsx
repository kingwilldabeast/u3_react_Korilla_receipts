import './App.css'
import ReceiptList from './Components/ReceiptList'
import receipts from './receipts'

export default function App() {

  return (
    <div className='App'>
    <ReceiptList receipts={receipts}/>
    </div>
  )
}

