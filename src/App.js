import './App.css';
import PDFReader from './components/PDFReader';

function App() {
  return (
    <div className="App">
      <PDFReader url={"https://arxiv.org/pdf/quant-ph/0410100.pdf"} />
    </div>
  );
}

export default App;
