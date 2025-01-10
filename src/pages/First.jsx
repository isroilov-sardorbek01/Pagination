import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

function First() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [countPage, setCpuntPage] = useState(10);
    const [limit, setLimit] = useState(6);

    useEffect(() => {
        axios
            .get(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
            )
            .then((response) => {
                if (response.status == 200) {
                    setPosts(response.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [limit, page]);
    return (
        <div className="mt-10">
            <div className="container">
                <h1 className="text-[40px] text-center">Pagination</h1>
                <div className="flex flex-col gap-2 mb-10">
                    {posts.length ? (
                        posts.map((post, index) => {
                            return (
                                <div
                                    className="p-3 text-white rounded-md bg-blue-950"
                                    key={index}
                                >
                                    <h1>{post.title}</h1>
                                    <p>{post.body}</p>
                                </div>
                            );
                        })
                    ) : (
                        <h1>No posts</h1>
                    )}
                </div>
                <div className="flex justify-between mb-10">
                    <select
                        value={limit}
                        onChange={(e) => {
                            setLimit(Number(e.target.value));
                        }}
                    >
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <Pagination
                        count={countPage}
                        page={page}
                        onChange={(event, value) => setPage(value)}
                        color="primary"
                    />
                </div>
            </div>
        </div>
    );
}

export default First;
