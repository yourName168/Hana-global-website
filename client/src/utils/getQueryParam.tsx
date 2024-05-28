/* eslint-disable react-hooks/rules-of-hooks */
import { useSearchParams } from "next/navigation";

export const getQueryParam = (keys: string[]) => {
    const searchParams = useSearchParams();
    const queryParams: { [key: string]: any } = {};

    for (const key of keys) {
        queryParams[key] = searchParams.get(key);
    }
    return queryParams;
};
