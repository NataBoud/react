/**
 * @param {string} image 
 * @param {string} title
 * @param {string} description
 * @param {string} href
 * @param {string} image
 * @param {string} buttonLabel
 * @returns {JSX.Element}
 */

export function Card({ image, title, description, href, buttonLabel }) {

    const showButton = !!(href && buttonLabel);



    return <>
        <div className="card mb-4 mx-2">
            {image && <img src={image} alt={image} />}
            <div className="card-body" >
                {title && <h5 className="card-title title-truncate mt-2">{title}</h5>}
                {description && <p className="card-text description-truncate">{description}</p>}
                <div className="d-flex">
                    {showButton && <a href={href} className="btn btn-primary ms-auto mt-2">{buttonLabel}</a>}
                </div>

            </div>
        </div>
    </>

}
