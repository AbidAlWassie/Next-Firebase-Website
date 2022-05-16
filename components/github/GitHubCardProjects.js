import React from 'react'
import useSWR from 'swr'
import fetcher from '../../libraries/fetcher'

const GitHubCardProjects = () => {
    const { data, error } = useSWR('/api/github', fetcher)
    const numProjects = data?.numProjects ?? 0
    return (
        <div>
            <div style={{ padding: '5px' }} className="shadow-border">
                <div>GitHub Repos</div>
                <div style={{ fontSize: '30px' }}>{numProjects}</div>
            </div>
        </div>
    )
}

export default GitHubCardProjects