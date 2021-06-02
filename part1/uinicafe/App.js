import React, {useState} from 'react';


const Statistic = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}

const Statistics = (props) => {
    const all = props.Verygood  + props.bad + props.Satisfy
    const average = (props.Verygood  + (props.bad*-1))/all
    const positive = (props.Verygood )/all *100
    if(all===0){
        return (
            <p>Feedbacks weren't given by the customers right now</p>
        )
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><Statistic text="Verygood "  /></td>
                        <td><Statistic text=":"value={props.Verygood } /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Satisfy"  /></td>
                        <td><Statistic text=":"value={props.Satisfy} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Bad"  /></td>
                        <td><Statistic text=":"value={props.bad}/></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Total" /></td>
                        <td><Statistic text=":"value={all} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Average " /></td>
                        <td><Statistic text=":"value={average}  /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Positivity" /></td>
                        <td><Statistic text=":"value={positive} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.event}>{props.text}</button>
    )
}
const App = () => {
    const [Verygood , setVerygood ] = useState(0)
    const [Satisfy, setSatisfy] = useState(0)
    const [bad, setBad] = useState(0)

    
    return (
        <div>
            <h1> Hello!! WELCOME</h1>
            <h2> Please give your valuable feedback :</h2>
            <div>
                <Button event={()=> setVerygood (Verygood +1)} text="Verygood " />
                <Button event={()=> setSatisfy(Satisfy+1)} text="Satisfy" />
                <Button event={()=> setBad(bad+1)} text="Bad" />
                                
            </div>
            <br></br>
            <br></br>
            <h4>Review Statics Are Shown Below </h4>
            <Statistics Verygood ={Verygood } bad ={bad} Satisfy={Satisfy} />
        </div>
    )
}



export default App