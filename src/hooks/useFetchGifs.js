import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => {

    // const getImages =  async() =>{
    //     const newImages =  await getGifs( category)
    //     setimages(newImages);
    // }


    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        getGifs(category)
            .then(setimages);
        setisLoading(false);

    }, [])

    return {

        images,
        isLoading

    }
}
