import { useState } from "react";

const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10
}

const UserInput = () => {
    const [userInput, setUserInput] = useState(initialUserInput);

    const submitHandler = (event) => {
        event.preventDefault();
        
    };

    const resetHandler = () => {
        setUserInput(initialUserInput);
    };

    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: value,
            };
        });
    };

    return (
        <form onSubmit = {submitHandler} className = "form">
        <div className = "input-group">
          <p>
            <label htmlFor = "current-savings">Current Savings ($)</label>
            <input 
                id = "current-savings" 
                type = "number" 
                onChange = {(event) => inputChangeHandler('current-savings', event.target.value)} 
                value = {userInput['current-savings']}
            />
          </p>
          <p>
            <label htmlFor = "yearly-contribution">Yearly Savings ($)</label>
            <input 
                id = "yearly-contribution" 
                type = "number" 
                onChange = {(event) => inputChangeHandler('yearly-contribution', event.target.value)} 
                value = {userInput['yearly-contribution']}
            />
          </p>
        </div>
        <div className = "input-group">
          <p>
            <label htmlFor = "expected-return">
              Expected Interest (%, per year)
            </label>
            <input 
                id = "expected-return"
                type = "number" 
                onChange = {(event) => inputChangeHandler('expected-return', event.target.value)} 
                value = {userInput['expected-return']}
            />
          </p>
          <p>
            <label htmlFor = "duration">Investment Duration (years)</label>
            <input 
                id = "duration"
                type = "number" 
                onChange = {(event) => inputChangeHandler('duration', event.target.value)} 
                value = {userInput['duration']}
            />
          </p>
        </div>
        <p className = "actions">
          <button onClick = {resetHandler} type = "reset" className = "buttonAlt">
            Reset
          </button>
          <button type = "submit" className = "button">
            Calculate
          </button>
        </p>
      </form>

    )
};

export default UserInput;