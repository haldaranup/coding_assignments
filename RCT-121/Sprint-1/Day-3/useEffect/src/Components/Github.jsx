import React, { useEffect, useState } from "react";

import axios from "axios";
import { SearchBox } from "./SearchBox";
import { GithubCard } from "./GithubCard";
export const Github = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const [query, setQuery] = useState("masai");
  const [page, setPage] = useState(1);

  useEffect(() => {
    getGithubUsers(query, page);
  }, [query, page]);

  const getGithubUsers = (q = "albseb511", page = 1) => {
    axios(`https://api.github.com/search/users`, {
      method: "GET",
      params: {
        q: q,
        per_page: 5,
        page: page,
      },
    })
      .then((res) => {
        setLoading(true);
        setData(res.data.items);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  const handleClick = (query) => setQuery(query);

  //if you want to set the page you can do as same as above ie
  //const handlePageChange=page=>setPage(page)
  //and you have to give this function to the button for prev and next

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "asc") {
      const d = [...data].sort((a, b) => {
        // console.log("b.login",b.login,"a.login",a.login)
        return a.login > b.login ? 1 : a.login < b.login ? -1 : 0;
      });
      console.log("d", d);
      setData(d);
    } else if (e.target.value === "des") {
      const d = [...data].sort((a, b) => {
        console.log("b.login", b.login, "a.login", a.login);
        return a.login < b.login? 1 : a.login > b.login ? -1 : 0;
      });
      console.log("d", d);
      setData(d);
    }
  };
  console.log(query);
  console.log("data", data);
  return (
    <div>
      <h2>Github Users</h2>
      {loading && <div>...loading</div>}
      {error && <div>...error</div>}
      <SearchBox handleClick={handleClick} />
      {/* <button onClick={()=>setLoading(!loading)}>Toggle</button> */}

      {/* //if while getting data i set the data as res.data inspite of res.data.items then i have to do this optional chaining and spreading  */}

      {/* {data?.items?.map(item=>
    <GithubCard key={item.id}{...item}/>
    
    )} */}

      {data.map((item) => [
        <GithubCard
          key={item.id}
          avatar_url={item.avatar_url}
          login={item.login}
        />,
      ])}

      <div>
        <button disabled={page == 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>

      <select
        // onChange={(event) => sorting(event.target.value)}
        onChange={handleChange}
        //  value={sort}
      >
        {/* <option value="">sort</option> */}
        <option value="asc">Asc</option>
        <option value="des">des</option>
      </select>
    </div>
  );
};



