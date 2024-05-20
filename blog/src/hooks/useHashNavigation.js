import { useEffect, useState } from "react";

export function useHashNavigation () {
    const [hash, setHash] = useState(location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setHash(location.hash)
        }
        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, []);


    const cleanedHash = hash.replaceAll('#', '').toLowerCase()

    return {
      page: cleanedHash ? cleanedHash.split(":")[0] : "home",
      param: cleanedHash.split(":")[1],
    };

}

// Cas 1 : #home

// hash = "#home"
// cleanedHash = "home"
// cleanedHash.split(":") = ["home"]
// page = "home"
// param = undefined


// Cas 2 : #post:123

// hash = "#post:123"
// cleanedHash = "post:123"
// cleanedHash.split(":") = ["post", "123"]
// page = "post"
// param = "123"