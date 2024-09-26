

const mainContainer = document.querySelector("#root");

customRender(reactElement,mainContainer)


const reactElement =  React.createElement(
    'a',
    {href: 'https://google.com',target: '-blank'},
    'click me to visit google'
    )
    
    ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
    )