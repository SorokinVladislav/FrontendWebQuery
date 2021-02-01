
import React from "react";
import Preloder from "../components/common/preloader/Preloader";


export const withSuspense = (Component) => {

    return (props) => {
return <React.Suspense fallback={<Preloder/>}>
    <Component {...props} />
</React.Suspense>
    };
}
