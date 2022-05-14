import React from 'react'
import useSWR from 'swr'
import fetcher from '../../libraries/fetcher'

const YouTubeCardViews = () => {
    const { data, error } = useSWR('/api/youtube', fetcher)
    if (error) {
        console.log(error)
    }
    const viewCount = data?.viewCount ?? '0'
    return (
        <div>
            <div style={{ padding: '5px' }} className="shadow-border">
                <h2>YouTube Views</h2>
                <p style={{ fontSize: '30px' }}>{viewCount}</p>
            </div>
        </div>
    )
}

export default YouTubeCardViews