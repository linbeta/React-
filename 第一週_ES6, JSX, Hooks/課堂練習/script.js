
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


// 6. 元件設計，開頭要大寫
// 在React中，函式就是一個元件，元件可以用他名字的HTML tag來引用
const part3 = ReactDOM.createRoot(document.getElementById("part3"));

function Emotion() {
    return <h3>今天天氣很好，心情也很好！</h3>;
}
const element1 = <Emotion></Emotion>;
part3.render(element1);


// 7. 元件設計 - props
// 元件的函式裡頭可以丟參數進去，通常用props來表示，它代表了一個存參數的物件
// In a nutshell, props are used to pass data from a parent component to a child component in React and they are the main mechanism for component communication.
const part4 = ReactDOM.createRoot(document.getElementById("part4"));

function MyDrinks(props) {
    // props = {
    //     drink: "coffee",
    //     number: 1
    // }
    let sipCount = 1;
    return (
        <div>
            <h4>我點了{ props.number }杯{ props.drink }，喝了{ sipCount }口～ </h4>
            <p>（按鈕還沒設定）</p>
            <input type="button" value="再喝一口" />
            <hr />
        </div>
    );
}

const element2 = <MyDrinks drink="咖啡" number="2"></MyDrinks>
part4.render(element2);

// 8. 元件設計 - 建立 App 模組，來組合 component
// 元件裡面包元件！通常root裡面會再包一層App，再把所有子元件放進去
// 橫線底下放這部分以後的Code，如果要寫在一個全新的網頁，把part5改成root就可以了
// 元件的函式設定一定要用<div></div> tag包起來，可以簡寫成<></>，神奇又方便！
const part5 = ReactDOM.createRoot(document.getElementById("part5"));

function MyDrinksNew(props) {
    return (
        <>
            <h4>{ props.who }點了{ props.number }杯{ props.drink }</h4>
        </>
    );    
}

function App() {
    return (
        <>
            <MyDrinksNew who="我" drink="咖啡" number="1"></MyDrinksNew>
            <MyDrinksNew who="你" drink="紅茶" number="1"></MyDrinksNew>
            <MyDrinksNew who="他" drink="氣泡水" number="3"></MyDrinksNew>
            <hr />
        </>
    );
}

part5.render(<App/>);


// 9. 元件設計 - map 寫法 I
const part6 = ReactDOM.createRoot(document.getElementById("part6"));
const numbers = [1, 2, 3, 4, 5];
const numberList = numbers.map((number, i) => <li key={ i }>{ number }</li>
);

// console.log(numberList)

//  如果只需要印出ul
// part6.render(<ul>{ numberList }</ul>);
// 需要多加分隔線的話，render裡面還是需要用元件的寫法，加<></>包起來
part6.render(
    <>
        <ul>{numberList}</ul>
        <hr />
    </>
);


// 10. 元件設計 - map 寫法 I(加不加小刮號差別)
// 這一part解釋上面的Array.map()裡面各種加不加大小括號的差別，In a nutshell, =>後面如果要放大括號{}，裡面要寫return，且return後面同一行要有接東西，如有多行需要用小括號()包起來，且左括號要跟return同行
// Array.map(element => {
//     return (
//         doSomethingto(element);
//         doAntherthingto(element);
//     );
// })
// 以上這些是JS內建支援的語法


// 11. 元件設計 - map 寫法 II 物件作法
// 針對物件array的寫法，取出每個物件裡面的特定值
const part7 = ReactDOM.createRoot(document.getElementById("part7"));

const namesAndNunbers = [
    {
        num: 1,
        name: "Tyler Durden"
    },
    {
        num: 2,
        name: "Jack Jonhson"
    },
    {
        num: 3,
        name: "Mary Jane"
    },
];

const infoList = namesAndNunbers.map((item, i) => 
    <li key={i}>這位是 { item.name }，編號第 { item.num } 號</li>
);
part7.render(
    <>
        <ol>{infoList}</ol>
        <hr />
    </>,
);
// 12. 元件設計 - map 寫法 III
//
const part8 = ReactDOM.createRoot(document.getElementById("part8"));

function Welcome(props) {
    return (
        <h4>歡迎 { props.item.num } 號同學 { props.item.name } !</h4>
    );
};

function App2() {
    return (
        <>
            { namesAndNunbers.map((item, i) => <Welcome key={i} item={item}/>) }
            <hr />  
        </>
    );
};

part8.render(<App2/>)

// 13. 元件設計 - 變數更新，render沒有顯示
const part9 = ReactDOM.createRoot(document.getElementById("part9"));

function MyDrinksNew2(props) {
    let orderNum = 1;
    return (
        <>
            <h4>{ props.who } 點了 { orderNum } 杯{ props.drink }</h4>
            <input type="button" value="再點一杯" onClick={()=> { 
                orderNum=orderNum+1;
                console.log(orderNum);}}/>
        </>
    );
}

const element3 = <MyDrinksNew2 who="Beta" drink="咖啡"></MyDrinksNew2>
part9.render(element3);