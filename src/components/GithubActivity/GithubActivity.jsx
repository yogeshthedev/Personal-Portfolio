import { GitHubCalendar } from "react-github-calendar";
import "./GithubActivity.modules.scss";

const GithubActivity = ({ username = "yogeshthedev" }) => {
  return (
    <div className="github-activity-wrapper">
      <div className="github-activity-header">
        <h3>GitHub Activity</h3>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
        >
          View Profile →
        </a>
      </div>

      <div className="github-calendar-card">
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          blockSize={18}
          blockMargin={8}
          fontSize={12}
          hideColorLegend
          labels={{
            totalCount: "{{count}} contributions in the last year",
          }}
          className="githubcalender"
        />
      </div>
    </div>
  );
};

export default GithubActivity;
