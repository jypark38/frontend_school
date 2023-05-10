import MyList from './components/MyList';
import Product from './components/Product';
import Hello from './components/Hello';
import Blog from './components/Blog';
import Product2 from './components/Product2';
import Counter from './components/Counter';

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];


function App() {
  return (
    <div>
      hello world
      <Blog posts={posts}/>
      <Hello name='재현'/>
      <MyList/>
      <Product />
      <hr />
      <Product2 />
      <hr />
      <Counter />
    </div>
  );
}
export default App;
