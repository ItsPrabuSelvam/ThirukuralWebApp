import { useEffect, useState } from "react";
import Footer from "./Footer";
import Container from "./Container";


function App() {

  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [ btn , setBtn ] = useState(true);

  let updateBtn  = () => {
    setBtn(!btn);
  }





  useEffect(() => {

    if (input !== "") {
      if (input > 0 && input < 1331) {
        const url = `https://thirukuralapi.onrender.com/getThiruKural?number=${input}`;
        fetch(url).then((res) => { return res.json() }).then(
          (data) => {
            /* console.log(data) */
            setData(data)
          })
          .catch(() => { setData(null) })
      }
      else {
        setData("error")
      }
    }
    else {
      setData("start")
    }


  }, [input , btn]);



  return (
    <div className="App flexbox">

      <header className="flexbox colorGradient">
        திருக்குறள்
      </header>

      <Container data={data} />

      <Footer input={input} setInput={setInput} updateBtn={updateBtn} />

    </div>
  );
}

export default App;
