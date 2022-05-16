import React from 'react'
import useSWR from 'swr'
import fetcher from '../../libraries/fetcher'

const GitHubCardFollowers = () => {
    const { data, error } = useSWR('/api/github', fetcher)
    const numFollwers = data?.numFollwers ?? 0
    return (
        <div>
            <div style={{ padding: '5px' }} className="shadow-border">
                <div>GitHub Followers</div>
                <div style={{ fontSize: '30px' }}>{numFollwers}</div>
            </div>
        </div>
    )
}

export default GitHubCardFollowers