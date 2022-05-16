import React from 'react'
import useSWR from 'swr'
import fetcher from '../../libraries/fetcher'

const GitHubCardForks = () => {
    const { data, error } = useSWR('/api/github', fetcher)
    const numForks = data?.numFollwers ?? 0
    return (
        <div>
            <div style={{ padding: '5px' }} className="shadow-border">
                <div>GitHub Forks</div>
                <div style={{ fontSize: '30px' }}>{numForks}</div>
            </div>
        </div>
    )
}

export default GitHubCardForks