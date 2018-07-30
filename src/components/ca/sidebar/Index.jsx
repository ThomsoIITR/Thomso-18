import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";
import boy from "./img/boy.png";
import like from "./img/like.png"
import share from "./img/share.png"
import score from "./img/star.png"
import Post from "./Svg/Post"
import Certificate from "./Svg/Certificate"
import Referral from "./Svg/Referral"
import Leader from "./Svg/Leader"
import Guide from "./Svg/Guide"
import Contact from "./Svg/Contact"
import Logout from "./Svg/Logout"
import Bulb from "./Svg/Bulb"
import Hand from "./Svg/Hand"

// import logoUser from '../common/images/user.svg';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 69,
      referral: 'AVSHFSAD',
      activeState: window.location.pathname.substring(4)
    };
    if (!window.location.pathname.substring(4)) {
      this.state = {
        activeState: "home"
      };
    }
  }

  setActive(state) {
    this.setState({ activeState: state });
  }

  componentDidMount() {
    console.log(window.location.pathname, "jjj")
    console.log(this.state.activeState, "active")
  }

  copytoclipboard = () => {
    let Field = this.state.referral;
    Field.execCommand('copy');
    Field.remove()
  }
  render() {
    return (
      <div>
        <div
          id="mySidenav"
          className="sidenav"
        >
          <div className="sidebar-user">
            <img src={this.props.userData ? this.props.userData.image : boy} className="image" />
            <div className="details">
              <div className="text">{this.props.userData ? this.props.userData.name : "User"}</div>
              <div className="cname">{this.props.userData ? this.props.userData.college : "-"}</div>
            </div>
          </div>
          <div className="line">
          </div>
          <div className="likeshare">
            <div className="inls">
              <div className="n_likes">
                <div className="inn_likes">
                  <div>
                    {this.props.userData ? this.props.userData.likes : "0"}
                  </div>
                  <img src={like} />
                </div>
                <div className="plikes">
                  LIKES
                </div>
              </div>
              <div className="n_shares">
                <div className="inn_likes">
                  <div className="change">
                    {this.props.userData ? this.props.userData.shares : "0"}
                  </div>
                  <img src={share} />
                </div>
                <div className="plikes">
                  SHARES
                </div>
              </div>
              <div className="n_score">
                <div className="inn_likes">
                  <div className="change">
                    {this.props.userData ? this.props.userData.score : "0"}
                  </div>
                  <img src={score} />
                </div>
                <div className="plikes">
                  SCORES
                </div>
              </div>
            </div>
            <div className="update">
              *Scores willbe updated at 12 am
            </div>
          </div>
          <div className="line">
          </div>
          <div className="thomso">
            {console.log(this.state.activeState, 'state')}
            <Link
              to="/ca/"
              className={
                (this.state.activeState === "home")
                  ? "sideNavItem activeSideItem"
                  : "sideNavItem"
              }
              onClick={() => {
                this.setActive("home");
              }}
            >
              <div className="posts flex_row">
                <div className="p-logo">
                  <Post />
                </div>
                <div className="p-name">
                  POSTS
                </div>
              </div>
            </Link>
            <Link
              to="/ca/leaderboard"
              className={
                this.state.activeState === "leaderboard"
                  ? "sideNavItem activeSideItem "
                  : "sideNavItem"
              }
              onClick={() => {
                this.setActive("leaderboard");
              }}
            >
              <div className="leaderboard flex_row">
                <div className="p-logo">
                  <Leader />
                </div>
                <div className="p-name">
                  LEADERBOARD
                </div>
              </div>
            </Link>
            <Link
              to="/ca/guidelines"
              className={
                this.state.activeState === "guidelines"
                  ? "sideNavItem activeSideItem"
                  : "sideNavItem"
              }
              onClick={() => {
                this.setActive("guidelines");
              }}
            >
              <div className="guide flex_row">
                <div className="p-logo">
                  <Guide />
                </div>
                <div className="p-name">
                  GUIDELINES
                </div>
              </div>
            </Link>
            <Link
              to="/ca/ideas"
              className={
                this.state.activeState === "ideas"
                  ? "sideNavItem activeSideItem"
                  : "sideNavItem"
              }
              onClick={() => {
                this.setActive("ideas");
              }}
            >
              <div className="ideas flex_row">
                <div className="p-logo">
                  <Bulb />
                </div>
                <div className="p-name">
                  IDEAS
                </div>
              </div>
            </Link>
            <Link
              to="/ca/certificate"
              className={
                this.state.activeState === "certificate"
                  ? "sideNavItem activeSideItem"
                  : "sideNavItem"
              }
              onClick={() => {
                this.setActive("certificate");
              }}
            >
              <div className="certificate flex_row">
                <div className="p-logo">
                  <Certificate />
                </div>
                <div className="p-name">
                  Certificate
                </div>
              </div>
            </Link>
            <Link
              to="/ca/contact"
              className={
                this.state.activeState === "contact"
                  ? "sideNavItem activeSideItem"
                  : "sideNavItem"
              }
              onClick={() => {
                this.setActive("contact");
              }}
            >
              <div className="contactus flex_row">
                <div className="p-logo">
                  <Contact />
                </div>
                <div className="p-name">
                  CONTACT US
                </div>
              </div>
            </Link>
            <Link
              to="/ca/logout"
              className={
                this.state.activeState === "logout"
                  ? "sideNavItem activeSideItem"
                  : "sideNavItem"
              }
              onClick={() => {
                this.setActive("logout");
              }}
            >
              <div className="logout flex_row">
                <div className="p-logo">
                  <Logout />
                </div>
                <div className="p-name">
                  LOGOUT
                </div>
              </div>
            </Link>
            <div
              className="sideNavItem re"
            >
              <div onClick={() => { window.location.href = this.props.userData.link }} className="referral flex_row" title="Click to copy">
                <div className="p-logo">
                  <Referral />
                </div>
                <div className="p-name">
                  REFERRAL CODE : {this.state.referral}
                </div>
              </div>
            </div>
          </div>
          <div className="hand flex_row">
            <div className="inhand">
              <div className="p-logo">
                <Hand />
              </div>
              <div className="days">
                {this.state.days} DAYS LEFT
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}