function customRender(Element, container) {
    //     const domElement = document.createElement(reactElement.type);

    //     domElement.innerHTML = Element.children
    //     domElement.setAttribute('href', Element.props.href)
    //     domElement.setAttribute('target', Element.props.target)  //value kaha se le 
    //     container.appendChild(domElement)

    // }
    const domElement = document.createElement(Element.type)
    domElement.innerHTML = Element.children
    for (const prop in Element.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, Element.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: "a",
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me to visit Google"
}



const maincontainer = document.querySelector("#root");


customRender(reactElement, maincontainer)   //it takes two parameter ..phla kya inject kre aur kaha pr inject kre
