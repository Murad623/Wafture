import React, { useEffect, useState } from 'react'
import "./News.css"
import { useDispatch } from 'react-redux'
import { setNews, setPage } from '../store/newsSlice'
import { useNavigate } from 'react-router-dom'
const News = () => {
  const [egNews, setEgNews] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getNews = async () => {
    const url = 'https://epic-games-store.p.rapidapi.com/getNews/locale/en/limit/30';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c4a51dfdadmshc0007b8e921245fp1e3aebjsncd1b5f45748e',
        'X-RapidAPI-Host': 'epic-games-store.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setEgNews(result)
      const div = document.querySelector(".News");
      const newsCatalog = document.createElement("div")
      newsCatalog.classList.add("newsCataloc")
      result.forEach((news, index) => {
        const newsDiv = document.createElement("div")
        const tImage = document.createElement("img")
        const newsTitle = document.createElement("h1")
        newsTitle.innerText = news.title
        tImage.src = news.trendingImage
        newsDiv.classList.add("newsDiv")
        newsDiv.id = index
        newsDiv.onclick = (e) => gotoNews(e)
        tImage.classList.add("tImage")
        tImage.id = index
        newsTitle.classList.add("text")
        newsTitle.id = index
        newsTitle.style.color = "rgb(255, 187, 0)"
        newsTitle.style.backgroundColor = "rgb(87, 16, 194)"
        newsTitle.style.boxShadow = "0 0"
        newsTitle.style.border = "none"
        newsTitle.style.margin = "0"
        newsTitle.style.cursor = "pointer"
        newsTitle.style.width = "auto"
        newsDiv.append(newsTitle)
        newsDiv.append(tImage)
        div.append(newsDiv)
      })
    } catch (error) {
      console.error(error);
    }
  }
  const gotoNews = (e) => {
    dispatch(setPage(e.target.id))
    navigate("/newsdetails")
  }
  useEffect(() => {
    dispatch(setNews(egNews))
  }, [egNews])
  useEffect(() => {
    getNews()
  }, [])
  return (
    <div className='News' style={{ backgroundColor: "rgb(255, 187, 0)", width: "70%", margin: "auto" }}></div>
  )
}

export default News