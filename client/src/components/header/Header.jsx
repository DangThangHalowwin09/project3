import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/266755/pexels-photo-266755.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
  );
}
