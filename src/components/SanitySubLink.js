import React from "react"
export const SanitySubLink = props => {
  return <div>.</div>
}
// import React from "react"
// import Link from "gatsby-link"
// import Image from "./image"

// const SanitySubLink = props => {
//   let sublink = props.link

//   return (
//     <div className="pb-2">
//       <div className="flex md:text-white">
//         <div className="px-3">
//           <Image
//             props={sublink.menu_icon.asset._ref}
//             classes="w-11 h-6 inline"
//           />
//         </div>
//         <div>
//           <div className="font-normal text-lg pb-2 leading-5  ">Run Rudderstack</div>
//           <div className="text-sm pb-1">
//             <a href="#">Rudderstack Cloud</a>
//           </div>
//           <div className="text-sm pb-1  ">
//             <a href="#">Rudderstack Open Source</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )

//   if (sublink.sub_menu_item_externallink) {
//     return (
//       <a
//         className="my-2 lg:my-0 py-4 px-4 lg:py-6 lg:px-4 block rounded-lg bg-grayColor-BgGray"
//         rel="noopener noreferrer"
//         href={sublink.sub_menu_item_link}
//         target={sublink.menu_target_link ? "_blank" : "_self"}
//       >
//         {sublink.menu_icon ? (
//           <Image
//             props={sublink.menu_icon.asset._ref}
//             classes="w-6 h-6 inline"
//           />
//         ) : (
//           <img
//             src="https://cdn.sanity.io/images/97bpcflt/production/7ed86326425c479d324bfb75d8ff2076d66b3104-72x72.png"
//             width="27"
//             height="27"
//             className="inline"
//           />
//         )}
//         <span className="pl-2">{sublink.sub_menu_item_title}</span>
//       </a>
//     )
//   } else {
//     return (
//       <Link
//         className="my-2 lg:my-0 py-4 px-4 lg:py-6 lg:px-4 block rounded-lg bg-grayColor-BgGray"
//         rel="noopener noreferrer"
//         to={sublink.sub_menu_item_link}
//         target={sublink.menu_target_link ? "_blank" : "_self"}
//       >
//         {sublink.menu_icon ? (
//           <Image
//             props={sublink.menu_icon.asset._ref}
//             classes="w-6 h-6 inline"
//           />
//         ) : (
//           <img
//             src="https://cdn.sanity.io/images/97bpcflt/production/7ed86326425c479d324bfb75d8ff2076d66b3104-72x72.png"
//             width="27"
//             height="27"
//             className="inline"
//           />
//         )}
//         <span className="pl-2">{sublink.sub_menu_item_title}</span>
//       </Link>
//     )
//   }
// }

// export default SanitySubLink
