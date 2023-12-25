import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectNews, selectPage, setNews, setPage } from '../store/newsSlice'
import "./NewsDetails.css"
import { useNavigate } from 'react-router-dom'
const NewsDetails = () => {
    const page = useSelector(selectPage)
    const news = useSelector(selectNews)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [newsFLS, setNewsFLS] = useState({})
    const goBack = () => {
        navigate("/news")
    }
    useEffect(() => {
        const newsDiv2 = document.createElement("div")
        const newsDiv = document.querySelector(".newsDiv")
        if (news[page] != undefined) {
            newsDiv2.innerHTML = news[page].content
        } else {
            newsDiv2.innerHTML = "<p className='link'>Bura boşdu</p>"
        }
        newsDiv.innerHTML = newsDiv2.innerHTML
        newsDiv.style.padding = "10px"
        const a = document.querySelectorAll(".newsDiv a")
        a.forEach(item => {
            item.href = ""
            item.target = ""
            item.classList.add("text2")
        })
        const img = document.querySelectorAll(".newsDiv img")
        img.forEach(item => {
            item.classList.add("newsImg")
            item.style.width = ""
            item.style.height = ""
        })
    })
    useEffect(() => {
        if (news[0] == undefined) {
            setNewsFLS(JSON.parse(localStorage.getItem("news")))
        }
    }, [])
    useEffect(() => {
        if (newsFLS.value != undefined) {
            dispatch(setNews(newsFLS))
        }
    }, [newsFLS])
    return (
        <div className='NewsDetails'>
            <div className='newsDiv'>
            </div>
            <input className='goBack' type="button" value="Go back" onClick={goBack} />
        </div>
    )
}

export default NewsDetails