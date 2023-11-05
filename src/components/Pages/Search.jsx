    import React,{useEffect, useState} from 'react';
    import axios from 'axios';
    import './css/Search.scss';
    import Container from "../fragment/Container";
    import {useSelector} from "react-redux";
    import MusicCard from "../fragment/MusicCard";
    import SearchMusic from "../assets/img/searchMusic.svg";
    import SearchMusicMp3 from "../assets/img/searchMusicMp3.svg";
    import SearchMusicDisc from "../assets/img/searchMusicDisc.svg";
    import ArrowUp from '../assets/img/left.svg';

    const Search = () => {
        const {playlists, search} = useSelector(state => state.musicReducer);
        // const [searchResult, setSearchResult] = useState([]);
        // useEffect(() => {
        //     setSearchResult(playlists.filter((i) => (
        //         (i.name.toLowerCase().startsWith(search))
        //         ||
        //         (i.author_name.toLowerCase().startsWith(search))
        //         ||
        //         (i.musicName.toLowerCase().startsWith(search))
        //         ||
        //         (i.lang && i.lang.toLowerCase().startsWith(search))
        //     )));
        // }, [search, playlists]);

        const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const url = `https://musicapi.x007.workers.dev/search?q=${query}&searchEngine=mtmusic`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setSearchResults(response.data.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
console.log(searchResults);
    if (query !== "") {
      fetchData();
    } else {
      setSearchResults([]); // Clear the results if the query is empty
    }
  }, [query]);

        return (
            <Container>
                {
                    (search === "" || search === null)
                        ?
                        <div className={"Search"}>
                            <div className="Search-img">
                                <img className={"Rotate-img"} src={SearchMusicDisc} alt="search-music-icon"/>
                                <img src={SearchMusicMp3} alt="search-music-icon"/>
                                <img src={SearchMusic} alt="search-music-icon"/>
                                <img className={"Arrow"} src={ArrowUp} alt=""/>
                            </div>
                        </div>
                        :
                        <div className={"Search-result"}>
                            {
                                searchResults.length === 0
                                    ?
                                    <div className={"Search-fallback"}>
                                        No result found.
                                    </div>
                                    :
                                    searchResults.map((item) => (
                                        <MusicCard key={item.id} name={item.title} image={item.img} music={item}/>
                                    ))
                            }
                        </div>
                }
            </Container>
        );
    }

    export default Search;