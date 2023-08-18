import {useState, useEffect} from 'react'
import { marked } from 'marked';

function App() {
  let [text,setText] = useState('**Preview** \r\n=======\r\n\r\n_markdown written in input area is shown here_  \r\n\r\n`console.log(\'made using reactJS\');`  \r\n\r\n![alt text](https:\/\/uploads.toptal.io\/blog\/category\/logo\/291\/react.png)\r\n\r\nText attributes *italic*, **bold**, \r\n`monospace`, ~~strikethrough~~ .\r\n\r\nrefer this **[cheatsheet]()** for more github markdown reference\r\n\r\n')
  let [preview,setPreview] = useState(marked(text));
  function changeHandler(event){
    setText(event.target.value);
  }

  useEffect(function(){
    let temp = marked(text);
    setPreview(temp);
  },[text])

  return (
    <>
      <header>
        <h1>Mark-It-Down</h1>
        <h4>Your ultimate markdown previewer!</h4>
      </header>
      <div className="tool d-flex flex-column flex-md-row">
        <div className="workspace ps-3 pe-3">
          <h4 className="text-center text-light mb-4 mt-3">Type your markdown code here ...</h4>
          <textarea id="editor"
            className="form-control ms-auto me-auto"
            value = {text}
            name='plainText'
            onChange={changeHandler}
          />
        </div>

        
        <div className="previewer">
        <h4 className="text-center text-light mb-4 mt-3">And watch the magic!</h4>
     <div className='text-light preview-box' id="preview" dangerouslySetInnerHTML={{__html:preview}}>
     </div>
        </div>
      </div>
    </>
  );
}

export default App;
