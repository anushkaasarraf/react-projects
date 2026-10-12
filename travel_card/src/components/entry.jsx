import marker from '../assets/marker.png'

export default function Entry(props) {
    return(
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                className="main-image"
                src={props.img?.src}        
                /* '?' is the optional chaining operator that checks if props.img exists before trying to access its src property.
                 If props.img is undefined or null, it will prevent to throw an error and return undefined instead of 
                 trying to access src.*/
                alt={props.img?.alt} 
                />
            </div>
            <div className="info-container">
                <img
                className="marker"
                src={marker}
                alt="map marker icon" />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank">
                    View on Google Maps
                </a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    )
}