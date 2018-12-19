import * as React from 'react'

const POLL_INTERVAL = 10000

interface LastFmTrack {
  artist: string
  name: string
}

interface State {
  track?: LastFmTrack
}

export class LastFm extends React.Component<{}, State> {
  private pollLastFm: number | null = null
  public state: State = {}

  public componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search)
    const username = queryParams.get('user')
    if (!username) {
      return
    }
    this.updateLatestTrack(username)
    this.pollLastFm = setInterval(
      () => this.updateLatestTrack(username),
      POLL_INTERVAL
    )
  }

  public componentWillUnmount() {
    clearInterval(this.pollLastFm)
  }

  public render() {
    const { track } = this.state
    if (!track) {
      return <span>No recent tracks</span>
    }
    return (
      <span>{track.name} - {track.artist}</span>
    )
  }

  private updateLatestTrack(username: string): void {
    this.getLatestTrack(username).then(track => this.setState({ track }))
  }

  private getLatestTrack(username: string): Promise<LastFmTrack | undefined> {
    return fetch(`/api/lastfm/latest/${username}`)
      .then(resp => resp.json())
      .then(resp => {
        if (!resp || resp.error) {
          return undefined
        }
        return resp
      })
  }
}