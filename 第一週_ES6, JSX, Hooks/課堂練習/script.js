
const root = ReactDOM.createRoot(document.querySelector('#root'));

// 1. 環境建立
const uname = "Beta";
// 用JSX的結構來解析HTML tags
const a = <h1>Hihihi</h1>;
// console.log(a);
// root.render(<h1>Hello, { uname }</h1>);
// root.render(a);


// 2. 在 JSX 中嵌入 Expression
// Expression (表達式) contains a return value.
// Statements (陳述式) are declarations and function definitions.
const num = 2;
// root.render(<h1>Hello, { num }</h1>);


// 3. JSX 函式表達
// render()裡面放的JSX如果要引用變數，用大括號包起來，大括號中要放Expression，如果是function要執行它才是Expression (有回傳值)
function callDogName(){
    return "Ghini";
  }
const  content1 =  <h1>Hello，{ callDogName() } </h1>
// root.render(content);


// 4. JSX 屬性設計
// 筆記：JavaScript ES6裏面有個class宣告類別的用法，為了避免撞名，在React的JSX裡面用className來實作HTML tag裡面的class="..."標示CSS標籤的用法
const dogColor = "red";
const content2 =  <h1 className={dogColor}>Hello，{callDogName()} </h1>
root.render(content2);


// 筆記：vs code可開啟emmit的設定讓HTML tags可以較方便的自動完成

// 5. Render 持續渲染(非實務)

const showTime = ReactDOM.createRoot(document.getElementById("showTime"));
function tick() {
    const localTime = new Date();
    const element = <h2>
        今天是 { localTime.toLocaleDateString() }
        <br />
        現在時間是 { localTime.toLocaleTimeString() }
        </h2>; element
    showTime.render(element);
}

setInterval(tick, 1000);