import React from "react";
import Link from "next/link";
import { repos } from "@/Resources/Repositories";

function Repository() {
  const displayRepositories = repos.items.map((repo, index) => {
    return (
      <div className="repository">
        <h4>
          <Link href={`${repo.html_url}`}>{repo.name}</Link>
          <span>({repo.visibility})</span>
        </h4>
        <div className="repodesc">{repo.description}</div>
        <div>
          <b>Forks: </b> {repo.forks}
        </div>
        <div>
          <b>Stars: </b> {repo.stargazers_count}
        </div>
        <div>Language: {repo.language}</div>
      </div>
    );
  });
  return (
    <div className="repositories">
      <h1>Repositories ({repos.total_count})</h1>
      <div className="repoContainer">{displayRepositories}</div>
    </div>
  );
}

export default Repository;
