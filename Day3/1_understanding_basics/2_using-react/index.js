// const appElement = document.querySelector('#app');

// const hOneElement = document.createElement('h1');
// hOneElement.className = 'orange';
// hOneElement.textContent = 'Hello, World!';

// appElement.appendChild(hOneElement);

// --------------------------------------------------------------

const hOneElement = React.createElement('h1', { className: 'orange' }, 'Hello, React!');
const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(hOneElement);