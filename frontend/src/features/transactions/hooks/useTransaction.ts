import { useQuery } from "@tanstack/react-query";
import { transactionApi } from "../../../api/transaction";

export function useTransaction (){
    return useQuery({
        queryKey:['transactions'],
        queryFn: transactionApi
    })
}
