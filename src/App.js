import './App.css';
import Home from './Screens/Home';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
       <AnimatedCursor
        color="10, 132, 255"
        innerSize={12}
        outerSize={40}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0.3}
        outerStyle={{
          border: '3px solid rgb(0, 62, 162)'
        }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
<Home/>
</div>
  );
}

export default App;
