import { useEffect, useState } from "react"

export const Counter = ({randomNum}) => {
    const [count, SetCount] = useState(0); // это объявление стейта, для динамического изменения компонента

    // если пустой массив, то будет срабатывать при маунте
    useEffect(() => {
      console.log('like did mount')
    }, [])

    // если не передать массив, то будет срабатывать также при любом апдейте
    useEffect(() => {
        console.log('like did mount + did update')
    })

    // если передаем в массив, то будет срабатывать при маунте и при апдейте того что передали
    useEffect(() => {
        console.log('count did mount + count did update')
    }, [count])
    
    useEffect(() => {
        console.log('randomNum did mount + randomNum did update')
    }, [randomNum])

    return (
        <div>
            <h4>{count}</h4>
            <p>{randomNum}</p>
            <button onClick={() => SetCount(count + 1)}>Click!</button>
        </div>
    )
}