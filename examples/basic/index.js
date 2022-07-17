import TinyReact from './../../src'

const virtualDom = (
    <div className="container">
      <h1>我是标题</h1>
      <p>我是内容</p>
      {
        1 > 2 && "我是span1"
      }
      {
        console.log(1)
      }
      {
        2 > 1
      }
      {
        1 < 2 && "我是span2"
      }
    </div>
  );
  
  console.log("virtualDom2", virtualDom);