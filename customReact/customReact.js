function customRender(reactElement, container){
    
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */


    const domElemt = document.createElement(reactElement.type)
    domElemt.innerHTML =reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElemt.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElemt)
}
const reactElement = {
    type: 'a',
    props:{
        href : "https://www.google.com",
        target: '_blanjk'
    },
    children: 'Click me to visit google'
}

const mainContainer =  document.querySelector('#root')

customRender(reactElement, mainContainer)
