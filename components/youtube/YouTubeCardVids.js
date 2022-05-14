import React from 'react'
import useSWR from 'swr'
import fetcher from '../../libraries/fetcher'

const YouTubeCardVids = () => {
    const { data, error } = useSWR('/api/youtube', fetcher)
    const videoCount = data?.videoCount ?? 0
    return (
        <div>
            <div style={{ padding: '5px' }} className="shadow-border">
                <h2>YouTube Videos</h2>
                <p style={{ fontSize: '30px' }}>{videoCount}</p>
            </div>
        </div>
    )
}

export default YouTubeCardVids