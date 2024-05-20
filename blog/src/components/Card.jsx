/**
 * @param {string} image 
 * @param {string} title
 * @param {string} description
 * @param {string} href
 * @param {string} image
 * @param {string} buttonLabel
 * @returns {JSX.Element}
 */

import { Button } from "../components/Button";

export function Card({ image, title, description, href, buttonLabel }) {

    const showButton = !!(href && buttonLabel);

    return <>
        <div className="card mb-4 mx-2">
            {image && <img src={image} alt='' />}

            <div className="card-body" >

                {title && <h5 className="card-title title-truncate mt-2">{title}</h5>}

                {description && <p className="card-text description-truncate">{description}</p>}

                <div className="d-flex">
                    <div className="ms-auto my-2">
                        {showButton && <Button href={href} >{buttonLabel}</Button>}
                    </div>
                </div>

            </div>
        </div>
    </>

}
