import React, { useEffect, useContext, useState } from "react";
import { CommitContext } from "../../contexts/CommitContext";
import List from "../../components/List";
import "./Commits.css";

export const Commits = () => {
  const { commits } = useContext(CommitContext);

  return (
    <div>
      <header>
        <h1>List of Commits</h1>
      </header>
      <div className="list-container">{commits && <List data={commits} />}</div>
    </div>
  );
};
