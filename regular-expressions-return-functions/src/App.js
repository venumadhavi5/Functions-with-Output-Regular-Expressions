
import './App.css';
import TenthMarkSheet from './components/TenthMarkSheet';

function App() {
  let calculateResult=(engMarks,telMarks,hindiMarks,mathsMarks,scienceMarks,socialMarks)=>{

    let totalMarks=engMarks+telMarks+hindiMarks+mathsMarks+scienceMarks+socialMarks;
    let perc=totalMarks/600*100;
    let result;
    let passMarks=35;
    if (engMarks>=passMarks&&
      telMarks>=passMarks&&
      hindiMarks>=passMarks&&
      mathsMarks>=passMarks&&
      scienceMarks>=passMarks&&
      socialMarks>=passMarks
    ) {result="pass";
      
    } else {result="fail";
      
    }
    let summary={tot:totalMarks,per:perc,res:result};
    return(summary)
  }
  let madhuResult=calculateResult(81,82,83,84,85,86);
  console.log(madhuResult);
  let anuResult=calculateResult(71,72,73,74,75,76);
  console.log(anuResult);

  let SSCResult=()=>{
    return()=>{
      console.log("students SSCResults");
    }
  };
  let tenthResult=SSCResult();
  tenthResult();
  return (
    <div className="App">
      <h1>Learning functions with Return</h1>
      
      <TenthMarkSheet/>
      
    </div>
  );
}

export default App;
