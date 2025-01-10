import React, { useState, useEffect } from "react";
import axios from "axios";
import loader from "../images/Loader1.svg";

function Second() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true); // Yuklanish jarayonini ko'rsatish
        const timeout = setTimeout(() => {
            axios
                .get(
                    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=5`
                )
                .then((response) => {
                    if (response.status === 200) {
                        setPhotos((prevPhotos) => [
                            ...prevPhotos,
                            ...response.data,
                        ]);
                        setLoad(false); // Yuklanish tugadi
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setLoad(false); // Xatolikda ham yuklanishni tugatish
                });
        }, 1500); // 1.5 soniya kechikish

        return () => clearTimeout(timeout); // Tozalash
    }, [page]);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setPage((prev) => prev + 1);
            setLoad(true);
        }
    }

    return (
        <div>
            <div className="container">
                <h1 className="text-center text-[40px] mb-10">Photo Gallery</h1>
                <div className="flex flex-wrap justify-between gap-3 mb-10">
                    {photos.length > 0
                        ? photos.map((photo) => (
                              <div
                                  className="w-[200px] border-[2px] border-black p-3 rounded-xl bg-black text-white cursor-pointer hover:scale-[1.1] transition-all"
                                  key={photo.id}
                              >
                                  <img
                                      src={photo.url}
                                      width={200}
                                      height={200}
                                      alt="Img"
                                  />
                                  <h1>{photo.title}</h1>
                              </div>
                          ))
                        : load && (
                              <div className="flex justify-center mx-auto">
                                  <img
                                      src={loader}
                                      width={100}
                                      height={100}
                                      alt="Img"
                                  />
                              </div>
                          )}
                </div>
            </div>
        </div>
    );
}

export default Second;
