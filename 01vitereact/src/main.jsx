import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

function Myapp(){
  return(
    <div>
      <h1>Custome App | Chai</h1>
    </div>
  )
}


const reactElement =  React.createElement(
  'a',
  {href: 'https://google.com',target: '-blank'},
  'click me to visit google'
  )
  
  ReactDOM.createRoot(document.getElementById('root')).
  render(
  reactElement
  )

  