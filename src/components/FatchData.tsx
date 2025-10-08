import { useEffect, useState } from "react";
import { getListBrief } from "../api";
import { getListDetail } from "../api";
 
interface Pokemon {
  id: number;
  name: string;
  image: string;
}

const useFetchData = (clickContent: "search" | "gallery") => {
    const [data, setData] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response: Pokemon[] = [];
                if (clickContent === "search"){
                    response = await getListBrief();
                } else if (clickContent === "gallery"){
                    response = await getListDetail();
                }
                setData(response);
            } catch (error) {
                console.error(error);
            } 
            setLoading(false); 
        };
        fetchData();
    }, [clickContent]);
    return {data, loading};
};

export default useFetchData;

