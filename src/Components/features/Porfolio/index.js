import { ReactComponent as GithubIcon } from "./shape.svg";
import {
  PortfolioContainer,
  PortfolioParagraph,
  Span,
  GithubReposContainer,
  RepositoryContainer,
  RepositoryHeader,
  Description,
  LinkContainer,
  RepositoryLink,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReposResponse,
  selectRepos,
  selectReposCurrentState,
} from "../reposSlice";
import { useEffect } from "react";
import { Loader } from "./states/Loader";
import { Error } from "./states/Error";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const repos = useSelector(selectRepos);
  const reposState = useSelector(selectReposCurrentState);

  useEffect(() => {
    dispatch(fetchReposResponse());
  }, [dispatch]);

  return (
    <PortfolioContainer>
      <GithubIcon />
      <PortfolioParagraph>Portfolio</PortfolioParagraph>
      <Span>My recent projects</Span>
      {reposState.loading === true ? (
        <Loader />
      ) : reposState.error === true ? (
        <Error />
      ) : (
        <GithubReposContainer>
          {repos.map((repo) => (
            <RepositoryContainer key={repo.id}>
              <RepositoryHeader>{repo.name}</RepositoryHeader>
              <Description>{repo.description}</Description>
              <LinkContainer>
                <Description>Demo:</Description>
                <RepositoryLink href={repo.homepage}>
                  {repo.homepage}
                </RepositoryLink>
              </LinkContainer>
              <LinkContainer>
                <Description>Code:</Description>
                <RepositoryLink href={repo.html_url}>
                  {repo.html_url}
                </RepositoryLink>
              </LinkContainer>
            </RepositoryContainer>
          ))}
        </GithubReposContainer>
      )}
    </PortfolioContainer>
  );
};
