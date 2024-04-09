'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"

type githubProps = {
    login: string
    followers: number
    following: number
    html_url: string
    location: string
    blog: string
    bio: string
    avatar_url: string
    company: string
    name: string
}

export default function Github() {
    const [data, setData] = useState({} as githubProps)

    const fetchProfile = async () => {
        const res = await axios.get('https://api.github.com/users/pedromartiniano')
        setData(res.data)
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    console.log(data)

    return (
        <div className="min-h-screen pt-24">
            <h1 className="font-bold font-sans text-2xl lg:text-3xl mb-16 lg:ml-10">{'{ '}Meu Github{' }'}</h1>
            
            <GithubProfile {...data} />
            
        </div>
    )
}

const GithubProfile = ({login, followers, following, html_url, location, blog, bio, avatar_url, company, name}: githubProps) => {
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="flex justify-between">
                <Image src={avatar_url} alt={name} width={100} height={100} className="rounded-full"/>
                <div className="text-right">
                    <h2 className="font-bold text-2xl mb-2">{name}</h2>
                    <p className="text-gray-700 text-base">{login}</p>
                </div>
            </div>
            <p className="text-gray-700 text-base mt-2">{bio}</p>
            <p className="text-gray-700 text-base mt-2">Location: {location}</p>
            <p className="text-gray-700 text-base mt-2">Company: {company}</p>
            <p className="text-gray-700 text-base mt-2">Blog: {blog}</p>
            <p className="text-gray-700 text-base mt-2">Followers: {followers}</p>
            <p className="text-gray-700 text-base mt-2">Following: {following}</p>
            <a href={html_url} className="text-blue-500 hover:text-blue-800 mt-2">View on GitHub</a>
        </div>
    )
}
