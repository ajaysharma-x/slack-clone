import { useQueryState } from "nuqs"
// import { useState } from "react";

// const [parentMessageId, setParentMessageId] = useState(null); =>  // http://localhost:3000?parentMessageId=null

export const useProfileMemberId = () => {
    return useQueryState("profileMemberId");
};