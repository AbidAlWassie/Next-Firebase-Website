import React from 'react'
import useSWR from 'swr'
import fetcher from '../../libraries/fetcher'

const YouTubeCardSubs = () => {
    const { data, error } = useSWR('/api/youtube', fetcher)
    const subscriberCount = data?.subscriberCount ?? '34,222,111'
    return (
        <div>
            <div style={{ padding: '5px' }} className="shadow-border">
                <h2>YouTube Subscribers</h2>
                <p style={{ fontSize: '30px' }}>{subscriberCount}</p>
            </div>
        </div>
    )
}

export default YouTubeCardSubs