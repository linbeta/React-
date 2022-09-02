const root = ReactDOM.createRoot(document.getElementById("root"));

const { useState } = React;
function MyDrinks(props) {
    // 呼叫React內建函式庫的useState出來用，用陣列解構的方式寫，宣告一個新的state變數
    // 參考資料：https://zh-hant.reactjs.org/docs/hooks-state.html
    const [orderNum, setOrderNum] = React.useState(1);
    const [note, setNote] = React.useState("備註");
    return (
        <>
            {/* 1. 元件設計 - 觀察變數有更新，Hook 版本 */}
            <h4>{ props.who } 點了 { orderNum } 杯{ props.drink }</h4>
            <input type="button" value="再點一杯" onClick={()=> { 
                setOrderNum(orderNum+1);
                console.log(orderNum);}}/>
            <input type="button" value="減一杯" onClick={()=> { 
                setOrderNum(orderNum-1);
            }}/>
            <br />
            <br />
            {/* 2. 表單取值 */}
            <input type="text" value={note} onChange={(e)=>setNote(e.target.value)}/>
            <p>{ note }</p>
        </>
    );
}

// const element1 = <MyDrinks who="Beta" drink="咖啡"></MyDrinks>;
// root.render(element1);

// 3. 簡易 todo hooks
function App() {
    const [todo, setTodo] = useState(["範例"]);
    const [content, setContent] = useState("");
    // 第一層：增加todo的內容，用array來存資料
    function addTodo() {
        return setTodo([...todo, content])
    };
    return (
        <>
            <MyDrinks who="Beta" drink="咖啡"></MyDrinks>
            <hr />
            <h2>TODO List</h2>
            <input type="text" value={content} onChange={(e)=>setContent(e.target.value)}/>
            <input type="button" value="儲存" onClick={()=>{addTodo()}}/>
            <br />
            <p>unordered list呈現</p>
            <ul>
                {todo.map((item, i) => {
                    return <li key={ i }>{ item }</li>
                })}
            </ul>
            <p>ordered list呈現</p>
            <ol>
                {todo.map((item, i) => {
                    return <li key={ i }>第{i}項：{ item }</li>
                })}
            </ol>
        </>
    );
};

root.render(<App />);