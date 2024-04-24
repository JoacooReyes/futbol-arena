import { useState } from "react";

export const useProductoImg = () => {
    const [productoBlob, setProductoBlob] = useState("");
      const [productoCloudData, setProductoCloudData] = useState({
        url:'',
        public_id:'',
        img_tag:''
      });
    
    const handleProductoFile = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
          setProductoBlob(reader.result);
          getProductoUrl(reader.result)
        };
      };
    
      //SUBIR A CLOUDINARY Y OBTENER URL DE IMAGEN
      const getProductoUrl = (productoBlob) => {
        fetch(`https://api.cloudinary.com/v1_1/futbolarena/image/upload/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            file: productoBlob,
            upload_preset: "ml_default",
            folder: "futbolarena",
            tags: ["futbolarena"]
          }),
        })
          .then(res => res.json())
          .then(data =>
            setProductoCloudData({
              url: data.secure_url,
              public_id: data.public_id,
              img_tag: data.tags[0],
            }));
      };

      return {
        handleProductoFile,
        productoBlob,
        productoCloudData,
        setProductoBlob
      }

}
