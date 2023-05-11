import './EventForm.css'
import { useState } from 'react';

export default function EventForm({addData}) {
    
    const [title,setTitle]=useState("")
    const [date,setDate] = useState("")
    const [food,setFood] = useState("짜장면")
    
    function resetForm(){
        setTitle('')
        setDate('')
        setFood('짜장면')
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            id : Math.floor(Math.random() * 10000),
            title : title,
            date : date,
            food : food
        }
        addData(formData)
        resetForm()
    }

    return (
        <form className='event-form' onSubmit={handleSubmit}>
            <label >
                <strong>Event Title: </strong>
                <input type="text" value={title} onChange={(evt)=>setTitle(evt.currentTarget.value)}/>
            </label>

            <label >
                <strong>Event Date: </strong>
                <input type="date" value={date} onChange={(evt)=>setDate(evt.currentTarget.value)}/>
            </label>

            <label >
                <select onChange={(evt)=>setFood(evt.currentTarget.value)}>
                    <option value="짜장면">짜장면</option>
                    <option value="유산슬">유산슬</option>
                    <option value="탕수육">탕수육</option>
                </select>
            </label>

            <button type="submit" onClick={handleSubmit}>제출</button>
            <button type='reset' onClick={resetForm}>리셋</button>
        </form>
    )
}
