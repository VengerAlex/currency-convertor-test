import React, {useRef} from "react";

const ImageUpload = ({setFile, accept}) => {
    const imageRef = useRef(null);

    return (
        <>
            <input
                onChange={setFile}
                accept={accept}
                ref={imageRef}
                type="file"/>
            <span
                onClick={() => imageRef.current.click()}
            >
                Add an Image
            </span>
        </>
    );
};

export default ImageUpload;