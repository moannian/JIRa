// import { } from "react";
// import { useAsync } from "../tool/customHook"
// import { list } from "../mock/index"
// import { Iproject } from "../common/index"
// export const useEditProject = () => {
//     const { run, data } = useAsync();
//     const mutate = (parms: Partial<Iproject>) => {
//         run(Promise.resolve(list.forEach((item, index) => {
//             if (item.id === parms.id) {
//                 list.splice(index, 1, { ...list[index], ...parms })
//                 console.log(list);

//             }
//         })))

//     }
//     return { mutate }
// }