import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - piLearning`;
    }, [title])
};

export default useTitle;