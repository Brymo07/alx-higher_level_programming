#!/usr/bin/python3
"""
Python script that shows the last 10 commits of a repository
in GitHub
"""
from requests import get, auth
import sys


if __name__ == "__main__":
    repo = sys.argv[1]
    owner = sys.argv[2]
    url = f'https://api.github.com/repos/{owner}/{repo}/commits'

    params = {'author': 'rails'}
    headers = {'Accept': 'application/vnd.github.v3+json'}
    response = requests.get(url, headers=headers, params=params)

    if response.status_code == 200:
        commits = response.json()[:10]  # get the 10 most recent commits
        for commit in commits:
            sha = commit['sha']
            author = commit['commit']['author']['name']
            print(f'{sha}: {author}')
    else:
        print(f'Request failed with status code {response.status_code}')
