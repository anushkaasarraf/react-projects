import { createRoot } from 'react-dom/client'
import Header from './components/header'
import Entry from './components/entry'
import data from './data'
import './index.css'

createRoot(document.getElementById('root')).render(
<App/>
)

export default function App() {
    
   const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                /*You can even write entry={entry} and then access the properties in the Entry component as props.entry.country, 
                 props.entry.googleMapsLink, etc. But using the spread operator allows you to access them directly as
                 props.country, props.googleMapsLink, etc. and convert it directly into src={entry.img.src}, country={entry.country}*/
                {...entry}       
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}