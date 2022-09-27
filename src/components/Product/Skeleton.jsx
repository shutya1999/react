import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="100" cy="100" r="100" />
        <rect x="10" y="238" rx="7" ry="7" width="260" height="27" />
        <rect x="10" y="295" rx="9" ry="9" width="260" height="88" />
        <rect x="10" y="415" rx="6" ry="6" width="89" height="27" />
        <rect x="40" y="452" rx="0" ry="0" width="1" height="19" />
        <rect x="165" y="405" rx="15" ry="15" width="102" height="45" />
        <rect x="185" y="447" rx="0" ry="0" width="1" height="0" />
    </ContentLoader>
);

export default Skeleton;
