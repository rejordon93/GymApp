import "semantic-ui-css/semantic.min.css";
import { SearchBar } from "./SearchBar";

export const LandingPage = () => {
  return (
    <div className="ui container center aligned" style={{ marginTop: "20px" }}>
      <div className="ui stackable grid">
        <div className="eight wide column">
          <img
            style={{ height: 743, marginLeft: "2rem" }}
            src="https://images.unsplash.com/photo-1637430308606-86576d8fef3c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="ui rounded image left-image"
            alt="Gym"
          />
        </div>
        <div className="eight wide column right-column">
          <img
            src="https://images.unsplash.com/photo-1579364046732-c21c2177730d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="ui rounded image"
            alt="Gym"
          />
          <img
            src="https://images.unsplash.com/photo-1608202409296-a9cad928dd2f?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="ui rounded image"
            alt="Gym"
          />
        </div>
      </div>
      <SearchBar />
    </div>
  );
};
