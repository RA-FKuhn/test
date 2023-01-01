import React from 'react';
import * as math from 'mathjs';

interface HomePageState {
    expression: string;
    solution: number;
    hide: boolean;
}

const HomePage = () => {
    const [state, setState] = React.useState<HomePageState | undefined>();

    const buildState = () => {
        let expression = '';
        const operators = ['+', '-', '*', '/'];
        const count = 4;
        const minNumber = -100;
        const maxNumber = 100;

        for (let index = 0; index < count; index++) {
            const operator = operators[math.randomInt(0, operators.length - 1)];
            let currentNumber = math.randomInt(minNumber, maxNumber);
            if (index === 0) {
                expression = String(currentNumber);
            } else {
                expression = expression + operator + String(currentNumber);
            }
        }
        setState({
            expression: expression,
            solution: math.evaluate(expression),
            hide: true
        })
    }


    return (
        <div style={{ height: '100vh' }}>
            <button onClick={() => buildState()}>Create</button><br />
            Expression: {state?.expression} <br />
            <button onClick={() => setState({ ...state!, hide: false })}>Show Solution</button>
            {
                (state?.hide === false ? <div>Solution: {state?.solution}</div> : null)
            }
        </div>
    )
}

export default HomePage;