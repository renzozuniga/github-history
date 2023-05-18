import React, { useEffect, useContext, useState } from "react";
import "./List.css";

const List = (props) => {
  const data = props.data;
  return (
    <>
      {data.length === 0 ? (
        <div className="empty-state">
          <p class="caption">
            <em>Empty list</em>
          </p>
        </div>
      ) : (
        <ul className="list">
          {data.map((item) => {
            const datetime = item.commit.committer.date.split("T");
            const date = datetime[0].split("-");
            const formatDate = `${date[2]}/${date[1]}/${date[0]} ${datetime[1].replace('Z', '')}`;
            return (
              <li>
                <span className="list-article-summary">
                  <h2 className="list-title">{item.commit.message}</h2>
                  <span className="list-author">{item.commit.author.name}</span>
                </span>
                <span className="list-post-date">Posted {formatDate}</span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default List;
