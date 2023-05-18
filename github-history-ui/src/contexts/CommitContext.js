import React, { createContext, useEffect, useState } from "react";
import CommitService from "../services/CommitService";

export const CommitContext = createContext();

const CommitContextProvider = (props) => {
  const [commits, setCommits] = useState();

  useEffect(() => {
    (async () => {
      //const com = await CommitService.getCommits();
      const com = {
        data: [
          {
            sha: "103511a10618681d01a2eaabe297f76727548f61",
            node_id:
              "C_kwDOJkb-YtoAKDEwMzUxMWExMDYxODY4MWQwMWEyZWFhYmUyOTdmNzY3Mjc1NDhmNjE",
            commit: {
              author: {
                name: "Renzo Zuñiga",
                email: "renzo.zuniga@pucp.edu.pe",
                date: "2023-05-18T17:22:25Z",
              },
              committer: {
                name: "Renzo Zuñiga",
                email: "renzo.zuniga@pucp.edu.pe",
                date: "2023-05-18T17:22:25Z",
              },
              message: "[GH3] Create ui project for github commits listing",
              tree: {
                sha: "554de9d71194e2fbb5dc9555c5cb084861db113c",
                url: "https://api.github.com/repos/renzozuniga/github-history/git/trees/554de9d71194e2fbb5dc9555c5cb084861db113c",
              },
              url: "https://api.github.com/repos/renzozuniga/github-history/git/commits/103511a10618681d01a2eaabe297f76727548f61",
              comment_count: 0,
              verification: {
                verified: false,
                reason: "unsigned",
                signature: null,
                payload: null,
              },
            },
            url: "https://api.github.com/repos/renzozuniga/github-history/commits/103511a10618681d01a2eaabe297f76727548f61",
            html_url:
              "https://github.com/renzozuniga/github-history/commit/103511a10618681d01a2eaabe297f76727548f61",
            comments_url:
              "https://api.github.com/repos/renzozuniga/github-history/commits/103511a10618681d01a2eaabe297f76727548f61/comments",
            author: {
              login: "renzozuniga",
              id: 22945761,
              node_id: "MDQ6VXNlcjIyOTQ1NzYx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/22945761?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/renzozuniga",
              html_url: "https://github.com/renzozuniga",
              followers_url:
                "https://api.github.com/users/renzozuniga/followers",
              following_url:
                "https://api.github.com/users/renzozuniga/following{/other_user}",
              gists_url:
                "https://api.github.com/users/renzozuniga/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/renzozuniga/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/renzozuniga/subscriptions",
              organizations_url:
                "https://api.github.com/users/renzozuniga/orgs",
              repos_url: "https://api.github.com/users/renzozuniga/repos",
              events_url:
                "https://api.github.com/users/renzozuniga/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/renzozuniga/received_events",
              type: "User",
              site_admin: false,
            },
            committer: {
              login: "renzozuniga",
              id: 22945761,
              node_id: "MDQ6VXNlcjIyOTQ1NzYx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/22945761?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/renzozuniga",
              html_url: "https://github.com/renzozuniga",
              followers_url:
                "https://api.github.com/users/renzozuniga/followers",
              following_url:
                "https://api.github.com/users/renzozuniga/following{/other_user}",
              gists_url:
                "https://api.github.com/users/renzozuniga/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/renzozuniga/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/renzozuniga/subscriptions",
              organizations_url:
                "https://api.github.com/users/renzozuniga/orgs",
              repos_url: "https://api.github.com/users/renzozuniga/repos",
              events_url:
                "https://api.github.com/users/renzozuniga/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/renzozuniga/received_events",
              type: "User",
              site_admin: false,
            },
            parents: [
              {
                sha: "c8ccc7f4fe311fbf0529ae9e5974ed737d1a4bc5",
                url: "https://api.github.com/repos/renzozuniga/github-history/commits/c8ccc7f4fe311fbf0529ae9e5974ed737d1a4bc5",
                html_url:
                  "https://github.com/renzozuniga/github-history/commit/c8ccc7f4fe311fbf0529ae9e5974ed737d1a4bc5",
              },
            ],
          },
          {
            sha: "c8ccc7f4fe311fbf0529ae9e5974ed737d1a4bc5",
            node_id:
              "C_kwDOJkb-YtoAKGM4Y2NjN2Y0ZmUzMTFmYmYwNTI5YWU5ZTU5NzRlZDczN2QxYTRiYzU",
            commit: {
              author: {
                name: "Renzo Zuñiga",
                email: "renzo.zuniga@pucp.edu.pe",
                date: "2023-05-18T16:42:28Z",
              },
              committer: {
                name: "Renzo Zuñiga",
                email: "renzo.zuniga@pucp.edu.pe",
                date: "2023-05-18T16:42:28Z",
              },
              message: "[GH2] Adding configuration values for github api",
              tree: {
                sha: "df43d6d56683aa7f702c3910a7d15cde2157b971",
                url: "https://api.github.com/repos/renzozuniga/github-history/git/trees/df43d6d56683aa7f702c3910a7d15cde2157b971",
              },
              url: "https://api.github.com/repos/renzozuniga/github-history/git/commits/c8ccc7f4fe311fbf0529ae9e5974ed737d1a4bc5",
              comment_count: 0,
              verification: {
                verified: false,
                reason: "unsigned",
                signature: null,
                payload: null,
              },
            },
            url: "https://api.github.com/repos/renzozuniga/github-history/commits/c8ccc7f4fe311fbf0529ae9e5974ed737d1a4bc5",
            html_url:
              "https://github.com/renzozuniga/github-history/commit/c8ccc7f4fe311fbf0529ae9e5974ed737d1a4bc5",
            comments_url:
              "https://api.github.com/repos/renzozuniga/github-history/commits/c8ccc7f4fe311fbf0529ae9e5974ed737d1a4bc5/comments",
            author: {
              login: "renzozuniga",
              id: 22945761,
              node_id: "MDQ6VXNlcjIyOTQ1NzYx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/22945761?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/renzozuniga",
              html_url: "https://github.com/renzozuniga",
              followers_url:
                "https://api.github.com/users/renzozuniga/followers",
              following_url:
                "https://api.github.com/users/renzozuniga/following{/other_user}",
              gists_url:
                "https://api.github.com/users/renzozuniga/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/renzozuniga/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/renzozuniga/subscriptions",
              organizations_url:
                "https://api.github.com/users/renzozuniga/orgs",
              repos_url: "https://api.github.com/users/renzozuniga/repos",
              events_url:
                "https://api.github.com/users/renzozuniga/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/renzozuniga/received_events",
              type: "User",
              site_admin: false,
            },
            committer: {
              login: "renzozuniga",
              id: 22945761,
              node_id: "MDQ6VXNlcjIyOTQ1NzYx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/22945761?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/renzozuniga",
              html_url: "https://github.com/renzozuniga",
              followers_url:
                "https://api.github.com/users/renzozuniga/followers",
              following_url:
                "https://api.github.com/users/renzozuniga/following{/other_user}",
              gists_url:
                "https://api.github.com/users/renzozuniga/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/renzozuniga/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/renzozuniga/subscriptions",
              organizations_url:
                "https://api.github.com/users/renzozuniga/orgs",
              repos_url: "https://api.github.com/users/renzozuniga/repos",
              events_url:
                "https://api.github.com/users/renzozuniga/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/renzozuniga/received_events",
              type: "User",
              site_admin: false,
            },
            parents: [
              {
                sha: "79feba9230d751f6f0618290c642349d651863b9",
                url: "https://api.github.com/repos/renzozuniga/github-history/commits/79feba9230d751f6f0618290c642349d651863b9",
                html_url:
                  "https://github.com/renzozuniga/github-history/commit/79feba9230d751f6f0618290c642349d651863b9",
              },
            ],
          },
          {
            sha: "79feba9230d751f6f0618290c642349d651863b9",
            node_id:
              "C_kwDOJkb-YtoAKDc5ZmViYTkyMzBkNzUxZjZmMDYxODI5MGM2NDIzNDlkNjUxODYzYjk",
            commit: {
              author: {
                name: "Renzo Zuñiga",
                email: "renzo.zuniga@pucp.edu.pe",
                date: "2023-05-18T02:43:31Z",
              },
              committer: {
                name: "Renzo Zuñiga",
                email: "renzo.zuniga@pucp.edu.pe",
                date: "2023-05-18T02:43:31Z",
              },
              message: "[GH1] Create and init API project",
              tree: {
                sha: "84283885a0ff382fb0b422f0319ed47f0247b57f",
                url: "https://api.github.com/repos/renzozuniga/github-history/git/trees/84283885a0ff382fb0b422f0319ed47f0247b57f",
              },
              url: "https://api.github.com/repos/renzozuniga/github-history/git/commits/79feba9230d751f6f0618290c642349d651863b9",
              comment_count: 0,
              verification: {
                verified: false,
                reason: "unsigned",
                signature: null,
                payload: null,
              },
            },
            url: "https://api.github.com/repos/renzozuniga/github-history/commits/79feba9230d751f6f0618290c642349d651863b9",
            html_url:
              "https://github.com/renzozuniga/github-history/commit/79feba9230d751f6f0618290c642349d651863b9",
            comments_url:
              "https://api.github.com/repos/renzozuniga/github-history/commits/79feba9230d751f6f0618290c642349d651863b9/comments",
            author: {
              login: "renzozuniga",
              id: 22945761,
              node_id: "MDQ6VXNlcjIyOTQ1NzYx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/22945761?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/renzozuniga",
              html_url: "https://github.com/renzozuniga",
              followers_url:
                "https://api.github.com/users/renzozuniga/followers",
              following_url:
                "https://api.github.com/users/renzozuniga/following{/other_user}",
              gists_url:
                "https://api.github.com/users/renzozuniga/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/renzozuniga/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/renzozuniga/subscriptions",
              organizations_url:
                "https://api.github.com/users/renzozuniga/orgs",
              repos_url: "https://api.github.com/users/renzozuniga/repos",
              events_url:
                "https://api.github.com/users/renzozuniga/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/renzozuniga/received_events",
              type: "User",
              site_admin: false,
            },
            committer: {
              login: "renzozuniga",
              id: 22945761,
              node_id: "MDQ6VXNlcjIyOTQ1NzYx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/22945761?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/renzozuniga",
              html_url: "https://github.com/renzozuniga",
              followers_url:
                "https://api.github.com/users/renzozuniga/followers",
              following_url:
                "https://api.github.com/users/renzozuniga/following{/other_user}",
              gists_url:
                "https://api.github.com/users/renzozuniga/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/renzozuniga/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/renzozuniga/subscriptions",
              organizations_url:
                "https://api.github.com/users/renzozuniga/orgs",
              repos_url: "https://api.github.com/users/renzozuniga/repos",
              events_url:
                "https://api.github.com/users/renzozuniga/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/renzozuniga/received_events",
              type: "User",
              site_admin: false,
            },
            parents: [
              {
                sha: "ac507f960e8a7b1bea0ddcba1a28bf3c258b20b4",
                url: "https://api.github.com/repos/renzozuniga/github-history/commits/ac507f960e8a7b1bea0ddcba1a28bf3c258b20b4",
                html_url:
                  "https://github.com/renzozuniga/github-history/commit/ac507f960e8a7b1bea0ddcba1a28bf3c258b20b4",
              },
            ],
          },
          {
            sha: "ac507f960e8a7b1bea0ddcba1a28bf3c258b20b4",
            node_id:
              "C_kwDOJkb-YtoAKGFjNTA3Zjk2MGU4YTdiMWJlYTBkZGNiYTFhMjhiZjNjMjU4YjIwYjQ",
            commit: {
              author: {
                name: "renzozuniga",
                email: "renzo.zuniga@pucp.edu.pe",
                date: "2023-05-18T02:33:54Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2023-05-18T02:33:54Z",
              },
              message: "Initial commit",
              tree: {
                sha: "201ce4893389fb36539b97a9e4e4d8cfa38b9441",
                url: "https://api.github.com/repos/renzozuniga/github-history/git/trees/201ce4893389fb36539b97a9e4e4d8cfa38b9441",
              },
              url: "https://api.github.com/repos/renzozuniga/github-history/git/commits/ac507f960e8a7b1bea0ddcba1a28bf3c258b20b4",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJkZY6SCRBK7hj4Ov3rIwAA+CUIAGROY8X7seOgWRLxHw9wdOR8\nchBNyGm8+j9lh4hV5xrd5jiCR92nmH73mSTyNUsJhdL98EV4TrfSBZITk6eNqr7d\nP6T2rEopSxiap+KA2BDxT0wnsXssJ/kVbv8zO5n2bP0kkrcKbOKwWjxZNXBTrxoe\nIKLu4H0sJ0jes9aF93lmQghwS2JS181esN1i+XfeN5SyAzEkythS0q5js7C8qYHh\ngTWN/SCFGK5ulnfBu7zuo3gcdNkNGjZnA+2wPfhusqcPuOq92ln7JUFS5viLIfS1\nw9xEPcKAl3l/5mzwaNBz9hZDzECi7bw+v5IILVCwxGM2/TvmqIq5L6VlaPURYlg=\n=Ae2b\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree 201ce4893389fb36539b97a9e4e4d8cfa38b9441\nauthor renzozuniga <renzo.zuniga@pucp.edu.pe> 1684377234 -0500\ncommitter GitHub <noreply@github.com> 1684377234 -0500\n\nInitial commit",
              },
            },
            url: "https://api.github.com/repos/renzozuniga/github-history/commits/ac507f960e8a7b1bea0ddcba1a28bf3c258b20b4",
            html_url:
              "https://github.com/renzozuniga/github-history/commit/ac507f960e8a7b1bea0ddcba1a28bf3c258b20b4",
            comments_url:
              "https://api.github.com/repos/renzozuniga/github-history/commits/ac507f960e8a7b1bea0ddcba1a28bf3c258b20b4/comments",
            author: {
              login: "renzozuniga",
              id: 22945761,
              node_id: "MDQ6VXNlcjIyOTQ1NzYx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/22945761?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/renzozuniga",
              html_url: "https://github.com/renzozuniga",
              followers_url:
                "https://api.github.com/users/renzozuniga/followers",
              following_url:
                "https://api.github.com/users/renzozuniga/following{/other_user}",
              gists_url:
                "https://api.github.com/users/renzozuniga/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/renzozuniga/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/renzozuniga/subscriptions",
              organizations_url:
                "https://api.github.com/users/renzozuniga/orgs",
              repos_url: "https://api.github.com/users/renzozuniga/repos",
              events_url:
                "https://api.github.com/users/renzozuniga/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/renzozuniga/received_events",
              type: "User",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              site_admin: false,
            },
            parents: [],
          },
        ],
      };
      if (com) {
        setCommits(com.data);
      }
    })();
  }, []);

  return (
    <CommitContext.Provider value={{ commits }}>
      {props.children}
    </CommitContext.Provider>
  );
};

export default CommitContextProvider;
