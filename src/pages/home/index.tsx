import { createRoot } from 'react-dom/client'
import IndexPage from './page'
import '../../index.css'

let root = document.getElementById('root');
if (root == null) {
  root = document.createElement('main');
  root.id = 'root';
  document.body.appendChild(root);
}

const reactRoot = createRoot(root);
reactRoot.render(<IndexPage />);
