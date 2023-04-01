#!/usr/bin/python3
"""
Python script that shows the last 10 commits of a repository
in GitHub
"""
import sys
import requests


if __name__ == "__main__":
    repository = sys.argv[1]
    owner = sys.argv[2]
    url = f"https://api.github.com/repos/{owner}/{repository}/commits"

    # Set headers to avoid rate limiting
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'}

    r = requests.get(url, headers=headers)
    commits = r.json()
    try:
        for i in range(10):
            sha = commits[i].get("sha")
            author_name = commits[i].get("commit").get("author").get("name")
            print(f"{sha}: {author_name}")
    except IndexError:
        pass
